import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CircleText from "../../../../components/circle-text/circle-text.component";
const Question20 = () => {
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
       enText="Reporting Accidents on-Site" 
       arText="الإبلاغ عن الحوادث في الموقع"/>
        <CircleText
            enText="Accident"
            arText="حادث"
            color="rgb(4, 147, 147)"
            width="20%"
            height="20%"
        />
           <CircleText
            enText="Supervisor/ Team Leader"
            arText="المشرف / قائد الفريق"
            color="rgb(4, 147, 147)"
            width="30%"
            height="30%"
        />
           <CircleText
            enText="Contractor OSH Focal Point & SSO"
            arText="نقطة تركيز السلامة والصحة المهنية للمقاول & الموظف المسؤول عن السلامة والأمان"
            color="rgb(4, 147, 147)"
            width="50%"
            height="50%"
        />
           <CircleText
            enText="Referral as needed and as case requires"
            arText="الإحالة حسب الحاجة وحسب متطلبات الحالة"
            color="rgb(4, 147, 147)"
            width="60%"
            height="60%"
        />
           <CircleText
            enText="Submit accident report with details of accident (causes, results) and mitigation measures"
            arText="تقديم تقرير بالحادث مع تفاصيل الحادث (الأسباب، النتائج) وتدابير التقليل من الأخطار."
            color="rgb(4, 147, 147)"
            width="70%"
            height="70%"
        />
     <CompletionButton chapterNumber="6" questionNumber={20}/>
        </div>
        </>
       
    )
}
Question20.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:20 });
export default Question20;