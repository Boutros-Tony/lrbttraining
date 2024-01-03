import Navbar from "../../../../components/navbar/navbar.component";
import SideNav from "../../../../components/side-nav/side-nav.component";
import React from "react";
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from "react-redux";
import { selectCurrentUserProgress } from "../../../../store/user/user.selectors";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import styles from '../../../styles/chapters.module.scss'

import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
const Question1 = () => {
 return (
        <div className="main-questions">
          <QuizQuestionLayout
            gradeToPass="93%"
            chapterNumber="8"
            quizLink='chapter8/attempt'
            />
        </div>
    )
}


const NestedLayout = ({ currentQuestionId, children }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
   
    const completedQuestions = progress.completedQuestions[`chapter8`] || [];

    const questions = [
    
        {
            id:1,
            title:"Quiz",
            arTitle:'اختبار',
            icon:"/assets/video-icon.png",
            link:"/"
        }
    ]
  
    return (
        <>
        <Navbar/>
        <Breadcrumb 
                chapterNumber="8"
                currentQuestionId={currentQuestionId}
                questions={questions}
                chapterLink="chapter8"
                
                chapterTitle={lang==='ar'? "الاختبار النهائي":"8. Final Quiz"}
            />
            <div id="wrapper" className={styles.wrapper}>
                <SideNav 
                    chapterNumber="8"
                    questions={questions}
                    completedQuestions={completedQuestions}
                    chapterLink="chapter8"
                    lang={lang}
                    chapterTitle={lang==='ar'? "الاختبار النهائي":"Final Quiz"}
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