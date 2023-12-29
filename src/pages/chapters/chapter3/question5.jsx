import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Exercise from "../../../../components/exercise/exercice.component";
const Question5 = () => {
    const lang = LanguageDetector();
    const enlist = [
        "Project Time Frame",
        "Total Number of work Days",
        "Sequencing of Activities"
    ]
    const arlist = [
        "إطار زمني للمشروع",
        "العدد الإجمالي لأيام العمل",
        "تسلسل الأنشطة"
    ]
    const enAnswer = [
        "Project Time Frame",
        "Sequencing of Activities"
    ]
    const arAnswer = [
        "إطار زمني للمشروع",
        "تسلسل الأنشطة"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
        <Exercise
            enQuestion="What are, in your opinion, the main points that the ILO/EIIP Team look for in the submitted work plan? (Select all that apply)"
            arQuestion="ما هي، في رأيك، النقاط الرئيسية التي يبحث عنها فريق الILO/EIIP في خطة العمل المقدمة؟ (اختر كل ما ينطبق)"
            enOptions={enlist}
            arOptions={arlist}
            enAnswer={enAnswer}
            arAnswer={arAnswer}
            enResult="The main points are : Project Time Frame, Sequencing of Activities"
            arResult="النقاط الرئيسية هي: إطار زمني للمشروع، تسلسل الأنشطة."
            isMultiple
        />
    
          <CompletionButton chapterNumber="3" questionNumber={5}/>
        </div>
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;