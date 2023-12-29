import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
import { ChaptersPageLayout } from ".";

const Question35 = () => {
    return (
        <div className="main-questions">
            <QuizQuestionLayout
            gradeToPass="90%"
            chapterNumber="6"
            quizLink='attempt'
            />
        </div>
    )
}

Question35.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 35 });
export default Question35;