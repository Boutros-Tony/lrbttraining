import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import HeadingTwo from "../../../../components/heading-2/heading-2.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
const Question7 = () => {
    const lang = LanguageDetector();
    const enList1 = [
        "Contract format",
        "LRB specifications",
        "LRB work approach",
        "LRB productivity norms",
        "Work programming",
        "Costing for LRB items",
        "Environmental Social Safeguards Framework",
        "Tender preparation and submission",
        "Contract procedures",
        "Pre-tender meeting and site visit"
    ]
    const arList1 = [
        "صيغة العقد",
        "مواصفات LRB",
        "نهج عمل LRB",
        "معايير إنتاجية LRB",
        "برمجة العمل",
        "تقدير التكاليف لمواد LRB",
        "إطار الضمانات الاجتماعية والبيئية",
        "إعداد المناقصة وتقديمها",
        "إجراءات العقد",
        "اجتماع ما قبل المناقصة وزيارة الموقع"
    ]
    const enList2 = [
        "1 day training for the winning bidder",
        "Contractors/Managers",
        "Site Supervisors",
        "LRB work preparations",
        "Labour recruitment and employment",
        "Labour standards, management and OSH",
        "Work programming and resource planning",
        "Site management, task rate & quality control",
        "Work implementation",
        "Recording & reporting",
        "Contract management"
    ]
    const arList2= [
        "تدريب لمدة يوم واحد لمقدم المناقصة الفائزة",
        "المقاولون / المديرون",
        "مشرفين الموقع",
        "الاستعدادات لعمل LRB",
        "استقدام العمالة وتوظيفها",
        "معايير العمل والإدارة والصحة والسلامة المهنية",
        "غرف التجارة والصناعة الأخرى",
        "برمجة العمل وتخطيط الموارد",
        "إدارة الموقع ومعدل المهام ومراقبة الجودة",
        "تنفيذ العمل",
        "التسجيل والإبلاغ",
        "ادارة العقود"
    ]
    const enList3 = [
        "Through-out contract implementation",
        "Contractors/Managers",
        "Site Supervisors & Labourers"
    ]
    const arList3 = [
        "تنفيذ العقد بالكامل",
        "المقاولون / المديرون",
        "مشرفين وعمال الموقع"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="EIIP Contractor Training Strategy" 
       arText="استراتيجية تدريب المقاولين EIIP"/>
        <HeadingTwo
            enText="LRBT Pre-tender Training"
            arText="تدريب LRBT ما قبل المناقصة"
        />
        <FlagList
        enList={enList1}
        arList={arList1}
        />
        <ColoredRectangle
        enText="Certificate of attendance  is mandatory to submit a tender"
        arText="إنجاز الشهادة إلزامي لتقديم المناقصة"
        textColor="white"
        bgColor="rgb(50, 100, 200)"
        />
        <HeadingTwo
        enText="Up-start Training"
        arText="التدريب التحضيري"
        />
         <FlagList
        enList={enList2}
        arList={arList2}
        />
        <HeadingTwo
        enText="Supervision & Support"
        arText="الإشراف والدعم"
        />
         <FlagList
        enList={enList3}
        arList={arList3}
        />
        <ColoredRectangle
        enText="Certificate of successful completion of contract"
        arText="شهادة إتمام العقد بنجاح"
        textColor="white"
        bgColor="rgb(50, 100, 200)"
        />
        <CompletionButton chapterNumber="1" questionNumber={7}/>
        </div>
    )
}
Question7.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 7 });
export default Question7;