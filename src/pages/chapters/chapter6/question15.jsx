import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import BigRectangle from "../../../../components/big-rectangle/big-rectangle.component";
const Question15 = () => {
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
       enText="Risk Assessment" 
       arText="تقييم المخاطر"/>
      <Paragraph
        enText="The main purpose of OSH is the management of occupational risks. The below five step risk assessment method is a simple approach that has been endorsed globally to manage risks"
        arText="الغرض الرئيسي من الصحة والسلامة المهنية هو إدارة المخاطر المهنية. الطريقة المكونة من خمس خطوات المذكورة أدناه هي نهج بسيط تم اعتماده عالميًا لإدارة المخاطر:"
        />
     <BigRectangle
        bgColor="rgb(171, 59, 119)"
        enText="Identify the hazard"
        arText="تحديد المخاطر"
        num="1"

     />
     <BigRectangle
        bgColor="#c0000f"
        enText="Decide who might be harmed and how"
        arText="تحديد من قد يتأذى وكيف"
        num="2"
      
     />
      <BigRectangle
        bgColor="rgb(50, 100, 200)"
        enText="Evaluate the risks and decide on precautions"
        arText="تقييم المخاطر واتخاذ الاحتياطات اللازمة"
        num="3"
      
     />
      <BigRectangle
        bgColor="rgb(105, 228, 228)"
        enText="Record findings and implement them"
        arText="تسجيل النتائج وتنفيذها"
        num="4"
        textColor="rgb(35, 0, 80)"
     />
        <BigRectangle
        bgColor="rgb(250, 180, 40)"
        enText="Review the assessment and update regularly if needed"
        arText="مراجعة التقييم وتحديثه بانتظام عند الحاجة"
        num="5"
      textColor="rgb(35, 0, 80)"
     />
     <CompletionButton chapterNumber="6" questionNumber={15}/>
        </div>
        </>
       
    )
}
Question15.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:15 });
export default Question15;