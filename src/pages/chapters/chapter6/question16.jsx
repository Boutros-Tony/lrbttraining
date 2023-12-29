import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question16 = () => {
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
       enText="Determing the Risk" 
       arText="تحديد المخاطر"/>
      <Paragraph
        enText="The risk is the chance, high or low, that somebody could be harmed by hazards, together with an indication of how serious the harm could be:"
        arText="المخاطر هي احتمالية، سواء كانت عالية أو منخفضة، أن يتعرض شخص ما للضرر من جراء المخاطر، مع إشارة إلى مدى خطورة الضرر الذي قد يحدث."
        />
    <ImageComponent
        enSrc="/assets/determining-the-risk-2.jpg"
        arSrc="/assets/determining-the-risk-2-ar.jpg"
        width="80%"
        enAlt="A diagram titled 'Determining the Risk' explains the components that contribute to workplace risk. It identifies 'Probability of Occurrence,' 'Severity of Injury,' and 'Number of Workers exposed' as key factors. These factors lead to the conclusion, highlighted in red, 'Increased Risk!' The text below the diagram notes that risk matrices can be used to quantify risk and assist in prioritizing actions"
        arAlt="رسم بياني بعنوان 'تحديد المخاطر يشرح المكونات التي تساهم في خطر مكان العمل. يحدد 'احتمال الوقوع'، 'شدة الإصابة'، و'عدد العمال المعرضين' كعوامل رئيسية. تؤدي هذه العوامل إلى الاستنتاج المُبرز باللون الأحمر 'زيادة المخاطر!' يُشير النص أسفل الرسم البياني إلى أنه يمكن استخدام مصفوفات الخطر لتحديد الخطر بشكل كمي والمساعدة في تحديد أولويات الإجراءات."
    />
    <Paragraph
        enText="Risk matrices can be used to quantify risk and thus assist in prioritizing actions"
        arText="يمكن استخدام مصفوفات المخاطر لتقدير المخاطر وبالتالي المساعدة في تحديد الأولويات للإجراءات."
    />
     <CompletionButton chapterNumber="6" questionNumber={16}/>
        </div>
        </>
       
    )
}
Question16.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:16 });
export default Question16;