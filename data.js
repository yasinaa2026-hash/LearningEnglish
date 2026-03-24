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
const unitTitles = [
    { en: "First Steps",           ar: "الخطوات الأولى" },
    { en: "Hello World",           ar: "مرحبا بالعالم" },
    { en: "People & Names",        ar: "الناس والأسماء" },
    { en: "Numbers & Time",        ar: "الأرقام والوقت" },
    { en: "Colors & Shapes",       ar: "الألوان والأشكال" },
    { en: "Family & Home",         ar: "الأسرة والمنزل" },
    { en: "Daily Routines",        ar: "الروتين اليومي" },
    { en: "Food & Drinks",         ar: "الطعام والشراب" },
    { en: "The Body",              ar: "جسم الإنسان" },
    { en: "Clothing & Fashion",    ar: "الملابس والموضة" },
    { en: "Animals & Nature",      ar: "الحيوانات والطبيعة" },
    { en: "Weather & Seasons",     ar: "الطقس والفصول" },
    { en: "At School",             ar: "في المدرسة" },
    { en: "Jobs & Work",           ar: "المهن والعمل" },
    { en: "Transport & Travel",    ar: "المواصلات والسفر" },
    { en: "In the City",           ar: "في المدينة" },
    { en: "Shopping",              ar: "التسوق" },
    { en: "At the Restaurant",     ar: "في المطعم" },
    { en: "Health & Medicine",     ar: "الصحة والطب" },
    { en: "Sports & Hobbies",      ar: "الرياضة والهوايات" },
    { en: "Technology & Gadgets",  ar: "التكنولوجيا والأجهزة" },
    { en: "The Digital World",     ar: "العالم الرقمي" },
    { en: "Emotions & Feelings",   ar: "المشاعر والأحاسيس" },
    { en: "Describing People",     ar: "وصف الأشخاص" },
    { en: "Describing Places",     ar: "وصف الأماكن" },
    { en: "At the Airport",        ar: "في المطار" },
    { en: "Hotels & Lodging",      ar: "الفنادق والإقامة" },
    { en: "Money & Banking",       ar: "المال والبنوك" },
    { en: "Environment",           ar: "البيئة" },
    { en: "Countries & Cultures",  ar: "الدول والثقافات" },
    { en: "Present Simple",        ar: "المضارع البسيط" },
    { en: "Present Continuous",    ar: "المضارع المستمر" },
    { en: "Past Simple",           ar: "الماضي البسيط" },
    { en: "Past Continuous",       ar: "الماضي المستمر" },
    { en: "Future with Will",      ar: "المستقبل بـ will" },
    { en: "Future with Going To",  ar: "المستقبل بـ going to" },
    { en: "Articles: A, An, The",  ar: "أدوات التعريف والتنكير" },
    { en: "Pronouns",              ar: "الضمائر" },
    { en: "Possessives",           ar: "الملكية" },
    { en: "Prepositions of Place", ar: "حروف الجر للمكان" },
    { en: "Prepositions of Time",  ar: "حروف الجر للوقت" },
    { en: "Adjectives",            ar: "الصفات" },
    { en: "Adverbs",               ar: "الظروف" },
    { en: "Comparatives",          ar: "أفعل التفضيل المقارن" },
    { en: "Superlatives",          ar: "أفعل التفضيل العالي" },
    { en: "Modal Verbs: Can",      ar: "الأفعال الشرطية: can" },
    { en: "Modal Verbs: Must",     ar: "الأفعال الشرطية: must" },
    { en: "Modal Verbs: Should",   ar: "الأفعال الشرطية: should" },
    { en: "Questions with Do/Does",ar: "أسئلة بـ do/does" },
    { en: "Wh- Questions",         ar: "أسئلة wh-" },
    { en: "Negation",              ar: "النفي" },
    { en: "There is / There are",  ar: "هناك يوجد" },
    { en: "Countable Nouns",       ar: "الأسماء المعدودة" },
    { en: "Uncountable Nouns",     ar: "الأسماء غير المعدودة" },
    { en: "Some & Any",            ar: "some و any" },
    { en: "Much & Many",           ar: "much و many" },
    { en: "Conjunctions",          ar: "حروف العطف" },
    { en: "If Sentences",          ar: "جمل الشرط" },
    { en: "Passive Voice",         ar: "المبني للمجهول" },
    { en: "Reported Speech",       ar: "الكلام المنقول" },
    { en: "Irregular Verbs I",     ar: "الأفعال الشاذة - الجزء الأول" },
    { en: "Irregular Verbs II",    ar: "الأفعال الشاذة - الجزء الثاني" },
    { en: "Phrasal Verbs I",       ar: "الأفعال المركبة - الجزء الأول" },
    { en: "Phrasal Verbs II",      ar: "الأفعال المركبة - الجزء الثاني" },
    { en: "Idioms I",              ar: "التعابير الاصطلاحية - الجزء الأول" },
    { en: "Idioms II",             ar: "التعابير الاصطلاحية - الجزء الثاني" },
    { en: "Synonyms & Antonyms",   ar: "المترادفات والمتضادات" },
    { en: "Prefixes & Suffixes",   ar: "السوابق واللواحق" },
    { en: "Word Families",         ar: "عائلات الكلمات" },
    { en: "Academic Words I",      ar: "المفردات الأكاديمية - 1" },
    { en: "Academic Words II",     ar: "المفردات الأكاديمية - 2" },
    { en: "Business English I",    ar: "الإنجليزية للأعمال - 1" },
    { en: "Business English II",   ar: "الإنجليزية للأعمال - 2" },
    { en: "Formal vs Informal",    ar: "الرسمي وغير الرسمي" },
    { en: "Phone & Email",         ar: "الهاتف والبريد الإلكتروني" },
    { en: "Making Requests",       ar: "صياغة الطلبات" },
    { en: "Giving Opinions",       ar: "التعبير عن الرأي" },
    { en: "Agreeing & Disagreeing",ar: "الموافقة والاعتراض" },
    { en: "Apologizing",           ar: "الاعتذار" },
    { en: "Complimenting",         ar: "المدح والإطراء" },
    { en: "Small Talk",            ar: "الحديث العابر" },
    { en: "Telling a Story",       ar: "رواية القصص" },
    { en: "Describing Events",     ar: "وصف الأحداث" },
    { en: "Giving Directions",     ar: "إعطاء الاتجاهات" },
    { en: "Making Plans",          ar: "التخطيط للمستقبل" },
    { en: "Talking About the Past",ar: "الحديث عن الماضي" },
    { en: "Habits & Routines",     ar: "العادات والروتين" },
    { en: "Preferences & Likes",   ar: "التفضيلات والإعجابات" },
    { en: "Advice & Suggestions",  ar: "النصائح والاقتراحات" },
    { en: "Invitations",           ar: "الدعوات" },
    { en: "Congratulations",       ar: "التهنئة" },
    { en: "Science & Discovery",   ar: "العلم والاكتشاف" },
    { en: "Art & Literature",      ar: "الفن والأدب" },
    { en: "History & Events",      ar: "التاريخ والأحداث" },
    { en: "Philosophy & Ideas",    ar: "الفلسفة والأفكار" },
    { en: "Law & Justice",         ar: "القانون والعدالة" },
    { en: "Politics & Society",    ar: "السياسة والمجتمع" },
    { en: "Media & News",          ar: "الإعلام والأخبار" },
    { en: "Music & Entertainment", ar: "الموسيقى والترفيه" },
    { en: "Cinema & Theater",      ar: "السينما والمسرح" },
    { en: "Cooking & Recipes",     ar: "الطبخ والوصفات" },
    { en: "Plants & Gardening",    ar: "النباتات والبستنة" },
    { en: "Space & Universe",      ar: "الفضاء والكون" },
    { en: "The Ocean & Marine Life",ar: "المحيط والحياة البحرية" },
    { en: "Mountains & Forests",   ar: "الجبال والغابات" },
    { en: "Architecture & Design", ar: "العمارة والتصميم" },
    { en: "Inventions & Innovation",ar: "الاختراعات والابتكار" },
    { en: "Social Media",          ar: "وسائل التواصل الاجتماعي" },
    { en: "Online Communication",  ar: "التواصل عبر الإنترنت" },
    { en: "Cybersecurity",         ar: "الأمن الإلكتروني" },
    { en: "Artificial Intelligence",ar: "الذكاء الاصطناعي" },
    { en: "Renewable Energy",      ar: "الطاقة المتجددة" },
    { en: "Climate Change",        ar: "التغير المناخي" },
    { en: "Human Rights",          ar: "حقوق الإنسان" },
    { en: "Global Trade",          ar: "التجارة العالمية" },
    { en: "Cultural Exchange",     ar: "التبادل الثقافي" },
    { en: "Education Systems",     ar: "أنظمة التعليم" },
    { en: "Healthcare Systems",    ar: "أنظمة الرعاية الصحية" },
    { en: "Psychology",            ar: "علم النفس" },
    { en: "Sociology",             ar: "علم الاجتماع" },
    { en: "Math & Logic",          ar: "الرياضيات والمنطق" },
    { en: "Chemistry & Materials", ar: "الكيمياء والمواد" },
    { en: "Biology & Life",        ar: "الأحياء والحياة" },
    { en: "Entrepreneurship",      ar: "ريادة الأعمال" },
    { en: "Marketing & Branding",  ar: "التسويق والعلامة التجارية" },
    { en: "Leadership Skills",     ar: "مهارات القيادة" },
    { en: "Time Management",       ar: "إدارة الوقت" },
    { en: "Problem Solving",       ar: "حل المشكلات" },
    { en: "Critical Thinking",     ar: "التفكير النقدي" },
    { en: "Presentation Skills",   ar: "مهارات العرض" },
    { en: "Negotiation Skills",    ar: "مهارات التفاوض" },
    { en: "Teamwork",              ar: "العمل الجماعي" },
    { en: "Creativity",            ar: "الإبداع" },
    { en: "Mindfulness",           ar: "اليقظة الذهنية" },
    { en: "Nutrition & Health",    ar: "التغذية والصحة" },
    { en: "Fitness & Exercise",    ar: "اللياقة البدنية والتمرين" },
    { en: "Mental Health",         ar: "الصحة النفسية" },
    { en: "Sleep & Rest",          ar: "النوم والراحة" },
    { en: "Relationships",         ar: "العلاقات الإنسانية" },
    { en: "Parenting",             ar: "التربية والأمومة" },
    { en: "Traditions & Customs",  ar: "التقاليد والعادات" },
    { en: "Celebrations & Holidays",ar: "الاحتفالات والأعياد" },
    { en: "Religion & Beliefs",    ar: "الدين والمعتقدات" },
    { en: "Ethics & Values",       ar: "الأخلاق والقيم" },
    { en: "Volunteerism",          ar: "التطوع" },
    { en: "Writing Skills",        ar: "مهارات الكتابة" },
    { en: "Reading Comprehension", ar: "فهم المقروء" },
    { en: "Listening Skills",      ar: "مهارات الاستماع" },
    { en: "Advanced Vocabulary I", ar: "المفردات المتقدمة - 1" },
    { en: "Advanced Vocabulary II",ar: "المفردات المتقدمة - 2" },
    { en: "Master Challenge",      ar: "تحدي الإتقان النهائي" }
];

const generateUnits = () => {
    const units = [];
    const icons = ['fa-star', 'fa-bolt', 'fa-sun', 'fa-clock', 'fa-history', 'fa-calendar-check', 'fa-font', 'fa-rocket', 'fa-graduation-cap', 'fa-medal', 'fa-trophy', 'fa-award', 'fa-brain', 'fa-spell-check', 'fa-language', 'fa-book-open', 'fa-compass', 'fa-map', 'fa-flag', 'fa-lightbulb'];
    
    const grammarList = grammarRules.set1;
    const allVocab = [...vocabularyData.essential, ...vocabularyData.important];
    
    for (let i = 1; i <= 150; i++) {
        const vocabIdx = (i - 1) % allVocab.length;
        const ruleIdx = (i - 1) % grammarList.length;
        const titleObj = unitTitles[i - 1] || { en: `Step ${i}`, ar: `خطوة ${i}` };
        
        units.push({
            id: i,
            title: `Unit ${i}: ${titleObj.en}`,
            arabicTitle: `الوحدة ${i}: ${titleObj.ar}`,
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
