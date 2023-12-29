import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question8 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Is present daily on site",
        "Monitors the proper implementation of the Environmental & Social Safeguard Framework",
        "Monitors the proper implementation of all OSH measures and PPES",
        "Fills regular monitoring checklists",
        "Continuously assesses contractor’s site management",
        "Mobilizes the Complaint Mechanism",
        "Regular Reports to the ESSF compliance team",
        "Flags to contractor and/or central teams any items that require prompt action",
        "Continuously coordinates with Municipality and/or project owner",
        "Mobilizes the Outreach Mechanism",
      ]
      const arList = [
        "يتواجد يوميًا في الموقع",
        "يراقب التنفيذ السليم لجميع تدابير الصحة والسلامة المهنية ومعدات الوقاية الشخصية",
        "يراقب التنفيذ السليم لإطار الضمانات الاجتماعية والبيئية",
        "يملأ قوائم المراقبة بانتظام",
        "يقوم بتقييم إدارة المقاول للموقع باستمرار",
        "يقوم بتفعيل آلية الشكوى",
        "تقارير منتظمة للفريق المختص في الESSF",
        "يشير إلى المقاول و/أو الفرق المختص عن أي بنود تحتاج إلى اتخاذ إجراء فوري",
        "التنسيق المستمر مع البلدية و/أو صاحب المشروع",
        "يقوم بتفعيل آلية التواصل للوصول الى اكبر عدد ممكن من العمال المهتمين.",
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
       enText="Role of ILO’s Environmental and Social Safeguard Officers" 
       arText="دور مسؤولي الضمانات الاجتماعية والبيئية في منظمة العمل الدولية:"/>
       
     
      <FlagList enList={enList} arList={arList}/>
     <CompletionButton chapterNumber="6" questionNumber={8}/>
        </div>
        </>
       
    )
}
Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;