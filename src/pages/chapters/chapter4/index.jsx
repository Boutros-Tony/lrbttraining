import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question1 = () => {
    const lang = LanguageDetector()
 return (
        <div className="main-questions">
        <HeadingOne 
        enText="Labour management for LRB works"
         arText="إدارة العمالة لأعمال LRB"/>
        <Paragraph 
            enText="Human resources are the main pillar for LRBT projects, and the proper management of the labour force is not to be undermined."
            arText="الموارد البشرية هي الركيزة الرئيسية لمشاريع LRBT، ولا يجب التقليل من أهمية الإدارة السليمة لقوى العمل."
        />
         <Paragraph 
            enText="Planning and costing are based on the potential productivity of each worker per day, so it is very important to meet the full potential when implementing the works in order to stay within cost and timeframe."
            arText="يعتمد التخطيط والتكلفة على الإنتاجية المحتملة لكل عامل في اليوم الواحد، لذا من الهام جداً تحقيق الإمكانية الكاملة عند تنفيذ الأعمال للبقاء ضمن التكلفة والإطار الزمني."
        />
         <Paragraph 
            enText="This should not overshadow the importance of decent work standards, and the obligations to remain within these guidelines i.e. work intensity and schedules should still be within decent norms."
            arText="يجب ألا يغطي هذا على أهمية معايير العمل اللائق، والتزامات البقاء ضمن هذه الإرشادات، أي يجب أن تكون شدة العمل والجداول الزمنية داخل النطاقات المقبولة."
        />
        <FlagHeading
            enText="Applying local resource-based methods means not only to employ more labourers, but also manage the labour-force and works effectively and efficiently."
            arText="تطبيق الطرق التي تعتمد على الموارد المحلية لا يعني توظيف المزيد من العمال فقط، ولكن أيضاً إدارة قوى العمل والأعمال بفعالية وكفاءة."
        />
        <ColoredRectangle
            enText="Introduction of appropriate incentive schemes, i.e. production instead of time based methods, i.e. task work, piece work"
            arText="إدخال خطط الحوافز المناسبة، أي الإنتاج بدلاً من الأساليب المعتمدة على الوقت، أي العمل بالمهمة، والعمل بالقطعة"
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
        />
         <ColoredRectangle
            enText="Detailed daily site planning and reporting of work activities and resources."
            arText="التخطيط اليومي التفصيلي للموقع وإعداد التقارير عن أنشطة العمل والموارد."
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
        />
         <ColoredRectangle
            enText="Managing the labour force on site including instructing and on-the-job training"
            arText="إدارة القوى العاملة في الموقع بما في ذلك التوجيه والتدريب أثناء العمل"
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
        />
         <ColoredRectangle
            enText="Effective inclusion of decent work conditions to labour employment and daily site operations"
            arText="دمج فعّال لظروف العمل اللائق في توظيف العمل واعمال الموقع اليومية."
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
        />
        <CompletionButton chapterNumber="3" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter4`] || [];

    const questions = [
        {
            id:1,
            title:"Labour management for LRB works",
            arTitle:"إدارة العمالة لأعمال LRB",
            icon:"/assets/reading-icon.png",
            link:""
        },
        {
            id:2,
            title:"Incentive schemes for LRB works",
            arTitle:"خطط الحوافز لأعمال LRB",
            icon:"/assets/reading-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"Exercise 1",
            arTitle:"تمرين 1",
            icon:"/assets/quiz-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"Task rates and Productivity Part 1",
            arTitle:"معدلات المهام والإنتاجية الجزء 1",
            icon:"/assets/reading-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"Exercise 2",
            arTitle:"2 تمرين",
            icon:"/assets/quiz-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Task rates and Productivity Part 2",
            arTitle:"معدلات المهام والإنتاجية الجزء 2",
            icon:"/assets/reading-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"Exercise 3",
            arTitle:"3 تمرين",
            icon:"/assets/quiz-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Examples of some labour productivity norms",
            arTitle:"مثال على بعض معايير إنتاجية العمالة",
            icon:"/assets/reading-icon.png",
            link:"/question8"
        },
        {
            id:9,
            title:"Examples: Application of task work and piece work system",
            arTitle:"أمثلة: تطبيق نظام العمل المهمة ونظام العمل بالقطعة",
            icon:"/assets/reading-icon.png",
            link:"/question9"
        },
        {
            id:10,
            title:"Incentive schemes for LRB works",
            arTitle:"برامج التحفيز لأعمال LRB",
            icon:"/assets/reading-icon.png",
            link:"/question10"
        },
        {
            id:11,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/quiz-icon.png",
            link:"/question11"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="4"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter4"
                
                chapterTitle={lang==='ar'? "معدلات المهام ومعايير الإنتاجية":"4. Task Rates and Productivity Norms"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="4"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter4"
                    lang={lang}
                    chapterTitle={lang==='ar'? "معدلات المهام ومعايير الإنتاجية":"Task Rates and Productivity Norms"}
                />
                {children}
            </div>

      
      
        </>
    )
}



export const ChaptersPageLayout = (page, layoutProps = {}) => {
    return (
        <NestedLayout {...layoutProps}>
            {page}
        </NestedLayout>
    );
};
Question1.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 1 });
export default Question1;