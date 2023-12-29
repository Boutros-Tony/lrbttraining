import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";

import Paragraph from "../../../../components/paragraph/paragaraph.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
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
       enText="Labour vs Equipment in construction" 
       arText="العمَال مقابل معدات العمل في البناء"/>
        <Paragraph 
        enText="Two main divergent schools apply in the construction sector – Labour intensive, or equipment based methods. The Local Resource Based Methodology combines the best of both worlds to offer an efficient and impactful approach in construction."
        arText="تتقدم مدرستان رئيسيتان مختلفتان في قطاع البناء - العمالة الكثيفة، أو الأساليب القائمة على المعدات. تجمع المنهجية القائمة على الموارد المحلية بين أفضل ما في العالمين لتقديم نهج فعال ومؤثر في البناء."
        />
       {
        lang === 'ar' ? 
                <img width="60%" src="/assets/LabourvsEquipmentinconstruction-arabic.png" alt="الصورة عبارة عن تخطيط فين مع دائرتين متداخلتين. الدائرة الأولى موسومة بـ مبني على العمالة المكثّفة ووالأخرى بـ مبني على المعدات. في المنطقة المتداخلة بين الدائرتين، هناك عنوان يشير إلى مبني على الموارد المحلية، مما يدل على العناصر المشتركة بين الفئتين الكثيفة العمالة والتي تعتمد على المعدات. هناك نقاط مع خطوط متقطعة داخل الدوائر والمنطقة المتداخلة، تشير إلى نقاط محددة ذات صلة بكل فئة."  /> : 
                <img width="60%" src="/assets/LabourvsEquipmentinconstruction.png"  alt="The image is a Venn diagram with two overlapping circles. The left circle is labeled Labour-intensive and the right circle is labeled Equipment based. In the overlapping section, the diagram is labeled Local Resource-based, indicating the commonalities between labor-intensive and equipment-based categories. There are dots with dotted lines within the circles and the overlapping area, marking specific points related to each category."  />
       }
          <CompletionButton chapterNumber="2" questionNumber={2}/>
        </div>
        </>
       
    )
}
Question2.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 2 });
export default Question2;