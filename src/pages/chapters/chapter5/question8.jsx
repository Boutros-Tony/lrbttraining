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
const Question8 = () => {
    const lang = LanguageDetector();
    const enList1 = [
       "Hire costs, or",
       "Owner costs (purchase, insurance, licence, etc.) including, depreciation and replacement costs",
        "Operational costs (plant operator, fuel, lubricants, maintenance, repair)"
    ]
    const arList1 = [
    "تكاليف الاستئجار، أو",
    "تكاليف المالك (الشراء والتأمين والترخيص وما إلى ذلك) بما في ذلك تكاليف الاستهلاك والاستبدال",
     "التكاليف التشغيلية (مشغل المصنع، الوقود، مواد التشحيم، الصيانة، الإصلاح)"
     ]
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Cost of Equipment and hand tools" 
       arText="تكلفة المعدات والأدوات اليدوية"/>
        <HeadingTwo
            enText="Equipment rate includes"
            arText="معدل المعدات يشمل"
        />
        <FlagList
            enList={enList1}
            arList={arList1}
        />
        <ImageComponent
            enSrc="/assets/cost-equipment-1-2.jpg"
            enAlt="Construction equipment laid on the ground, including a jackhammer connected to a long, flexible hose, with concrete blocks and wooden pallets in the background."
            arSrc="/assets/cost-equipment-1-2.jpg"
            arAlt="معدات بناء موضوعة على الأرض، تشمل مطرقة ثقيلة متصلة بخرطوم طويل مرن، مع كتل خرسانية وألواح خشبية في الخلفية."
            width="60%"
            />
               <ImageComponent
            enSrc="/assets/cost-equipment-2-2.jpg"
            enAlt="Laborers at a construction site are operating a concrete mixer and moving construction materials, with a pile of sand in the foreground and a scenic hilly landscape in the background."
            arSrc="/assets/cost-equipment-2-2.jpg"
            arAlt="عمال في موقع بناء يشغلون خلاطة الخرسانة ويتحركون مواد البناء، مع كومة من الرمل في المقدمة ومنظر طبيعي لتلال في الخلفية."
            width="60%"
           />
           <HeadingTwo
            enText="Examples of some equipment task rates"
            arText="أمثلة على بعض معدلات المهام للمعدات"
           />
              <ImageComponent
            enSrc="/assets/cost-equipments-3.jpg"
         
            arSrc="/assets/cost-equipments-3-ar.jpg"
           
            width="60%"
           />
          <CompletionButton chapterNumber="5" questionNumber={8}/>
        </div>
    )
}
Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;