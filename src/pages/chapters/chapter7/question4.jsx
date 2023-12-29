import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import IconText from "../../../../components/icon-text/icon-text.component";
const Question4 = () => {
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
       enText="Bid Clarification and Submission:ITB 36-2022" 
       arText="توضيح وتقديم المناقصة: ITB 36-2022"
       />
        <IconText
            enText="LRBT Training"
            arText="تدريب LRBT"
            imgSrc="/assets/chp7.png"
        />
         <IconText
            enText="Bid Clarification"
            arText="توضيح المناقصة"
            imgSrc="/assets/chp7.png"
        />
         <IconText
            enText="Bid Submission"
            arText="تقديم المناقصة"
            imgSrc="/assets/chp7.png"
        />
         <IconText
            enText="Bid Award"
            arText="جائزة المناقصة"
            imgSrc="/assets/chp7.png"
        />
                <CompletionButton chapterNumber="7" questionNumber={4}/>
        </div>
        </>
       
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;