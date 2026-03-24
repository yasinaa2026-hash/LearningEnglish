/**
 * GrammarQuest - Application Data Source
 * Per-unit vocabulary words for quizzes + grammar rules
 */

// ─── GLOBAL VOCABULARY POOL ─────────────────────────────────────────────────
const vocabularyData = {
    essential: [
        { id: "e1",  english: "Time",   arabic: "وقت",           pos: "Noun",      example: "We don't have much time.",     arabicExample: "ليس لدينا الكثير من الوقت." },
        { id: "e2",  english: "Year",   arabic: "سنة / عام",      pos: "Noun",      example: "Happy new year!",              arabicExample: "سنة جديدة سعيدة!" },
        { id: "e3",  english: "People", arabic: "الناس",          pos: "Noun",      example: "Many people love this city.",  arabicExample: "كثير من الناس يحبون هذه المدينة." },
        { id: "e4",  english: "Way",    arabic: "طريقة",          pos: "Noun",      example: "This is the right way.",       arabicExample: "هذا هو الطريق الصحيح." },
        { id: "e5",  english: "Day",    arabic: "يوم",            pos: "Noun",      example: "It's a beautiful day.",        arabicExample: "إنه يوم جميل." },
        { id: "e6",  english: "Thing",  arabic: "شيء",            pos: "Noun",      example: "There is one thing missing.",  arabicExample: "هناك شيء واحد مفقود." },
        { id: "e7",  english: "Child",  arabic: "طفل",            pos: "Noun",      example: "The child is sleeping.",       arabicExample: "الطفل نائم." },
        { id: "e8",  english: "World",  arabic: "عالم",           pos: "Noun",      example: "We travel the world.",         arabicExample: "نحن نسافر حول العالم." },
        { id: "e9",  english: "Life",   arabic: "حياة",           pos: "Noun",      example: "Life is full of surprises.",   arabicExample: "الحياة مليئة بالمفاجآت." },
        { id: "e10", english: "Good",   arabic: "جيد",            pos: "Adjective", example: "This is a good book.",         arabicExample: "هذا كتاب جيد." },
        { id: "e11", english: "New",    arabic: "جديد",           pos: "Adjective", example: "I bought a new car.",          arabicExample: "اشتريت سيارة جديدة." },
        { id: "e12", english: "First",  arabic: "أول",            pos: "Adjective", example: "First priority.",              arabicExample: "الأولوية الأولى." },
        { id: "e13", english: "Work",   arabic: "يعمل",           pos: "Verb",      example: "I work hard.",                 arabicExample: "أعمل بجد." },
        { id: "e14", english: "Make",   arabic: "يصنع",           pos: "Verb",      example: "Make a plan.",                 arabicExample: "اصنع خطة." },
        { id: "e15", english: "Know",   arabic: "يعرف",           pos: "Verb",      example: "I know you.",                  arabicExample: "أنا أعرفك." },
        { id: "e16", english: "Place",  arabic: "مكان",           pos: "Noun",      example: "A quiet place.",               arabicExample: "مكان هادئ." },
        { id: "e17", english: "Case",   arabic: "حالة",           pos: "Noun",      example: "In any case.",                 arabicExample: "في كل الأحوال." },
        { id: "e18", english: "Small",  arabic: "صغير",           pos: "Adjective", example: "A small dog.",                 arabicExample: "كلب صغير." },
        { id: "e19", english: "Hand",   arabic: "يد",             pos: "Noun",      example: "Give me a hand.",              arabicExample: "ساعدني." },
        { id: "e20", english: "Call",   arabic: "يتصل",           pos: "Verb",      example: "Call me later.",               arabicExample: "اتصل بي لاحقاً." },
        { id: "e21", english: "Man",    arabic: "رجل",            pos: "Noun",      example: "A tall man",                   arabicExample: "رجل طويل" },
        { id: "e22", english: "Woman",  arabic: "امرأة",          pos: "Noun",      example: "A kind woman",                 arabicExample: "امرأة لطيفة" },
        { id: "e23", english: "Home",   arabic: "بيت",            pos: "Noun",      example: "Stay home",                    arabicExample: "ابق في المنزل" },
        { id: "e24", english: "School", arabic: "مدرسة",          pos: "Noun",      example: "Go to school",                 arabicExample: "اذهب للمدرسة" },
        { id: "e25", english: "Water",  arabic: "ماء",            pos: "Noun",      example: "Drink water",                  arabicExample: "اشرب الماء" }
    ],
    important: [
        { id: "i1",  english: "Ability",  arabic: "قدرة",    pos: "Noun",      example: "Great ability",     arabicExample: "قدرة كبيرة" },
        { id: "i2",  english: "Accept",   arabic: "يقبل",    pos: "Verb",      example: "I accept it",       arabicExample: "أنا أقبل ذلك" },
        { id: "i3",  english: "Believe",  arabic: "يصدق",    pos: "Verb",      example: "Believe me",        arabicExample: "صدقني" },
        { id: "i4",  english: "Common",   arabic: "شائع",    pos: "Adjective", example: "Common mistake",    arabicExample: "خطأ شائع" },
        { id: "i5",  english: "Dream",    arabic: "حلم",     pos: "Noun",      example: "Sweet dreams",      arabicExample: "أحلام سعيدة" },
        { id: "i6",  english: "Effect",   arabic: "تأثير",   pos: "Noun",      example: "Side effects",      arabicExample: "آثار جانبية" },
        { id: "i7",  english: "Finally",  arabic: "أخيراً",  pos: "Adverb",    example: "Finally here",      arabicExample: "أخيراً هنا" },
        { id: "i8",  english: "Grand",    arabic: "عظيم",    pos: "Adjective", example: "Grand opening",     arabicExample: "افتتاح عظيم" },
        { id: "i9",  english: "Health",   arabic: "صحة",     pos: "Noun",      example: "Good health",       arabicExample: "صحة جيدة" },
        { id: "i10", english: "Imagine",  arabic: "يتخيل",   pos: "Verb",      example: "Imagine that",      arabicExample: "تخيل ذلك" }
    ],
    extra: []
};

// ─── GRAMMAR RULES ───────────────────────────────────────────────────────────
const grammarRules = {
    set1: [
        { title: "Present Simple: Habits",      arabicDescription: "للعادات والحقائق.",       structure: "Subject + Verb(s)",          example: "I drink tea.",       arabicExample: "أنا أشرب الشاي." },
        { title: "Present Simple: Negation",    arabicDescription: "للنفي في المضارع.",        structure: "Don't / Doesn't + Verb",     example: "He doesn't smoke.",  arabicExample: "هو لا يدخن." },
        { title: "Present Continuous: Now",     arabicDescription: "لأحداث تقع الآن.",         structure: "Am/Is/Are + Verb-ing",       example: "She is reading.",    arabicExample: "هي تقرأ." },
        { title: "Past Simple: Completed",      arabicDescription: "للماضي المكتمل.",          structure: "Verb-ed / Irregular",        example: "I saw a movie.",     arabicExample: "رأيت فيلماً." },
        { title: "Future: Will",                arabicDescription: "للمستقبل.",                structure: "Will + Verb",                example: "I will call you.",   arabicExample: "سأتصل بك." },
        { title: "Pronouns: Subject",           arabicDescription: "ضمائر الفاعل.",            structure: "I, You, He, She, It, We",    example: "We are friends.",    arabicExample: "نحن أصدقاء." },
        { title: "Articles: A/An",              arabicDescription: "أدوات التنكير.",           structure: "A (consonant), An (vowel)",  example: "An apple a day.",    arabicExample: "تفاحة في اليوم." },
        { title: "Possessive Adjectives",       arabicDescription: "صفات الملكية.",            structure: "My, Your, His, Her...",      example: "This is my car.",    arabicExample: "هذه سيارتي." },
        { title: "Plurals: Regular",            arabicDescription: "الجمع المنتظم.",           structure: "Noun + s/es",                example: "Two cats.",          arabicExample: "قطتان." },
        { title: "Wh- Questions",               arabicDescription: "أسئلة الاستخدام.",         structure: "Who, What, Where, When",     example: "Where is he?",       arabicExample: "أين هو؟" }
    ],
    set2: []
};

// ─── PER-UNIT WORD BANKS ─────────────────────────────────────────────────────
// Each unit has ~8-10 words used for its quiz
const unitWords = {
    1: [
        { id:"u1w1",  english:"Hello",      arabic:"مرحبا",        pos:"Interjection", example:"Hello, how are you?",       arabicExample:"مرحبا، كيف حالك؟" },
        { id:"u1w2",  english:"Yes",        arabic:"نعم",           pos:"Adverb",       example:"Yes, I can.",               arabicExample:"نعم، أستطيع." },
        { id:"u1w3",  english:"No",         arabic:"لا",            pos:"Adverb",       example:"No, thank you.",            arabicExample:"لا، شكراً." },
        { id:"u1w4",  english:"Please",     arabic:"من فضلك",       pos:"Adverb",       example:"Please sit down.",          arabicExample:"من فضلك اجلس." },
        { id:"u1w5",  english:"Thanks",     arabic:"شكراً",         pos:"Interjection", example:"Thanks a lot!",             arabicExample:"شكراً جزيلاً!" },
        { id:"u1w6",  english:"Sorry",      arabic:"آسف",           pos:"Interjection", example:"I'm sorry for that.",       arabicExample:"أنا آسف لذلك." },
        { id:"u1w7",  english:"Good",       arabic:"جيد",           pos:"Adjective",    example:"Good morning!",             arabicExample:"صباح الخير!" },
        { id:"u1w8",  english:"Bad",        arabic:"سيئ",           pos:"Adjective",    example:"That's bad news.",          arabicExample:"هذا خبر سيئ." }
    ],
    2: [
        { id:"u2w1",  english:"Name",       arabic:"اسم",           pos:"Noun",         example:"What is your name?",        arabicExample:"ما اسمك؟" },
        { id:"u2w2",  english:"Age",        arabic:"عمر",           pos:"Noun",         example:"What is your age?",         arabicExample:"كم عمرك؟" },
        { id:"u2w3",  english:"Country",    arabic:"بلد",           pos:"Noun",         example:"My country is beautiful.",  arabicExample:"بلدي جميل." },
        { id:"u2w4",  english:"Friend",     arabic:"صديق",          pos:"Noun",         example:"He is my best friend.",     arabicExample:"هو أفضل أصدقائي." },
        { id:"u2w5",  english:"Family",     arabic:"عائلة",         pos:"Noun",         example:"I love my family.",         arabicExample:"أنا أحب عائلتي." },
        { id:"u2w6",  english:"Meet",       arabic:"يلتقي",         pos:"Verb",         example:"Nice to meet you.",         arabicExample:"سعيد بلقائك." },
        { id:"u2w7",  english:"Speak",      arabic:"يتكلم",         pos:"Verb",         example:"I speak English.",          arabicExample:"أنا أتكلم الإنجليزية." },
        { id:"u2w8",  english:"Live",       arabic:"يسكن",          pos:"Verb",         example:"I live in Oman.",           arabicExample:"أسكن في عُمان." }
    ],
    3: [
        { id:"u3w1",  english:"Father",     arabic:"أب",            pos:"Noun",         example:"My father is kind.",        arabicExample:"أبي لطيف." },
        { id:"u3w2",  english:"Mother",     arabic:"أم",            pos:"Noun",         example:"My mother cooks well.",     arabicExample:"أمي تطبخ جيداً." },
        { id:"u3w3",  english:"Brother",    arabic:"أخ",            pos:"Noun",         example:"He is my brother.",         arabicExample:"هو أخي." },
        { id:"u3w4",  english:"Sister",     arabic:"أخت",           pos:"Noun",         example:"She is my sister.",         arabicExample:"هي أختي." },
        { id:"u3w5",  english:"Son",        arabic:"ابن",           pos:"Noun",         example:"This is my son.",           arabicExample:"هذا ابني." },
        { id:"u3w6",  english:"Daughter",   arabic:"ابنة",          pos:"Noun",         example:"She's my daughter.",        arabicExample:"هي ابنتي." },
        { id:"u3w7",  english:"Uncle",      arabic:"عم",            pos:"Noun",         example:"My uncle is generous.",     arabicExample:"عمي كريم." },
        { id:"u3w8",  english:"Aunt",       arabic:"عمة",           pos:"Noun",         example:"My aunt visits us.",        arabicExample:"عمتي تزورنا." }
    ],
    4: [
        { id:"u4w1",  english:"One",        arabic:"واحد",          pos:"Number",       example:"One cup of tea.",           arabicExample:"كوب شاي واحد." },
        { id:"u4w2",  english:"Two",        arabic:"اثنان",         pos:"Number",       example:"I have two cats.",          arabicExample:"عندي قطتان." },
        { id:"u4w3",  english:"Ten",        arabic:"عشرة",          pos:"Number",       example:"Ten minutes left.",         arabicExample:"عشر دقائق متبقية." },
        { id:"u4w4",  english:"Hour",       arabic:"ساعة",          pos:"Noun",         example:"Wait one hour.",            arabicExample:"انتظر ساعة واحدة." },
        { id:"u4w5",  english:"Minute",     arabic:"دقيقة",         pos:"Noun",         example:"Just a minute.",            arabicExample:"دقيقة واحدة فقط." },
        { id:"u4w6",  english:"Morning",    arabic:"صباح",          pos:"Noun",         example:"Good morning!",             arabicExample:"صباح الخير!" },
        { id:"u4w7",  english:"Evening",    arabic:"مساء",          pos:"Noun",         example:"Good evening!",             arabicExample:"مساء الخير!" },
        { id:"u4w8",  english:"Night",      arabic:"ليل",           pos:"Noun",         example:"Good night!",               arabicExample:"تصبح على خير!" }
    ],
    5: [
        { id:"u5w1",  english:"Red",        arabic:"أحمر",          pos:"Adjective",    example:"A red flower.",             arabicExample:"وردة حمراء." },
        { id:"u5w2",  english:"Blue",       arabic:"أزرق",          pos:"Adjective",    example:"The blue sky.",             arabicExample:"السماء الزرقاء." },
        { id:"u5w3",  english:"Green",      arabic:"أخضر",          pos:"Adjective",    example:"Green grass.",              arabicExample:"عشب أخضر." },
        { id:"u5w4",  english:"White",      arabic:"أبيض",          pos:"Adjective",    example:"A white shirt.",            arabicExample:"قميص أبيض." },
        { id:"u5w5",  english:"Black",      arabic:"أسود",          pos:"Adjective",    example:"A black car.",              arabicExample:"سيارة سوداء." },
        { id:"u5w6",  english:"Circle",     arabic:"دائرة",         pos:"Noun",         example:"Draw a circle.",            arabicExample:"ارسم دائرة." },
        { id:"u5w7",  english:"Square",     arabic:"مربع",          pos:"Noun",         example:"A square shape.",           arabicExample:"شكل مربع." },
        { id:"u5w8",  english:"Big",        arabic:"كبير",          pos:"Adjective",    example:"A big house.",              arabicExample:"بيت كبير." }
    ],
    6: [
        { id:"u6w1",  english:"House",      arabic:"منزل",          pos:"Noun",         example:"A big house.",              arabicExample:"منزل كبير." },
        { id:"u6w2",  english:"Room",       arabic:"غرفة",          pos:"Noun",         example:"My room is clean.",         arabicExample:"غرفتي نظيفة." },
        { id:"u6w3",  english:"Door",       arabic:"باب",           pos:"Noun",         example:"Close the door.",           arabicExample:"أغلق الباب." },
        { id:"u6w4",  english:"Window",     arabic:"نافذة",         pos:"Noun",         example:"Open the window.",          arabicExample:"افتح النافذة." },
        { id:"u6w5",  english:"Kitchen",    arabic:"مطبخ",          pos:"Noun",         example:"Cook in the kitchen.",      arabicExample:"اطبخ في المطبخ." },
        { id:"u6w6",  english:"Garden",     arabic:"حديقة",         pos:"Noun",         example:"A green garden.",           arabicExample:"حديقة خضراء." },
        { id:"u6w7",  english:"Chair",      arabic:"كرسي",          pos:"Noun",         example:"Sit on the chair.",         arabicExample:"اجلس على الكرسي." },
        { id:"u6w8",  english:"Table",      arabic:"طاولة",         pos:"Noun",         example:"Eat at the table.",         arabicExample:"كل على الطاولة." }
    ],
    7: [
        { id:"u7w1",  english:"Wake",       arabic:"يستيقظ",        pos:"Verb",         example:"I wake up early.",          arabicExample:"أستيقظ باكراً." },
        { id:"u7w2",  english:"Sleep",      arabic:"ينام",          pos:"Verb",         example:"I sleep at ten.",           arabicExample:"أنام الساعة عشرة." },
        { id:"u7w3",  english:"Eat",        arabic:"يأكل",          pos:"Verb",         example:"I eat breakfast.",          arabicExample:"أتناول الفطور." },
        { id:"u7w4",  english:"Drink",      arabic:"يشرب",          pos:"Verb",         example:"Drink water daily.",        arabicExample:"اشرب الماء يومياً." },
        { id:"u7w5",  english:"Walk",       arabic:"يمشي",          pos:"Verb",         example:"I walk to school.",         arabicExample:"أمشي إلى المدرسة." },
        { id:"u7w6",  english:"Study",      arabic:"يدرس",          pos:"Verb",         example:"I study every day.",        arabicExample:"أدرس كل يوم." },
        { id:"u7w7",  english:"Work",       arabic:"يعمل",          pos:"Verb",         example:"She works hard.",           arabicExample:"هي تعمل بجد." },
        { id:"u7w8",  english:"Rest",       arabic:"يستريح",        pos:"Verb",         example:"Rest after work.",          arabicExample:"استرح بعد العمل." }
    ],
    8: [
        { id:"u8w1",  english:"Food",       arabic:"طعام",          pos:"Noun",         example:"Delicious food.",           arabicExample:"طعام لذيذ." },
        { id:"u8w2",  english:"Bread",      arabic:"خبز",           pos:"Noun",         example:"Fresh bread.",              arabicExample:"خبز طازج." },
        { id:"u8w3",  english:"Rice",       arabic:"أرز",           pos:"Noun",         example:"Cook rice.",                arabicExample:"اطبخ الأرز." },
        { id:"u8w4",  english:"Meat",       arabic:"لحم",           pos:"Noun",         example:"Grilled meat.",             arabicExample:"لحم مشوي." },
        { id:"u8w5",  english:"Milk",       arabic:"حليب",          pos:"Noun",         example:"Fresh milk.",               arabicExample:"حليب طازج." },
        { id:"u8w6",  english:"Coffee",     arabic:"قهوة",          pos:"Noun",         example:"Hot coffee.",               arabicExample:"قهوة ساخنة." },
        { id:"u8w7",  english:"Tea",        arabic:"شاي",           pos:"Noun",         example:"Sweet tea.",                arabicExample:"شاي حلو." },
        { id:"u8w8",  english:"Sugar",      arabic:"سكر",           pos:"Noun",         example:"No sugar please.",          arabicExample:"بدون سكر من فضلك." }
    ],
    9: [
        { id:"u9w1",  english:"Head",       arabic:"رأس",           pos:"Noun",         example:"My head hurts.",            arabicExample:"رأسي يؤلمني." },
        { id:"u9w2",  english:"Eye",        arabic:"عين",           pos:"Noun",         example:"She has brown eyes.",       arabicExample:"عيناها بنيتان." },
        { id:"u9w3",  english:"Ear",        arabic:"أذن",           pos:"Noun",         example:"Ear pain.",                 arabicExample:"ألم في الأذن." },
        { id:"u9w4",  english:"Nose",       arabic:"أنف",           pos:"Noun",         example:"A small nose.",             arabicExample:"أنف صغير." },
        { id:"u9w5",  english:"Mouth",      arabic:"فم",            pos:"Noun",         example:"Open your mouth.",          arabicExample:"افتح فمك." },
        { id:"u9w6",  english:"Hand",       arabic:"يد",            pos:"Noun",         example:"Wash your hands.",          arabicExample:"اغسل يديك." },
        { id:"u9w7",  english:"Foot",       arabic:"قدم",           pos:"Noun",         example:"Foot injury.",              arabicExample:"إصابة قدم." },
        { id:"u9w8",  english:"Heart",      arabic:"قلب",           pos:"Noun",         example:"Healthy heart.",            arabicExample:"قلب سليم." }
    ],
    10: [
        { id:"u10w1", english:"Shirt",      arabic:"قميص",          pos:"Noun",         example:"A white shirt.",            arabicExample:"قميص أبيض." },
        { id:"u10w2", english:"Dress",      arabic:"فستان",         pos:"Noun",         example:"A red dress.",              arabicExample:"فستان أحمر." },
        { id:"u10w3", english:"Shoes",      arabic:"حذاء",          pos:"Noun",         example:"New shoes.",                arabicExample:"حذاء جديد." },
        { id:"u10w4", english:"Hat",        arabic:"قبعة",          pos:"Noun",         example:"A black hat.",              arabicExample:"قبعة سوداء." },
        { id:"u10w5", english:"Jacket",     arabic:"سترة",          pos:"Noun",         example:"A warm jacket.",            arabicExample:"سترة دافئة." },
        { id:"u10w6", english:"Bag",        arabic:"حقيبة",         pos:"Noun",         example:"A leather bag.",            arabicExample:"حقيبة جلدية." },
        { id:"u10w7", english:"Watch",      arabic:"ساعة يد",       pos:"Noun",         example:"A gold watch.",             arabicExample:"ساعة ذهبية." },
        { id:"u10w8", english:"Ring",       arabic:"خاتم",          pos:"Noun",         example:"A diamond ring.",           arabicExample:"خاتم ألماس." }
    ]
};

// Fill remaining units 11-150 with cycling words from pool
(function fillRemainingUnits() {
    const pool = [
        { english:"Animal",    arabic:"حيوان",     pos:"Noun",      example:"Wild animal.",          arabicExample:"حيوان بري." },
        { english:"Tree",      arabic:"شجرة",      pos:"Noun",      example:"A tall tree.",          arabicExample:"شجرة طويلة." },
        { english:"River",     arabic:"نهر",       pos:"Noun",      example:"A long river.",         arabicExample:"نهر طويل." },
        { english:"Mountain",  arabic:"جبل",       pos:"Noun",      example:"Climb the mountain.",   arabicExample:"تسلق الجبل." },
        { english:"Sun",       arabic:"شمس",       pos:"Noun",      example:"The sun rises.",        arabicExample:"الشمس تشرق." },
        { english:"Moon",      arabic:"قمر",       pos:"Noun",      example:"The full moon.",        arabicExample:"القمر الكامل." },
        { english:"Star",      arabic:"نجمة",      pos:"Noun",      example:"A bright star.",        arabicExample:"نجمة ساطعة." },
        { english:"Rain",      arabic:"مطر",       pos:"Noun",      example:"Heavy rain.",           arabicExample:"مطر غزير." },
        { english:"Hot",       arabic:"حار",       pos:"Adjective", example:"Hot weather.",         arabicExample:"طقس حار." },
        { english:"Cold",      arabic:"بارد",      pos:"Adjective", example:"Cold water.",          arabicExample:"ماء بارد." },
        { english:"Teacher",   arabic:"معلم",      pos:"Noun",      example:"A great teacher.",      arabicExample:"معلم رائع." },
        { english:"Student",   arabic:"طالب",      pos:"Noun",      example:"A good student.",       arabicExample:"طالب مجتهد." },
        { english:"Book",      arabic:"كتاب",      pos:"Noun",      example:"Read a book.",          arabicExample:"اقرأ كتاباً." },
        { english:"Pen",       arabic:"قلم",       pos:"Noun",      example:"A blue pen.",           arabicExample:"قلم أزرق." },
        { english:"Class",     arabic:"صف",        pos:"Noun",      example:"The math class.",       arabicExample:"صف الرياضيات." },
        { english:"Car",       arabic:"سيارة",     pos:"Noun",      example:"A fast car.",           arabicExample:"سيارة سريعة." },
        { english:"Bus",       arabic:"باص",       pos:"Noun",      example:"Take the bus.",         arabicExample:"خذ الباص." },
        { english:"Road",      arabic:"طريق",      pos:"Noun",      example:"A long road.",          arabicExample:"طريق طويل." },
        { english:"City",      arabic:"مدينة",     pos:"Noun",      example:"A big city.",           arabicExample:"مدينة كبيرة." },
        { english:"Street",    arabic:"شارع",      pos:"Noun",      example:"A clean street.",       arabicExample:"شارع نظيف." },
        { english:"Market",    arabic:"سوق",       pos:"Noun",      example:"Go to the market.",     arabicExample:"اذهب إلى السوق." },
        { english:"Price",     arabic:"سعر",       pos:"Noun",      example:"What's the price?",     arabicExample:"ما السعر؟" },
        { english:"Buy",       arabic:"يشتري",     pos:"Verb",      example:"I want to buy this.",   arabicExample:"أريد شراء هذا." },
        { english:"Sell",      arabic:"يبيع",      pos:"Verb",      example:"They sell fruits.",     arabicExample:"هم يبيعون الفواكه." },
        { english:"Doctor",    arabic:"طبيب",      pos:"Noun",      example:"Visit the doctor.",     arabicExample:"زُر الطبيب." },
        { english:"Hospital",  arabic:"مستشفى",    pos:"Noun",      example:"A big hospital.",       arabicExample:"مستشفى كبير." },
        { english:"Medicine",  arabic:"دواء",      pos:"Noun",      example:"Take your medicine.",   arabicExample:"خذ دواءك." },
        { english:"Sick",      arabic:"مريض",      pos:"Adjective", example:"I feel sick.",         arabicExample:"أشعر بالمرض." },
        { english:"Play",      arabic:"يلعب",      pos:"Verb",      example:"Children love to play.",arabicExample:"الأطفال يحبون اللعب." },
        { english:"Sport",     arabic:"رياضة",     pos:"Noun",      example:"Do sport daily.",       arabicExample:"مارس الرياضة يومياً." },
        { english:"Phone",     arabic:"هاتف",      pos:"Noun",      example:"My new phone.",         arabicExample:"هاتفي الجديد." },
        { english:"Computer",  arabic:"حاسوب",     pos:"Noun",      example:"Use the computer.",     arabicExample:"استخدم الحاسوب." },
        { english:"Internet",  arabic:"إنترنت",    pos:"Noun",      example:"Fast internet.",        arabicExample:"إنترنت سريع." },
        { english:"Happy",     arabic:"سعيد",      pos:"Adjective", example:"I feel happy.",        arabicExample:"أشعر بالسعادة." },
        { english:"Sad",       arabic:"حزين",      pos:"Adjective", example:"Don't be sad.",        arabicExample:"لا تحزن." },
        { english:"Angry",     arabic:"غاضب",      pos:"Adjective", example:"She is angry.",       arabicExample:"هي غاضبة." },
        { english:"Love",      arabic:"يحب",       pos:"Verb",      example:"I love you.",           arabicExample:"أنا أحبك." },
        { english:"Tall",      arabic:"طويل",      pos:"Adjective", example:"A tall building.",     arabicExample:"مبنى طويل." },
        { english:"Short",     arabic:"قصير",      pos:"Adjective", example:"A short story.",       arabicExample:"قصة قصيرة." },
        { english:"Old",       arabic:"قديم",      pos:"Adjective", example:"An old book.",         arabicExample:"كتاب قديم." }
    ];

    for (let u = 11; u <= 150; u++) {
        unitWords[u] = [];
        for (let w = 0; w < 8; w++) {
            const src = pool[(u * 8 + w) % pool.length];
            unitWords[u].push({
                id: `u${u}w${w+1}`,
                english: src.english,
                arabic: src.arabic,
                pos: src.pos,
                example: src.example,
                arabicExample: src.arabicExample
            });
        }
    }
})();

// ─── UNIT TITLES ─────────────────────────────────────────────────────────────
const unitTitles = [
    { en:"First Steps",            ar:"الخطوات الأولى" },
    { en:"Hello World",            ar:"مرحبا بالعالم" },
    { en:"People & Names",         ar:"الناس والأسماء" },
    { en:"Numbers & Time",         ar:"الأرقام والوقت" },
    { en:"Colors & Shapes",        ar:"الألوان والأشكال" },
    { en:"Family & Home",          ar:"الأسرة والمنزل" },
    { en:"Daily Routines",         ar:"الروتين اليومي" },
    { en:"Food & Drinks",          ar:"الطعام والشراب" },
    { en:"The Body",               ar:"جسم الإنسان" },
    { en:"Clothing & Fashion",     ar:"الملابس والموضة" },
    { en:"Animals & Nature",       ar:"الحيوانات والطبيعة" },
    { en:"Weather & Seasons",      ar:"الطقس والفصول" },
    { en:"At School",              ar:"في المدرسة" },
    { en:"Jobs & Work",            ar:"المهن والعمل" },
    { en:"Transport & Travel",     ar:"المواصلات والسفر" },
    { en:"In the City",            ar:"في المدينة" },
    { en:"Shopping",               ar:"التسوق" },
    { en:"At the Restaurant",      ar:"في المطعم" },
    { en:"Health & Medicine",      ar:"الصحة والطب" },
    { en:"Sports & Hobbies",       ar:"الرياضة والهوايات" },
    { en:"Technology & Gadgets",   ar:"التكنولوجيا والأجهزة" },
    { en:"The Digital World",      ar:"العالم الرقمي" },
    { en:"Emotions & Feelings",    ar:"المشاعر والأحاسيس" },
    { en:"Describing People",      ar:"وصف الأشخاص" },
    { en:"Describing Places",      ar:"وصف الأماكن" },
    { en:"At the Airport",         ar:"في المطار" },
    { en:"Hotels & Lodging",       ar:"الفنادق والإقامة" },
    { en:"Money & Banking",        ar:"المال والبنوك" },
    { en:"Environment",            ar:"البيئة" },
    { en:"Countries & Cultures",   ar:"الدول والثقافات" },
    { en:"Present Simple",         ar:"المضارع البسيط" },
    { en:"Present Continuous",     ar:"المضارع المستمر" },
    { en:"Past Simple",            ar:"الماضي البسيط" },
    { en:"Past Continuous",        ar:"الماضي المستمر" },
    { en:"Future with Will",       ar:"المستقبل بـ will" },
    { en:"Future with Going To",   ar:"المستقبل بـ going to" },
    { en:"Articles: A, An, The",   ar:"أدوات التعريف والتنكير" },
    { en:"Pronouns",               ar:"الضمائر" },
    { en:"Possessives",            ar:"الملكية" },
    { en:"Prepositions of Place",  ar:"حروف الجر للمكان" },
    { en:"Prepositions of Time",   ar:"حروف الجر للوقت" },
    { en:"Adjectives",             ar:"الصفات" },
    { en:"Adverbs",                ar:"الظروف" },
    { en:"Comparatives",           ar:"أفعل التفضيل المقارن" },
    { en:"Superlatives",           ar:"أفعل التفضيل العالي" },
    { en:"Modal Verbs: Can",       ar:"الأفعال الشرطية: can" },
    { en:"Modal Verbs: Must",      ar:"الأفعال الشرطية: must" },
    { en:"Modal Verbs: Should",    ar:"الأفعال الشرطية: should" },
    { en:"Questions with Do/Does", ar:"أسئلة بـ do/does" },
    { en:"Wh- Questions",          ar:"أسئلة wh-" },
    { en:"Negation",               ar:"النفي" },
    { en:"There is / There are",   ar:"هناك يوجد" },
    { en:"Countable Nouns",        ar:"الأسماء المعدودة" },
    { en:"Uncountable Nouns",      ar:"الأسماء غير المعدودة" },
    { en:"Some & Any",             ar:"some و any" },
    { en:"Much & Many",            ar:"much و many" },
    { en:"Conjunctions",           ar:"حروف العطف" },
    { en:"If Sentences",           ar:"جمل الشرط" },
    { en:"Passive Voice",          ar:"المبني للمجهول" },
    { en:"Reported Speech",        ar:"الكلام المنقول" },
    { en:"Irregular Verbs I",      ar:"الأفعال الشاذة - الجزء الأول" },
    { en:"Irregular Verbs II",     ar:"الأفعال الشاذة - الجزء الثاني" },
    { en:"Phrasal Verbs I",        ar:"الأفعال المركبة - الجزء الأول" },
    { en:"Phrasal Verbs II",       ar:"الأفعال المركبة - الجزء الثاني" },
    { en:"Idioms I",               ar:"التعابير الاصطلاحية - الجزء الأول" },
    { en:"Idioms II",              ar:"التعابير الاصطلاحية - الجزء الثاني" },
    { en:"Synonyms & Antonyms",    ar:"المترادفات والمتضادات" },
    { en:"Prefixes & Suffixes",    ar:"السوابق واللواحق" },
    { en:"Word Families",          ar:"عائلات الكلمات" },
    { en:"Academic Words I",       ar:"المفردات الأكاديمية - 1" },
    { en:"Academic Words II",      ar:"المفردات الأكاديمية - 2" },
    { en:"Business English I",     ar:"الإنجليزية للأعمال - 1" },
    { en:"Business English II",    ar:"الإنجليزية للأعمال - 2" },
    { en:"Formal vs Informal",     ar:"الرسمي وغير الرسمي" },
    { en:"Phone & Email",          ar:"الهاتف والبريد الإلكتروني" },
    { en:"Making Requests",        ar:"صياغة الطلبات" },
    { en:"Giving Opinions",        ar:"التعبير عن الرأي" },
    { en:"Agreeing & Disagreeing", ar:"الموافقة والاعتراض" },
    { en:"Apologizing",            ar:"الاعتذار" },
    { en:"Complimenting",          ar:"المدح والإطراء" },
    { en:"Small Talk",             ar:"الحديث العابر" },
    { en:"Telling a Story",        ar:"رواية القصص" },
    { en:"Describing Events",      ar:"وصف الأحداث" },
    { en:"Giving Directions",      ar:"إعطاء الاتجاهات" },
    { en:"Making Plans",           ar:"التخطيط للمستقبل" },
    { en:"Talking About the Past", ar:"الحديث عن الماضي" },
    { en:"Habits & Routines",      ar:"العادات والروتين" },
    { en:"Preferences & Likes",    ar:"التفضيلات والإعجابات" },
    { en:"Advice & Suggestions",   ar:"النصائح والاقتراحات" },
    { en:"Invitations",            ar:"الدعوات" },
    { en:"Congratulations",        ar:"التهنئة" },
    { en:"Science & Discovery",    ar:"العلم والاكتشاف" },
    { en:"Art & Literature",       ar:"الفن والأدب" },
    { en:"History & Events",       ar:"التاريخ والأحداث" },
    { en:"Philosophy & Ideas",     ar:"الفلسفة والأفكار" },
    { en:"Law & Justice",          ar:"القانون والعدالة" },
    { en:"Politics & Society",     ar:"السياسة والمجتمع" },
    { en:"Media & News",           ar:"الإعلام والأخبار" },
    { en:"Music & Entertainment",  ar:"الموسيقى والترفيه" },
    { en:"Cinema & Theater",       ar:"السينما والمسرح" },
    { en:"Cooking & Recipes",      ar:"الطبخ والوصفات" },
    { en:"Plants & Gardening",     ar:"النباتات والبستنة" },
    { en:"Space & Universe",       ar:"الفضاء والكون" },
    { en:"The Ocean & Marine Life",ar:"المحيط والحياة البحرية" },
    { en:"Mountains & Forests",    ar:"الجبال والغابات" },
    { en:"Architecture & Design",  ar:"العمارة والتصميم" },
    { en:"Inventions & Innovation",ar:"الاختراعات والابتكار" },
    { en:"Social Media",           ar:"وسائل التواصل الاجتماعي" },
    { en:"Online Communication",   ar:"التواصل عبر الإنترنت" },
    { en:"Cybersecurity",          ar:"الأمن الإلكتروني" },
    { en:"Artificial Intelligence",ar:"الذكاء الاصطناعي" },
    { en:"Renewable Energy",       ar:"الطاقة المتجددة" },
    { en:"Climate Change",         ar:"التغير المناخي" },
    { en:"Human Rights",           ar:"حقوق الإنسان" },
    { en:"Global Trade",           ar:"التجارة العالمية" },
    { en:"Cultural Exchange",      ar:"التبادل الثقافي" },
    { en:"Education Systems",      ar:"أنظمة التعليم" },
    { en:"Healthcare Systems",     ar:"أنظمة الرعاية الصحية" },
    { en:"Psychology",             ar:"علم النفس" },
    { en:"Sociology",              ar:"علم الاجتماع" },
    { en:"Math & Logic",           ar:"الرياضيات والمنطق" },
    { en:"Chemistry & Materials",  ar:"الكيمياء والمواد" },
    { en:"Biology & Life",         ar:"الأحياء والحياة" },
    { en:"Entrepreneurship",       ar:"ريادة الأعمال" },
    { en:"Marketing & Branding",   ar:"التسويق والعلامة التجارية" },
    { en:"Leadership Skills",      ar:"مهارات القيادة" },
    { en:"Time Management",        ar:"إدارة الوقت" },
    { en:"Problem Solving",        ar:"حل المشكلات" },
    { en:"Critical Thinking",      ar:"التفكير النقدي" },
    { en:"Presentation Skills",    ar:"مهارات العرض" },
    { en:"Negotiation Skills",     ar:"مهارات التفاوض" },
    { en:"Teamwork",               ar:"العمل الجماعي" },
    { en:"Creativity",             ar:"الإبداع" },
    { en:"Mindfulness",            ar:"اليقظة الذهنية" },
    { en:"Nutrition & Health",     ar:"التغذية والصحة" },
    { en:"Fitness & Exercise",     ar:"اللياقة البدنية والتمرين" },
    { en:"Mental Health",          ar:"الصحة النفسية" },
    { en:"Sleep & Rest",           ar:"النوم والراحة" },
    { en:"Relationships",          ar:"العلاقات الإنسانية" },
    { en:"Parenting",              ar:"التربية والأمومة" },
    { en:"Traditions & Customs",   ar:"التقاليد والعادات" },
    { en:"Celebrations & Holidays",ar:"الاحتفالات والأعياد" },
    { en:"Religion & Beliefs",     ar:"الدين والمعتقدات" },
    { en:"Ethics & Values",        ar:"الأخلاق والقيم" },
    { en:"Volunteerism",           ar:"التطوع" },
    { en:"Writing Skills",         ar:"مهارات الكتابة" },
    { en:"Reading Comprehension",  ar:"فهم المقروء" },
    { en:"Listening Skills",       ar:"مهارات الاستماع" },
    { en:"Advanced Vocabulary I",  ar:"المفردات المتقدمة - 1" },
    { en:"Advanced Vocabulary II", ar:"المفردات المتقدمة - 2" },
    { en:"Master Challenge",       ar:"تحدي الإتقان النهائي" }
];

// ─── UNIT GENERATOR ──────────────────────────────────────────────────────────
const generateUnits = () => {
    const units = [];
    const icons = ['fa-star','fa-bolt','fa-sun','fa-clock','fa-calendar-check','fa-font',
                   'fa-rocket','fa-graduation-cap','fa-medal','fa-trophy','fa-award',
                   'fa-brain','fa-spell-check','fa-language','fa-book-open','fa-compass',
                   'fa-map','fa-flag','fa-lightbulb','fa-fire'];
    const grammarList = grammarRules.set1;

    for (let i = 1; i <= 150; i++) {
        const ruleIdx = (i - 1) % grammarList.length;
        const titleObj = unitTitles[i - 1] || { en:`Step ${i}`, ar:`خطوة ${i}` };
        units.push({
            id: i,
            title: `Unit ${i}: ${titleObj.en}`,
            arabicTitle: `الوحدة ${i}: ${titleObj.ar}`,
            description: `${grammarList[ruleIdx].title.split(':')[0]} + vocabulary`,
            tasks: [
                { type:'vocab',   icon: icons[i % icons.length] },
                { type:'grammar', rule: grammarList[ruleIdx].title.split(':')[0], icon: icons[(i+7) % icons.length] },
                { type:'quiz',    icon: 'fa-check-double' }
            ]
        });
    }
    return units;
};

const grammarQuestData = { units: generateUnits() };
