import { ChaptersPageLayout } from ".";
import Exercise from "../../../../components/exercise/exercice.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question13 = () => {
    const lang = LanguageDetector();
    const enOptions = [
        "You should calculate the total amount of material needed for your project then divide by the total quantity",
        "You should only calculate the amount needed per unit of a specific activity",
        "You should include the cost of transport and delivery to site",
        "You don’t have to include a detailed breakdown of needed materials"
    ]
    const arOptions = [
        "يجب عليك حساب الكمية الإجمالية للمواد المطلوبة لمشروعك ثم تقسيمها على الكمية الإجمالية",
       "يجب عليك فقط حساب المبلغ المطلوب لكل وحدة من نشاط معين",
      "يجب عليك تضمين تكلفة النقل والتوصيل إلى الموقع",
      "ليس عليك شمل تفصيل دقيق للمواد المطلوبة"
    ]
    const enAnswer = [
        "You should calculate the total amount of material needed for your project then divide by the total quantity",
       
        "You should include the cost of transport and delivery to site",
        "You don’t have to include a detailed breakdown of needed materials"
    ]
    const arAnswer = [
        "يجب عليك حساب الكمية الإجمالية للمواد المطلوبة لمشروعك ثم تقسيمها على الكمية الإجمالية",
      
      "يجب عليك تضمين تكلفة النقل والتوصيل إلى الموقع",
      "ليس عليك شمل تفصيل دقيق للمواد المطلوبة"
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
        enResult="To properly price material cost you should calculate the total amount of material needed for your project then divide it by the total quantity, include the cost of transport and delivery to site, and without having the need to include a detailed breakdown of needed materials"
        arResult="لتسعير تكلفة المواد بشكل صحيح، يجب عليك حساب إجمالي كمية المواد اللازمة لمشروعك ثم تقسيمها على الكمية الإجمالية، بما في ذلك تكلفة النقل والتسليم إلى الموقع، ودون الحاجة إلى تضمين تفصيل للمواد المطلوبة"
        enAnswer={enAnswer}
        arAnswer={arAnswer}
        isMultiple
/>

          <CompletionButton chapterNumber="5" questionNumber={13}/>
        </div>
    )
}
Question13.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 13 });
export default Question13;