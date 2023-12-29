import { ChaptersPageLayout } from ".";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";

const Question5 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
       <TrueOrFalse
       enQuestion="Indirect costs include project supervision costs"
       arQuestion="التكاليف غير المباشرة تشمل تكاليف الإشراف على المشروع"
       enAnswer="Indirect costs include project supervision costs"
       arAnswer="التكاليف غير المباشرة تشمل تكاليف الإشراف على المشروع"
       correctAnswer={true}
       />
       <TrueOrFalse
        enQuestion="Hand tools are considered indirect project costs"
        arQuestion="الأدوات اليدوية تعتبر من التكاليف غير المباشرة للمشروع"
        enAnswer="Hand tools are considered direct project costs"
        arAnswer="الأدوات اليدوية تعتبر من التكاليف المباشرة للمشروع"
        correctAnswer={false}
       />
          <CompletionButton chapterNumber="5" questionNumber={5}/>
        </div>
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;