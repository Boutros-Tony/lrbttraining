import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";

const Question12 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Total Direct Cost" 
       arText="مجموع التكلفة المباشرة"/>
     
       <ImageComponent
            enSrc="/assets/total-direct-cost.jpg"
            arSrc="/assets/total-direct-cost-ar.jpg"
            width="60%"
            />
 
        
           
          <CompletionButton chapterNumber="5" questionNumber={12}/>
        </div>
    )
}
Question12.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:12 });
export default Question12;