/**
 * Main Application Logic
 * Master English App (Arabic/English)
 */

// --- Global State ---
let userStats = {
    learnedWords: [], // Array of word IDs
    quizScores: [],   // Array of { timestamp, score }
    hearts: 5,
    xp: 0,
    streak: 0,
    lastActive: null,
    unlockedUnits: [0] // Index of unlocked units
};

let currentCategory = null;
let currentWordIndex = 0;
let currentWordsList = [];

let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    type: 'eng-ar'
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    checkStreak();
    renderGameTopBar();
    renderLearningPath();
});

function checkStreak() {
    const today = new Date().toDateString();
    const last = userStats.lastActive ? new Date(userStats.lastActive).toDateString() : null;

    if (last === today) return;

    if (last) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (last === yesterday.toDateString()) {
            userStats.streak++;
        } else {
            userStats.streak = 1;
        }
    } else {
        userStats.streak = 1;
    }
    userStats.lastActive = Date.now();
    saveStats();
    recoverHearts();
}

function recoverHearts() {
    if (userStats.hearts >= 5) return;
    
    // Simple recovery logic: 1 heart every 2 hours
    const now = Date.now();
    const last = userStats.lastActive || now;
    const hoursPassed = Math.floor((now - last) / (1000 * 60 * 60));
    
    if (hoursPassed >= 2) {
        const heartsToAdd = Math.floor(hoursPassed / 2);
        userStats.hearts = Math.min(5, userStats.hearts + heartsToAdd);
        saveStats();
    }
}

// --- State Management ---
function loadStats() {
    const saved = localStorage.getItem('grammarQuestStats');
    if (saved) {
        userStats = JSON.parse(saved);
        // Migrations / defaults
        if (!userStats.learnedWords) userStats.learnedWords = [];
        if (!userStats.quizScores) userStats.quizScores = [];
        if (userStats.hearts === undefined) userStats.hearts = 5;
        if (userStats.xp === undefined) userStats.xp = 0;
        if (userStats.streak === undefined) userStats.streak = 0;
        if (!userStats.unlockedUnits) userStats.unlockedUnits = [0];
    }
}

function saveStats() {
    localStorage.setItem('grammarQuestStats', JSON.stringify(userStats));
    updateDashboardStats();
    renderGameTopBar();
}

// --- Navigation ---
function switchView(viewId) {
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        // Simple fade-in re-trigger
        target.style.animation = 'none';
        target.offsetHeight; /* trigger reflow */
        target.style.animation = null;
    }
}

function goBack() {
    switchView('view-dashboard');
    updateDashboardStats();
}

function openModule(type, count = 150, offset = 0) {
    if (type === 'grammar') {
        switchView('view-grammar');
    } else if (type === 'quiz') {
        switchView('view-quiz');
        document.getElementById('quiz-setup').classList.remove('hidden');
        document.getElementById('quiz-active').classList.add('hidden');
        document.getElementById('quiz-result').classList.add('hidden');
    } else if (type === 'table') {
        renderVocabTable();
        switchView('view-table');
    } else {
        // Vocabulary category
        currentCategory = type;
        const baseList = vocabularyData[type] || [];
        currentWordsList = baseList.slice(offset, offset + count);
        currentWordIndex = 0;

        let headerTitle = "Vocabulary";
        if (type === 'essential') headerTitle = "Essential Words";
        if (type === 'important') headerTitle = "Important Words";
        if (type === 'extra') headerTitle = "Extra Words";
        document.getElementById('vocab-title').textContent = headerTitle;

        renderFlashcard();
        switchView('view-vocabulary');
    }
}

// --- Dashboard ---
function updateDashboardStats() {
    document.getElementById('stat-words').textContent = userStats.learnedWords.length;

    if (userStats.quizScores.length > 0) {
        let total = userStats.quizScores.reduce((acc, curr) => acc + curr.score, 0);
        let maxTotal = userStats.quizScores.length * 10; // assuming 10 questions per quiz
        let avg = Math.round((total / maxTotal) * 100);
        document.getElementById('stat-quiz').textContent = avg + "%";
    } else {
        document.getElementById('stat-quiz').textContent = "0%";
    }

    // Update Progress Bars
    const updateBar = (id, targetData) => {
        let max = targetData.length;
        if (max === 0) return; // avoid division by zero during setup

        // Count how many learned words exist in this specific category array
        let learned = targetData.filter(word => userStats.learnedWords.includes(word.id)).length;
        let percentage = Math.round((learned / max) * 100);

        document.getElementById(`prog-${id}`).style.width = `${percentage}%`;
        // Find the sibling span to update the text
        const textSpan = document.getElementById(`prog-${id}`).parentElement.nextElementSibling;
        textSpan.textContent = `${learned}/${max}`;
    };

    updateBar('essential', vocabularyData.essential);
    updateBar('important', vocabularyData.important);
    updateBar('extra', vocabularyData.extra);
}

function renderGameTopBar() {
    document.getElementById('heart-val').textContent = userStats.hearts;
    document.getElementById('streak-val').textContent = userStats.streak;
    document.getElementById('xp-val').textContent = userStats.xp;
}

function renderLearningPath() {
    const dashboard = document.getElementById('view-dashboard');
    // We'll replace the old modules grid with the path container
    dashboard.innerHTML = `
        <div class="section-container">
            <div class="section-header">
                <h2>Learning <span class="gradient-text">Path</span></h2>
                <p dir="rtl" class="arabic-text">أكمل الدروس لفتح آفاق جديدة</p>
            </div>
            <div class="path-container" id="path-container"></div>
        </div>
    `;

    const pathContainer = document.getElementById('path-container');
    
    grammarQuestData.units.forEach((unit, uIdx) => {
        const isUnlocked = userStats.unlockedUnits.includes(uIdx);
        
        // Unit Header
        const header = document.createElement('div');
        header.className = 'path-unit-header';
        header.innerHTML = `
            <h3>${unit.title}</h3>
            <p dir="rtl" class="arabic-text" style="color: white; opacity: 0.9">${unit.arabicTitle}</p>
        `;
        pathContainer.appendChild(header);

        // Nodes for each task
        unit.tasks.forEach((task, tIdx) => {
            const node = document.createElement('div');
            node.className = `path-node ${isUnlocked ? 'unlocked' : ''}`;
            node.innerHTML = `<i class="fa-solid ${task.icon}"></i>`;
            
            if (isUnlocked) {
                node.onclick = () => startPathTask(uIdx, tIdx);
            }
            
            pathContainer.appendChild(node);
        });
    });
}

function startPathTask(uIdx, tIdx) {
    const task = grammarQuestData.units[uIdx].tasks[tIdx];
    if (task.type === 'vocab') {
        openModule(task.category, task.count, task.offset);
    } else if (task.type === 'grammar') {
        openGrammarByRule(task.rule);
    } else if (task.type === 'quiz') {
        openModule('quiz');
    }
}

function openGrammarByRule(ruleName) {
    const container = document.getElementById('grammar-container');
    container.innerHTML = '';
    
    // Find rule in grammarRules
    let rule = null;
    [...grammarRules.set1, ...grammarRules.set2].forEach(r => {
        if (r.title.includes(ruleName)) rule = r;
    });

    if (rule) {
        const div = document.createElement('div');
        div.className = 'grammar-card glass-card fade-in';
        div.innerHTML = `
            <div class="grammar-tip-header">
                <span class="badge">Grammar Tip</span>
                <h3 class="g-title">${rule.title}</h3>
            </div>
            <div class="g-desc-ar" dir="rtl">${rule.arabicDescription}</div>
            <div class="g-structure">${rule.structure}</div>
            <div class="g-ex">Example: ${rule.example}</div>
            <div class="g-ex-ar">${rule.arabicExample}</div>
            <div class="flex-center mt-4">
                <button class="btn-primary" onclick="goBack()">Got it! / استوعبت القاعدة</button>
            </div>
        `;
        container.appendChild(div);
        switchView('view-grammar');
    }
}

// --- Vocabulary Table (Cables) ---
function renderVocabTable() {
    const tbody = document.getElementById('vocab-table-body');
    tbody.innerHTML = '';

    const allWords = getAllWords();

    allWords.forEach(word => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="word-cell">${word.english}</td>
            <td class="translation-cell" dir="rtl">${word.arabic}</td>
            <td><span class="type-badge">${word.pos}</span></td>
            <td>
                <button class="btn-icon" onclick="playAudio('${word.english}')"><i class="fa-solid fa-volume-high"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function filterVocabTable() {
    const query = document.getElementById('vocab-search').value.toLowerCase();
    const rows = document.querySelectorAll('#vocab-table-body tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}

// --- Flashcards ---
function renderFlashcard() {
    if (!currentWordsList || currentWordsList.length === 0) return;

    const container = document.getElementById('flashcard-container');
    const wordObj = currentWordsList[currentWordIndex];

    document.getElementById('vocab-counter').textContent = `${currentWordIndex + 1} / ${currentWordsList.length}`;

    // Check if learned
    const isLearned = userStats.learnedWords.includes(wordObj.id);
    const learnedIcon = isLearned ? `<i class="fa-solid fa-check-circle" style="color: #10b981; position: absolute; top: 20px; right: 20px; font-size: 1.5rem;"></i>` : '';

    container.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                ${learnedIcon}
                <div class="word-main">${wordObj.english}</div>
                <div class="word-pos">${wordObj.pos}</div>
                <div class="interaction-row">
                    <button class="icon-btn-lg" onclick="event.stopPropagation(); playAudio('${wordObj.english}')" title="Listen / استمع">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <p class="arabic-text mt-4" dir="rtl" style="opacity: 0.7">اضغط على البطاقة لإظهار المعنى</p>
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

    // Click to flip
    container.onclick = () => {
        container.classList.toggle('flipped');
    };
    // Ensure it starts facing front
    container.classList.remove('flipped');
}

function nextWord() {
    if (currentWordIndex < currentWordsList.length - 1) {
        currentWordIndex++;
        renderFlashcard();
    }
}

function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        renderFlashcard();
    }
}

function markLearned() {
    const wordId = currentWordsList[currentWordIndex].id;
    if (!userStats.learnedWords.includes(wordId)) {
        userStats.learnedWords.push(wordId);
        userStats.xp += 10; // Award XP
        saveStats();
    }
    document.getElementById('flashcard-container').classList.remove('flipped');
    nextWord(); // Auto-advance
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}


// --- Quiz System ---
function getAllWords() {
    return [
        ...vocabularyData.essential,
        ...vocabularyData.important,
        ...vocabularyData.extra
    ];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(type) {
    const allWords = getAllWords();
    if (allWords.length < 4) {
        alert("Not enough words in data.js to run the quiz. Need at least 4.");
        return;
    }

    quizState.type = type;
    quizState.score = 0;
    quizState.currentIndex = 0;

    // Select 10 random questions
    let selectedWords = shuffle([...allWords]).slice(0, 10);

    quizState.questions = selectedWords.map(targetWord => {
        // Pick 3 random distractors
        let distractors = allWords.filter(w => w.id !== targetWord.id);
        distractors = shuffle(distractors).slice(0, 3);

        let options = shuffle([targetWord, ...distractors]);

        return {
            target: targetWord,
            options: options,
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

    const q = quizState.questions[quizState.currentIndex];
    const type = quizState.type;

    // Update Progress
    document.getElementById('quiz-counter').textContent = `Question ${quizState.currentIndex + 1}/${quizState.questions.length}`;
    const progressPercent = ((quizState.currentIndex) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progressPercent}%`;

    // Render Question text
    const questionEl = document.getElementById('question-text');
    if (type === 'eng-ar') {
        questionEl.textContent = `What is the meaning of "${q.target.english}"?`;
        questionEl.dir = 'ltr';
    } else {
        questionEl.textContent = `ما هو المعنى بالإنجليزية لـ "${q.target.arabic}"؟`;
        questionEl.dir = 'rtl';
    }

    // Render Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (type === 'eng-ar') {
            btn.textContent = opt.arabic;
            btn.dir = 'rtl';
        } else {
            btn.textContent = opt.english;
            btn.dir = 'ltr';
        }

        btn.onclick = () => handleAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    const q = quizState.questions[quizState.currentIndex];
    const optionsBtns = document.querySelectorAll('#options-container .option-btn');

    // Disable clicks
    optionsBtns.forEach(btn => {
        btn.style.pointerEvents = 'none';
        btn.style.opacity = '0.7';
    });

    if (selectedIndex === q.answerIndex) {
        btnElement.classList.add('correct');
        btnElement.style.opacity = '1';
        quizState.score++;
        userStats.xp += 5; // Small reward for correct answer
    } else {
        btnElement.classList.add('wrong');
        btnElement.style.opacity = '1';
        optionsBtns[q.answerIndex].classList.add('correct');
        optionsBtns[q.answerIndex].style.opacity = '1';
        
        // Deduct heart
        if (userStats.hearts > 0) {
            userStats.hearts--;
            renderGameTopBar();
            if (userStats.hearts === 0) {
                alert("You're out of hearts! Review some words to get more.");
                // Option to restart or buy hearts (simple alert for now)
            }
        }
    }
    saveStats();

    setTimeout(() => {
        quizState.currentIndex++;
        renderQuizQuestion();
    }, 1500);
}

function endQuiz() {
    document.getElementById('quiz-active').classList.add('hidden');
    const resultEl = document.getElementById('quiz-result');
    resultEl.classList.remove('hidden');

    document.getElementById('score-display').textContent = quizState.score;

    // Save score
    userStats.quizScores.push({
        timestamp: Date.now(),
        score: quizState.score
    });
    
    // Bonus XP for finishing quiz
    userStats.xp += (quizState.score * 10);
    
    // Check for unit completion (simplified: if quiz score > 7, unlock next unit)
    if (quizState.score >= 7) {
        let currentMaxUnit = Math.max(...userStats.unlockedUnits);
        if (currentMaxUnit < grammarQuestData.units.length - 1) {
            userStats.unlockedUnits.push(currentMaxUnit + 1);
            alert("Congratulations! Unit " + (currentMaxUnit + 2) + " Unlocked!");
        }
    }
    
    saveStats();
    renderLearningPath(); // Refresh path state
}
