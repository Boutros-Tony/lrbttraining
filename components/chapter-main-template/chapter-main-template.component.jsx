import Navbar from "../navbar/navbar.component";
import { useSelector } from "react-redux";

import { selectCurrentUserProgress } from "../../store/user/user.selectors";
import Link from "next/link";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './chapter-main-template.module.scss' // Import your styles
import Breadcrumb from "../breadcrumb/breadcrumb.component";
import SideNav from "../side-nav/side-nav.component";
const ChapterMain = ({ chapterNumber,questions,chapterTitle, currentQuestionId }) => {
    const progress = useSelector(selectCurrentUserProgress);
    const lang = LanguageDetector();
    const completedQuestions = progress.completedQuestions[`chapter${chapterNumber}`] || [];
    // Ensure currentQuestionId is a number and find the index of the current question
    const currentQuestionIndex = currentQuestionId ? questions.findIndex(question => question.id === currentQuestionId) : -1;

    // Calculate previous and next question links
    const prevQuestion = currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1] : null;
    const nextQuestion = currentQuestionIndex >= 0 && currentQuestionIndex < questions.length - 1 ? questions[currentQuestionIndex + 1] : null;
    return (
        <>
            <Navbar />
            <Breadcrumb 
                chapterNumber={chapterNumber}
                chapterTitle={chapterTitle}
                currentQuestionId={currentQuestionId}
                questions={questions}
            />
               <SideNav 
                chapterNumber={chapterNumber}
                questions={questions}
                chapterTitle={chapterTitle}
                completedQuestions={completedQuestions}
                lang={lang}
            />
        </>
    );
};

export default ChapterMain;
