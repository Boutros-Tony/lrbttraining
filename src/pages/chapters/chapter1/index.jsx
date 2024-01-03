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
        <HeadingOne enText="Video: EIIP" arText={<>فيديو:<span className="en-rtl">EIIP</span></>}/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d8jTLfvmPuY?si=cPAKJJC7TQ29mLrf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <CompletionButton chapterNumber="1" questionNumber={1}/>
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter1`] || [];

    const questions = [
        {
            id:1,
            title:"Video : EIIP",
            arTitle:'فيديو: EIIP',
            icon:"/assets/video-icon.png",
            link:""
        },
        {
            id:2,
            title:"What is the International Labour Organization?",
            arTitle:"ما هي منظمة العمل الدولية؟",
            icon:"/assets/reading-icon.png",
            link:"/question2"
        },
        {
            id:3,
            title:"The Employment Intensive Infrastructure Programme (EIIP)",
            arTitle:"برنامج البنية التحتية المكثفة للتوظيف (EIIP)",
            icon:"/assets/reading-icon.png",
            link:"/question3"
        },
        {
            id:4,
            title:"EIIP In Lebanon",
            arTitle:'(EIIP) في لبنان',
            icon:"/assets/reading-icon.png",
            link:"/question4"
        },
        {
            id:5,
            title:"EIIP Strategy",
            arTitle:'استراتيجية EIIP',
            icon:"/assets/reading-icon.png",
            link:"/question5"
        },
        {
            id:6,
            title:"Contractor Obligations",
            arTitle:"التزامات المقاول",
            icon:"/assets/reading-icon.png",
            link:"/question6"
        },
        {
            id:7,
            title:"EIIP Contractor Training Strategy",
            arTitle:'استراتيجية EIIP لتدريب المقاولين',
            icon:"/assets/reading-icon.png",
            link:"/question7"
        },
        {
            id:8,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/quiz-icon.png",
            link:"/question8"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="1"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter1"
                
                chapterTitle={lang==='ar'? "مقدمة إلى EIIP وLRBT":"1. Intro to EIIP & LRBT"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="1"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter1"
                    lang={lang}
                    chapterTitle={lang==='ar'? "مقدمة إلى EIIP وLRBT":"Intro to EIIP & LRBT"}
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