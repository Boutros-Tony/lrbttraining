import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import RiskManagementTable from "../../../../components/risk-management-table/risk-management-table.component";
const Question17 = () => {
    const lang = LanguageDetector();
 

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
       enText="Example of a Risk Management Matrix" 
       arText="مثال على مصفوفة إدارة المخاطر:"/>
      <Paragraph
        enText="Determining the Risk = Estimate the Probability of Occurrence and Severity – and then identify mitigation measures"
        arText="تحديد المخاطر = تقدير احتمالية الحدوث وشدته - ثم تحديد تدابير التخفيف."
        />
        <RiskManagementTable/>
 
     <CompletionButton chapterNumber="6" questionNumber={17}/>
        </div>
        </>
       
    )
}
Question17.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:17 });
export default Question17;