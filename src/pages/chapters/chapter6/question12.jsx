import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";

const Question12 = () => {
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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PGkef-j8IbA?si=s6XN-H84j-vFvtT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <CompletionButton chapterNumber="6" questionNumber={12}/>
        </div>
        </>
       
    )
}
Question12.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:12 });
export default Question12;