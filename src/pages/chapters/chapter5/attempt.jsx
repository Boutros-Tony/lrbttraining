import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"Direct costs cover",
            arQuestion :" التكاليف المباشرة تغطي (اختر كل ما ينطبق)",
            enPossibilities:[
                "Material",
                "Labour and profit",
                "Director’s wages",
                "Labour and equipment"],
            arPossibilities:[
                "المواد",
                "العمل والربح",
                "رواتب المدير",
                "العمالة والمعدات"
            ],
            multipleAnswer:true
        },
        {
            id:1,
            enQuestion:"Risk mitigation percentage is",
            arQuestion :"نسبة التخفيف من المخاطر هي",
            enPossibilities:[
                "Not to be applied unless a country is facing a major crisis",
"Essential to cover price fluctuations",
"Calculated as part of the profit",
"A direct cost"],
            arPossibilities:[
                "لا يتم تطبيقها إلا إذا كان البلد يواجه أزمة كبيرة",
                "أساسية لتغطية تقلبات الأسعار",
                "تحسب كجزء من الربح",
                "تكلفة مباشرة"
            ],
            multipleAnswer:false
        },
        {
            id:2,
            enQuestion:"When calculating the indirect cost percentage compared to direct cost",
            arQuestion :"عند حساب نسبة التكلفة غير المباشرة مقارنة بالتكلفة المباشرة (حدد كل ما ينطبق)",
            enPossibilities:[
                "It is recommended to calculate the project’s total direct cost as a reference",
                "The project’s total direct cost can be vaguely estimated/assumed",
                "A 40 % indirect cost percentage is a reasonable number for largescale projects"],
            arPossibilities:[
                    "يوصى بحساب إجمالي التكلفة المباشرة للمشروع كمرجع",
                    "يمكن تقدير إجمالي التكلفة المباشرة للمشروع بشكل غامض / مفتوح",
                    "نسبة تكلفة غير مباشرة بنسبة 40% هي رقم معقول للمشاريع الكبيرة"],
            multipleAnswer:true
        },
        {
            id:3,
            enQuestion: "Indirect costs may include",
            arQuestion :"قد تشمل التكاليف غير المباشرة (حدد كل ما ينطبق)",
            enPossibilities:[
                "Company costs",
                "Supervision costs",
                "Vehicles insurance",
                "Transport to site"
                ],
            arPossibilities:[
                    "تكاليف الشركة",
                   "تكاليف الإشراف",
                    "تأمين السيارات",
                   "النقل إلى الموقع"
                ],
            multipleAnswer:true
        },   
        {
            id:4,
            enQuestion:"Profit margin is usually higher for larger projects",
            arQuestion :"هامش الربح عادةً أعلى للمشاريع الكبيرة",
            enPossibilities:[
                "Correct",
            "Incorrect",
                ],
            arPossibilities:[
                 "صحيح",
                   "غير صحيح" 
                ],
            multipleAnswer:false
        }
    ]
    return (
        <>
        <QuizTemplate gradeToPass="80" questions={list} chapterNumber="5" quizTitle="CostingandUnitRateAssessment "/>
        </>
    )
}
export default Attempt;