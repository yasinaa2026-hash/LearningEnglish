/**
 * GrammarQuest - Main Application Logic
 * Flow: Unit Node → Grammar Intro → Quiz Questions → Result
 */

// ─── STATE ───────────────────────────────────────────────────────────────────
let userStats = {
    learnedWords: [], quizScores: [], hearts: 5, xp: 0,
    streak: 0, lastActive: null, unlockedUnits: [1], completedUnits: []
};

let quizState = {
    unitId: null, questions: [], currentIndex: 0,
    score: 0, type: 'eng-ar', combo: 0, maxCombo: 0
};

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadStats(); checkStreak(); renderGameTopBar();
    renderLearningPath(); updateDashboardStats();
});

function checkStreak() {
    const today = new Date().toDateString();
    const last  = userStats.lastActive ? new Date(userStats.lastActive).toDateString() : null;
    if (last === today) return;
    if (last) {
        const y = new Date(); y.setDate(y.getDate() - 1);
        userStats.streak = last === y.toDateString() ? userStats.streak + 1 : 1;
    } else userStats.streak = 1;
    userStats.lastActive = Date.now();
    saveStats();
}

// ─── PERSISTENCE ─────────────────────────────────────────────────────────────
function loadStats() {
    const s = localStorage.getItem('grammarQuestStats');
    if (s) {
        userStats = { ...userStats, ...JSON.parse(s) };
        if (!userStats.learnedWords)   userStats.learnedWords = [];
        if (!userStats.quizScores)     userStats.quizScores = [];
        if (!userStats.unlockedUnits || userStats.unlockedUnits.includes(0)) userStats.unlockedUnits = [1];
        if (!userStats.completedUnits) userStats.completedUnits = [];
        if (userStats.hearts === undefined) userStats.hearts = 5;
    }
}
function saveStats() {
    localStorage.setItem('grammarQuestStats', JSON.stringify(userStats));
    updateDashboardStats(); renderGameTopBar();
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function switchView(id) {
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); el.style.animation='none'; el.offsetHeight; el.style.animation=null; }
}
function goBack() { switchView('view-dashboard'); updateDashboardStats(); renderLearningPath(); }

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
function updateDashboardStats() {
    const w = document.getElementById('stat-words');
    const q = document.getElementById('stat-quiz');
    if (w) w.textContent = userStats.learnedWords.length;
    if (q) {
        if (userStats.quizScores.length > 0) {
            const total = userStats.quizScores.reduce((a, b) => a + b.score, 0);
            q.textContent = Math.round((total / (userStats.quizScores.length * 8)) * 100) + '%';
        } else q.textContent = '0%';
    }
}
function renderGameTopBar() {
    document.getElementById('heart-val').textContent  = userStats.hearts;
    document.getElementById('streak-val').textContent = userStats.streak;
    document.getElementById('xp-val').textContent     = userStats.xp;
    const qh = document.getElementById('quiz-hearts');
    if (qh) qh.textContent = userStats.hearts;
}

// ─── LEARNING PATH ───────────────────────────────────────────────────────────
function renderLearningPath() {
    const path = document.getElementById('learning-path');
    if (!path) return;
    path.innerHTML = '';

    const unlocked  = userStats.unlockedUnits  || [1];
    const completed = userStats.completedUnits || [];

    grammarQuestData.units.forEach(unit => {
        const isUnlocked  = unlocked.includes(unit.id);
        const isCompleted = completed.includes(unit.id);

        const wrapper = document.createElement('div');
        wrapper.className = 'path-unit-wrapper fade-in';

        wrapper.innerHTML = `
            <div class="path-node ${isUnlocked ? 'unlocked' : ''} ${isCompleted ? 'completed' : ''}"
                 onclick="handleNodeClick(${unit.id}, ${isUnlocked})">
                <div class="node-glow"></div>
                <i class="fa-solid ${isCompleted ? 'fa-check' : unit.icon}"></i>
                <span class="node-num">${unit.id}</span>
            </div>
            <div class="node-info">
                <span class="node-title">${unit.title}</span>
                <span class="node-subtitle" dir="rtl">${unit.arabicTitle}</span>
                <span class="node-rule"><i class="fa-solid fa-book-open"></i> ${unit.grammar.title}</span>
            </div>
        `;

        path.appendChild(wrapper);
    });
}

function handleNodeClick(unitId, isUnlocked) {
    if (!isUnlocked) { showLockedToast(); return; }
    openUnitLesson(unitId);
}

function showLockedToast() {
    const t = document.getElementById('locked-toast');
    if (!t) return;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

// ─── GRAMMAR INTRO ───────────────────────────────────────────────────────────
function openUnitLesson(unitId) {
    const unit = grammarQuestData.units.find(u => u.id === unitId);
    if (!unit) return;
    quizState.unitId = unitId;

    // Fill grammar intro
    document.getElementById('gi-unit-name').textContent    = unit.title;
    document.getElementById('gi-unit-ar').textContent      = unit.arabicTitle;
    document.getElementById('gi-rule-title').textContent   = unit.grammar.title;
    document.getElementById('gi-rule-ar').textContent      = unit.grammar.arabicDescription;
    document.getElementById('gi-structure').textContent    = unit.grammar.structure;
    document.getElementById('gi-example-en').textContent   = unit.grammar.example;
    document.getElementById('gi-example-ar').textContent   = unit.grammar.arabicExample;

    switchView('view-lesson');
}

function startLessonQuiz(type) {
    const unitId = quizState.unitId;
    const words  = unitWords[unitId] || [];
    const pool   = words.length >= 4 ? words : getAllWords();
    if (pool.length < 4) { alert('Not enough words.'); return; }

    quizState.type = type; quizState.score = 0;
    quizState.combo = 0; quizState.maxCombo = 0; quizState.currentIndex = 0;

    const selected = shuffle([...pool]).slice(0, 8);
    quizState.questions = selected.map(target => {
        let dist = pool.filter(w => w.id !== target.id);
        if (dist.length < 3) {
            const extra = getAllWords().filter(w => w.id !== target.id && !dist.find(x => x.id === w.id));
            dist = [...dist, ...extra];
        }
        const opts = shuffle([target, ...shuffle([...dist]).slice(0, 3)]);
        return { target, options: opts, answerIndex: opts.findIndex(o => o.id === target.id) };
    });

    switchView('view-quiz');
    renderQuizQuestion();
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function renderQuizQuestion() {
    if (quizState.currentIndex >= quizState.questions.length) { endQuiz(); return; }

    const q      = quizState.questions[quizState.currentIndex];
    const type   = quizState.type;
    const total  = quizState.questions.length;
    const idx    = quizState.currentIndex;

    document.getElementById('quiz-counter').textContent    = `${idx + 1} / ${total}`;
    document.getElementById('quiz-progress').style.width   = `${(idx / total) * 100}%`;

    const combo = document.getElementById('quiz-combo');
    if (combo) { combo.textContent = quizState.combo >= 2 ? `🔥 ${quizState.combo}x` : ''; combo.style.opacity = quizState.combo >= 2 ? '1' : '0'; }

    // Question
    const qEl = document.getElementById('question-text');
    if (type === 'eng-ar') {
        qEl.innerHTML = `ما معنى <span class="highlight-word">${q.target.english}</span> بالعربية؟`;
        qEl.dir = 'rtl';
    } else {
        qEl.innerHTML = `What is the English for "<span class="highlight-word" dir="rtl">${q.target.arabic}</span>"?`;
        qEl.dir = 'ltr';
    }

    // Options
    const opts = document.getElementById('options-container');
    opts.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = type === 'eng-ar'
            ? `<span dir="rtl" style="font-family:'Cairo',sans-serif;font-size:1.15rem">${opt.arabic}</span>`
            : `<span>${opt.english}</span>`;
        btn.onclick = () => handleAnswer(i, btn);
        opts.appendChild(btn);
    });
}

function handleAnswer(idx, btn) {
    const q       = quizState.questions[quizState.currentIndex];
    const allBtns = document.querySelectorAll('#options-container .option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (idx === q.answerIndex) {
        btn.classList.add('correct');
        quizState.score++;
        quizState.combo++;
        quizState.maxCombo = Math.max(quizState.maxCombo, quizState.combo);
        userStats.xp += quizState.combo >= 3 ? 15 : 5;
        showFeedback(true);
    } else {
        btn.classList.add('wrong');
        allBtns[q.answerIndex].classList.add('correct');
        quizState.combo = 0;
        if (userStats.hearts > 0) { userStats.hearts--; renderGameTopBar(); }
        showFeedback(false);
    }
    saveStats();
    setTimeout(() => { hideFeedback(); quizState.currentIndex++; renderQuizQuestion(); }, 1400);
}

function showFeedback(ok) {
    const fb = document.getElementById('quiz-feedback');
    if (!fb) return;
    fb.textContent = ok ? (quizState.combo >= 3 ? '🔥 ممتاز! كومبو!' : '✅ صحيح!') : '❌ خطأ!';
    fb.className   = `quiz-feedback-toast ${ok ? 'fb-correct' : 'fb-wrong'} show`;
}
function hideFeedback() {
    const fb = document.getElementById('quiz-feedback');
    if (fb) fb.className = 'quiz-feedback-toast';
}

function endQuiz() {
    switchView('view-result');
    const total    = quizState.questions.length;
    const score    = quizState.score;
    const pct      = Math.round((score / total) * 100);
    const xpEarned = score * 10 + quizState.maxCombo * 5;

    document.getElementById('score-display').textContent = score;
    document.getElementById('score-total').textContent   = total;
    document.getElementById('score-pct').textContent     = pct + '%';
    document.getElementById('xp-earned').textContent     = '+' + xpEarned + ' XP';

    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
    document.getElementById('result-stars').innerHTML =
        [1,2,3].map(s => `<span class="star ${s <= stars ? 'star-active' : ''}">⭐</span>`).join('');

    const msgs = { 100:'🏆 مثالي! أنت نجم!', 75:'🎉 ممتاز! عمل رائع!', 50:'👍 جيد! استمر!', 0:'💪 حاول مجدداً!' };
    document.getElementById('result-message').textContent =
        pct === 100 ? msgs[100] : pct >= 75 ? msgs[75] : pct >= 50 ? msgs[50] : msgs[0];

    userStats.quizScores.push({ timestamp: Date.now(), score, total });
    userStats.xp += xpEarned;

    const uid    = quizState.unitId;
    const unlock = document.getElementById('unlock-notice');
    if (pct >= 50 && uid) {
        if (!userStats.completedUnits.includes(uid)) userStats.completedUnits.push(uid);
        const maxUnit = Math.max(...userStats.unlockedUnits);
        if (uid >= maxUnit && uid < 150) {
            userStats.unlockedUnits.push(uid + 1);
            unlock.textContent = `🔓 تم فتح الوحدة ${uid + 1}!`;
            unlock.style.display = 'block';
        } else unlock.style.display = 'none';
    } else unlock.style.display = 'none';

    saveStats();
    renderLearningPath();
}

function retryQuiz() { switchView('view-lesson'); }
function nextUnit() {
    const nxt = (quizState.unitId || 1) + 1;
    if (nxt <= 150) openUnitLesson(nxt); else goBack();
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getAllWords() {
    return [...vocabularyData.essential, ...vocabularyData.important, ...vocabularyData.extra];
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; window.speechSynthesis.speak(u);
    }
}
