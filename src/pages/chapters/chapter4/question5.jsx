import { ChaptersPageLayout } from ".";
import Exercise from "../../../../components/exercise/exercice.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompleteSentence from "../../../../components/complete-sentence/complete-sentence.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question5 = () => {
    const lang = LanguageDetector();
    const enOptions = [
        "5 labours working for 4 days",
        "10 labours working for 2 days",
        "1 labour working for 20 days",
        "20 labours working for 20 days"
    ]
    const arOptions = [
        "5 عمال يعملون لمدة 4 أيام",
        "10 عمال يعملون لمدة يومين",
        "عامل واحد يعمل لمدة 20 يومًا",
        "20 عامل يعملون لمدة 20 يومًا"
    ]
    const enAnswer = [
        "5 labours working for 4 days",
        "10 labours working for 2 days",
        "1 labour working for 20 days",
    ]
    const arAnswer = [
        "5 عمال يعملون لمدة 4 أيام",
        "10 عمال يعملون لمدة يومين",
        "عامل واحد يعمل لمدة 20 يومًا",
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
    <Exercise
        enQuestion="20 WDs can refer to:"
        arQuestion="20 WDs (وحدات يوم العمل) يمكن أن تشير إلى:"
        enOptions={enOptions}
        arOptions={arOptions}
        enResult="20 WDS can refer to : 5 labours working for 4 days ,10 labours working for 2 days, 1 labour working for 20 days"
        arResult="يمكن أن يشير 20 يوم عمل إلى: 5 عمال يعملون لمدة 4 أيام، 10 عمال يعملون لمدة يومين، عامل واحد يعمل لمدة 20 يومًا."
        enAnswer={enAnswer}
        arAnswer={arAnswer}
        isMultiple
/>
     <CompleteSentence/>
          <CompletionButton chapterNumber="4" questionNumber={5}/>
        </div>
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;