import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FourCircles from "../../../../components/four-circles/four-circles.component";
const Question2 = () => {
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
       <HeadingOne enText="What is the International Labour Organization?" arText="ما هي منظمة العمل الدولية (ILO)؟"/>
        <Paragraph 
        enText="The ILO is a specialized UN Agency advancing social justice and promoting the Decent Work Agenda."
        arText="منظمة العمل الدولية هي وكالة متخصصة تابعة للأمم المتحدة تعمل على تعزيز العدالة الاجتماعية وتشجيع خطة العمل اللائق."
        />
        <FourCircles/>
        <CompletionButton chapterNumber="1" questionNumber={2}/>
        </div>
        </>
       
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;