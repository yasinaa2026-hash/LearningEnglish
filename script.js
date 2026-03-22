// High-quality Vocabulary Data
const vocabulary = [
    { word: "Resilience", pos: "Noun", meaning: "Capacity to recover quickly from difficulties.", example: "Her resilience allowed her to overcome the challenges." },
    { word: "Eloquent", pos: "Adjective", meaning: "Fluent or persuasive in speaking or writing.", example: "An eloquent speech that moved the entire audience." },
    { word: "Pragmatic", pos: "Adjective", meaning: "Dealing with things sensibly and realistically.", example: "We need a pragmatic approach to solve this problem." },
    { word: "Nuance", pos: "Noun", meaning: "A subtle difference in shade of meaning or sound.", example: "Understanding the nuances of the English language." },
    { word: "Mitigate", pos: "Verb", meaning: "Make less severe, serious, or painful.", example: "They implemented measures to mitigate the environmental impact." },
    { word: "Ephemeral", pos: "Adjective", meaning: "Lasting for a very short time.", example: "The beauty of a sunset is ephemeral." }
];

// Meaningful Quiz Data
const quizQuestions = [
    {
        question: "Which word means 'fluent or persuasive in speaking'?",
        options: ["Ephemeral", "Eloquent", "Pragmatic", "Resilience"],
        answer: 1
    },
    {
        question: "If an approach is 'Pragmatic', it is:",
        options: ["Theoretical", "Emotional", "Practical", "Stubborn"],
        answer: 2
    },
    {
        question: "What is a 'Nuance'?",
        options: ["A subtle difference", "A loud noise", "A harsh reality", "A solid foundation"],
        answer: 0
    },
    {
        question: "To 'Mitigate' is to:",
        options: ["Increase severity", "Complicate further", "Ignore the issue", "Lessen severity"],
        answer: 3
    },
    {
        question: "A quality describing quick recovery from difficulty:",
        options: ["Resilience", "Eloquent", "Pragmatic", "Nuance"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderFlashcards();
    renderQuiz();
    setupSmoothScrolling();
    setupActiveNavState();
}

/**
 * Initializes and renders the interactive vocabulary flashcards safely
 */
function renderFlashcards() {
    const container = document.getElementById('flashcard-container');
    container.innerHTML = '';
    
    vocabulary.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        
        // Construct glass-card interior carefully avoiding arbitrary innerHTML
        card.innerHTML = `
            <div class="flashcard-inner glass-card">
                <div class="flashcard-front">
                    ${item.word}
                    <span class="pos">${item.pos}</span>
                </div>
                <div class="flashcard-back">
                    <h3>${item.meaning}</h3>
                    <p>"${item.example}"</p>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        container.appendChild(card);
    });
}

/**
 * Handles initialization of quiz questions and UI updates
 */
function renderQuiz() {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');

    // Display result if end of quiz
    if (currentQuestion >= quizQuestions.length) {
        quizContent.classList.add('hidden');
        quizResult.classList.remove('hidden');
        document.getElementById('score-display').textContent = score;
        return;
    }

    // Populate question and options
    const q = quizQuestions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedIndex, btnElement) {
    const q = quizQuestions[currentQuestion];
    const optionsBtns = document.querySelectorAll('.option-btn');
    
    // Lock answers
    optionsBtns.forEach(btn => {
        btn.style.pointerEvents = 'none';
        btn.style.opacity = '0.7';
    });

    // Provide visual feedback
    if (selectedIndex === q.answer) {
        btnElement.classList.add('correct');
        btnElement.style.opacity = '1';
        score++;
    } else {
        btnElement.classList.add('wrong');
        btnElement.style.opacity = '1'; 
        optionsBtns[q.answer].classList.add('correct');
        optionsBtns[q.answer].style.opacity = '1';
    }

    // Delay for transition
    setTimeout(() => {
        currentQuestion++;
        renderQuiz();
    }, 1200);
}

// Restart Quiz Listener
document.getElementById('restart-quiz').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    renderQuiz();
});

/**
 * Sets up UX smoothing mechanisms (Smooth Scroll)
 */
function setupSmoothScrolling() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Detects scrolling and highlights the active anchor tab
 */
function setupActiveNavState() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('.section-container, .hero').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.remove('active');
                    if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                        a.classList.add('active');
                    }
                });
            }
        });
    });
}
