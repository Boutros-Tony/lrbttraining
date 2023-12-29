import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import HeadingThree from "../../../../components/heading-3/heading-3.component";
const Question7 = () => {
    const lang = LanguageDetector();
    const enList1 = [
       "1 Unskilled labour can do 1.0 m<sup>3 </sup>/day OR 1 m<sup>3 </sup>concrete requires: 1/1= 1.0 Wd",
       "1 Semi-skilled labour can do 5 m<sup>3 </sup>/day OR 1 m<sup>3 </sup>concrete requires: 1/5=0.2 Wd",
        "1 Semi-skilled labour do formwork-2 m<sup>3 </sup>/day OR 1 m<sup>3 </sup>concrete requires: 1/2=0.5 Wd"
    ]
    const arList1 = [
       "عامل غير ماهر يمكنه القيام بـ 1.0 متر مكعب / يوم أو يتطلب 1 متر مكعب من الخرسانة: 1/1 = 1.0 يوم عمل",
       "عامل نصف ماهر يمكنه القيام بـ 5 متر مكعب / يوم أو يتطلب 1 متر مكعب من الخرسانة: 1/5 = 0.2 يوم عمل",
       "عامل نصف ماهر يمكنه القيام بالخشب الرقائقي لـ 2 متر مكعب / يوم أو يتطلب 1 متر مكعب من الخرسانة: 1/2 = 0.5 يوم عمل"
     ]
    const enList2 = [
       "Unskilled= 1.0 wd x US$ 10 = US$ 10",
       "Semi Skilled = 0.7 wd x US$ 14= US$ 9.4"
    ]
    const arList2 = [
        "غير ماهر = 1.0 يوم عمل × 10 دولار أمريكي = 10 دولار أمريكي",
   "نصف ماهر = 0.7 يوم عمل × 14 دولار أمريكي = 9.4 دولار أمريكي"
       
    ]
    const enList3 = [
        "Equipment task rate",
        "Daily rate if equipment is owned or daily hire rate"
       ]
    const arList3 = [
      "معدل مهمة المعدات",
      "السعر اليومي إذا كانت المعدات مملوكة أو معدل الإيجار اليومي"
    ]
    const enList4 = [
        "Purchase cost plus, handling and transport to site",
       
    ]
    const arList4 = [
       "تكلفة الشراء بالإضافة إلى التدابير والنقل إلى الموقع."
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Labour Cost" 
       arText="تكلفة العمالة:"/>
        <Paragraph
           enText="The task rates are the core of understanding the pricing mechanism, as they directly affect the potential amount of work to be achieved in one work day, which will allow the Labour WD’s cost to be factored in accordingly into the unit rate" 
            arText="معدلات المهام هي جوهر فهم آلية التسعير، حيث تؤثر مباشرة في الكمية المحتملة من العمل التي يمكن إنجازها في يوم عمل واحد، مما سيسمح بدمج تكلفة يوم العمل الخاص بالعمالة بشكل مناسب ضمن معدل الوحدة."
        />
     <HeadingTwo
        enText='Example'
        arText="مثال"
     />
     <HeadingThree
        enText="Producing 1 m3 of concrete requires:"
        arText="إنتاج 1 متر مكعب من الخرسانة يتطلب:"
     />
       <FlagList
        enList={enList1}
        arList={arList1}
       />
       <HeadingTwo
        enText="Labour cost to Produce 1 m3 of concrete is:"
        arText="تكلفة العمالة لإنتاج 1 متر مكعب من الخرسانة هي:"
       />
          <FlagList enList={enList2} arList={arList2}/>
            <HeadingThree
                enText="Total labour cost = US$ 19.8"
                arText="التكلفة الإجمالية للعمالة = 19.8 دولار أمريكي."
            />
            <Paragraph
                enText="The unit rate analysis table should be the basis for pricing the offers, in order to have a comprehensive breakdown based on a full understanding of the activities and materials to be involved."
                arText="تجدر الإشارة إلى أن جدول تحليل السعر الوحدي يجب أن يكون أساسًا لتسعير العروض، وذلك للحصول على تفصيل شامل يعتمد على فهم كامل للأنشطة والمواد المشاركة."
            />
            <HeadingTwo
                enText="Labour cost-1m3 concrete"
                arText="تكلفة العمالة - 1م3 خرسانة"
            />
        <ImageComponent
            enSrc="/assets/labour-cost-one.jpg"
            arSrc="/assets/labour-cost-one-ar.jpg"
            width="60%"
        />
            <button className='mainButton'>Download File</button>
            <ImageComponent
            enSrc="/assets/labour-cost-two.jpg"
            arSrc="/assets/labour-cost-two-ar.jpg"
            width="60%"
        />
            <button className='mainButton'>Download File</button>
          <CompletionButton chapterNumber="5" questionNumber={7}/>
        </div>
    )
}
Question7.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 7 });
export default Question7;