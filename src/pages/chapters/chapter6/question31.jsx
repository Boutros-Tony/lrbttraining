import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CircleText from "../../../../components/circle-text/circle-text.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
const Question31 = () => {
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
       enText="Social and Environmental Safeguards - Screening and Analysis- Social Feasibility" 
       arText="الضمانات الاجتماعية والبيئية - التقييم والتحليل - الجدوى الاجتماعية"/>
      
                <Paragraph
            enText="Social Feasibility Analysis: The initial social feasibility is conducted by the EIIP team in consultation with stakeholders to identify potential social risks that relate to existing tensions within the community, community responsiveness, labour availability and land issues."
            arText="تحليل الجدوى الاجتماعية: يتم إجراء الجدوى الاجتماعية الأولية من قبل فريق EIIP بالتشاور مع أصحاب المصلحة لتحديد المخاطر الاجتماعية المحتملة التي تتعلق بالتوترات الحالية داخل المجتمع، واستجابة المجتمع، وتوافر العمالة وقضايا الأراضي."
        />
          <Paragraph
            enText="Projects that have high risk of increasing tension between refugees and the host communities, or those whereby the labour interest of the community is less than 50% of the estimated required workforce will not be included."
            arText="لن يتم تضمين المشاريع التي تنطوي على مخاطر عالية لزيادة التوتر بين اللاجئين والمجتمعات المضيفة، أو تلك التي تقل فيها مصلحة العمل في المجتمع عن 50٪ من القوى العاملة المقدرة المطلوبة."
        />
        <Paragraph
            enText="Once the project is selected for the phase of detailed design, EIIP team together with proper stakeholders will work on identifying potential social issues or concerns and their respective mitigation measures."
            arText="بمجرد اختيار المشروع لمرحلة التصميم المفصل، سيعمل فريق EIIP مع أصحاب المصلحة المناسبين على تحديد المشكلات الاجتماعية المحتملة أو القضايا وتدابير التخفيف المتعلقة بها."
        />
         <Paragraph
            enText="Proper design measures will be identified to avoid negative effects to sensitive areas or agricultural lands."
            arText="سيتم تحديد تدابير التصميم المناسبة لتجنب الآثار السلبية على المناطق الحساسة أو الأراضي الزراعية."
        />
         <Paragraph
            enText="A “Do No Harm” approach shall be adopted during the project implementation phase to ensure that no conflict sensitivity issues affect the goals to be reached."
            arText='سيتم اعتماد نهج "عدم الإضرار" خلال مرحلة تنفيذ المشروع لضمان عدم تأثير أي قضايا حساسية الصراع على الأهداف التي سيتم تحقيقها.'
        />
         <Paragraph
            enText="A “Community-Based” approach shall also be adopted while designing and implementing the funded projects. The importance of a community-based participatory approach is now generally recognised in the field of employability and infrastructure, whereby stakeholders have realised the significance of supporting the most vulnerable actors in the locations where the projects are being implemented            "
            arText='ويجب أيضًا اعتماد نهج "قائم على المجتمع" أثناء تصميم وتنفيذ المشاريع الممولة. لقد تم الآن الاعتراف بأهمية النهج التشاركي المجتمعي بشكل عام في مجال التوظيف والبنية التحتية، حيث أدرك أصحاب المصلحة أهمية دعم الجهات الفاعلة الأكثر ضعفًا في المواقع التي يتم فيها تنفيذ المشاريع.'
        />
        <CircleText
            enText="Initial social feasibility"
            arText="قابلية التنفيذ الاجتماعية الأولية"
            color="rgb(50, 100, 200)"
            miniColor="rgb(190, 220, 250)"
            width="10%"
            height="10%"
        />
         <CircleText
            enText="Elimination of potential high-risk projects"
            arText="الغاء على المشاريع المحتملة ذات المخاطر العالية"
            color="rgb(171, 59, 119)"
            miniColor="rgb(224, 182, 204)"
            width="20%"
            height="20%"
        />
         <CircleText
            enText="Identification of social issues and mitigation measures"
            arText="تحديد المشكلات الاجتماعية وتدابير التخفيف"
            color="rgb(250, 180, 40)"
            miniColor="rgb(255, 235, 171)"
            width="40%"
            height="40%"
        />
         <CircleText
            enText="Consultations with stakeholders-project owners"
            arText="التشاور مع أصحاب المصلحة وأصحاب المشاريع"
            color="rgb(105, 228, 228)"
            miniColor="rgb(210, 251, 251)"
            width="60%"
            height="60%"
        />
     <CompletionButton chapterNumber="6" questionNumber={31}/>
        </div>
        </>
       
    )
}
Question31.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:31 });
export default Question31;