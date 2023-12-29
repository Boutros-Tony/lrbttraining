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
const Question9 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Typical hand tools for LRBT works" 
       arText="الأدوات اليدوية النموذجية لأعمال LRBT"/>
       <ImageComponent
            enSrc="/assets/typical-hand-tools-1.jpg"
            enAlt="Illustration of typical hand tools used for LRBT works, featuring a wheelbarrow, a spirit level, a trowel, a shovel, a rake, and two types of pickaxes."
            arSrc="/assets/typical-hand-tools-1.jpg"
            arAlt="صورة توضيحية لأدوات يدوية نموذجية تُستخدم في أعمال LRBT، تتضمن عربة يدوية، ميزان ماء، مجرفة صغيرة، مجرفة، مشط، ونوعين من الفؤوس."
            width="60%"
            />
        <HeadingTwo
            enText="Cost of Equipments and hand tools"
            arText="تكلفة الأدوات والمعدات"
        />
       <Paragraph
        enText="A breakdown of the required tools and equipment is to be listed on this same table, to add up to the direct cost"
        arText="يجب إدراج تفصيل للأدوات والمعدات المطلوبة في هذا الجدول نفسه، لتضاف إلى التكلفة المباشرة."
       />
        <ImageComponent
            enSrc="/assets/typical-equipment-two.jpg"
            enAlt="Construction equipment laid on the ground, including a jackhammer connected to a long, flexible hose, with concrete blocks and wooden pallets in the background."
            arSrc="/assets/cost-equipment-1-2.jpg"
            arAlt="معدات بناء موضوعة على الأرض، تشمل مطرقة ثقيلة متصلة بخرطوم طويل مرن، مع كتل خرسانية وألواح خشبية في الخلفية."
            width="80%"
            />
           
          <CompletionButton chapterNumber="5" questionNumber={9}/>
        </div>
    )
}
Question9.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 9 });
export default Question9;