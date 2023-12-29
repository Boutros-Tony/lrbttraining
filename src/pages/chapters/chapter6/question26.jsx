import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CircleText from "../../../../components/circle-text/circle-text.component";
const Question26 = () => {
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
       enText="Grievance Procedure" 
       arText="إجراءات الشكوى"/>
        <CircleText
            enText="Worker/beneficiary faces an issue"
            arText="يواجه العامل/المستفيد مشكلة"
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="20%"
            height="20%"
        />
         <CircleText
            enText="Worker/beneficiary reports the issues using a grievance channel"
            arText="يبلغ العامل/المستفيد عن المشكلة باستخدام احدى اساليب الشكوى"
            miniColor="rgb(224, 182, 204)"
            color="rgb(171, 59, 119)"
            width="30%"
            height="30%"
        />
           <CircleText
            enText="Grievance is reported"
            arText="يتم التبليغ عن الشكوى"
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="40%"
            height="40%"
        />
            <CircleText
            enText="Grievance is dealt with confidentially and with relevant officials"
            arText="يتم التعامل مع الشكوى بسرية مع المسؤولين المعنيين"
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="50%"
            height="50%"
        />
            <CircleText
            enText="Necessary measures are taken to address the grievance reporting"
            arText="يتم اتخاذ التدابير اللازمة للتعامل مع تقديم الشكوى"
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="60%"
            height="60%"
        />
          <CircleText
            enText="Procedure is logged into a confidential database. And follow-up with worker/beneficiary is conducted to protect against retaliation"
            arText="يتم تسجيل الإجراء في قاعدة بيانات سرية. ويتم المتابعة مع العامل/المستفيد للحماية ضد أي إجراءات انتقامية."
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="80%"
            height="80%"
        />
        
        
         
     <CompletionButton chapterNumber="6" questionNumber={26}/>
        </div>
        </>
       
    )
}
Question26.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:26 });
export default Question26;