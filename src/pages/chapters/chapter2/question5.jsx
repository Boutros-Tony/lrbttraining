import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question5 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
      <TrueOrFalse
            enQuestion="Local Resource Based Technologies only aim to employ a large number of local workers, and are not directly related to construction activities."
            arQuestion="تهدف التكنولوجيا المعتمدة على الموارد المحلية فقط إلى توظيف عدد كبير من العمال المحليين، ولا ترتبط بشكل مباشر بأنشطة البناء."
            enAnswer="Local Resource Based Technologies aim to employ a large number of local workers, and are directly related to construction activities."
            arAnswer="تهدف التكنولوجيا المعتمدة على الموارد المحلية إلى توظيف عدد كبير من العمال المحليين، وترتبط بشكل مباشر بأنشطة البناء."
            correctAnswer={true}
        />
          <TrueOrFalse
            enQuestion="No equipment is permitted on an LRBT construction site"
            arQuestion="لا يُسمح باستخدام أي معدات في موقع بناء LRBT"
            enAnswer="Equipments are permitted on an LRBT construction site"
            arAnswer="يُسمح بالمعدات الخفيفة في موقع بناء LRBT"
            correctAnswer={true}
        />
      
    
        <CompletionButton chapterNumber="2" questionNumber={5}/>
        </div>
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;