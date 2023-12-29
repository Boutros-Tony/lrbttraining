import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question7 = () => {
    const lang = LanguageDetector();
    const enList = [
        "BoQ (same BoQ as the tender)",
        "Duration of the project on a bi-weekly basis",
        "Percentage completion on a bi-weekly basis",
        "Number of workers per activity",
        "Number of work days per activity"
    ]
    const arList = [
        "“BoQ” جدول الكميات (نفس جدول الكميات الموجود في المناقصة)",
        "مدة المشروع على أساس كل أسبوعين",
        "نسبة الإنجاز على أساس كل أسبوعين",
        "عدد العمال لكل نشاط",
        "عدد أيام العمل لكل نشاط"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Work Plan" 
       arText="خطة العمل"/>
      <Paragraph
        enText="The work plan must be submitted in excel format as provided along the tender documents for all contractors. The work plan will consist of the following:"
        arText="يجب تقديم خطة العمل بصيغة “ excel ” كما هو منصوص عليه في وثائق المناقصة لجميع المقاولين. خطة العمل ستتكون مما يلي:"
      />
        <FlagList
            enList={enList}
            arList={arList}
        />
        <Paragraph
            enText="The purpose of the workplan is for the contractor to have a clear plan of project execution and workdays generation. This will help the contractor and ILO team to supervise progress and ensure timely deliverables."
        arText="الغرض من خطة العمل هو أن يكون لدى المقاول خطة واضحة لتنفيذ المشروع وإنشاء أيام العمل. سيساعد ذلك المقاول وفريق منظمة العمل الدولية على الإشراف على التقدم وضمان التسليم في الوقت المناسب."
       />
          <CompletionButton chapterNumber="3" questionNumber={7}/>
        </div>
    )
}
Question7.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 7 });
export default Question7;