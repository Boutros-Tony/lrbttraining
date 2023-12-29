import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question10 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Incentive schemes for LRB works" 
       arText="برامج التحفيز لأعمال LRB."/>
        <Paragraph
            enText="Daily paid activities should be the last resort, and applied only when task based activities are impossible."
            arText="يجب أن تكون الأنشطة المدفوعة يوميًا الحل الأخير، ويتم تطبيقها فقط عندما تكون الأنشطة المستندة إلى المهام مستحيلة."
        />
   
          <ImageComponent
            enSrc="/assets/lrb-works-1-2.jpg"
            enAlt="Illustration of three construction workers, none of whom appear happy, with one supervising the others' bricklaying work, highlighting the daily paid activities that require constant monitoring."
            arAlt="نص بديل للصورة الأولى: رسم توضيحي لثلاثة عمال بناء، لا يبدو أن أيًا منهم سعيد، مع وجود أحدهم يشرف على عمل الآخرين في وضع الطوب، مما يبرز الأنشطة التي تدفع يوميًا والتي تتطلب مراقبة مستمرة."
            arSrc="/assets/lrb-works-1-2-ar.jpg"
            width="80%"
        />
          <ImageComponent
            enSrc="/assets/lrb-works-2-2.jpg"
            enAlt="Graphic of cheerful construction workers actively involved in bricklaying and shoveling, depicting task work and piece work that fosters self-motivation."
            arSrc="/assets/lrb-works-2-2-ar.jpg"
            arAlt="رسم توضيحي لعمال البناء المبتهجين وهم يشاركون بنشاط في وضع الطوب والحفر، مصورًا العمل بالمهمة والعمل بالقطعة الذي يشجع على الدافع الذاتي."
            width="80%"
        />
          <CompletionButton chapterNumber="4" questionNumber={10}/>
        </div>
    )
}
Question10.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 10 });
export default Question10;