import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"What is the minimum required personnel with LRBT training per company?",
            arQuestion :"ما هو العدد الأدنى المطلوب من الأفراد المدربين على LRBT لكل شركة؟",
            enPossibilities:["One","Two","Four"],
            arPossibilities:[
                "واحد",
                "اثنان",
                "أربعة"
            ],
            multipleAnswer:false
        },
        {
            id:1,
            enQuestion:"Who is responsible for the recruitment of labors?",
            arQuestion :"من المسؤول عن توظيف العمال؟",
            enPossibilities:[
            "ILO",
            "Municipality",
            "Contractor"],
            arPossibilities:[
                "ILO",
               "البلدية",
                "المقاول"],
            multipleAnswer:false
        },
        {
            id:2,
            enQuestion:"What are the criteria to identify the number of workers per activity and as total workdays generated?",
            arQuestion :"ما هي المعايير لتحديد عدد العمال لكل نشاط وكمجموع أيام العمل المنتجة؟",
            enPossibilities:[
                "A fixed number of labors on site will be divided by the activities equally.",
                "Put the highest number of labors on the important activities",
                "The number of laborers required for different activities vary with the type of works and the expected productivity"],
            arPossibilities:[
                    "سيتم تقسيم عدد ثابت من العمال في الموقع على الأنشطة بالتساوي.",
                    "وضع أكبر عدد من العمال في الأنشطة المهمة",
                    "عدد العمال المطلوبين لأنشطة مختلفة يختلف حسب نوع الأعمال والإنتاجية المتوقعة"],
            multipleAnswer:false
        },
        {
            id:3,
            enQuestion:"Three major workplan consideration",
            arQuestion :"ثلاث اعتبارات رئيسية لخطة العمل (اختر كل ما ينطبق)",
            enPossibilities:[
                "Complexity and logical sequencing of activities",
                "Minimum wage of the workers",
                "Number of workers",
                "Duration of the project",
                "Location of the project"
                ],
            arPossibilities:[
                    "التعقيد والتسلسل المنطقي للأنشطة",
                    "الأجر الأدنى للعمال",
                    "عدد العمال",
                    "مدة المشروع",
                    "موقع المشروع",
                    
                ],
            multipleAnswer:true
        },   
        {
            id:4,
            enQuestion:"What are the criteria to identify the number of workers per activity and as total workdays generated?",
            arQuestion :"ما هي المعايير لتحديد عدد العمال لكل نشاط وكمجموع أيام العمل المنتجة؟",
            enPossibilities:[
                "WDs = Quantity of each activity/ Task rate (productivity of the worker)",
                "WDs = Total price of the activity / The minimum wage of the workers",
                "WDs = 35% of the contract value / Number of activities"      
                ],
            arPossibilities:[
                  "WDs = الكمية لكل نشاط / معدل المهمة (إنتاجية العامل)",
                   "WDs = إجمالي سعر النشاط / الأجر الأدنى للعمال",
                   "WDs = 35% من قيمة العقد / عدد الأنشطة"  
                ],
            multipleAnswer:false
        },
        {
            id:5,
            enQuestion:"Who is responsible for the supervision of the work during execution?",
            arQuestion :"من المسؤول عن الإشراف على العمل أثناء التنفيذ؟",
            enPossibilities:[
                "The ILO",
                "The Municipality and the ILO",
                "The Municipality",
                "The Contractor and the ILO",
                "The Contractor"      
                ],
            arPossibilities:[
                "ILO",
                  "البلدية وILO",
                   "البلدية",
                   "المقاول وILO",
                   "المقاول"
                ],
            multipleAnswer:false
        },
    ]
    return (
        <>
        <QuizTemplate gradeToPass="80" questions={list} chapterNumber="3" quizTitle="LabourManagement&WorkPlan"/>
        </>
    )
}
export default Attempt;