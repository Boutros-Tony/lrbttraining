import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import CircleDot from "../../../../components/circle-dot/circle-dot.component";
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
       enText="Legal Context" 
       arText="السياق القانوني"/>
       <HeadingTwo
        enText={ <>Labour <CircleDot color="red" /></> }
        arText="العمل"
       />
       <Paragraph
        enText="Lebanese Labour Law of 1946 : Applicable to all workers except domestic and agricultural workers Ministry of Labour sets guidelines on working conditions and conducts labour inspections"
        arText="قانون العمل اللبناني لعام 1946: ينطبق على جميع العمال باستثناء العمال المنزليين والزراعيين. تحدد وزارة العمل الإرشادات بشأن ظروف العمل وتجري عمليات تفتيش العمل"
       />
       <HeadingTwo
        enText={<>Environmental Protection Law <CircleDot color="blue" /> </>}
        arText="قانون حماية البيئة"
       />
       <Paragraph
        enText="Environmental Protection Law No.444/20022 EIA decree No. 8633/2012 and annexes Annex 1 list for which an EIA study is required for construction Annex 2 list for which an Initial Environmental Examination (IEE) is required for construction Annex 3 list of projects located in sensitive areas"
        arText="قانون حماية البيئة رقم 444/2002 
        ومرسوم تقييم الأثر البيئي رقم 8633/2012 وملاحقه.
        الملحق 1 قائمة تتطلب دراسة تقييم الأثر البيئي للبناء.
         الملحق 2 قائمة تتطلب دراسة تقييم بيئي أولي (IEE) للبناء.
         الملحق 3 قائمة المشروعات الموجودة في المناطق الحساسة."
       />
     <CompletionButton chapterNumber="6" questionNumber={2}/>
        </div>
        </>
       
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;