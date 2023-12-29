import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";

const Question33= () => {
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
       enText="Social and Environmental Safeguards Facilitation through training" 
       arText="الضمانات الاجتماعية والبيئية من خلال التدريب"/>
        <DropDownText
            enTitle="Why"
            enText="To ensure that stakeholders have sufficient capacities, as well as technical and financial resources to comply with the social safeguards requirements."
            arTitle="لماذا"
            arText="لضمان أن يكون لدى أصحاب المصلحة القدرات الكافية، فضلاً عن الموارد الفنية والمالية للامتثال لمتطلبات الضمانات الاجتماعية."
           
            bgColor="rgb(119, 20, 73)"
            textColor="white"
        />
          <DropDownText
            enTitle="When"
            enText={<>
            • During the preparation of Designs <br />
            • Pre bid <br />
            • Tendering <br /> 
            • Contractor Training <br />
            • Launching of works</>}
            arTitle="متى"
            arText={<>
            <>
            • أثناء إعداد التصاميم<br />
            • قبل المناقصة <br />
            • التقديم للمناقصات <br /> 
            • تدريب المقاولين<br />
            • إطلاق الأعمالs</></>}
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        
        />
           <DropDownText
            enTitle="How"
            enText={<>• Mitigation measures during planning and design phase <br />

                • Meetings with stakeholders <br />
                
                • Prebid trainings <br />
                
                • Local development statement in the bid <br />
                
                • Training of contractor <br />
                
                • Meeting with Community members</>}
                 arTitle="كيف"
                 arText={<>• تدابير التخفيف خلال مرحلة التخطيط والتصميم <br />

• اجتماعات مع أصحاب المصلحة<br />
                 
• التدريب قبل تقديم المناقصات<br />
                 
• بيان التطوير المحلي في المناقصة<br />
                 
• تدريب المقاول <br />
                 
• الاجتماع مع أعضاء المجتمع</>}
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
          
        />
          
     <CompletionButton chapterNumber="6" questionNumber={33}/>
        </div>
        </>
       
    )
}
Question33.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:33 });
export default Question33;