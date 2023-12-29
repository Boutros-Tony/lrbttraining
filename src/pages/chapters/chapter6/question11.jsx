import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";

import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
const Question11 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Many partners and organizations are working in similar fields of work and training programmes",
        "To ensure sustainability a referral mechanism will be put in place which will create a win-win situation"
    ]
    const arList = [
        "العديد من الشركاء والمنظمات يعملون في مجالات عمل وبرامج تدريب مماثلة.",
        "لضمان الاستدامة، سيتم وضع آلية إحالة تخلق موقفًا مربحًا للجميع."
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
       enText="Referrals" 
       arText="الإحالات"/>
       <FlagList
        enList={enList}
        arList={arList}
       />
      <ColoredRectangle
        enText="If contractor recruited referred workers she will have a group of workers who have already been either trained or involved in similar projects"
        arText="إذا قام المتعاقد بتوظيف العمال المحالين، سيكون لديه مجموعة من العمال الذين تم تدريبهم بالفعل أو شاركوا في مشاريع مماثلة."
        bgColor="rgb(171, 59, 119)"
        textColor="white"
      />
  <ColoredRectangle
        enText="If contractor refers workers to other agencies, the worker will have a good job opportunity due to the skills acquired from the EIIP"
        arText="إذا أحال المتعاقد العمال إلى وكالات أخرى، فسيكون لدى العامل فرصة عمل جيدة نظرًا للمهارات التي اكتسبها من برنامج EIIP."
        bgColor="rgb(171, 59, 119)"
        textColor="white"
      />
     <CompletionButton chapterNumber="6" questionNumber={11}/>
        </div>
        </>
       
    )
}
Question11.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 11 });
export default Question11;