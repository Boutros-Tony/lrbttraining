import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question8 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Sample of BoQ" 
       arText="عينة من جدول الكميات (BoQ)"/>
     
        <Paragraph
            enText="Below is a non-indicative sample of BoQ"
        arText="أدناه عينة غير إرشادية لجدول الكميات (BoQ)"
       />
       
        <ImageComponent
        enSrc="/assets/sampleBoq.jpg"
        arSrc="/assets/sampleBoq-ar.jpg"
        width="60%"
        />
          <CompletionButton chapterNumber="3" questionNumber={8}/>
        </div>
    )
}
Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;