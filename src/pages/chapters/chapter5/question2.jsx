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
       enText="Sample of BoQ" 
       arText="عينة من BoQ"/>
        <Paragraph
            enText="The typical EIIP BoQ is split into several columns to show the price breakdown per unit rate, including labour content"
            arText="عادةً ما يتم تقسيم BoQ الخاص بـ EIIP إلى عدة أعمدة لعرض تفاصيل السعر لكل معدل وحدة، بما في ذلك المحتوى الخاص بالعمالة."
        />
        <ImageComponent
            enSrc="/assets/sample-a-boq-2.jpg"
            width="80%"
            arAlt="/assets/sample-a-boq-2-ar.jpg"
        />
        <button className="mainButton">Download</button>
   
     
          <CompletionButton chapterNumber="5" questionNumber={2}/>
        </div>
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;