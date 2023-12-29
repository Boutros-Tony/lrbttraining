import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"A well organized LRB project with trained supervisors is",
            arQuestion :"مشروع LRBT منظم بشكل جيد مع مشرفين مدربين هو",
            enPossibilities:["Slow","Expensive","Below specifications","On par with conventional construction methods"],
            arPossibilities:[
                "بطيء",
               "مكلف",
               "على قدم المساواة مع أساليب البناء التقليدية"
            ],
            multipleAnswer:false
        },
        {
            id:1,
            enQuestion:"LRBT projects involve",
            arQuestion :"تتضمن مشاريع LRBT (حدد كل ما ينطبق)",
            enPossibilities:[
            "Ample employment of local beneficiaries",
            "The use of heavy machinery if preferred by the contractors",
            "The use of local materials and implementation of decent work standards",
            "The support of light equipment"
        
        ],
            arPossibilities:[
                "توظيف وفير للمستفيدين المحليين",
                "استخدام الآلات الثقيلة إذا كان يفضلها المتعاقدون",
               "استخدام المواد المحلية وتنفيذ معايير العمل اللائق",
               "دعم المعدات الخفيفة"
            
            ],
            multipleAnswer:true
        },
        {
            id:2,
            enQuestion:"Specific LRBT environmental practices can be implemented through",
            arQuestion :"يمكن تنفيذ ممارسات LRBT البيئية الخاصة من خلال (حدد كل ما ينطبق)",
            enPossibilities:[
                "Precise and accurate work using hand tools instead of heavy machinery",
                "The use of local materials instead of imported products", 
                "The adoption of bioengineering activities for sustainable infrastructure solutions",
                "The inclusion of large-scale renewable energy solutions regardless of the investment cost"],
            arPossibilities:[
                    "العمل الدقيق والمتقن باستخدام الأدوات اليدوية بدلاً من الآلات الثقيلة",
                    "استخدام المواد المحلية بدلاً من المنتجات المستوردة",
                    "اعتماد أنشطة الهندسة البيولوجية لحلول البنية التحتية المستدامة",
                    "إدراج حلول الطاقة المتجددة على نطاق واسع بغض النظر عن تكلفة الاستثمار"

                ],
            multipleAnswer:true
        },
        {
            id:3,
            enQuestion:"Capacity building is achieved by the LRBT projects through",
            arQuestion :"يتم بناء القدرات من خلال مشاريع LRBT عبر",
            enPossibilities:[
                "The construction of vocational training schools",
                "Provision of theoretical and on the job training opportunities",
                "Distribution of educational pamphlets within communities",
                ],
            arPossibilities:[
                    "بناء مدارس التدريب المهني",
                    "توفير فرص التدريب النظري والعملي",
                "توزيع الكتيبات التعليمية داخل المجتمعات"
                  
                ],
            multipleAnswer:false
        }
    ]
    return (
        <>
        <QuizTemplate gradeToPass="80" questions={list} chapterNumber="2" quizTitle="LocalResourceBasedTechnology"/>
        </>
    )
}
export default Attempt;