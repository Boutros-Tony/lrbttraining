import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question4 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Unit Rate Composition" 
       arText="تكوين الوحدة السعرية"/>
        <Paragraph
            enText="Each unit rate shall include both direct and indirect costs Direct costs refer to costs incurred directly on site through implementation of activities"
            arText="يتم إضافة التكاليف غير المباشرة والأرباح كنسب مئوية مقارنة بالتكاليف المباشرة التي هي تكاليف حقيقية محسوبة بدقة للعمالة والمواد والمعدات."
        />
        <ImageComponent
            enSrc="/assets/unit-rate.jpg"
            width="80%"
            arAlt="/assets/unit-rate-ar.jpg"
        />
   
   
     
          <CompletionButton chapterNumber="5" questionNumber={4}/>
        </div>
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;