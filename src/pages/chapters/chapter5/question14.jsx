import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question14 = () => {
    const lang = LanguageDetector();
    const enList1 = [
        "Supervision cost",
        "Company cost",
        "Risk allowance"
    ]
    const arList1 = [
        "تكلفة الإشراف",
        "تكلفة الشركة",
        "بدل المخاطر"
    ]
    const enList2 = [
        "Salary of engineer and his/her transport, inclusive",
        "Salary of supervisor and his or her transport, inclusive"
    ]
    const arList2 = [
        "راتب وتكلفة مواصلات المهندس، شامل",
        "راتب وتكلفة مواصلات المشرف، شامل"
    ]
    const enList3 = [
        "Staff salaries→total costs for permanent staff",
        "Property→office, workshop, store→hire charges→operational costs (electricity, water, telephone,waste collection, taxes, etc.)",
        "Insurances→any type of insurance required to run the business",
        "Vehicles→owner plus operational costs"
    ]
    const arList3 = [
        "رواتب الموظفين ← التكاليف الكاملة للموظفين الدائمين",
        "الممتلكات ← المكتب، ورشة العمل، المخزن ← تكاليف الإيجار ← التكاليف التشغيلية (الكهرباء، الماء، الهاتف، جمع النفايات، الضرائب، إلخ.)",
        "التأمينات ← أي نوع من التأمين المطلوب لتشغيل الأعمال",
        "المركبات ← تكلفة الاقتناء والتكاليف التشغيلية"
    ]
    const enList4 = [
        "Sudden increase of price on materials",
        "Delays due to bad weather",
        "Shortage of particular materials",
        "Unexpected technical problems",
        "Inaccurate Estimating, etc",
    ]
    const arList4 = [
        "الزيادة المفاجئة في أسعار المواد",
        "التأخير بسبب سوء الأحوال الجوية",
        "نقص في مواد معينة",
        "مشاكل فنية غير متوقعة",
        "تقدير غير دقيق، إلخ",
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Indirect Cost" 
       arText="التكاليف غير المباشرة"/>
        <Paragraph
            enText="The indirect costs are not linked to a specific project activity (or BoQ item) but are the necessary overhead and relevant expenses to complete the project."
            arText="التكاليف غير المباشرة ليست مرتبطة بنشاط محدد في المشروع (أو بند في كشف الكميات) ولكنها تشمل النفقات العامة الضرورية والمصاريف ذات الصلة لإتمام المشروع."
        />  
        <HeadingTwo
            enText="The indirect costs consist of:"
            arText="تتكون التكاليف غير المباشرة من:"
        />
        <FlagList 
            enList={enList1}
            arList={arList1}
        />
        <HeadingTwo
            enText="Supervision cost"
            arText="تكلفة الإشراف"
        />
        <Paragraph
            enText="These costs cover supervisory staff and their means of transport through out the contract duration"
            arText="تغطي هذه التكاليف الموظفين المشرفين ووسائل نقلهم طوال مدة العقد"
        />
        <FlagList 
            enList={enList2}
            arList={arList2}
        />
         <HeadingTwo
            enText="Company cost includes"
            arText="تكلفة الشركة تشمل"
        />
        <Paragraph
            enText="These are basic costs that a company goes through during the contract duration to be able to run the business These costs should be equally shared with other projects within the company"
            arText="هذه تكاليف أساسية تتكبدها الشركة خلال مدة العقد لتتمكن من إدارة الأعمال. يجب تقاسم هذه التكاليف بالتساوي مع مشاريع أخرى داخل الشركة"
        />
        <FlagList 
            enList={enList3}
            arList={arList3}
        />
           <HeadingTwo
            enText="Risk allowance includes"
            arText="بدل المخاطر يشمل"
        />
           <FlagList 
            enList={enList4}
            arList={arList4}
        />
        <Paragraph
            enText="Generally the risk allowance is about 1-3 % of the direct cost depending on the context and general circumstances"
            arText="عادةً ما يكون بدل المخاطر حوالي 1-3% من التكلفة المباشرة حسب السياق والظروف العامة"
        />
        <Paragraph
            enText="Indirect costs are calculated as a total sum to be incurred during the full contract period, and then split into additional percentages on top of individual unit rates"
            arText="يتم حساب التكاليف غير المباشرة كمجموع إجمالي يتم تكبده خلال فترة العقد بأكملها، ثم تقسم إلى نسب إضافية فوق معدلات الوحدة الفردية"
        />
        <ImageComponent
            enSrc="/assets/indirect-cost-1.jpg"
            arSrc="/assets/indirect-cost-1-ar.jpg"
        />
        <button className="mainButton">Download File</button>
        <Paragraph
            enText="The total contract direct cost doesn’t have to be assumed, since it is possible for the bidder to calculate this number based on the BoQ All the stated numbers are for the sake of examples and are irrelevant to any current bid"
            arText="لا يجب افتراض التكلفة المباشرة الإجمالية للعقد، حيث من الممكن للمزايد حساب هذا الرقم بناءً على كشف الكميات. 
            جميع الأرقام المذكورة هي لأغراض الأمثلة ولا تتعلق بأي مناقصة حالية."
        />
        <Paragraph
            enText="Total Company cost + supervision cost (USD) 38,998 Assumed a total Direct cost of this project (USD) 500,000 So, the Supervision + company cost (%) 8 Assumed Risk allowance (%) 3 Total In-direct cost (%) 11 Add Profit (%) 7-10 % For each unit rate – to be added as a percentage of the direct costs"
            arText="التكلفة الإجمالية للشركة + تكلفة الإشراف (بالدولار الأمريكي) 38,998 
            يفترض التكلفة المباشرة الإجمالية لهذا المشروع (بالدولار الأمريكي) 500,000 
            وبالتالي، تكلفة الإشراف + تكلفة الشركة (%) 8 
            يفترض بدل المخاطر (%) 3 
            التكلفة غير المباشرة الإجمالية (%) 11 
            إضافة الربح (%) 7-10% 
            لكل معدل وحدة - ليتم إضافتها كنسبة مئوية من التكاليف المباشرة"
      />
           <CompletionButton chapterNumber="5" questionNumber={14}/>
        </div>
    )
}
Question14.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 14 });
export default Question14;