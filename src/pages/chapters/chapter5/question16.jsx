import { ChaptersPageLayout } from ".";
import FlagList from "../../../../components/flag-list/flag-list.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import ImageComponent from "../../../../components/image-component/image-component";
import HeadingThree from "../../../../components/heading-3/heading-3.component";
const Question16 = () => {
    const lang = LanguageDetector();
    const enList1 = [
        "Decide which activities need to be carried out for the particular BoQ item",
        "Decide on the productivity rates (task rate for labour and production rate for equipment) to be used.",
        "Enter the daily rates from your basic cost data sheets.",
        "Identify the material requirements for the particular BoQ item and enter the respective rates",
        "Calculate the percentage for indirect costs",
        "Decide percentage Profit",
        "Calculate the total Unit Rate for each item of work included in the contract",
 ]
 const arList1 = [
    "حدد الأنشطة التي يجب تنفيذها لبند معين في الBoQ",
    "حدد معدلات الإنتاجية (معدل المهمة للعمالة ومعدل الإنتاج للمعدات) التي سيتم استخدامها.",
    "أدخل الأسعار اليومية من أوراق بيانات التكلفة الأساسية الخاصة بك.",
    "حدد متطلبات المواد لبند معين  في الBoQ وأدخل الأسعار المعنية",
    "احسب النسبة المئوية للتكاليف غير المباشرة",
    "تحديد نسبة الربح",
    "احسب إجمالي سعر الوحدة لكل بند من بنود العمل المدرجة في العقد"
 ]
 const enList2= [
    "In general, indirect costs are relatively higher (as percentage of the direct costs) for smaller contracts than for larger contracts.",
    "Depending on the size and complexity of the contract, supervision costs and company costs may range somewhere between 7% (for relatively large contracts) to 10% (for relatively small contracts) of the direct costs.",
    "Depending on the Contractor’s assessment of possible unforeseen risks and the size of the contract, it is suggested that an allowance for risks in the range of 1% to 3% of the direct costs is included.",
    "The companies should consider a Profit margin in the range from 7% to 10% of the direct and Indirect costs. Usually, profit margins are higher for relatively small contracts than for relatively large contracts."
 ]
 const arList2 = [
    "وبشكل عام، تكون التكاليف غير المباشرة أعلى نسبياً (كنسبة مئوية من التكاليف المباشرة) بالنسبة للعقود الأصغر حجماً مقارنة بالعقود الأكبر حجماً.",
    "اعتمادًا على حجم العقد وتعقيده، قد تتراوح تكاليف الإشراف وتكاليف الشركة ما بين 7٪ (للعقود الكبيرة نسبيًا) إلى 10٪ (للعقود الصغيرة نسبيًا) من التكاليف المباشرة.",
    "اعتمادًا على تقييم المقاول للمخاطر المحتملة غير المتوقعة وحجم العقد، يُقترح إدراج مخصص للمخاطر في حدود 1% إلى 3% من التكاليف المباشرة.",
    "يجب على الشركات أن تأخذ بعين الاعتبار هامش ربح يتراوح بين 7% إلى 10% من التكاليف المباشرة وغير المباشرة. عادة ما تكون هوامش الربح أعلى بالنسبة للعقود الصغيرة نسبيا مقارنة بالعقود الكبيرة نسبيا."
 ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Unit Rate" 
       arText="سعر الوحدة"/>
        <HeadingTwo
            enText="1 m3 of concrete"
            arText='1 م3  من الخرسانة'
        />
        <Paragraph
            enText="The indirect cost is to be added to the table as an additional percentage, on top of the direct implementation cost"
            arText="يتم إضافة التكلفة غير المباشرة إلى الجدول كنسبة إضافية، فوق تكلفة التنفيذ المباشرة."
        />
        <ImageComponent
            enSrc="/assets/total-direct-cost.jpg"
            arSrc="/assets/total-direct-cost-ar.jpg"
            width="60%"
        />
        <HeadingTwo
            enText="Compiling Unit Rate"
            arText="تجميع معدل الوحدة"
        />
        <HeadingThree
            enText="Steps to fill unit rate sheets:"
            arText="خطوات ملء ورقة سعر الوحدة:"
            />
            <FlagList
                enList={enList1}
                arList={arList1}
            />
            <HeadingTwo
                enText="Fill the unit rates"
                arText="ملء معدلات الوحدة"
            />
            <Paragraph
                enText="It is essential to list the breakdown as per this BoQ format, especially to showcase labour intensity and WDs to be generated by each activity"
                arText="من الضروري إدراج التفاصيل وفقًا لهذا الBoQ ، خاصة لعرض كثافة العمالة ومتطلبات العمل التي سيتم إنشاؤها بواسطة كل نشاط"
            />
               <ImageComponent
            enSrc="/assets/total-direct-cost.jpg"
            arSrc="/assets/total-direct-cost-ar.jpg"
            width="60%"
        />
        <HeadingThree 
            enText="Remember"
            arText="تذكر"
        />
        <p style={{color:"red",fontFamily:"noto-bold",marginBottom:"1em"}}>
            {lang === 'ar' ? "فيما يلي بعض الإرشادات التي قد يرغب مقدمو العروض في أخذها في الاعتبار عند تحديد النسبة المئوية للتكاليف غير المباشرة." : "Here are some guidelines that bidders may want to consider in determining the percentage of indirect costs."}
        </p>
        <FlagList enList={enList2} arList={arList2}/>
          <CompletionButton chapterNumber="5" questionNumber={16}/>
        </div>
    )
}
Question16.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 16 });
export default Question16;