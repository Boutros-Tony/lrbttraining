import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question9 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
      <TrueOrFalse
            enQuestion="LRBT projects are slower paced than equipment based approaches"
            arQuestion="مشاريع LRBT أبطأ في الوتيرة مقارنة بالأساليب المعتمدة على المعدات."
            enAnswer="LRBT projects are faster paced than equipment based approaches"
            arAnswer="مشاريع LRBT أسرع من الأساليب التي تعتمد على الآلات."
            correctAnswer={true}
        />
          <TrueOrFalse
            enQuestion="Output quality is expected to be lower in LRBT projects, since no machines are used to enhance precision"
            arQuestion="من المتوقع أن تكون جودة الناتج أقل في مشاريع LRBT، حيث لا تُستخدم الآلات لزيادة الدقة."
            enAnswer="Output quality is expected to be higher in LRBT projects, since no machines are used to enhance precision"
            arAnswer=" مشاريع LRBT اكثر جودة من الأساليب التي تعتمد على الآلات."
            correctAnswer={true}
        />
      
    
        <CompletionButton chapterNumber="2" questionNumber={9}/>
        </div>
    )
}
Question9.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 9 });
export default Question9;