import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import RectangleShowText from "../../../../components/rectangle-show-text/rectangle-show-text.component";
const Question2 = () => {
    const lang = LanguageDetector();
    const enList = [
        "The number of labourers required for different activities varies with the type of works and the expected productivity.",
        "The Contractor is responsible for recruiting workers by adopting different outreach modalities including coordinating with municipalities.",
        "Ensuring all workers are informed before commencing the work. The information should be widely available and include:"
    ]
    const arList = [
        "عدد العمال المطلوبين للأنشطة المختلفة يختلف حسب نوع الأعمال والإنتاجية المتوقعة.",
        "المقاول مسؤول عن توظيف العمال من خلال اعتماد طرق التواصل المختلفة بما في ذلك التنسيق مع البلديات.",
        "التأكد من إبلاغ جميع العمال قبل بدء العمل. يجب أن تكون المعلومات متاحة على نطاق واسع وتتضمن:"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Recruitment of Labour" 
       arText="توظيف العمالة"/>
      
        <FlagList arList={arList} enList={enList}/>
       
            <RectangleShowText 
               enText="Type of work to be carried out"
               arText="نوع العمل الذي سيتم تنفيذه"
               showTextInitially
            />
            <RectangleShowText 
               enText="Number of labourers to be recruited, and the time and place of recruitment"
               arText="عدد العمال المطلوب توظيفهم، ووقت ومكان التوظيف"
                showTextInitially
            />
            <RectangleShowText 
               enText="Employment duration and other conditions of work"
               arText="مدة التوظيف وغيرها من شروط العمل"
             />
    <RectangleShowText 
               enText="Offered daily wage"
               arText="الأجر اليومي المقدم"
               showTextInitially
            />
  <RectangleShowText 
               enText="Incentive scheme"
               arText="نظام الحوافز"
               showTextInitially
            />
             <RectangleShowText 
               enText="Payment process"
               arText="عملية الدفع"
              
            />
             <RectangleShowText 
               enText="Women and men including persons with disabilities are equally eligible"
               arText="النساء والرجال بما في ذلك الأشخاص ذوي الإعاقة مؤهلين على قدم المساواة"
               showTextInitially
            />
             <RectangleShowText 
               enText="Minimum working age"
               arText="الحد الأدنى لسن العمل"
               showTextInitially
            />
             <RectangleShowText 
               enText="Safety and health regulations"
               arText="لوائح الصحة والسلامة"
               showTextInitially
            />
            <RectangleShowText 
               enText="Rotation policy"
               arText="سياسة التناوب"
              
            />
            <RectangleShowText 
               enText="Registration procedure and employment contract"
               arText="إجراء التسجيل وعقد العمل"
               showTextInitially
            />
             <RectangleShowText 
               enText="Responsibilities"
               arText="المسؤوليات"
               showTextInitially
            />
             <RectangleShowText 
               enText="Complaints mechanism"
               arText="آلية الشكاوى"
              
            />
         
               <RectangleShowText 
               enText="Understanding the labour contract and the workers insurance"
               arText="فهم عقد العمل وتأمين العمال"
               showTextInitially
            />
               <Paragraph
                enText="To include, rotation to ensure that we outreach for the most number of workers and achieve the most number of jobs."
                arText="يجب أن يتضمن الأمر التناوب للتأكد من الوصول لأكبر عدد من العمال وتحقيق أكبر عدد من الوظائف."
            />
          <CompletionButton chapterNumber="3" questionNumber={2}/>
        </div>
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;