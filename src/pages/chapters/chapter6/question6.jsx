import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
const Question6 = () => {
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
       enText="Decent Work Condtions" 
       arText="ظروف العمل اللائقة"/>
        <DropDownText
            enTitle="Fair & Transparent Recruitment"
            enText="Contractor should use diversified outreach channels, and should have a clear selection criteria that is inclusive for the most vulnerable population. The advertisement, selection and recruitment procedure should be inclusive and non-discriminatory (considering time, location, language, etc.)"
            arTitle="التوظيف العادل والشفاف"
            arText="يجب على المقاول استخدام منافذ متنوعة للوصول لأكبر عدد ممكن من الأشخاص، ويجب أن يكون لديه معايير اختيار واضحة تشمل الفئات الأكثر ضعفًا. يجب أن تكون إجراءات الإعلان والاختيار والتوظيف شاملة وغير تمييزية (مع الأخذ في الاعتبار الوقت والمكان واللغة، إلخ)."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
      <DropDownText
            enTitle="Service Contracts"
            enText="All workers must read and sign a service contract before they start working on the project. The contract must be in a Language understood by the worker (usually Arabic). For workers that do not read and write the contract must be read to them by someone they trust, the contractor or the Social Safeguard Officer (Based on their preference). The contract must include details on all work conditions and terms. Contract must include details on payment amount and schedule."
            arTitle="عقود الخدمة"
            arText="يجب أن يقرأ جميع العمال ويوقعوا على عقد خدمة قبل بدء العمل في المشروع. يجب أن يكون العقد بلغة يفهمها العامل (عادة ما تكون العربية). بالنسبة للعمال الذين لا يقرأون ولا يكتبون، يجب قراءة العقد لهم من قبل شخص يثقون به، المقاول أو مسؤول الضمانات الاجتماعية (حسب تفضيلهم). يجب أن يتضمن العقد تفاصيل عن كافة ظروف العمل والشروط. يجب أن يتضمن العقد تفاصيل عن مبلغ الدفع والجدول الزمني."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Legal Identification"
            enText="All workers that are to be employed under the EIIP must have legal identification documents, and it is the contractor’s responsibility to verify the availability of the same before they start working on the project."
            arTitle="التعريف القانوني"
            arText="يجب أن يكون لدى جميع العمال الذين سيتم توظيفهم تحت مظلة البرنامج المكثف لتوظيف العمالة وثائق تعريف قانونية، ومسؤولية المقاول هو التحقق من توافرها قبل بدء العمل في المشروع."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Payment Procedures"
            enText="Payments to be settled on a weekly/Bi-weekly payments, through a financial institution. The payment schedule should be agreed on with the workers before work is initiated; any changes should be discussed and agreed upon with workers ahead of time. Payments are to be made to the worker directly, no one can get paid on behalf of anyone else."
            arTitle="إجراءات الدفع"
            arText="يجب دفع المستحقات على أساس أسبوعي / كل أسبوعين، من خلال مؤسسة مالية. يجب الاتفاق على جدول الدفع مع العمال قبل بدء العمل؛ ويجب مناقشة أي تغييرات والاتفاق عليها مع العمال مسبقًا. يجب أن يتم الدفع مباشرة للعامل، ولا يمكن لأحد الحصول على الأجر نيابة عن شخص آخر."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Transportation"
            enText="Transportation should be compensated to all workers equally, and to be considered as an additional fee, and NOT to be deducted from salaries under any circumstance."
            arTitle="النقل"
            arText="يجب تأمين بدل المواصلات لجميع العمال بالتساوي واعتبارها أجرة إضافية ولا يجوز خصمها من الرواتب تحت أي ظرف."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Working Hours & Rest Times"
            enText="In compliance with the Labour Law, daily working hours should consist of 7 to 8 hours maximum with 1 hour break, and one full day of rest per week. To ensure productivity, the Task based work approach is to be promoted on EIIP projects."
            arTitle="ساعات العمل وأوقات الراحة"
            arText="وفقًا لقانون العمل، يجب أن تتكون ساعات العمل اليومية من 7 إلى 8 ساعات كحد أقصى مع استراحة لمدة ساعة، ويوم راحة كامل في الأسبوع. لضمان الإنتاجية، يجب تعزيز نهج العمل المستند إلى المهام في المشاريع المكثفة لتوظيف العمالة."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Productive Work/ Training & Development"
            enText="Work that is done on site should be productive and useful. On-the-job training, coaching, and skills development should be part of the contractor’s plan to increase the employability of the workers (from unskilled to skilled)."
            arTitle="العمل المنتج / التدريب والتطوير"
            arText="يجب أن يكون العمل الذي يتم في الموقع منتجًا ومفيدًا. يجب أن يكون التدريب في موقع العمل، والتدريب، وتطوير المهارات جزءًا من خطة المقاول لزيادة فرص التوظيف للعمال (من غير الماهر إلى الماهر)."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Elimination of all kinds of Child Labour"
            enText="No Person under the age of 18 should be present on site no matter the circumstances (worker, visitor, family member, neighbouring community, etc.)"
            arTitle="القضاء على جميع أشكال عمالة الأطفال"
            arText="لا يجب أن يكون هناك شخص دون سن 18 عامًا موجودًا في الموقع بغض النظر عن الظروف (عامل، زائر، عضو في الأسرة، المجتمع المجاور، إلخ)."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Elimination of Forced Labour"
            enText="All workers should be well informed about the work and willing to work voluntarily on the project (regardless of circumstances). Contractor’s team on site must be alert to any case of forced labour and must be reported immediately to Social Safeguard Officer to take necessary measures."
            arTitle="القضاء على العمل القسري"
            arText="يجب أن يكون جميع العاملين على علم جيد بالعمل وعلى استعداد للعمل في المشروع. يجب أن يكون فريق المقاول في الموقع متيقظًا لأي حالة عمل قسري ويجب إبلاغ مسؤول الضمانات الاجتماعية على الفور لاتخاذ الإجراءات اللازمة."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Complaint Mechanism"
            enText="Proper, confidential and various grievance mechanism is put in place. Proper follow-up and measures are conducted by the EIIP team."
            arTitle="آلية تقديم الشكاوى"
            arText="تم وضع آلية شكوى سليمة وسرية ومتنوعة. يتم إجراء المتابعة والإجراءات من قبل فريق EIIP."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
        <DropDownText
            enTitle="Workers’ insurance"
            enText="All workers onsite should be covered by a recognized insurance covering all work accidents, relevant treatments, and compensation for lost working days."
            arTitle="توفير التأمين للعمال في مكان العمل"
            arText="يجب تغطية جميع العمال في الموقع بتأمين معترف به يغطي جميع حوادث العمل، والعلاجات المتعلقة، وتعويض عن أيام العمل المفقودة.            "
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
         <DropDownText
            enTitle="Occupational Safety & Health (OSH)"
            enText="Contractors are responsible for putting in place proper OSH measures and assigning an OSH focal point to the project site. An OSH plan should be submitted with the bidding documents, and all OSH measures should be put in place prior to the initiation of work. The OSH plan is to be reviewed and updated regularly as and when needed."
            arTitle="السلامة والصحة المهنية (OSH)"
            arText="المقاولون مسؤولون عن وضع التدابير المناسبة للسلامة والصحة المهنية وتعيين شخص مختص بالسلامة والصحة المهنية في موقع المشروع. يجب تقديم خطة السلامة والصحة المهنية مع وثائق المناقصة، ويجب وضع جميع تدابير السلامة والصحة المهنية قبل بدء العمل. يجب مراجعة وتحديث خطة السلامة والصحة المهنية بشكل منتظم حسب الحاجة."
            bgColor="rgb(50, 100, 200)"
            textColor="white"
        />
     <CompletionButton chapterNumber="6" questionNumber={6}/>
        </div>
        </>
       
    )
}
Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;