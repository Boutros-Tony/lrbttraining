import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
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
       <HeadingOne 
       enText="Key Contract Documents" 
       arText="وثائق العقد الرئيسية"/>
        <ColoredRectangle
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
            enText="BoQ"
            arText="BoQ جدول الكميات"
        />
          <ColoredRectangle
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
            enText="Technical Specifications"
            arText="المواصفات الفنية"
        />
          <ColoredRectangle
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
            enText="Drawings & Work Plan"
            arText="الرسومات وخطة العمل"
        />
          <ColoredRectangle
            bgColor="rgb(190, 220, 250)"
            textColor="rgb(35, 0, 80)"
            enText="General Conditions"
            arText="الشروط العامة"
        />
          <ColoredRectangle
            bgColor="rgb(90, 135, 205)"
            textColor="white"
            enText="Particular Conditions"
            arText="الشروط الخاصة"
        />
              <CompletionButton chapterNumber="7" questionNumber={2}/>
        </div>
        </>
       
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;