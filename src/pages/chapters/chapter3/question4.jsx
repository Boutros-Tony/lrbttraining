import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import FlagHeading from "../../../../components/flag-heading/flag-heading.component";
const Question4 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Importance of a well-developed Work Plan" 
       arText="أهمية خطة عمل متطورة"/>
      
        <FlagHeading
            enText=" A well-developed, comprehensive and realistic work plan is very important for a number of reasons: "
            arText="خطة عمل مطورة جيدًا وشاملة وواقعية امر مهّم لعدد من الأسباب:"
        />
            <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Allows the Contractor to plan required inputs and resources (required labour-force, equipment, materials)"
                arText="تسمح للمقاول بتخطيط المدخلات والموارد المطلوبة (قوة العمل المطلوبة، المعدات، المواد)."
                />
                <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Important management tool for Contractor to enable them to monitor the progress and take corrective action if delays happen"
                arText="أداة إدارية مهمة للمقاول لتمكينهم من مراقبة التقدم واتخاذ الإجراءات التصحيحية في حالة حدوث تأخير."
                />
                  <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Helps the Contractor to complete the work in time and at the least cost (i.e. maintaining a healthy profit margin)"
                arText="تساعد المقاول على إتمام العمل في الوقت المحدد وبأقل تكلفة (أي الحفاظ على هامش ربح سليم)."
                />
             <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="During work execution, the work plan is used for preparing daily site plan and weekly plan"
                arText="خلال تنفيذ العمل، يتم استخدام خطة العمل لإعداد خطة الموقع اليومية والخطة الأسبوعية."
                />
                <FlagHeading
            enText="When evaluating bids, ILO will assess"
            arText="عند تقييم العروض، سيقوم فريق عمل الILO بتقييم:"
        />
           <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Compliance with minimum requirements, e.g. level of detail, timing and sequencing of activities."
                arText="الامتثال للحد الأدنى من المتطلبات، على سبيل المثال. مستوى التفاصيل والتوقيت وتسلسل الأنشطة."
                />
                  <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Quality and practicality of the Work Plan (including resource plan, ie labour and equipment plan)"
                arText="جودة وواقعية خطة العمل (بما في ذلك خطة الموارد، أي خطة العمل والمعدات)."
                />
             <ColoredRectangle
                textColor='white'
                bgColor="#c0000f"
                enText="Whether the Work Plan clearly demonstrates how the work and employment targets will be achieved."
                arText="ما إذا كانت خطة العمل تفصّل بوضوح كيف سيتم تحقيق أهداف العمل والتوظيف."
                />
          <CompletionButton chapterNumber="3" questionNumber={4}/>
        </div>
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;