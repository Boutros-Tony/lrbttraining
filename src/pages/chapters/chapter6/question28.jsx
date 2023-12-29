import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
const Question28 = () => {
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
       enText="Environmental Safeguards Provisions" 
       arText="الضمانات الوقائية البيئية"/>
       <Paragraph
        enText="A matrix of all activities that might pose an impact to the environment should be prepared during the project planning and design phase, as well as continuously updated during the implementation and operation and maintenance phases. The risk will be analysed based on the likelihood of occurrence and the severity of impact, according to which mitigation measures are to be developed."
       arText="يجب إعداد مصفوفة لجميع الأنشطة التي قد تؤثر على البيئة خلال مرحلة التخطيط والتصميم للمشروع، وكذلك تحديثها باستمرار خلال مراحل التنفيذ والتشغيل والصيانة. سيتم تحليل الخطر استنادًا إلى احتمالية حدوثه وشدة التأثير، وبناءً على ذلك يتم تطوير تدابير التخفيف."
       />
        <DropDownText
            enTitle="Activity"
            arText={<>• مرحلة التخطيط والتصميم <br />
                       • البناء <br />
                       • التشغيل والصيانة</>}
            arTitle="النشاط"
            enText={<>• Planning and Design phase <br />
            • Construction <br />
            • Operation and Maintenance</>}
            bgColor="rgb(171, 59, 119)"
            textColor="white"
        
        />
          <DropDownText
            enTitle="Impact"
            enText={<>
                • Soil pollution <br />
                • Biodiversity <br />
                • Air pollution <br />
                • Water pollution (aquifers and nearby water bodies) <br />
                • Noise
            </>}
            arTitle="التأثير"
            arText={<>
                • تلوث التربة<br />
                • التنوع البيولوجي <br />
                • تلوث الهواء<br />
                • تلوث المياه (طبقات المياه الجوفية والمسطحات المائية القريبة) <br />
                • ضوضاء
            </>}
            bgColor="#c0000f"
            textColor="white"
        
        />
           <DropDownText
            enTitle="Risk Analysis"
            enText="• Impact vs likelihood of occurrence"
            arTitle="تحليل المخاطر"
            arText="• التأثير مقابل احتمالية الحدوث"
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        
        />
            <DropDownText
            enTitle="Mitigation measures"
            enText={<>
                • Planning and Design phase <br />
                • Construction <br />
                • Operation and Maintenance
            </>}
            arTitle="تدابير التخفيف"
            arText={<>
                • مرحلة التخطيط والتصميم<br />
                • البناء <br />
                • التشغيل والصيانة
            </>}
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
        
        />
          
     <CompletionButton chapterNumber="6" questionNumber={28}/>
        </div>
        </>
       
    )
}
Question28.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:28 });
export default Question28;