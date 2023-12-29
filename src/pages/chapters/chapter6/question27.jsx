import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Exercise from "../../../../components/exercise/exercice.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";

const Question27 = () => {
    const lang = LanguageDetector();
    const enOptions = [
     "Degraded wetland that damages the ecosystem and habitat",
     "Removal of a cultural heritage asset due to overlapping with project location",
     "Construction and demolition waste generated through project disposed randomly in undesignated areas",
     "Disposal of packaging from used chemicals in the street garbage bin"
    ]
    const arOptions= [
        "تدهور الأراضي الرطبة التي تضر بالنظام البيئي والمواطن",
        "إزالة مورد من التراث الثقافي بسبب تداخله مع موقع المشروع",
        "النفايات الناتجة عن البناء والهدم التي تم التخلص منها بشكل عشوائي في مناطق غير محددة",
        "التخلص من التغليف الخاص بالمواد الكيميائية المستخدمة في سلة المهملات بالشارع"
    ]
    const enAnswer = [
        "Degraded wetland that damages the ecosystem and habitat",
        "Removal of a cultural heritage asset due to overlapping with project location",
        "Construction and demolition waste generated through project disposed randomly in undesignated areas",
        "Disposal of packaging from used chemicals in the street garbage bin"
    ]
    const arAnswer = [
        "تدهور الأراضي الرطبة التي تضر بالنظام البيئي والمواطن",
        "إزالة مورد من التراث الثقافي بسبب تداخله مع موقع المشروع",
        "النفايات الناتجة عن البناء والهدم التي تم التخلص منها بشكل عشوائي في مناطق غير محددة",
        "التخلص من التغليف الخاص بالمواد الكيميائية المستخدمة في سلة المهملات بالشارع"
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
       enText="Exercise 2" 
       arText="تمرين 2"/>
     
       <Exercise
        enQuestion="Which of the below items are examples of negative environmental impact?(Select all that apply)"
        arQuestion="أي من العناصر التالية هي أمثلة على الأثر البيئي السلبي؟ (حدد كل ما ينطبق)"
        enOptions={enOptions}
        arOptions={arOptions}
        enAnswer={enAnswer}
        arAnswer={arAnswer}
        enResult="All of the items are examples of negative environmental impact"
        arResult="النقاط الرئيسية هي: التوظيف العادل، توفير وسائل نقل آمنة ومجانية، تقديم التدريب وبناء القدرات."
        isMultiple
       />
     
     
     <CompletionButton chapterNumber="6" questionNumber={27}/>
        </div>
        </>
       
    )
}
Question27.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 27 });
export default Question27;