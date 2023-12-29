import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";

import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question10 = () => {
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
       enText="Standard advertisement template" 
       arText="نموذج إعلان معتمد"/>
       <ImageComponent
       enSrc="/assets/standard-ad.png"
       arSrc="/assets/standard-ad-ar.png"
       enAlt="The Employment Intensive Infrastructure Programme in Lebanon (EIIP) implemented by the International Labour Organization (ILO) and funded by the German government through the German Development Bank (KfW) aims at creating short-term decent work opportunities for women and men, Lebanese and Syrians registered with the UNHCR, of ages eighteen and above, through a project XXX.

       All job opportunities provided by the EIIP comply with decent working conditions, which include safe working environment and specified COVID-19 measures.
       
       For more information on payment and other working conditions, please contact the Implementing partner in charge of this project (XXX) on the following number (Phone number). Person responsible for applications is (Name of focal point). 
       
       Kindly note that recruitment is taking place the week of XXX and that opportunities are limited."
       arAlt="برنامج البنية التحتية المكثفة للتوظيف في لبنان (EIIP) الذي تنفذه منظمة العمل الدولية (ILO) وتموله الحكومة الألمانية من خلال بنك التنمية الألماني (KfW) يهدف إلى إنشاء فرص عمل قصيرة الأجل للنساء والرجال، اللبنانيين والسوريين المسجلين في اللجنة العليا لشؤون اللاجئين، الذين تتراوح أعمارهم بين ثمانية عشر سنة فما فوق، من خلال مشروع XXX.

       تتوافق جميع فرص العمل التي يقدمها البرنامج مع شروط العمل اللائقة، والتي تشمل بيئة عمل آمنة وتدابير محددة لمكافحة فيروس كورونا.
       
       لمزيد من المعلومات حول الدفع وغيرها من شروط العمل، يرجى الاتصال بالشريك المنفذ المسؤول عن هذا المشروع (XXX) على الرقم التالي (رقم الهاتف). الشخص 
       المسؤول عن الطلبات هو (اسم الشخص المعني).
       
       يرجى الملاحظة أن التوظيف سيتم في أسبوع XXX وأن الفرص محدودة."
       width="80%"
       />

     <CompletionButton chapterNumber="6" questionNumber={10}/>
        </div>
        </>
       
    )
}
Question10.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 10 });
export default Question10;