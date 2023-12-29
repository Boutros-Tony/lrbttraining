import { ChaptersPageLayout } from ".";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import UlList from "../../../../components/ul-list/ul-list.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
const Question6 = () => {
    const lang = LanguageDetector();
    const enList1 = [
       "Estimate labour cost and equipment cost",
       "Prepare Work program (Resource plan)",
     ]
    const arList1 = [
        "تقدير تكلفة العمالة وتكلفة المعدات",
        "إعداد برنامج العمل (خطة الموارد)"
     ]
    const enList2 = [
       "Prepare daily, and weekly site plan",
       "Managing labour force on site",
       "Work monitoring and reporting",
       "Estimate labour cost for price negotiation with labour sub-contractors"
    ]
    const arList2 = [
        "إعداد خطة الموقع اليومية والأسبوعية",
        "إدارة قوة العمل في الموقع",
        "رصد العمل والتقارير",
        "تقدير تكلفة العمالة للتفاوض على الأسعار مع المقاولين الفرعيين للعمالة"
    ]
    const enList3 = [
        "Task rates",
        "Climatic conditions in the area of operation",
        "General physical abilities of the available labour force",
        "Nature of the works",
        "Organisational and technical challenges",
        "Quality of tools, equipment and materials",
        "Capacity of site supervisors for organising the labour force and providing on-the-job training"
     ]
    const arList3 = [
      "معدلات المهام",
      "الظروف المناخية في منطقة التشغيل",
      "القدرات البدنية العامة لقوة العمل المتاحة",
      "طبيعة الأعمال",
      "التحديات التنظيمية والتقنية",
      "جودة الأدوات والمعدات والمواد",
      "قدرة مشرفي الموقع على تنظيم قوة العمل وتوفير التدريب في الوظيفة"
    ]
    const enList4 = [
        "Tasks must be fair!",
        "A correctly set task rate should allow most workers to complete their daily task in about six hours.",
        "The task rates should be reviewed regularly to ensure that they are fair"
    ]
    const arList4 = [
        "يجب أن تكون المهام عادلة!",
        "يجب أن يتيح معدل المهمة المحدد بشكل صحيح لامكان معظم العمال اكمال مهمتهم اليومية في حوالي ست ساعات.",
        "يجب مراجعة معدلات المهام بانتظام لضمان أنها عادلة"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Task rates and Productivity" 
       arText="معدلات المهام والإنتاجية "/>
        <Paragraph
            enText="It is very important to know the task rates of labour and equipment for:"
            arText="معدلات المهام هي المعيار الأساسي الذي يسمح بتسعير دقيق وتخطيط فعّال."
        />
     
     
       <FlagHeading
            enText="Preparing Tender:"
            arText="تعريف معدل المهمة:"
       />
       <UlList enList={enList1} arList={arList1}/>
       <FlagHeading
            enText="Work execution:"
            arText="تنفيذ العمل:"
       />
       <UlList enList={enList2} arList={arList2}/>
       <FlagHeading
            enText="Labour productivity are determined by"
            arText="يتم تحديد إنتاجية العمالة بواسطة"
       />
       <UlList enList={enList3} arList={arList3}/>
       <h3 style={{color:"red"}}>{lang === 'ar' ? "تذكر" : "Remember"}</h3>
      <FlagList enList={enList4} arList={arList4}/>
          <CompletionButton chapterNumber="4" questionNumber={6}/>
        </div>
    )
}
Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;