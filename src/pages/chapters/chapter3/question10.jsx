import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ImageComponent from "../../../../components/image-component/image-component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question10 = () => {
    const lang = LanguageDetector();
  
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Preparing a Work Plan" 
       arText="إعداد خطة العمل"/>
     
     
       
        <ImageComponent
        width="60%"
            enSrc="/assets/overall-planing.png"
        enAlt="A flowchart for overall planning, reporting, and monitoring system. It starts with 'Productivity (task rates)' and 'Social and environmental safeguards' leading to 'Supervision Monitoring.' Below, it lists 'Overall work plan,' 'Daily planning and reporting,' 'Weekly reporting,' and 'Monthly reporting.' These elements circle back to 'Quality and labour control,' which connects back to the starting point, indicating a continuous process loop"
        arSrc="/assets/overall-planing-ar.png"
        arAlt="نظام التخطيط الشامل وإعداد التقارير والرصد. يبدأ بـ 'الإنتاجية (معدلات المهام)' و'الضمانات الاجتماعية والبيئية' التي تؤدي إلى الإشراف  والرصد. أدناه، يُدرج 'الخطة العمل العامة، 'التخطيط والتقرير اليومي'، 'التقرير الأسبوعي'، و'التقرير الشهري'. ترتبط هذه العناصر بـ 'الجودة والتحكم بالعمالة'، الذي يتصل مرة أخرى بنقطة البداية، مما يشير إلى دورة عملية مستمرة"
        />
          <CompletionButton chapterNumber="3" questionNumber={10}/>
        </div>
    )
}
Question10.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 10 });
export default Question10;