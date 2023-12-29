import QuizQuestionLayout from "../../../../components/quiz-question-layout/quiz-question-layout.component";
import { ChaptersPageLayout } from ".";

const Question17 = () => {
    return (
        <div className="main-questions">
            <QuizQuestionLayout
            gradeToPass="80%"
            chapterNumber="5"
            quizLink='attempt'
            />
        </div>
    )
}

Question17.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 17 });
export default Question17;