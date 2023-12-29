import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import RectangleShowText from "../../../../components/rectangle-show-text/rectangle-show-text.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";

const Question9 = () => {
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
       enText="Role of ILO’s Environmental and Social Safeguard Officers" 
       arText="دور مسؤولي الضمانات الاجتماعية والبيئية في منظمة العمل الدولية:"/>
       
        <RectangleShowText
            enText="Reach out to municipalities and key people"
            arText="التواصل مع البلديات والأشخاص الرئيسيين"
        />
         <RectangleShowText
            enText="Inform & advocate the objectives and benefits of the project for the community"
            arText="الإعلان عن والدعوة لحضور ندوات عن أهداف وفوائد المشروع للمجتمع"
            showTextInitially
        />
           <RectangleShowText
            enText="Communicate with the public at large through different channels prior to implementation"
            arText="التواصل مع المجتمع المحلي بشكل عام من خلال القنوات المختلفة قبل التنفيذ"
        />
           <RectangleShowText
            enText="Explain importance of recruiting men and women on EIIP Projects"
            arText="شرح أهمية توظيف الرجال والنساء في مشاريع EIIP"
            showTextInitially
        />
           <RectangleShowText
            enText="Respect Inclusive Job Application procedures (time, location, languages, etc.)"
            arText="تنفيذ اجراءات لتقديم الطلبات تكون شاملة لجميع فئات المجتمع المحلي (الوقت والموقع واللغات وما إلى ذلك)"
            showTextInitially
        />
           <RectangleShowText
            enText="Reach out to as many NGOs and CBOS to increase labour outreach (men and women)"
            arText="التواصل مع أكبر عدد من المنظمات غير الحكومية والهيئات المجتمعية لزيادة الوصول إلى العمالة (الرجال والنساء والأشخاص ذوي الإعاقة)"
        />
           <RectangleShowText
            enText="Highlight the importance and benefit of engaging women and persons with disabilities"
            arText="تسليط الضوء على الأهمية والفائدة من مشاركة النساء والأشخاص ذوي الإعاقة"
            showTextInitially
        />
           <RectangleShowText
            enText="Highlight main impacts of the project to the community"
            arText="تسليط الضوء على الآثار الرئيسية للمشروع على المجتمع"
            showTextInitially
        />

     <CompletionButton chapterNumber="6" questionNumber={9}/>
        </div>
        </>
       
    )
}
Question9.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 9 });
export default Question9;