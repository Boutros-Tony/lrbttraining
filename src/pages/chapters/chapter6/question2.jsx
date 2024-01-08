import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import CircleDot from "../../../../components/circle-dot/circle-dot.component";
const Question2 = () => {
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
       enText="Legal Context" 
       arText="السياق القانوني"/>
       <HeadingTwo
        enText={ <>Labour <CircleDot enText="Lebanese Labour Law of 1946: Applicable to all workers except domestic and agricultural workers Ministry of Labour sets guidelines on working conditions and conducts labour inspections" arText="قانون العمل اللبناني لعام 1946 ينطبق على جميع العمال وأصحاب العمل باستثناء العمال المنزليين، والعمال الزراعيين، والمؤسسات المحدودة بأعضاء الأسرة فقط، والموظفين العموميين.
        تحدد وزارة العمل الإرشادات لتنظيم التوظيف وظروف العمل لجميع الموظفين وهي مسؤولة عن إجراء تفتيش العمل.
        " color="#c0000f" /></> }
        
        arText={ <>العمل<CircleDot enText="Lebanese Labour Law of 1946: Applicable to all workers except domestic and agricultural workers Ministry of Labour sets guidelines on working conditions and conducts labour inspections" arText="قانون العمل اللبناني لعام 1946 ينطبق على جميع العمال وأصحاب العمل باستثناء العمال المنزليين، والعمال الزراعيين، والمؤسسات المحدودة بأعضاء الأسرة فقط، والموظفين العموميين.
        تحدد وزارة العمل الإرشادات لتنظيم التوظيف وظروف العمل لجميع الموظفين وهي مسؤولة عن إجراء تفتيش العمل." color="#c0000f" /></> }
       />
   
   
       <Paragraph
        enText="Lebanese Labour Law of 1946 : Applicable to all workers except domestic and agricultural workers Ministry of Labour sets guidelines on working conditions and conducts labour inspections"
        arText="قانون العمل اللبناني لعام 1946: ينطبق على جميع العمال باستثناء العمال المنزليين والزراعيين. تحدد وزارة العمل الإرشادات بشأن ظروف العمل وتجري عمليات تفتيش العمل"
       />
       <HeadingTwo
        enText={<>Environmental Protection Law 
        <CircleDot 
        color="blue"
        enText="
        The legal basis for the Lebanese EIA system is established in the Environment Protection Law No. 444/2002 and the EIA decree No. 8633/2012 and its annexes. The EIA decree and its annexes include all the requirements for screening, preparation of the environmental assessment and the supervision of the environmental assessment process. As per Lebanon’s Environmental Protection Law possible environmental risks should be assessed and mitigation measures and opportunities for sustainable solutions developed."
         /> </>}
   
        arText={<>قانون حماية البيئة
          <CircleDot 
          color="blue"
          enText="The legal basis for the Lebanese EIA system is established in the Environment Protection Law No. 444/2002 and the EIA decree No. 8633/2012 and its annexes. The EIA decree and its annexes include all the requirements for screening, preparation of the environmental assessment and the supervision of the environmental assessment process. As per Lebanon’s Environmental Protection Law possible environmental risks should be assessed and mitigation measures and opportunities for sustainable solutions developed."
          arText="الأساس القانوني لنظام تقييم الأثر البيئي اللبناني محدد في قانون حماية البيئة رقم 444/2002 ومرسوم تقييم الأثر البيئي رقم 8633/2012 وملحقاته. ويتضمن مرسوم تقييم الأثر البيئي وملحقاته كافة متطلبات التقييم وإعداد التقييم البيئي والإشراف على عملية التقييم البيئي. وفقًا لقانون حماية البيئة اللبناني، ينبغي تقييم المخاطر البيئية المحتملة ووضع تدابير التخفيف وفرص الحلول المستدامة."
          /> </>}
       />
       <Paragraph
        enText="Environmental Protection Law No.444/20022 EIA decree No. 8633/2012 and annexes Annex 1 list for which an EIA study is required for construction Annex 2 list for which an Initial Environmental Examination (IEE) is required for construction Annex 3 list of projects located in sensitive areas"
        arText="قانون حماية البيئة رقم 444/2002 
        ومرسوم تقييم الأثر البيئي رقم 8633/2012 وملاحقه.
        الملحق 1 قائمة تتطلب دراسة تقييم الأثر البيئي للبناء.
         الملحق 2 قائمة تتطلب دراسة تقييم بيئي أولي (IEE) للبناء.
         الملحق 3 قائمة المشروعات الموجودة في المناطق الحساسة."
       />
     <CompletionButton chapterNumber="6" questionNumber={2}/>
        </div>
        </>
       
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;