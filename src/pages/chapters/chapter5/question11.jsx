import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";

const Question11 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Material Cost" 
       arText="تكلفة المواد"/>
       <Paragraph
        enText="A full understanding of the materials required for the BoQ activity is essential to break them down into raw materials and accommodate their respective costs"
        arText="فهم كامل للمواد المطلوبة لنشاط الBoQ  هو أمر أساسي لتقسيمها إلى مواد خام واستيعاب التكاليف الخاصة بها."
       />
       <HeadingTwo
        enText="Quantities of Materials Required for 1 m3 of Concrete"
        arText="كميات المواد المطلوبة لـ 1 م3 من الخرسانة"
       />
       <ImageComponent
            enSrc="/assets/material-cost-1.jpg"
            arSrc="/assets/material-cost-1-ar.jpg"
            width="80%"
            />
 
        <ImageComponent
            enSrc="/assets/material-cost-two.jpg"
           
            arSrc="/assets/material-cost-two-ar.jpg"
           
            width="80%"
            />
           
          <CompletionButton chapterNumber="5" questionNumber={11}/>
        </div>
    )
}
Question11.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:11 });
export default Question11;