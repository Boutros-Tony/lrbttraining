import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question4 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Fair income",
        "Occupational safety and Health",
        "Protection against Child Labour",
        "Working days and hours",
        "Supporting Legality of status",
        "Employment Contracts"
    ]
    const arList = [
        "دخل عادل",
        "السلامة والصحة المهنية",
        "الحماية ضد عمالة الأطفال",
        "أيام العمل وساعاته",
        "وضع قانوني للعمال",
        "عقود العمل"
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
       enText="What is Decent Work ?" 
       arText="ما هو العمل اللائق؟"/>
       <HeadingTwo
        enText="Decent Work Principles include:"
        arText="مبادئ العمل اللائق تشمل"
       />
        <FlagList enList={enList} arList={arList}/>
       <Paragraph
        enText="All actors involved in the implementation of employment intensive projects have a responsibility to ensure compliance with Lebanese labour law, core international labour standards and decent work principles."
        arText="لجميع الأطراف المشاركة في تنفيذ المشاريع ذات الكثافة الوظيفية مسؤولية ضمان الامتثال لقانون العمل اللبناني، ومعايير العمل الدولية الأساسية ومبادئ العمل اللائق."
       />
       
     
     
     <CompletionButton chapterNumber="6" questionNumber={4}/>
        </div>
        </>
       
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;