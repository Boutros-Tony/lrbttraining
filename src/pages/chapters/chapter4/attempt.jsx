import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"To calculate task rates, you need to",
            arQuestion :"لحساب معدلات المهام، تحتاج إلى (اختر كل ما ينطبق)",
            enPossibilities:[
            "Understand the practical performance of your workforce",
            "Ask workers to perform at their best for 2 days, as a free of charge trial",
            "Consider the local circumstances of your project",
            "Copy the numbers in the previous tables without comparing to your experience and specific situations"],
            arPossibilities:[
                "فهم الأداء العملي للقوى العاملة لديك",
               "طلب من العمال تقديم أفضل ما لديهم لمدة يومين، كتجربة مجانية",
              "الأخذ في الاعتبار الظروف المحلية لمشروعك",
                "نسخ الأرقام في الجداول السابقة دون مقارنتها بتجربتك ومواقف معينة"
            ],
            multipleAnswer:true
        },
        {
            id:1,
            enQuestion:"An LRBT task can be",
            arQuestion :"مهمة LRBT يمكن أن تكون (اختر كل ما ينطبق)",
            enPossibilities:[
                "Completed in 6 hours or less",
                "Given to a group of workers or to an individual worker",
                "Paid less than 7 USD per day",
                "Only a skilled job"],
            arPossibilities:[
                "تكتمل في 6 ساعات أو أقل",
                "معطاة لمجموعة من العمال أو لعامل فردي",
               "تدفع أقل من 10 دولارات في اليوم",
                "وظيفة ماهرة فقط"
            ],
            multipleAnswer:true
        },
        {
            id:2,
            enQuestion:"In an LRBT site,",
            arQuestion :'في موقع LRBT، (اختر كل ما ينطبق)',
            enPossibilities:[
                "A daily paid workforce is a better guarantee for timely completion",
                "More supervision is required for daily paid workers",
                "Incentive schemes such as task work can boost workers’ performance",],
            arPossibilities:[
                    "تعتبر القوى العاملة اليومية مدفوعة الأجر ضمانًا أفضل لإنجاز العمل في الوقت المناسب",
                    "مطلوب المزيد من الإشراف على العاملين بأجر يومي",
                    "يمكن لخطط الحوافز مثل العمل على المهام أن تعزز أداء العمال"],
            multipleAnswer:true
        },
        {
            id:3,
            enQuestion:"Decent work guidelines are",
            arQuestion :"إرشادات العمل اللائق هي (اختر كل ما ينطبق)",
            enPossibilities:[
                "Not very important when applying task work schemes because timely completion is more essential",
"The core of an LRBT site and should be always respected",
"Guaranteed through close supervision of the workers when applying task work schemes"
                ],
            arPossibilities:[
                   "ليست مهمة جدا عند تطبيق مخططات عمل المهام لأن الانتهاء في الوقت المحدد أكثر أهمية",
                    "جوهر موقع LRBT ويجب احترامها دائمًا",
                    "مضمونة من خلال الإشراف الوثيق على العمال عند تطبيق خطط عمل المهام",
                   
                ],
            multipleAnswer:true
        },   
        {
            id:4,
            enQuestion:"A task rate for any activity is the same for Skilled or Unskilled workers",
            arQuestion :"معدل المهمة لأي نشاط هو نفسه للعمال الماهرين أو غير الماهرين",
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
        <QuizTemplate gradeToPass="80" questions={list} chapterNumber="4" quizTitle="TaskRatesandLabourManagement"/>
        </>
    )
}
export default Attempt;