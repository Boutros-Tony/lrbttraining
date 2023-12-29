import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
const Question6 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Work Plan Consideration" 
       arText="اعتبارات خطة العمل"/>
        <DropDownText
        enTitle="Overall Time Frame"
        enText="The maximum duration provided in the tender documents"
        arTitle="الإطار الزمني العام"
        arText="المدة القصوى المقدمة في وثائق المناقصة"
        bgColor="rgb(171, 59, 119)"
        textColor="white"
        />
        <ColoredRectangle  
            enText="Complexity and logical sequencing of activities"
            arText="التعقيد والتسلسل المنطقي للأنشطة"
            bgColor="#c0000f"
            textColor="white"
        />
        <DropDownText
        enTitle="LRBT - number of workers and type of equipment"
        enText="The contractor should be able to identify a reasonable number of workers needed for each activity."
        arTitle="LRBT - عدد العمال ونوع المعدات"
        arText="يجب على المقاول أن يتمكن من تحديد عدد معقول من العمال المطلوبين لكل نشاط."
        bgColor="rgb(50, 100, 200)"
        textColor="white"
        />
        <DropDownText
        enTitle="Productivity (of labour)"
        enText="The number of workers identified for each activity should be able to finish the task within the estimated duration taking into consideration that workers’ ultimate productivity is 6h/day."
        arTitle="إنتاجية (العمالة)"
        arText="يجب أن يكون العدد من العمال المحددين لكل نشاط قادرين على إنهاء المهمة خلال المدة المقدرة مع الأخذ في الاعتبار أن الإنتاجية النهائية للعمال هي 6 ساعات / يوم."
        bgColor="rgb(105, 228, 228)"
        textColor="rgb(35, 0, 80)"
        />
        <DropDownText
        enTitle="Materials supply lead times"
        enText="The contractor should take into consideration the shortage of material in the country and the risks in the current situation."
        arTitle="فترات توريد المواد"
        arText="يجب على المقاول أن يأخذ في الاعتبار النقص في المواد في البلاد والمخاطر في الوضع الحالي."
        bgColor="rgb(250, 180, 40)"
        textColor="rgb(35, 0, 80)"
        />
      
        <DropDownText
        enTitle="Financial considerations"
        enText="The contractor should be aware of the needed financial flow knowing that workers should be paid on a biweekly basis and some suppliers are not accepting to provide materials on site unless they are paid in full."
        arTitle="الاعتبارات المالية"
        arText="يجب على المقاول أن يكون على علم بالتدفق المالي المطلوب مع العلم أنه يجب دفع أجور العمال كل أسبوعين وأن بعض الموردين لا يقبلون تقديم المواد في الموقع إلا إذا تم دفعها بالكامل."
        bgColor="rgb(112, 180, 80)"
        textColor="white"
        />
    
          <CompletionButton chapterNumber="3" questionNumber={6}/>
        </div>
    )
}
Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;