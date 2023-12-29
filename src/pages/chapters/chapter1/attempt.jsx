import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"EIIP is implemented under which UN agency?",
            arQuestion :'في إطار أي وكالة تابعة للأمم المتحدة يتم تنفيذ EIIP ؟',
            enPossibilities:["WHO","ILO","UNICEF"],
            arPossibilities:["منظمة الصحة العالمية WHO","ILO منظمة العمل الدولية ","UNICEF يونيسف"],
            multipleAnswer:false
        },
        {
            id:1,
            enQuestion:"Who is funding the EIIP in Lebanon?",
            arQuestion :"من يمول EIIP في لبنان؟",
            enPossibilities:["Germany","Japan","Germany through the German Development Bank KfW"],
            arPossibilities:["ألمانيا","اليابان","ألمانيا من خلال بنك التنمية الألماني KfW"],
            multipleAnswer:false
        },
        {
            id:2,
            enQuestion:"Being implemented under the ILO, what is EIIP’s comparative advantage?",
            arQuestion :"في ظل تنفيذها تحت إطار منظمة العمل الدولية، ما هي الميزة النسبية لEIIP ؟",
            enPossibilities:[
                    "Promoting cash for work and human rights",
                    "Mainstreaming decent working conditions and increasing employability of workers through capacity building",
                    "Employing workers from the most vulnerable communities"],
            arPossibilities:[
                    "تشجيع النقد مقابل العمل وحقوق الإنسان",
                    "تعميم ظروف العمل اللائقة وزيادة قابلية توظيف العمال من خلال بناء القدرات",
                    "توظيف العمال من المجتمعات الأكثر ضعفا"],
            multipleAnswer:false
        },
        {
            id:3,
            enQuestion:"What is the most important element under the EIIP strategy?",
            arQuestion :"ما هو العنصر الأكثر أهمية في إطار استراتيجية EIIP؟",
            enPossibilities:[
                    "Local Resource Based Technology",
                    "Decent Work Principles",
                    "Engagement of the Private sector",
                    "Capacity building to workers",
                    "Effective participation of Women and Persons with Disabilities",
                    "All of the Above",
                    "None of the above"
                ],
            arPossibilities:[
                    "التكنولوجيا القائمة على الموارد المحلية LRBT ",
                    "مبادئ العمل اللائق",
                    "مشاركة القطاع الخاص",
                    "بناء قدرات العمال",
                    "المشاركة الفعالة للنساء والأشخاص ذوي الإعاقة",
                    "كل ما ورد اعلاه",
                    "لا شيء مما ورد اعلاه",
                ],
            multipleAnswer:false
        },   
        {
            id:4,
            enQuestion:"What is meant by Local Resource Based Technology?",
            arQuestion :"ما المقصود بالتكنولوجيا المعتمدة على الموارد المحلية LRBT؟",
            enPossibilities:[
                    "Work methods and technologies where the use of local resources, is favoured and optimised, without compromising the quality",
                    "Work methods and technologies where the use of local resources, is favoured and optimised, regardless of the quality",
                    "Utilizing local resources, and work stops if local resources are not available."        
                ],
            arPossibilities:[
                  "أساليب وتقنيات العمل حيث يتم تفضيل استخدام الموارد المحلية وتحسينها، دون المساس بالجودة",
                    "أساليب وتقنيات العمل حيث يتم تفضيل وتحسين استخدام الموارد المحلية، بغض النظر عن الجودة",
                    "الاستفادة من الموارد المحلية، ويتوقف العمل في حالة عدم توفر الموارد المحلية."   
                ],
            multipleAnswer:false
        },
    ]
    return (
        <>
        <QuizTemplate gradeToPass="80" questions={list} chapterNumber="1" quizTitle="Intro to EIIP & LRBT"/>
        </>
    )
}
export default Attempt;