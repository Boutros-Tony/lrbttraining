import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import WorkersResponsibility from "../../../../components/workers-respnsibility/workers-responsibility.component";
const Question19 = () => {
    const lang = LanguageDetector();
    const enList = [
        "OSH will function properly without proper joint committees and participatory OSH arrangements "
    ]
    const arList = [
     "لن يعمل نظام السلامة والصحة المهنية بشكل صحيح بدون اللجان المشتركة المناسبة وترتيبات السلامة والصحة المهنية المشتركة."
  ]
  const enList2 = [
    "Co-operate with their employer in the fulfilment of the obligations placed upon them and follow Occupational Safety and Health measures guidelines",
    "Report to their supervisor any situation that poses danger to their safety or health"
]
const arList2 = [
"التعاون مع صاحب العمل في الوفاء بالالتزامات المفروضة عليهم واتباع إرشادات تدابير السلامة والصحة المهنية.",
"إبلاغ مشرفهم بأي موقف يشكل خطراً على سلامتهم أو صحتهم."
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
       enText="Implementation of Occupational Safety & Health" 
       arText="مسؤولية العمال:"/>
     <FlagList
        enList={enList}
        arList={arList}
     />
    <HeadingTwo  
        enText="What do you think about it"
        arText="ما رأيك في ذلك؟"
    />
    <WorkersResponsibility/>
 <FlagList
        enList={enList2}
        arList={arList2}
     />
     <CompletionButton chapterNumber="6" questionNumber={19}/>
        </div>
        </>
       
    )
}
Question19.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:19 });
export default Question19;