import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Exercise from "../../../../components/exercise/exercice.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";

const Question5 = () => {
    const lang = LanguageDetector();
    const enOptions = [
        "Fair recruitment",
        "Recruitment of women only (prioritizing women over men)",
        "Provide safe and free of charge transportation",
        "Provide training and capacity building",
        "Work without signing any contract",
        "Recruit only skilled workers and those that are knowledgeable"
    ]
    const arOptions= [
        "التوظيف العادل",
        "توظيف النساء فقط (إعطاء الأولوية للنساء عن الرجال)",
        "توفير وسائل نقل آمنة ومجانية",
        "توفير التدريب وبناء القدرات",
        "العمل دون توقيع أي عقد",
        "توظيف العمال الماهرين فقط وأولئك الذين لديهم المعرفة"
    ]
    const enAnswer = [
        "Fair recruitment",
        "Provide safe and free of charge transportation",
        "Provide training and capacity building",
    ]
    const arAnswer = [
        "التوظيف العادل",
        "توفير وسائل نقل آمنة ومجانية",
        "توفير التدريب وبناء القدرات",
    ]
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
       enText="Exercise 2" 
       arText="تمرين 2"/>
     
       <Exercise
        enQuestion="Which of the below items are among the Decent Work principles? (Select all that apply)"
        arQuestion="أي من العناصر التالية تعد من مبادئ العمل اللائق؟ (حدد كل ما ينطبق)"
        enOptions={enOptions}
        arOptions={arOptions}
        enAnswer={enAnswer}
        arAnswer={arAnswer}
        enResult="The main points are : Fair recruitment, Provide safe and free of charge transportation , Provide training and capacity building"
        arResult="النقاط الرئيسية هي: التوظيف العادل، توفير وسائل نقل آمنة ومجانية، تقديم التدريب وبناء القدرات."
        isMultiple
       />
     
     
     <CompletionButton chapterNumber="6" questionNumber={5}/>
        </div>
        </>
       
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;