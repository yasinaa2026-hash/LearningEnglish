/**
 * GrammarQuest - Main Application Logic
 * Per-unit quiz, beautiful Duolingo-style UI
 */

// ─── GLOBAL STATE ────────────────────────────────────────────────────────────
let userStats = {
    learnedWords: [],
    quizScores: [],
    hearts: 5,
    xp: 0,
    streak: 0,
    lastActive: null,
    unlockedUnits: [1],
    completedUnits: []
};

let currentCategory = null;
let currentWordIndex = 0;
let currentWordsList = [];

let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    type: 'eng-ar',
    unitId: null,
    combo: 0,         // correct streak
    maxCombo: 0
};

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    checkStreak();
    renderGameTopBar();
    renderLearningPath();
    updateDashboardStats();
});

// ─── STREAK & HEARTS ─────────────────────────────────────────────────────────
function checkStreak() {
    const today = new Date().toDateString();
    const last  = userStats.lastActive ? new Date(userStats.lastActive).toDateString() : null;
    if (last === today) return;
    if (last) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        userStats.streak = last === yesterday.toDateString() ? userStats.streak + 1 : 1;
    } else {
        userStats.streak = 1;
    }
    userStats.lastActive = Date.now();
    saveStats();
}

// ─── STATE ───────────────────────────────────────────────────────────────────
function loadStats() {
    const saved = localStorage.getItem('grammarQuestStats');
    if (saved) {
        userStats = { ...userStats, ...JSON.parse(saved) };
        if (!userStats.learnedWords)    userStats.learnedWords = [];
        if (!userStats.quizScores)      userStats.quizScores = [];
        if (!userStats.unlockedUnits || userStats.unlockedUnits.includes(0)) userStats.unlockedUnits = [1];
        if (!userStats.completedUnits)  userStats.completedUnits = [];
        if (userStats.hearts === undefined) userStats.hearts = 5;
    }
}
function saveStats() {
    localStorage.setItem('grammarQuestStats', JSON.stringify(userStats));
    updateDashboardStats();
    renderGameTopBar();
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function switchView(viewId) {
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = null;
    }
}
function goBack() {
    switchView('view-dashboard');
    updateDashboardStats();
    renderLearningPath();
}

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
function updateDashboardStats() {
    const wordsEl = document.getElementById('stat-words');
    const quizEl  = document.getElementById('stat-quiz');
    if (wordsEl) wordsEl.textContent = userStats.learnedWords.length;
    if (quizEl) {
        if (userStats.quizScores.length > 0) {
            const total    = userStats.quizScores.reduce((a, b) => a + b.score, 0);
            const maxTotal = userStats.quizScores.length * 8;
            quizEl.textContent = Math.round((total / maxTotal) * 100) + '%';
        } else {
            quizEl.textContent = '0%';
        }
    }
}
function renderGameTopBar() {
    document.getElementById('heart-val').textContent  = userStats.hearts;
    document.getElementById('streak-val').textContent = userStats.streak;
    document.getElementById('xp-val').textContent     = userStats.xp;
}

// ─── LEARNING PATH ───────────────────────────────────────────────────────────
function renderLearningPath() {
    const pathContainer = document.getElementById('learning-path');
    if (!pathContainer) return;
    pathContainer.innerHTML = '';

    const unlockedLevels  = userStats.unlockedUnits  || [1];
    const completedLevels = userStats.completedUnits || [];

    grammarQuestData.units.forEach(unit => {
        const isUnlocked  = unlockedLevels.includes(unit.id);
        const isCompleted = completedLevels.includes(unit.id);

        // Unit banner
        const header = document.createElement('div');
        header.className = `path-unit-header fade-in ${isCompleted ? 'completed-unit' : ''}`;
        header.innerHTML = `
            <div class="unit-banner-inner">
                <span class="unit-num">${isCompleted ? '✓' : unit.id}</span>
                <div>
                    <h3>${unit.title}</h3>
                    <p dir="rtl" class="arabic-text">${unit.arabicTitle}</p>
                </div>
            </div>
        `;
        pathContainer.appendChild(header);

        // Nodes row
        const row = document.createElement('div');
        row.className = 'path-nodes-row';

        unit.tasks.forEach((task) => {
            const node = document.createElement('div');
            node.className = `path-node ${isUnlocked ? 'unlocked' : ''} ${isCompleted ? 'completed' : ''}`;

            const labelMap = { vocab: 'كلمات', grammar: 'قواعد', quiz: 'اختبار' };
            node.innerHTML = `
                <i class="fa-solid ${task.icon}"></i>
                <span class="node-label">${labelMap[task.type] || task.type}</span>
            `;

            node.onclick = () => {
                if (!isUnlocked) {
                    showLockedModal();
                    return;
                }
                if (task.type === 'vocab') {
                    openUnitVocab(unit.id);
                } else if (task.type === 'grammar') {
                    openGrammarByRule(task.rule);
                } else {
                    openUnitQuiz(unit.id);
                }
            };

            row.appendChild(node);
        });

        pathContainer.appendChild(row);
    });
}

function showLockedModal() {
    const modal = document.getElementById('locked-modal');
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('hidden'), 2200);
    }
}

// ─── UNIT VOCAB ──────────────────────────────────────────────────────────────
function openUnitVocab(unitId) {
    const words = unitWords[unitId] || [];
    if (words.length === 0) {
        alert('لا توجد كلمات لهذه الوحدة بعد.');
        return;
    }
    currentWordsList = words;
    currentWordIndex = 0;

    const unit = grammarQuestData.units.find(u => u.id === unitId);
    document.getElementById('vocab-title').textContent    = unit ? unit.title : `Unit ${unitId}`;
    document.getElementById('vocab-subtitle').textContent = unit ? unit.arabicTitle : '';

    renderFlashcard();
    switchView('view-vocabulary');
}

// (Legacy openModule kept for compatibility)
function openModule(type, count = 150, offset = 0) {
    if (type === 'grammar') {
        switchView('view-grammar');
    } else if (type === 'quiz') {
        openUnitQuiz(1);
    } else if (type === 'table') {
        renderVocabTable();
        switchView('view-table');
    } else {
        const baseList = vocabularyData[type] || [];
        currentWordsList = baseList.slice(offset, offset + count);
        currentWordIndex = 0;
        renderFlashcard();
        switchView('view-vocabulary');
    }
}

// ─── FLASHCARDS ──────────────────────────────────────────────────────────────
function renderFlashcard() {
    if (!currentWordsList || currentWordsList.length === 0) return;
    const container = document.getElementById('flashcard-container');
    const wordObj   = currentWordsList[currentWordIndex];
    document.getElementById('vocab-counter').textContent = `${currentWordIndex + 1} / ${currentWordsList.length}`;

    const isLearned   = userStats.learnedWords.includes(wordObj.id);
    const learnedIcon = isLearned ? `<i class="fa-solid fa-check-circle" style="color:#10b981;position:absolute;top:20px;right:20px;font-size:1.5rem;"></i>` : '';

    container.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                ${learnedIcon}
                <div class="word-main">${wordObj.english}</div>
                <div class="word-pos">${wordObj.pos}</div>
                <div class="interaction-row">
                    <button class="icon-btn-lg" onclick="event.stopPropagation();playAudio('${wordObj.english}')" title="Listen">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <p class="arabic-text mt-4" dir="rtl" style="opacity:0.7">اضغط على البطاقة لإظهار المعنى</p>
            </div>
            <div class="flashcard-back">
                ${learnedIcon}
                <div class="back-word">${wordObj.english}</div>
                <div class="arabic-meaning">${wordObj.arabic}</div>
                <div class="example-box">
                    <div class="example-eng">"${wordObj.example}"</div>
                    <div class="example-ar">"${wordObj.arabicExample}"</div>
                </div>
            </div>
        </div>
    `;

    container.onclick = () => container.classList.toggle('flipped');
    container.classList.remove('flipped');
}

function nextWord() { if (currentWordIndex < currentWordsList.length - 1) { currentWordIndex++; renderFlashcard(); } }
function prevWord() { if (currentWordIndex > 0) { currentWordIndex--; renderFlashcard(); } }
function markLearned() {
    const wordId = currentWordsList[currentWordIndex].id;
    if (!userStats.learnedWords.includes(wordId)) {
        userStats.learnedWords.push(wordId);
        userStats.xp += 10;
        saveStats();
    }
    document.getElementById('flashcard-container').classList.remove('flipped');
    nextWord();
}
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);
    }
}

// ─── GRAMMAR ─────────────────────────────────────────────────────────────────
function openGrammarByRule(ruleName) {
    const container = document.getElementById('grammar-container');
    container.innerHTML = '';
    let rule = [...grammarRules.set1, ...grammarRules.set2].find(r => r.title.includes(ruleName));
    if (!rule) rule = grammarRules.set1[0];

    const div = document.createElement('div');
    div.className = 'grammar-card glass-card fade-in';
    div.innerHTML = `
        <div class="grammar-tip-header">
            <span class="badge"><i class="fa-solid fa-book"></i> Grammar Tip</span>
            <h3 class="g-title">${rule.title}</h3>
        </div>
        <div class="g-desc-ar" dir="rtl">${rule.arabicDescription}</div>
        <div class="g-structure">${rule.structure}</div>
        <div class="g-ex">Example: ${rule.example}</div>
        <div class="g-ex-ar">${rule.arabicExample}</div>
        <div class="flex-center mt-4">
            <button class="btn-primary" onclick="goBack()">فهمت! <i class="fa-solid fa-check"></i></button>
        </div>
    `;
    container.appendChild(div);
    switchView('view-grammar');
}

// ─── VOCAB TABLE ─────────────────────────────────────────────────────────────
function getAllWords() {
    return [...vocabularyData.essential, ...vocabularyData.important, ...vocabularyData.extra];
}
function renderVocabTable() {
    const tbody = document.getElementById('vocab-table-body');
    tbody.innerHTML = '';
    getAllWords().forEach(word => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="word-cell">${word.english}</td>
            <td class="translation-cell" dir="rtl">${word.arabic}</td>
            <td><span class="type-badge">${word.pos}</span></td>
            <td><button class="btn-icon" onclick="playAudio('${word.english}')"><i class="fa-solid fa-volume-high"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}
function filterVocabTable() {
    const q = document.getElementById('vocab-search').value.toLowerCase();
    document.querySelectorAll('#vocab-table-body tr').forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
}

// ─── QUIZ SYSTEM ─────────────────────────────────────────────────────────────
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function openUnitQuiz(unitId) {
    quizState.unitId = unitId;
    // Reset UI
    document.getElementById('quiz-setup').classList.remove('hidden');
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');

    const unit = grammarQuestData.units.find(u => u.id === unitId);
    document.getElementById('quiz-unit-title').textContent    = unit ? unit.title : `Unit ${unitId}`;
    document.getElementById('quiz-unit-subtitle').textContent = unit ? unit.arabicTitle : '';

    switchView('view-quiz');
}

function startQuiz(type) {
    const unitId = quizState.unitId || 1;
    const words  = unitWords[unitId] || [];

    // Fallback pool if unit has no words
    const pool = words.length >= 4 ? words : getAllWords();
    if (pool.length < 4) { alert('Not enough words for a quiz.'); return; }

    quizState.type         = type;
    quizState.score        = 0;
    quizState.combo        = 0;
    quizState.maxCombo     = 0;
    quizState.currentIndex = 0;

    // Build 8 MCQ questions from unit words
    const selected = shuffle([...pool]).slice(0, 8);

    quizState.questions = selected.map(targetWord => {
        // Pick 3 distractors from all unit words or pool
        let distPool = pool.filter(w => w.id !== targetWord.id);
        if (distPool.length < 3) {
            const extra = getAllWords().filter(w => w.id !== targetWord.id && !distPool.find(x => x.id === w.id));
            distPool = [...distPool, ...extra];
        }
        const distractors = shuffle([...distPool]).slice(0, 3);
        const options     = shuffle([targetWord, ...distractors]);
        return {
            type: 'mcq',
            target: targetWord,
            options,
            answerIndex: options.findIndex(o => o.id === targetWord.id)
        };
    });

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (quizState.currentIndex >= quizState.questions.length) {
        endQuiz();
        return;
    }

    const q    = quizState.questions[quizState.currentIndex];
    const type = quizState.type;
    const total = quizState.questions.length;
    const idx   = quizState.currentIndex;

    // Progress
    document.getElementById('quiz-counter').textContent = `${idx + 1} / ${total}`;
    document.getElementById('quiz-progress').style.width = `${((idx) / total) * 100}%`;

    // Combo badge
    const comboBadge = document.getElementById('quiz-combo');
    if (comboBadge) {
        comboBadge.textContent = quizState.combo >= 2 ? `🔥 ${quizState.combo}x Combo!` : '';
        comboBadge.style.opacity = quizState.combo >= 2 ? '1' : '0';
    }

    // Question text
    const questionEl = document.getElementById('question-text');
    if (type === 'eng-ar') {
        questionEl.innerHTML  = `ما معنى كلمة <span class="highlight-word">"${q.target.english}"</span>؟`;
        questionEl.dir = 'rtl';
    } else {
        questionEl.innerHTML  = `What is the English for <span class="highlight-word" dir="rtl">"${q.target.arabic}"</span>?`;
        questionEl.dir = 'ltr';
    }

    // Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = type === 'eng-ar'
            ? `<span class="opt-ar" dir="rtl">${opt.arabic}</span>`
            : `<span class="opt-en">${opt.english}</span>`;
        btn.onclick = () => handleAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    const q        = quizState.questions[quizState.currentIndex];
    const optBtns  = document.querySelectorAll('#options-container .option-btn');

    optBtns.forEach(b => { b.style.pointerEvents = 'none'; });

    if (selectedIndex === q.answerIndex) {
        btnElement.classList.add('correct');
        quizState.score++;
        quizState.combo++;
        quizState.maxCombo = Math.max(quizState.maxCombo, quizState.combo);
        userStats.xp += quizState.combo >= 3 ? 15 : 5; // combo bonus
        showFeedback(true);
    } else {
        btnElement.classList.add('wrong');
        optBtns[q.answerIndex].classList.add('correct');
        quizState.combo = 0;
        if (userStats.hearts > 0) {
            userStats.hearts--;
            renderGameTopBar();
        }
        showFeedback(false);
    }
    saveStats();

    setTimeout(() => {
        hideFeedback();
        quizState.currentIndex++;
        renderQuizQuestion();
    }, 1400);
}

function showFeedback(isCorrect) {
    const fb = document.getElementById('quiz-feedback');
    if (!fb) return;
    fb.textContent = isCorrect ? (quizState.combo >= 3 ? '🔥 ممتاز! كومبو!' : '✅ صحيح!') : '❌ خطأ!';
    fb.className   = `quiz-feedback-toast ${isCorrect ? 'fb-correct' : 'fb-wrong'} show`;
}
function hideFeedback() {
    const fb = document.getElementById('quiz-feedback');
    if (fb) fb.className = 'quiz-feedback-toast';
}

function endQuiz() {
    document.getElementById('quiz-active').classList.add('hidden');
    const resultEl = document.getElementById('quiz-result');
    resultEl.classList.remove('hidden');

    const total     = quizState.questions.length;
    const score     = quizState.score;
    const pct       = Math.round((score / total) * 100);
    const xpEarned  = score * 10 + quizState.maxCombo * 5;

    document.getElementById('score-display').textContent = score;
    document.getElementById('score-total').textContent   = total;
    document.getElementById('score-pct').textContent     = pct + '%';
    document.getElementById('xp-earned').textContent     = '+' + xpEarned + ' XP';

    // Stars
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
    document.getElementById('result-stars').innerHTML =
        [1,2,3].map(s => `<span class="star ${s <= stars ? 'star-active' : ''}">⭐</span>`).join('');

    // Result message
    const msgEl = document.getElementById('result-message');
    if (pct === 100) msgEl.textContent      = '🏆 مثالي! أنت نجم!';
    else if (pct >= 75) msgEl.textContent   = '🎉 ممتاز! عمل رائع!';
    else if (pct >= 50) msgEl.textContent   = '👍 جيد! استمر في التدريب!';
    else msgEl.textContent                  = '💪 حاول مرة أخرى، أنت تتحسن!';

    userStats.quizScores.push({ timestamp: Date.now(), score, total });
    userStats.xp += xpEarned;

    // Unlock next unit on pass (>=50%)
    if (pct >= 50 && quizState.unitId) {
        const uid      = quizState.unitId;
        const maxUnit  = Math.max(...userStats.unlockedUnits);
        if (!userStats.completedUnits.includes(uid)) userStats.completedUnits.push(uid);
        if (uid >= maxUnit && uid < 150) {
            userStats.unlockedUnits.push(uid + 1);
            document.getElementById('unlock-notice').textContent =
                `🔓 تم فتح الوحدة ${uid + 1}!`;
            document.getElementById('unlock-notice').style.display = 'block';
        } else {
            document.getElementById('unlock-notice').style.display = 'none';
        }
    } else {
        document.getElementById('unlock-notice').style.display = 'none';
    }

    saveStats();
    renderLearningPath();
}

function retryQuiz() {
    startQuiz(quizState.type);
}
function nextUnit() {
    const nextId = (quizState.unitId || 1) + 1;
    if (nextId <= 150) openUnitQuiz(nextId);
    else goBack();
}
