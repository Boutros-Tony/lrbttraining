import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";

const Question29 = () => {
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
       enText="Social and Environmental Safeguards" 
       arText="الضمانات الاجتماعية والبيئية"/>
        <DropDownText
            enTitle="Social & Environmental Screening and Analysis"
            enText="Social & Environmental Screening and Analysis: when all social and environmental risks are identified during the project selection and design phase and proper mitigation measures are put in place to either eliminate those risks or minimize their consequences during the project implementation and operation phases."
            arTitle="التقييم والتحليل الاجتماعي والبيئي"
            arText="عندما يتم تحديد جميع المخاطر الاجتماعية والبيئية خلال مرحلة اختيار المشروع وتصميمه ووضع التدابير المناسبة للتخفيف لإزالة هذه المخاطر أو تقليل عواقبها خلال مراحل تنفيذ المشروع وتشغيله."
           
            bgColor="rgb(250, 180, 40)"
            textColor="rgb(35, 0, 80)"
        />
          <DropDownText
            enTitle="Social & Environmental Safeguards Facilitation"
            enText="Social & Environmental Safeguards Facilitation: Refers to the overall communication strategy that is put in place to effectively inform about the social and environmental safeguards compliance measures to all parties involved in the project"
            arTitle="تسهيل الضمانات الاجتماعية والبيئية"
            arText="تسهيل الضمانات الاجتماعية والبيئية: يشير إلى الاستراتيجية الإجمالية للتواصل التي يتم وضعها لإبلاغ جميع الأطراف المشاركة في المشروع بفعالية عن تدابير الامتثال للضمانات الاجتماعية والبيئية"
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
        
        />
           <DropDownText
            enTitle="Social & Environmental Safeguards Compliance"
            enText="Social & Environmental Safeguards Compliance: refers to the ESSF monitoring mechanism that allows project participants to identify non-compliance and avoid risks."
            arTitle="الامتثال للضمانات الاجتماعية والبيئية"
            arText="يشير إلى آلية مراقبة ESSF التي تسمح لمشاركي المشروع بتحديد عدم الامتثال وتجنب المخاطر."
           
            bgColor="rgb(119, 20, 73)"
            textColor="white"
        />
          
     <CompletionButton chapterNumber="6" questionNumber={29}/>
        </div>
        </>
       
    )
}
Question29.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:29 });
export default Question29;