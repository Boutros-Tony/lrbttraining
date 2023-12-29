import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";

const Question24 = () => {
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
       enText="Why a Grievance Mechanism?" 
       arText="لماذا آلية الشكوى؟"/>
     
 
    <TrueOrFalse
        enQuestion="If a worker reported a complaint against the contractor, the contractor has the right to terminate their contract given that this worker may have a negative impact on the rest of the team which may affect the project negatively."
        enAnswer="Workers have the full right to voice their complaints and grievances. Moreover, the workers who raise a complaint are fully protected against any retaliation measures that might be taken against them by anyone."
        arQuestion="إذا قدم عامل شكوى ضد المتعاقد، فللمتعاقد الحق في إنهاء العقد معتبرًا أن هذا العامل قد يكون له تأثير سلبي على بقية الفريق مما قد يؤثر على المشروع بشكل سلبي."
        arAnswer=" للعمال الحق الكامل في التعبير عن شكاويهم واستياءهم. وعلاوة على ذلك، يتم حماية العمال الذين يقدمون شكوى بشكل كامل ضد أي إجراءات انتقامية قد تتخذ ضدهم من قبل أي شخص."
        correctAnswer={false}
    />
    <Paragraph
        enText="Employment Intensive Infrastructure Programmes aim to achieve high levels of positive impact within communities where EIIP projects are implemented; this is applicable for direct and indirect beneficiaries. Promoting the decent work principles and ensuring a safe space for everyone to sound their concerns, grievances, and complaints, the EIIP have developed a grievance mechanism that is open to workers, community members, contractors, and contractors’ team."
        arText="تهدف برامج التوظيف المكثف والبنية التحتية إلى تحقيق مستويات عالية من الأثر الإيجابي ضمن المجتمعات التي يتم تنفيذ مشاريع البرنامج فيها؛ وهذا ينطبق على المستفيدين المباشرين وغير المباشرين. من خلال الترويج لمبادئ العمل اللائق وضمان مكان آمن للجميع للتعبير عن مخاوفهم واستياءهم وشكاويهم. قام البرنامج بتطوير آلية لتقديم الشكاوى مفتوحة للعمال، وأعضاء المجتمع، والمقاولين، وفريق المقاولين."
    />
     <CompletionButton chapterNumber="6" questionNumber={24}/>
        </div>
        </>
       
    )
}
Question24.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:24 });
export default Question24;