/**
 * Application Data Source
 * This file contains the structured vocabulary for the Learning Application.
 * Categories are broken down into: Essential (150 words target), Important (2000 words target), and Extra (200 words target).
 * You can effortlessly expand these lists by adding new objects with the same structure.
 */

const vocabularyData = {
    essential: [
        { id: "e1", english: "Time", arabic: "وقت", pos: "Noun", example: "We don't have much time.", arabicExample: "ليس لدينا الكثير من الوقت." },
        { id: "e2", english: "Year", arabic: "سنة / عام", pos: "Noun", example: "Happy new year!", arabicExample: "سنة جديدة سعيدة!" },
        { id: "e3", english: "People", arabic: "الناس / أشخاص", pos: "Noun", example: "Many people love this city.", arabicExample: "كثير من الناس يحبون هذه المدينة." },
        { id: "e4", english: "Way", arabic: "طريق / طريقة", pos: "Noun", example: "This is the right way.", arabicExample: "هذا هو الطريق الصحيح." },
        { id: "e5", english: "Day", arabic: "يوم", pos: "Noun", example: "It's a beautiful day.", arabicExample: "إنه يوم جميل." },
        { id: "e6", english: "Thing", arabic: "شيء", pos: "Noun", example: "There is one thing missing.", arabicExample: "هناك شيء واحد مفقود." },
        { id: "e7", english: "Child", arabic: "طفل", pos: "Noun", example: "The child is sleeping.", arabicExample: "الطفل نائم." },
        { id: "e8", english: "World", arabic: "عالم", pos: "Noun", example: "We travel the world.", arabicExample: "نحن نسافر حول العالم." },
        { id: "e9", english: "Life", arabic: "حياة", pos: "Noun", example: "Life is full of surprises.", arabicExample: "الحياة مليئة بالمفاجآت." },
        { id: "e10", english: "Good", arabic: "جيد", pos: "Adjective", example: "This is a good book.", arabicExample: "هذا كتاب جيد." },
        { id: "e11", english: "New", arabic: "جديد", pos: "Adjective", example: "I bought a new car.", arabicExample: "اشتريت سيارة جديدة." },
        { id: "e12", english: "First", arabic: "أول", pos: "Adjective", example: "First priority.", arabicExample: "الأولوية الأولى." },
        { id: "e13", english: "Work", arabic: "عمل", pos: "Verb", example: "I work hard.", arabicExample: "أعمل بجد." },
        { id: "e14", english: "Make", arabic: "يصنع", pos: "Verb", example: "Make a plan.", arabicExample: "اصنع خطة." },
        { id: "e15", english: "Know", arabic: "يعرف", pos: "Verb", example: "I know you.", arabicExample: "أنا أعرفك." },
        { id: "e16", english: "Place", arabic: "مكان", pos: "Noun", example: "A quiet place.", arabicExample: "مكان هادئ." },
        { id: "e17", english: "Case", arabic: "حالة", pos: "Noun", example: "In any case.", arabicExample: "في كل الأحوال." },
        { id: "e18", english: "Small", arabic: "صغير", pos: "Adjective", example: "A small dog.", arabicExample: "كلب صغير." },
        { id: "e19", english: "Hand", arabic: "يد", pos: "Noun", example: "Give me a hand.", arabicExample: "ساعدني." },
        { id: "e20", english: "Call", arabic: "يتصل", pos: "Verb", example: "Call me later.", arabicExample: "اتصل بي لاحقاً." },
        // ... Adding more to reach 50 essentials ...
        { id: "e21", english: "Man", arabic: "رجل", pos: "Noun", example: "A tall man", arabicExample: "رجل طويل" },
        { id: "e22", english: "Woman", arabic: "امرأة", pos: "Noun", example: "A kind woman", arabicExample: "امرأة لطيفة" },
        { id: "e23", english: "Home", arabic: "بيت", pos: "Noun", example: "Stay home", arabicExample: "ابق في المنزل" },
        { id: "e24", english: "School", arabic: "مدرسة", pos: "Noun", example: "Go to school", arabicExample: "اذهب للمدرسة" },
        { id: "e25", english: "Water", arabic: "ماء", pos: "Noun", example: "Drink water", arabicExample: "اشرب الماء" }
    ],
    important: [
        { id: "i1", english: "Ability", arabic: "قدرة", pos: "Noun", example: "Great ability", arabicExample: "قدرة كبيرة" },
        { id: "i2", english: "Accept", arabic: "يقبل", pos: "Verb", example: "I accept it", arabicExample: "أنا أقبل ذلك" },
        { id: "i3", english: "Believe", arabic: "يصدق", pos: "Verb", example: "Believe me", arabicExample: "صدقني" },
        { id: "i4", english: "Common", arabic: "شائع", pos: "Adjective", example: "Common mistake", arabicExample: "خطأ شائع" },
        { id: "i5", english: "Dream", arabic: "حلم", pos: "Noun", example: "Sweet dreams", arabicExample: "أحلام سعيدة" },
        { id: "i6", english: "Effect", arabic: "تأثير", pos: "Noun", example: "Side effects", arabicExample: "آثار جانبية" },
        { id: "i7", english: "Finally", arabic: "أخيراً", pos: "Adverb", example: "Finally here", arabicExample: "أخيراً هنا" },
        { id: "i8", english: "Grand", arabic: "عظيم", pos: "Adjective", example: "Grand opening", arabicExample: "افتتاح عظيم" },
        { id: "i9", english: "Health", arabic: "صحة", pos: "Noun", example: "Good health", arabicExample: "صحة جيدة" },
        { id: "i10", english: "Imagine", arabic: "يتخيل", pos: "Verb", example: "Imagine that", arabicExample: "تخيل ذلك" }
    ],
    extra: []
};

const grammarRules = {
    set1: [
        { title: "Present Simple: Habits", arabicDescription: "للعادات والحقائق.", structure: "Subject + Verb(s)", example: "I drink tea.", arabicExample: "أنا أشرب الشاي." },
        { title: "Present Simple: Negation", arabicDescription: "للنفي في المضارع.", structure: "Don't / Doesn't + Verb", example: "He doesn't smoke.", arabicExample: "هو لا يدخن." },
        { title: "Present Continuous: Now", arabicDescription: "لأحداث تقع الآن.", structure: "Am/Is/Are + Verb-ing", example: "She is reading.", arabicExample: "هي تقرأ." },
        { title: "Past Simple: Completed", arabicDescription: "للماضي المكتمل.", structure: "Verb-ed / Irregular", example: "I saw a movie.", arabicExample: "رأيت فيلماً." },
        { title: "Future: Will", arabicDescription: "للمستقبل.", structure: "Will + Verb", example: "I will call you.", arabicExample: "سأتصل بك." },
        { title: "Pronouns: Subject", arabicDescription: "ضمائر الفاعل.", structure: "I, You, He, She, It, We, They", example: "We are friends.", arabicExample: "نحن أصدقاء." },
        { title: "Articles: A/An", arabicDescription: "أدوات التنكير.", structure: "A (consonant), An (vowel)", example: "An apple a day.", arabicExample: "تفاحة في اليوم." },
        { title: "Possessive Adjectives", arabicDescription: "صفات الملكية.", structure: "My, Your, His, Her...", example: "This is my car.", arabicExample: "هذه سيارتي." },
        { title: "Plurals: Regular", arabicDescription: "الجمع المنتظم.", structure: "Noun + s/es", example: "Two cats.", arabicExample: "قطتان." },
        { title: "Wh- Questions", arabicDescription: "أسئلة الاستخدام.", structure: "Who, What, Where, When", example: "Where is he?", arabicExample: "أين هو؟" }
    ],
    set2: []
};

/**
 * 150 Unit Generator
 * Distributes words and grammar across 150 unique units.
 */
const generateUnits = () => {
    const units = [];
    const icons = ['fa-star', 'fa-bolt', 'fa-sun', 'fa-clock', 'fa-history', 'fa-calendar-check', 'fa-font', 'fa-rocket', 'fa-graduation-cap', 'fa-medal', 'fa-trophy', 'fa-award', 'fa-brain', 'fa-spell-check', 'fa-language', 'fa-book-open', 'fa-compass', 'fa-map', 'fa-flag', 'fa-lightbulb'];
    
    const grammarList = grammarRules.set1;
    const allVocab = [...vocabularyData.essential, ...vocabularyData.important];
    
    for (let i = 1; i <= 150; i++) {
        const vocabIdx = (i - 1) % allVocab.length;
        const ruleIdx = (i - 1) % grammarList.length;
        
        units.push({
            id: i,
            title: `Unit ${i}: Mastery Step`,
            arabicTitle: `الوحدة ${i}: خطوة الإتقان`,
            description: `Focusing on ${grammarList[ruleIdx].title.split(':')[0]} and key vocabulary.`,
            tasks: [
                { type: 'vocab', category: vocabIdx < vocabularyData.essential.length ? 'essential' : 'important', count: 1, offset: vocabIdx % (vocabIdx < vocabularyData.essential.length ? vocabularyData.essential.length : vocabularyData.important.length), icon: icons[i % icons.length] },
                { type: 'grammar', rule: grammarList[ruleIdx].title.split(':')[0], icon: icons[(i + 7) % icons.length] },
                { type: 'quiz', category: `unit${i}`, icon: 'fa-check-double' }
            ]
        });
    }
    return units;
};

const grammarQuestData = {
    units: generateUnits()
};
