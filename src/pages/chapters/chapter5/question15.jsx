import { ChaptersPageLayout } from ".";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";

const Question15 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Exercise" 
       arText="تمرين"/>
       <TrueOrFalse
       enQuestion="Company costs are to be spread among several projects, over the period of completion of the priced project"
       arQuestion="تتم مشاركة تكاليف الشركة بين عدة مشاريع، خلال فترة اكتمال المشروع المسعر."
       enAnswer="Company costs are to be spread among several projects, over the period of completion of the priced project"
       arAnswer=" تتم مشاركة تكاليف الشركة بين عدة مشاريع، خلال فترة اكتمال المشروع المسعر"
       correctAnswer={true}
       />
       <TrueOrFalse
        enQuestion="Indirect costs should be added as a percentage to all unit rates regardless of the type of activity"
        arQuestion="يجب إضافة التكاليف غير المباشرة كنسبة مئوية إلى جميع معدلات الوحدة بغض النظر عن نوع النشاط."
        enAnswer="Indirect costs should be added as a percentage to all unit rates regardless of the type of activity"
        arAnswer="يجب إضافة التكاليف غير المباشرة كنسبة مئوية إلى جميع معدلات الوحدة بغض النظر عن نوع النشاط."
        correctAnswer={true}
       />
          <CompletionButton chapterNumber="5" questionNumber={15}/>
        </div>
    )
}
Question15.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 15 });
export default Question15;