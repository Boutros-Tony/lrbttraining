import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
const Question7 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="LRB(perceived) Limitations" 
       arText="قيود LRB (المتصورة)"/>
        <Paragraph
            enText="The same limitations and challenges that affect the LRBT methods apply to any construction approach and any project management scheme."
            arText="نفس القيود والتحديات التي تؤثر على أساليب LRBT تنطبق على أي نهج بناء وأي نظام إدارة مشروع."
        />
        <Paragraph
            enText="The only ingredient to success is proper planning and monitoring, with attention to details and emphasis on human resources management (Labour)."
            arText="العنصر الوحيد للنجاح هو التخطيط السليم والرصد، مع الاهتمام بالتفاصيل والتركيز على إدارة الموارد البشرية (العمالة)."
        />
         <DropDownText 
         bgColor="rgb(50, 100, 200)"
            enTitle="Poor quality outputs"
            enText="Experiences have convincingly demonstrated that LRB projects can provide good quality results provided that there is effective control and that quality standards are adhered to (for example by using compaction equipment where necessary)."
         arTitle="مردود ذات نوعية رديئة"
         arText="لقد أثبتت التجارب بشكل مقنع أن مشاريع LRB يمكن أن توفر نتائج جيدة الجودة بشرط وجود مراقبة فعالة والالتزام بمعايير الجودة (على سبيل المثال، باستخدام معدات الضغط عند الضرورة)."
         />
          <DropDownText 
         bgColor="rgb(171, 59, 119)"
            enTitle="Slow speed/progress and low outputs"
            enText="Productivity of labour can be increased several times if labour on site is effectively organised and supervised, motivated, and provided with good hand tools and appropriate support equipment."
         arTitle="ضعف في السرعة/التقدم ومردود منخفض"
         arText="يمكن زيادة إنتاجية العمل عدة مرات إذا تم تنظيم العمل في الموقع والإشراف عليه وتحفيزه وتزويده بأدوات يدوية جيدة ومعدات الدعم المناسبة."
         />
           <DropDownText 
         bgColor="rgb(250, 180, 40)"
         textColor="rgb(35, 0, 80)"
            enTitle="LRB projects are expensive"
            enText="Naturally, a lot depends on the productivity (output per average workday) achieved. It must be appreciated how essential it is to organise, manage and administrate labour-based, equipment-supported projects if they are to be successful."
         arTitle="مشاريع LRB مكلفة"
         arText="بالطبع، يعتمد الكثير على الإنتاجية (الناتج لكل يوم عمل متوسط) المحققة. يجب التقدير كيف هو ضروري تنظيم وإدارة المشاريع المعتمدة على العمالة وبدعم المعدات إذا كانت ستكون ناجحة."
         />
           <DropDownText 
         bgColor="#c0000f"
            enTitle="Supervision and administrative problems"
            enText="It is certainly true that different management skills are required to effectively run LRB projects and that these skills are essential at both the engineer’s and the supervisory levels. The LRB training/orientation for manager and supervisory staff (engineer and supervisors) is a crucial prior to commencing the LRB works."
         arTitle="مشكلات الإشراف والإدارة"
         arText="من الاكيد أنه مطلوب مهارات إدارية مختلفة لتشغيل المشاريع المعتمدة على الموارد المحلية بفعالية وأن هذه المهارات أساسية على مستويي الهندسة والإشراف. تدريب/توجيه الموارد المحلية للمديرين والموظفين الإشرافيين (المهندسين والمشرفين) هو أمر بالغ الأهمية قبل بدء أعمال الموارد المحلية."
         />

        <CompletionButton chapterNumber="2" questionNumber={7}/>
        </div>
    )
}
Question7.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 7 });
export default Question7;