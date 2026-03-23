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
        // ... Expand to 150 words ...
    ],

    // Target 2000 Words
    important: [
        { id: "i1", english: "Resilience", arabic: "مرونة / صمود", pos: "Noun", example: "Her resilience allowed her to overcome challenges.", arabicExample: "صمودها سمح لها بالتغلب على التحديات." },
        { id: "i2", english: "Eloquent", arabic: "فصيح / بليغ", pos: "Adjective", example: "An eloquent speech moved the audience.", arabicExample: "خطاب بليغ أثر في الجمهور." },
        { id: "i3", english: "Pragmatic", arabic: "عملي / واقعي", pos: "Adjective", example: "We need a pragmatic approach.", arabicExample: "نحتاج إلى نهج واقعي وعملي." },
        { id: "i4", english: "Mitigate", arabic: "يخفف / يقلل", pos: "Verb", example: "Measures to mitigate the impact.", arabicExample: "إجراءات لتخفيف الأثر." },
        { id: "i5", english: "Achieve", arabic: "يحقق / ينجز", pos: "Verb", example: "He achieved his goals.", arabicExample: "لقد حقق أهدافه." },
        { id: "i6", english: "Benefit", arabic: "فائدة", pos: "Noun", example: "There are many benefits to exercise.", arabicExample: "هناك فوائد عديدة للرياضة." },
        { id: "i7", english: "Consistent", arabic: "ثابت / متناسق", pos: "Adjective", example: "He is consistent in his efforts.", arabicExample: "إنه مستمر وثابت في جهوده." },
        { id: "i8", english: "Determine", arabic: "يحدد / يقرر", pos: "Verb", example: "We must determine the cause.", arabicExample: "يجب أن نحدد السبب." },
        { id: "i9", english: "Environment", arabic: "بيئة", pos: "Noun", example: "Protecting the environment is vital.", arabicExample: "حماية البيئة أمر حيوي." },
        { id: "i10", english: "Significant", arabic: "هام / ذو دلالة", pos: "Adjective", example: "A significant improvement was noticed.", arabicExample: "تمت ملاحظة تحسن ملحوظ وهام." },
        { id: "i11", english: "Sufficient", arabic: "كاف", pos: "Adjective", example: "We have sufficient evidence.", arabicExample: "لدينا أدلة كافية." },
        { id: "i12", english: "Analyze", arabic: "يحلل", pos: "Verb", example: "Analyze the data carefully.", arabicExample: "قم بتحليل البيانات بعناية." },
        { id: "i13", english: "Context", arabic: "سياق", pos: "Noun", example: "Understand the word in context.", arabicExample: "افهم الكلمة في سياقها." },
        { id: "i14", english: "Evaluate", arabic: "يقيم", pos: "Verb", example: "We must evaluate the results.", arabicExample: "يجب أن نقيم النتائج." },
        { id: "i15", english: "Procedure", arabic: "إجراء", pos: "Noun", example: "Follow the standard procedure.", arabicExample: "اتبع الإجراءات القياسية." }
        // ... Expand to 2000 words ...
    ],

    // Target 200 Words
    extra: [
        { id: "x1", english: "Ephemeral", arabic: "سريع الزوال", pos: "Adjective", example: "The beauty of a sunset is ephemeral.", arabicExample: "جمال غروب الشمس سريع الزوال." },
        { id: "x2", english: "Serendipity", arabic: "صدفة حسنة", pos: "Noun", example: "Finding this cafe was pure serendipity.", arabicExample: "العثور على هذا المقهى كان صدفة حسنة." },
        { id: "x3", english: "Petrichor", arabic: "رائحة المطر", pos: "Noun", example: "I love the petrichor after a summer storm.", arabicExample: "أحب رائحة المطر بعد عاصفة صيفية." },
        { id: "x4", english: "Labyrinth", arabic: "متاهة", pos: "Noun", example: "The old city was a labyrinth of narrow streets.", arabicExample: "كانت المدينة القديمة متاهة من الشوارع الضيقة." },
        { id: "x5", english: "Mellifluous", arabic: "عذب / سلس", pos: "Adjective", example: "She has a mellifluous singing voice.", arabicExample: "لديها صوت غنائي سلس وعذب." }
        // ... Expand to 200 words ...
    ]
};

// Grammar data could also go here
// Grammar data organized into two sets
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
        },
        {
            title: "Pronouns (الضمائر الشخصية)",
            arabicDescription: "الكلمات التي تحل محل الأسماء (أنا، أنت، هو...)",
            structure: "I, You, He, She, It, We, They",
            example: "She is my sister.",
            arabicExample: "هي أختي."
        }
    ],
    set2: [
        {
            title: "Present Perfect (المضارع التام)",
            arabicDescription: "حدث بدأ في الماضي ولله صلة بالحاضر.",
            structure: "Subject + have/has + Past Participle",
            example: "I have lived here for five years.",
            arabicExample: "لقد عشت هنا لمدة خمس سنوات."
        },
        {
            title: "Conditionals (الجمل الشرطية)",
            arabicDescription: "التعبير عن السبب والنتيجة (إذا... سوف...)",
            structure: "If + Present Simple, Will + Verb",
            example: "If it rains, we will stay home.",
            arabicExample: "إذا أمطرت، سنبقى في المنزل."
        },
        {
            title: "Passive Voice (المبني للمجهول)",
            arabicDescription: "استخدام الفعل عندما يكون الفاعل غير معروف أو غير مهم.",
            structure: "Subject + Be + Past Participle",
            example: "The car was repaired yesterday.",
            arabicExample: "تم إصلاح السيارة بالأمس."
        },
        {
            title: "Reported Speech (الكلام المنقول)",
            arabicDescription: "نقل ما قاله شخص آخر.",
            structure: "He said that + (Past Tense)",
            example: "He said that he was tired.",
            arabicExample: "قال إنه كان متعباً."
        },
        {
            title: "Modals (الأفعال الناقصة)",
            arabicDescription: "أفعال للتعبير عن الإمكانية، الإلزام، أو القدرة.",
            structure: "Can, Should, Must, Might + Base Verb",
            example: "You should visit a doctor.",
            arabicExample: "يجب عليك زيارة الطبيب."
        }
    ]
};
