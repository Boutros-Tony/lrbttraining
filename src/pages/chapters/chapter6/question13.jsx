import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import GeneralPrinciples from "../../../../components/general-principles/general-principles.component";
const Question13 = () => {
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
       enText="SSO Video" 
       arText="فيديو عن مسؤول الضمانات الاجتماعية والبيئية (SSO)"/>
        <GeneralPrinciples/>
     <CompletionButton chapterNumber="6" questionNumber={13}/>
        </div>
        </>
       
    )
}
Question13.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:13 });
export default Question13;