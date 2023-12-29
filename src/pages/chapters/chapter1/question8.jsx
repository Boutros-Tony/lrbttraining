import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
import { ChaptersPageLayout } from ".";

const Question8 = () => {
    return (
        <div className="main-questions">
            <QuizQuestionLayout
            gradeToPass="75%"
            chapterNumber="1"
            quizLink='attempt'
            />
        </div>
    )
}

Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;