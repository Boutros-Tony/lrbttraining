import { ChaptersPageLayout } from ".";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question3 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
     <TrueOrFalse
     enQuestion="Labour management should always prioritize decent work over the forced enhancement of productivity"
     arQuestion="يجب أن تعطي إدارة العمالة الأولوية دائمًا للعمل اللائق على حساب تحسين الإنتاجية بالقوة."
     enAnswer="Labour management should always prioritize decent work over the forced enhancement of productivity"
    arAnswer="إدارة العمالة الفعالة تعطي دائماً الأولوية للعمل اللائق بدلاً من الإنتاجية بالقوة"
    />
     
          <CompletionButton chapterNumber="4" questionNumber={3}/>
        </div>
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;