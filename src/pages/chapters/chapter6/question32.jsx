import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question32 = () => {
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
       enText="Social and Environmental Safeguards - Screening and Analysis- Environmental Screening" 
       arText="الضمانات الاجتماعية والبيئية - التقييم والتحليل - التقييم البيئي"/>
      <HeadingTwo
        enText="Step by Step process"
        arText="العملية خطوة بخطوة"
      />
            
         <Paragraph
            enText="(i) The proponent of the intended project completes a Project Screening Form (PSF), Annex 4 of the EIA decree for submission to the MoE for screening"
            arText="(١) يقوم مقدم المشروع المقصود بإكمال نموذج تقييم المشروع (PSF)، الملحق 4 من مرسوم تقييم الأثر البيئي لتقديمه إلى وزارة البيئة لتقييمه"
        />
           <Paragraph
            enText="(ii) Screening is made based on two positive lists Annex I and Annex II, as well as Annex III which takes into account the project location  Annex 1 projects for which an EIA is required  Annex 2 projects for which only an IEE is required  If not listed in Annex 1 or 2 no further analysis is needed unless located in an Annex 3 in which case an IEE is required"
            arText="(٢) يتم التقييم بناءً على قائمتين إيجابيتين الملحق الأول والملحق الثاني، بالإضافة إلى الملحق الثالث الذي يأخذ في الاعتبار موقع المشروع: مشاريع الملحق 1 التي تتطلب تقييم الأثر البيئي EIA مشاريع الملحق 2 التي تتطلب تقييم التقييم البيئي المستقل فقط IEE إذا لم يتم ادراج المشروع في الملحق 1 أو 2، فلا يلزم إجراء تحليلات إضافية إلا إذا تم تحديد موقعه في الملحق 3 في هذه الحالة يلزم إجراء التقييم البيئي المستقل (IEE)."
        />
           <Paragraph
            enText="(iii) Duration of the MoE response is 15 days; if no response within this period is issued by MoE, the project proponent may proceed on the basis of the above screening rules"
            arText="(٣) مدة استجابة وزارة البيئة هي 15 يومًا؛ إذا لم يتم إصدار أي رد خلال هذه الفترة من قبل الوزارة، يجوز لمقترح المشروع المضي قدمًا على أساس قواعد التقييم المذكورة أعلاه"
        />
           <Paragraph
            enText="(iv) Scoping is required for projects subject to an EIA study; no scoping is required for projects requiring an IEE."
            arText="(٤) تحديد النطاق مطلوب للمشاريع الخاضعة لدراسة تقييم الأثر البيئي؛ ليس هناك حاجة إلى تحديد نطاق للمشاريع التي تتطلب التقييم البيئي المستقل (IEE)."
        />
           <Paragraph
            enText="(v) Environmental Management Plans of approved EIA/IEE studies should be integrated in project design (Annex 6 of the decree). Notably, costs of the EMP should be taken into consideration in the project’s feasibility study and mitigation and monitoring measures shall be integral parts of the project design"
            arText="(٥) ينبغي دمج خطط الإدارة البيئية لدراسات تقييم الأثر البيئي/ التقييم البيئي الخارجي المعتمدة في تصميم المشروع (الملحق 6 من المرسوم). ومن الجدير بالذكر أن تكاليف خطة الإدارة البيئية ينبغي أن تؤخذ في الاعتبار في دراسة جدوى المشروع ويجب أن تكون تدابير التخفيف والرصد جزءًا لا يتجزأ من تصميم المشروع"
        />
           <Paragraph
            enText="(vi) A technical committee reviews the report and a decision is issued by the Ministry within two months for EIA and within 30 days for IEE. If no decision is obtained within the stipulated review period the proponent can consider the EIA or IEE report, whichever is applicable, approved and go ahead with the project on the basis of the Environmental Management Plan included in the report"
            arText="(٦) تقوم لجنة فنية بمراجعة التقرير ويصدر قرار من الوزارة خلال شهرين بالنسبة لتقييم الأثر البيئي وخلال 30 يوما بالنسبة للتقييم البيئي المستقل. إذا لم يتم الحصول على قرار خلال فترة المراجعة المنصوص عليها، فيمكن لمقدم الطلب النظر في تقرير تقييم الأثر البيئي أو التقييم البيئي المستقل، أيهما قابل للتطبيق، والموافقة عليه والمضي قدمًا في المشروع على أساس خطة الإدارة البيئية المدرجة في التقرير"
        />
    <ImageComponent
        enSrc="/assets/screen-anal-evir.jpg"
        arSrc="/assets/screen-anal-evir-ar.jpg"
    />
     <CompletionButton chapterNumber="6" questionNumber={32}/>
        </div>
        </>
       
    )
}
Question32.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:32 });
export default Question32;