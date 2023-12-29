import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
import { ChaptersPageLayout } from ".";

const Question13 = () => {
    return (
        <div className="main-questions">
            <QuizQuestionLayout
            gradeToPass="75%"
            chapterNumber="2"
            quizLink='attempt'
            />
        </div>
    )
}

Question13.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 13 });
export default Question13;