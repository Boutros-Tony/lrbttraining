import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question2 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Incentive schemes for LRB works" 
       arText="خطط الحوافز لأعمال LRB"/>
        <Paragraph
            enText="Incentive schemes are meant to enhance workers’ productivity and ensure completion of works in a timely manner, and as per project’s plan"
            arText="تهدف خطط الحوافز إلى تعزيز إنتاجية العمال وضمان إنجاز الأعمال في الوقت المناسب ووفقاً لخطة المشروع"
        />
     
       
        <ImageComponent
        width="60%"
            enSrc="/assets/intensive-scheme-ch4.png"
            enAlt="A flowchart detailing incentive schemes for LRB works. It starts with 'Incentive Schemes' at the top, branching into 'Daily Paid,' 'Task Work,' and 'Piece Work.' Below 'Daily Paid,' there is 'Time-based remuneration,' and under 'Task Work' and 'Piece Work,' there is 'Production-based remuneration.' The diagram indicates different payment structures designed to enhance worker productivity and ensure project completion as planned"
            arSrc="/assets/intensive-scheme-ch4-ar.png"
            arAlt="مخطط تدفق يوضح خطط الحوافز لأعمال LRB. يبدأ بـ خطط الحوافز' في الأعلى، يتفرع إلى 'الدفع اليومي'، 'العمل بالمهمة'، و'العمل بالقطعة'. تحت 'الدفع اليومي'، يوجد 'الأجر على أساس الوقت'، وتحت 'العمل بالمهمة' و'العمل بالقطعة'، يوجد 'الأجر على أساس الإنتاج'. يشير المخطط إلى هياكل دفع مختلفة مصممة لتعزيز إنتاجية العامل وضمان إكمال المشروع حسب الخطة."
        />
          <CompletionButton chapterNumber="4" questionNumber={2}/>
        </div>
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;