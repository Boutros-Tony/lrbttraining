import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question9 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Preparing a Work Plan" 
       arText="إعداد خطة العمل"/>
     
     
     <ImageComponent
        enSrc="/assets/preparing-work-plan.jpg"
        arSrc="/assets/preparing-work-plan-ar.jpg"
        width="70%"
     />
          <CompletionButton chapterNumber="3" questionNumber={9}/>
        </div>
    )
}
Question9.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 9 });
export default Question9;