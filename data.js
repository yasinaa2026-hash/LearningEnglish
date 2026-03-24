/**
 * Application Data Source
 * This file contains the structured vocabulary for the Learning Application.
 * Categories are broken down into: Essential (150 words target), Important (2000 words target), and Extra (200 words target).
 * You can effortlessly expand these lists by adding new objects with the same structure.
 */

const vocabularyData = {
    // Target 150 Words
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
        { id: "e10", english: "Good", arabic: "جيد / حسن", pos: "Adjective", example: "This is a good book.", arabicExample: "هذا كتاب جيد." },
        { id: "e11", english: "New", arabic: "جديد", pos: "Adjective", example: "I bought a new car.", arabicExample: "اشتريت سيارة جديدة." },
        { id: "e12", english: "First", arabic: "أول", pos: "Adjective", example: "You are the first person here.", arabicExample: "أنت أول شخص هنا." },
        { id: "e13", english: "Work", arabic: "عمل", pos: "Verb/Noun", example: "I need to work today.", arabicExample: "أحتاج إلى العمل اليوم." },
        { id: "e14", english: "Make", arabic: "يصنع / يجعل", pos: "Verb", example: "Can you make some tea?", arabicExample: "هل يمكنك صنع بعض الشاي؟" },
        { id: "e15", english: "Know", arabic: "يعرف", pos: "Verb", example: "I know the answer.", arabicExample: "أنا أعرف الإجابة." }
    ],
    important: [
        { id: "i1", english: "Resilience", arabic: "مرونة / صمود", pos: "Noun", example: "Her resilience allowed her to overcome challenges.", arabicExample: "صمودها سمح لها بالتغلب على التحديات." },
        { id: "i2", english: "Eloquent", arabic: "فصيح / بليغ", pos: "Adjective", example: "An eloquent speech moved the audience.", arabicExample: "خطاب بليغ أثر في الجمهور." },
        { id: "i3", english: "Pragmatic", arabic: "عملي / واقعي", pos: "Adjective", example: "We need a pragmatic approach.", arabicExample: "نحتاج إلى نهج واقعي وعملي." }
    ],
    extra: []
};

const grammarRules = {
    set1: [
        {
            title: "Present Simple (المضارع البسيط)",
            arabicDescription: "يستخدم للحقائق، العادات، والأحداث المتكررة.",
            structure: "Subject + Base Verb (Add 's' for He/She/It)",
            example: "The sun rises in the east.",
            arabicExample: "تشرق الشمس من الشرق."
        },
        {
            title: "Present Continuous (المضارع المستمر)",
            arabicDescription: "يستخدم لوصف حدث يقع الآن في هذه اللحظة.",
            structure: "Subject + am/is/are + Verb-ing",
            example: "I am studying English now.",
            arabicExample: "أنا أدرس الإنجليزية الآن."
        },
        {
            title: "Past Simple (الماضي البسيط)",
            arabicDescription: "يستخدم لوصف حدث اكتمل في الماضي في وقت محدد.",
            structure: "Subject + Verb-ed (or Irregular form)",
            example: "I visited London last year.",
            arabicExample: "زرت لندن العام الماضي."
        },
        {
            title: "Articles: A, An, The (أدوات التعريف والتنكير)",
            arabicDescription: "تستخدم 'a/an' للنكرة و 'the' للتعريف.",
            structure: "A (consonants), An (vowels), The (specific)",
            example: "I saw a cat. The cat was black.",
            arabicExample: "رأيت قطة. كانت القطة سوداء."
        }
    ],
    set2: []
};

const generateUnits = () => {
    const units = [];
    const icons = ['fa-star', 'fa-bolt', 'fa-sun', 'fa-clock', 'fa-history', 'fa-calendar-check', 'fa-image', 'fa-font', 'fa-lightbulb', 'fa-rocket', 'fa-graduation-cap', 'fa-medal', 'fa-trophy', 'fa-award', 'fa-heart', 'fa-fire', 'fa-gem', 'fa-brain', 'fa-spell-check', 'fa-language'];
    
    const grammarList = [...grammarRules.set1, ...grammarRules.set2];
    
    for (let i = 1; i <= 50; i++) {
        const vocabCount = i <= 10 ? 5 : (i <= 30 ? 10 : 15);
        const vocabOffset = (i - 1) * 5; // Simple offset logic
        const ruleIndex = (i - 1) % grammarList.length;
        
        units.push({
            id: i,
            title: `Unit ${i}: ${i <= 10 ? 'Basics' : (i <= 30 ? 'intermediate' : 'Advanced')}`,
            arabicTitle: `الوحدة ${i}: ${i <= 10 ? 'الأساسيات' : (i <= 30 ? 'المستوى المتوسط' : 'المستوى المتقدم')}`,
            description: `Learning step ${i} of your journey.`,
            tasks: [
                { type: 'vocab', category: i % 3 === 0 ? 'important' : 'essential', count: vocabCount, offset: vocabOffset % 100, icon: icons[i % icons.length] },
                { type: 'grammar', rule: grammarList[ruleIndex].title.split(' (')[0], icon: icons[(i + 5) % icons.length] },
                { type: 'quiz', category: `unit${i}`, icon: 'fa-check-double' }
            ]
        });
    }
    return units;
};

const grammarQuestData = {
    units: generateUnits()
};
