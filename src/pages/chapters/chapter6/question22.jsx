import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question22 = () => {
    const lang = LanguageDetector();
    const enList = [
        "Equal Opportunity Approach",
        "Set Milestones for the effective employment of women",
        "Set Milestones for the effective employment of persons with disabilities",
        "Project team to monitor women participation and the participation of PWD regularly"
    ]
    const arList = [
        "نهج المساواة في الفرص",
        "تحديد أهداف لتوظيف النساء بشكل فعّال",
        "تحديد أهداف لتوظيف الأشخاص ذوي الإعاقة بشكل فعّال",
        "يجب على فريق المشروع مراقبة مشاركة النساء ومشاركة الأشخاص ذوي الإعاقة بانتظام"
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
       enText="What can be done ?" 
       arText="فيديو المشاركة الفعالة للنساء"/>
       <FlagList 
       enList={enList}
       arList={arList}
       />
    <Paragraph
        enText="Employers in Lebanon are prohibited from discriminating between men and women with regards to type of work, salary, recruitment, or promotion"
        arText="يحظر على أصحاب العمل في لبنان التمييز بين الرجال والنساء فيما يتعلق بنوع العمل، الراتب، التوظيف، أو الترقية."
        
    />
    <TrueOrFalse
        enQuestion="Is the following statement true or false? “It is okay for men and women to be paid differently even if they were performing the same task because men are more experienced than women and can perform better.”"
        enAnswer="Equal pay for Equal work is a basic principle of decent work and must be always implemented. If a worker requires additional capacity building to perform better, it is the responsibility of the contractor to provide them with the needed on-the-job training."
        arQuestion='هل العبارة التالية صحيحة أم خاطئة؟ من المقبول أن يحصل الرجال والنساء على أجور مختلفة حتى لو كانوا يؤدون نفس المهمة لأن الرجال أكثر خبرة من النساء ويمكنهم الأداء بشكل أفضل.'
        arAnswer="الأجر المتساوي للعمل المتساوي هو مبدأ أساسي للعمل اللائق ويجب تنفيذه دائمًا. إذا كان العامل بحاجة إلى بناء قدرات إضافية لتحسين أدائه، فإنه من مسؤولية المقاول تزويدهم بالتدريب اللازم أثناء العمل."
        correctAnswer={false}
    />
     <CompletionButton chapterNumber="6" questionNumber={22}/>
        </div>
        </>
       
    )
}
Question22.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:22 });
export default Question22;