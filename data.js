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

const grammarQuestData = {
    units: [
        {
            id: 1,
            title: "Unit 1: The First Steps",
            arabicTitle: "الوحدة الأولى: البداية",
            description: "Essential words and basic sentence structure.",
            tasks: [
                { type: 'vocab', category: 'essential', count: 5, offset: 0, icon: 'fa-star' },
                { type: 'grammar', rule: 'Present Simple', icon: 'fa-bolt' },
                { type: 'quiz', category: 'unit1', icon: 'fa-check-double' }
            ]
        },
        {
            id: 2,
            title: "Unit 2: Daily Life",
            arabicTitle: "الوحدة الثانية: الحياة اليومية",
            description: "Communication in common situations.",
            tasks: [
                { type: 'vocab', category: 'essential', count: 10, offset: 5, icon: 'fa-sun' },
                { type: 'grammar', rule: 'Present Continuous', icon: 'fa-clock' },
                { type: 'quiz', category: 'unit2', icon: 'fa-trophy' }
            ]
        },
        {
            id: 3,
            title: "Unit 3: Past & Memories",
            arabicTitle: "الوحدة الثالثة: الماضي والذكريات",
            description: "Talking about things that already happened.",
            tasks: [
                { type: 'vocab', category: 'essential', count: 10, offset: 15, icon: 'fa-history' },
                { type: 'grammar', rule: 'Past Simple', icon: 'fa-calendar-check' },
                { type: 'quiz', category: 'unit3', icon: 'fa-award' }
            ]
        },
        {
            id: 4,
            title: "Unit 4: Describing the World",
            arabicTitle: "الوحدة الرابعة: وصف العالم",
            description: "Using adjectives and articles correctly.",
            tasks: [
                { type: 'vocab', category: 'important', count: 3, offset: 0, icon: 'fa-image' },
                { type: 'grammar', rule: 'Articles', icon: 'fa-font' },
                { type: 'quiz', category: 'unit4', icon: 'fa-medal' }
            ]
        }
    ]
};
