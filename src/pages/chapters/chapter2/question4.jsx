import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question4 = () => {
    const lang = LanguageDetector();
    const list =[
        'Includes work methods and technologies where the use of local resources and local labour is favoured and optimized in the delivery and maintenance of infrastructure assets, i.e. employ as many people as possible from the vicinity of the project.',
        "Includes work methods and technologies where the use of local resources and local labour is favoured and optimized in the delivery and maintenance of infrastructure assets, i.e. employ as many people as possible from the vicinity of the project.",
        "Appropriate (light) equipment is used for support activities",
        "Work is carried out with the above resources in a cost effective manner without compromising on the quality"
    ]
    const listAr = [
        "تشمل أساليب العمل والتقنيات التي يتم فيها تفضيل استخدام الموارد المحلية والعمالة المحلية وتحسينها في تسليم وصيانة أصول البنية التحتية، أي توظيف أكبر عدد ممكن من الأشخاص من المنطقة المجاورة للمشروع.",
        "يتم استخدام الموارد والقدرات والمواد المحلية إلى أقصى حد ممكن، ولكن دون التأثير سلباً على تكاليف أو مدة الأعمال المحددة.",
        "يتم استخدام المعدات (الخفيفة) المناسبة لأنشطة الدعم",
        "يتم تنفيذ العمل باستخدام الموارد المذكورة أعلاه بطريقة فعالة من حيث التكلفة دون المساس بالجودة"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Local Resource-Based (LRB) Work Methods" 
       arText="أساليب العمل القائمة على الموارد المحلية (LRB)."/>
      <FlagList enList={list} arList={listAr}/>
      
          <CompletionButton chapterNumber="2" questionNumber={4}/>
        </div>
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;