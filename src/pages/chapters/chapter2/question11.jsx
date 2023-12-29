import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question11 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Employment Intensive Infrastructure Programme in Lebanon (EIIP), Retaining Walls (2020)" 
       arText="برنامج التوظيف المكثّف والبنى التحتية في لبنان (EIIP)، الجدران الداعمة (2020)" />
    <Paragraph
        enText="Some activities are labour intensive by nature, and rely on local materials, such as stone masonry walls."
        arText="تتطلب بعض الأنشطة عمالة كثيفة بطبيعتها، وتعتمد على المواد المحلية، مثل الجدران الحجرية."
    />
      <Paragraph
        enText="The purpose of the LRBT mainstreaming is to try and adopt traditional activities, and adapt the “modern” ones to labour and local resource methods"
        arText="الغرض من تعميم LRBT هو محاولة اعتماد الأنشطة التقليدية، وتكييف الأنشطة 'الحديثة' مع أساليب العمل والموارد المحلية"
      />
        <img style={{marginBottom:"1em"}} width="80%" src="/assets/retaining-1.jpg" alt="A completed stone masonry retaining wall along a road, showcasing structured layers of stone blocks neatly assembled." srcset="" />
        <img width="80%" src="/assets/retaining-2.jpg" alt="A partially constructed or damaged stone masonry wall with workers present, indicating ongoing labor-intensive work on retaining walls." srcset="" />
        <CompletionButton chapterNumber="2" questionNumber={11}/>
        </div>
    )
}
Question11.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 11 });
export default Question11;