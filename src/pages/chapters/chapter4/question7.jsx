import { ChaptersPageLayout } from ".";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";

const Question7 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
       <TrueOrFalse
       enQuestion="Task rates are set theoretical figures that are not affected by local circumstances"
       arQuestion="معدلات المهام هي أرقام نظرية محددة لا تتأثر بالظروف المحلية."
       enAnswer="Task rates are set theoretical figures that are affected by local circumstances"
       arAnswer="معدلات المهام هي أرقام نظرية مُعدة ولكنها تتأثر بالظروف المحلية."
       correctAnswer={false}
       />
       <TrueOrFalse
        enQuestion="Task rates are only needed to estimate the cost of labour while bidding"
        arQuestion="معدلات المهام مطلوبة فقط لتقدير تكلفة العمالة أثناء المناقصة."
        enAnswer="Task rates are not only needed to estimate the cost of labour while bidding"
        arAnswer="معدلات المهام ليست مطلوبة فقط لتقدير تكلفة العمالة أثناء المناقصة."
        correctAnswer={false}
       />
          <CompletionButton chapterNumber="4" questionNumber={7}/>
        </div>
    )
}
Question7.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 7 });
export default Question7;