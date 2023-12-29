import { ChaptersPageLayout } from ".";
import Exercise from "../../../../components/exercise/exercice.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompleteSentence from "../../../../components/complete-sentence/complete-sentence.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question10 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
   
     <CompleteSentence sentence="Calculating the volume of work that can be achieved by a machine / equipment and price the items accordingly"/>
          <CompletionButton chapterNumber="5" questionNumber={10}/>
        </div>
    )
}
Question10.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 10 });
export default Question10;