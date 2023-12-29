import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question3 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Price components" 
       arText="مكونات السعر"/>
        <Paragraph
            enText="Each unit rate shall include both direct and indirect costs Direct costs refer to costs incurred directly on site through implementation of activities"
            arText="يجب أن يشمل كل سعر وحدة كل من التكاليف المباشرة والغير مباشرةالتكاليف المباشرة تشير إلى التكاليف التي تكبدت مباشرة على الموقع من خلال تنفيذ الأنشطة."
        />
        <ImageComponent
            enSrc="/assets/price-components-2.png"
            width="80%"
            arAlt="/assets/price-components-2-ar.png"
        />
   
   
     
          <CompletionButton chapterNumber="5" questionNumber={3}/>
        </div>
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;