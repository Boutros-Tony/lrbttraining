import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question1 = () => {
 return (
        <div className="main-questions">
        <HeadingOne 
            enText="Video: LRBT" 
            arText="فيديو LRBT"
            />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q4-F6QQ52G0?si=QSuDo8HtF40hRjX7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <CompletionButton chapterNumber="2" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter2`] || [];

    const questions = [
        {
            id:1,
            title:"LRBT Video",
            arTitle:"فيديو LRBT",
            icon:"/assets/video-icon.png",
            link:""
        },
        {
            id:2,
            title:"Labour vs Equipment in construction",
            arTitle:"العمل مقابل المعدات في البناء",
            icon:"/assets/reading-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"LRBT vs Cash-for-Work",
            arTitle:"LRBT  تجاه الأجر مقابل العمل  ",
            icon:"/assets/reading-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"Local Resource-based (LRB) Work Methods",
            arTitle:'أساليب العمل القائمة على الموارد المحلية (LRB)',
            icon:"/assets/reading-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"Exercise",
            arTitle:'تمرين 1',
            icon:"/assets/quiz-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Socio-economic advantages of LRBT",
            arTitle:"المزايا الاجتماعية والاقتصادية للLRBT",
            icon:"/assets/reading-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"LRB(perceived) Limitations",
            arTitle:'قيود LRB (المتصورة) ',
            icon:"/assets/reading-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Choice of technology - LRBT vs equipment",
            arTitle:'اختيار التكنولوجيا – LRBT مقابل المعدات',
            icon:"/assets/reading-icon.png",
            link:"/question8"
        },
        {
            id:9,
            title:"Exercise",
            arTitle:'تمرين 2',
            icon:"/assets/quiz-icon.png",
            link:"/question9"
        },
        {
            id:10,
            title:'Local Resource-based (LRB) Work Methods',
            arTitle:'أساليب عمل LRB القائمة على الموارد المحلية',
            icon:"/assets/reading-icon.png",
            link:"/question10"
        },
        {
            id:11,
            title:"Employment Intensive Infrastructure Programme in Lebanon (EIIP), Retaining Walls (2020)",
            arTitle:'برنامج البنية التحتية المكثفة للعمالة في لبنان (EIIP)، الجدران الداعمة (2020)',
            icon:"/assets/reading-icon.png",
            link:"/question11"
        },
        {
            id:12,
            title:"When to apply LRB important considerations at planning stage",
            arTitle:'متى يتم تطبيق LRB: الاعتبارات المهمة في مرحلة التخطيط',
            icon:"/assets/reading-icon.png",
            link:"/question12"
        },
        {
            id:13,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/quiz-icon.png",
            link:"/question13"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="2"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter2"

                chapterTitle={lang==='ar'? "التكنولوجيا المعتمدة على الموارد المحلية (LRBT)":"2. Local Resource Based Technology"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="2"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter2"
                    lang={lang}
                    chapterTitle={lang === 'ar' ? "التكنولوجيا المعتمدة على الموارد المحلية (LRBT)" : "Local Resource Based Technology"}
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