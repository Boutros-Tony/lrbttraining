import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import UlList from "../../../../components/ul-list/ul-list.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question6 = () => {
    const lang = LanguageDetector();
    const enList1 = [
       "Skilled / semi-skilled labour",
       "Un-skilled labour",
     ]
    const arList1 = [
        "العمالة الماهرة / شبه الماهرة",
        "عمالة بدون مهارة"
     ]
    const enList2 = [
       "Daily wage rate for labourers ( skilled, semi-skilled and unskilled)",
       "Labour task rate or productivity of labour"
    ]
    const arList2 = [
        "معدل الأجر اليومي للعمال (ماهر، شبه ماهر وغير ماهر)",
     "معدل المهمة اليومية للعمالة أو إنتاجية العمالة"
       
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
       enText="Direct Cost" 
       arText="تكلفة مباشرة"/>
      
     <HeadingTwo
        enText='Direct cost consist of:'
        arText="تتكون التكلفة المباشرة من:"
     />
     
       <FlagHeading
            enText="A. Labour costs:"
            arText="أ. تكاليف العمالة:"
       />
       <UlList enList={enList1} arList={arList1}/>
       <Paragraph 
        enText="To calculate labour cost we need to know"
        arText="لحساب تكلفة العمالة نحتاج إلى معرفة:"
       />
          <UlList enList={enList2} arList={arList2}/>
       <FlagHeading
            enText="B. Cost of Equipment"
            arText="ب. تكلفة المعدات:"
       />
       <UlList enList={enList3} arList={arList3}/>
       <FlagHeading
            enText="C. Material"
            arText="ج. المواد:"
       />
       <UlList enList={enList4} arList={arList4}/>
    
   
          <CompletionButton chapterNumber="5" questionNumber={6}/>
        </div>
    )
}
Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;