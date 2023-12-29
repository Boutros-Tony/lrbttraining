import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
import { ChaptersPageLayout } from ".";

const Question11 = () => {
    return (
        <div className="main-questions">
            <QuizQuestionLayout
            gradeToPass="80%"
            chapterNumber="4"
            quizLink='attempt'
            />
        </div>
    )
}

Question11.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 11 });
export default Question11;