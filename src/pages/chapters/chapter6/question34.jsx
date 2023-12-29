import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";

const Question34= () => {
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
       enText="Compliance"
       arText="الامتثال"/>
        <DropDownText
            enTitle="Why"
            enText="• To ensure the implementation and application of Social and Environmental Safeguards"
            arTitle="لماذا"
            arText="• لضمان تنفيذ وتطبيق الضمانات الاجتماعية والبيئية"
           
            bgColor="rgb(119, 20, 73)"
            textColor="white"
        />
          <DropDownText
            enTitle="When"
            enText={<>
          • Mobilization <br />
          • Project Implementation <br />
       </>}
            arTitle="متى"
            arText={<>
         
            • التعبئة<br />
            • تنفيذ المشروع<br />
           </>}
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        
        />
           <DropDownText
            enTitle="How"
            enText={<>• Mobilization Checklist completed by SSO <br />

                • Meetings with stakeholders <br />
                
                • SSO supervision throughout implementation <br />
                
                • Periodic Compliance Checklist completed by EIIP designated official</>}
                 arTitle="كيف"
                 arText={<>
• قائمة مراجعة التعبئة المكتملة بواسطة مسؤول الضمانات الاجتماعية<br />

• اجتماعات مع أصحاب المصلحة<br />
                 
• إشراف مسؤول الضمانات الاجتماعية طوال فترة التنفيذ<br />
                 
• قائمة التحقق الدورية للامتثال التي يكملها الموظف المعين من EIIP<br />
                 
</>}
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
          
        />
          
     <CompletionButton chapterNumber="6" questionNumber={34}/>
        </div>
        </>
       
    )
}
Question34.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:34 });
export default Question34;