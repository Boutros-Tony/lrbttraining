import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";

const Question30 = () => {
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
       arText="تعزيز المشاركة الشاملة"/>
        <DropDownText
            enTitle="Why"
            enText="• To identify mitigation measures to environmental and social related concerns"
            arTitle="لماذا"
            arText="• لتحديد التدابير التخفيفية للقضايا المتعلقة بالبيئة والجوانب الاجتماعية"
           
            bgColor="rgb(119, 20, 73)"
            textColor="white"
        />
          <DropDownText
            enTitle="When"
            enText="• During the Identification, Prioritization, Inspection, Selection and Detailed Surveying of the project"
            arTitle="متى"
            arText="• خلال تحديد، وترتيب الأولويات، والتفتيش، والاختيار، والمسح التفصيلي للمشروع"
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        
        />
           <DropDownText
            enTitle="How"
            enText={<>• Social Feasibility Analysis <br />

                • Environmental Screening</>}
            arTitle="كيف"
            arText={<>•  تحليل قابلية التنفيذ الاجتماعية <br />

• تقييم بيئي</>}
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
          
        />
          
     <CompletionButton chapterNumber="6" questionNumber={30}/>
        </div>
        </>
       
    )
}
Question30.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:30 });
export default Question30;