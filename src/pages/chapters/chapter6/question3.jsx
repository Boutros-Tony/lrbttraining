import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question3 = () => {
    const lang = LanguageDetector();
    const enList = [
        "The use of local resources (labour, material, services, etc.)",
        "The use of labor intensity approach",
        "Prohibition of forced labour",
        "Equal treatment & equality in opportunities",
        "Prohibition of employment of children",
        "Provision of accident insurance",
        "Payment of wages on time and in full",
        "Targets (Lebanese, Syrian, Women and PWD)",
        "Decent working hours",
        "Occupation Safety and Health & Environmental Safety",
        "Zero tolerance policy on sexual harassment, exploitation and abuse ",
        "Abide to the Sustainable Procurement Principles the ILO is adopting",
        <>
        Particular Conditions Clause 4.1.13 Environmental, Safey and Health in addition to the world bank Environmental, Health and Safety General Guidelines <br />
        <a target="_default" href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/157871484635724258/environmental-health-and-safety-general-guidelines">https://documents.worldbank.org</a>
        </>,
        "EIIP Lebanon Social and Environmental Safeguard Framework",
      ]
    const arList = [
        "استخدام الموارد المحلية (العمالة، المواد، الخدمات، إلخ.)",
        "استخدام نهج كثافة العمالة",
        "حظر العمل القسري",
        "المعاملة المتساوية والمساواة في الفرص",
        "حظر توظيف الأطفال",
        "توفير تأمين ضد الحوادث",
        "دفع الأجور في الوقت المحدد وبالكامل",
        "الأهداف (اللبنانيين، السوريين، النساء وذوي الإعاقة)",
        "ساعات العمل اللائقة",
        "السلامة المهنية والصحة والسلامة البيئية",
        "سياسة عدم التسامح تجاه التحرش الجنسي، والاستغلال والإساءة",
        "الالتزام بمبادئ الشراء المستدام التي تعتمدها منظمة العمل الدولية",
        <>
     الشروط الخاصة البند 4.1.13 البيئة والسلامة والصحة بالإضافة إلى المبادئ التوجيهية العامة للبيئة والصحة والسلامة الصادرة عن البنك الدولي
      <br />  <a target="_default" href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/157871484635724258/environmental-health-and-safety-general-guidelines">https://documents.worldbank.org</a>
        </>,
        "إطار حماية البيئة والضمانات الاجتماعية لبرنامج EIIP في لبنان"

    ]
    return (
        <>
        <Head>
        <title>
    {lang === 'ar' ? "الفصول التدريبية - تدريب EIIP للمقاولين" : "Training Chapters - EIIP Training for Contractors"}
</title>


        <meta name="description" content="EIIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <div className="main-questions">
       <HeadingOne 
       enText="ESSF Articles in the Contract Terms & Conditions" 
       arText="بنود ESSF في شروط وأحكام العقد"/>
       
       <Paragraph
        enText="The ESSF document, with all its articles is contractually binding, given that it is a significant annex under the contract signed by each and every contractor. Thus, all contractors/implementing partners must familiarize themselves with the details of the ESSF to ensure highest compliance during implementation."
        arText="إن ESSF بجميع بنوده ملزمة تعاقديا، نظرا لكونه ملحقا هاما للعقد الموقع من قبل كل مقاول. وبالتالي، يجب على جميع المقاولين/الشركاء المنفذين التعرف على تفاصيل الإطار البيئي والاجتماعي (ESSF) لضمان أعلى درجات الامتثال أثناء التنفيذ."
       />
       
      <Paragraph
        enText="Examples of articles present in the contract (but not limited to):"
        arText="أمثلة على المواد الموجودة في العقد (ولكن لا تقتصر على):"
      />
      <FlagList enList={enList} arList={arList}/>
     <CompletionButton chapterNumber="6" questionNumber={3}/>
        </div>
        </>
       
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;