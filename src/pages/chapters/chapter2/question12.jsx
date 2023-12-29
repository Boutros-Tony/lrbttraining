import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ShowTextSquare from "../../../../components/show-text-square/show-text-square.component";
const Question12 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="When to apply LRB" 
       arText="متى يتم تطبيق LRB" />
       <HeadingTwo
        enText="Important considerations during the planning stage"
        arText="الاعتبارات المهمة في مرحلة التخطيط"
       />
    <Paragraph
        enText={<>Is it technically possible in terms of expected activities? 
            Which approach would be less expensive? 
            Is the project site remote, or close to potential labour and local resources? 
            Are there factors that challenge the project implementation?</>}
        arText={<>هل هذا ممكن من الناحية الفنية من حيث الأنشطة المتوقعة؟<br />
            ما هو النهج الذي سيكون أقل تكلفة؟<br />
            هل موقع المشروع بعيد أم قريب من العمالة والموارد المحلية المحتملة؟<br />
            هل هناك عوامل تعيق تنفيذ المشروع؟</>}
    />
   
      <ShowTextSquare/>
        <CompletionButton chapterNumber="2" questionNumber={12}/>
        </div>
    )
}
Question12.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 12 });
export default Question12;