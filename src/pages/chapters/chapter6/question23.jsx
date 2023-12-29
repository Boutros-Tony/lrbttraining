import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
const Question23 = () => {
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
       enText="Promoting Inclusive Participation" 
       arText="تعزيز المشاركة الشاملة"/>
        <DropDownText
            enTitle="A strong Communication Campaign"
            enText="The campaign should be inclusive for women, and for persons with disabilities taking into account the advertisement location, application procedure, and outreach outlets used"
            arTitle="حملة تواصل قوية"
            arText="يجب أن تكون الحملة شاملة للنساء، وللأشخاص ذوي الإعاقة مع مراعاة موقع الإعلان، وإجراءات التقديم، ووسائل النشر المستخدمة."
            bgColor="rgb(171, 59, 119)"
            textColor="white"
        
        />
          <DropDownText
            enTitle="Advertise Jobs in frequently accessible places to all"
            enText="Make sure that advertisements are posted in various locations, public spaces mostly visited by women and/or persons with disabilities, using appropriate languages, etc."
            arTitle="الإعلان عن الوظائف في أماكن سهلة الوصول للجميع"
            arText="تأكد من نشر الإعلانات في مواقع مختلفة، في الأماكن العامة التي يزورها النساء و/أو الأشخاص ذوي الإعاقة بشكل رئيسي، باستخدام لغات مناسبة، وما إلى ذلك."
            bgColor="rgb(203, 133, 170)"
            textColor="rgb(35, 0, 80)"
        
        />
           <DropDownText
            enTitle="Outreach to Organizations for Persons with Disabilities (OPDs)"
            enText="To ensure effective inclusion of PWDs make sure you outreach for OPDs for proper guidance and effective outreach"
            arTitle="التواصل مع المنظمات للأشخاص ذوي الإعاقة"
            arText="لضمان إدماج فعّال للأشخاص ذوي الإعاقة، تأكد من التواصل مع المنظمات المختصة للحصول على التوجيه المناسب والتواصل الفعّال."
            bgColor="rgb(203, 133, 170)"
            textColor="rgb(35, 0, 80)"
        
        />
           <DropDownText
            enTitle="Application requirements are inclusive"
            enText="Make sure that application procedure is inclusive and accessible to all in terms of location, language, timing, duration, and personnel filling out the application"
            arTitle="متطلبات تقديم الطلبات شاملة"
            arText="تأكد من أن إجراءات تقديم الطلبات شاملة ومتاحة للجميع من حيث الموقع، واللغة، والتوقيت، والمدة، والأشخاص الذين يملؤون الطلب."
            bgColor="rgb(203, 133, 170)"
            textColor="rgb(35, 0, 80)"
        
        />
        <ColoredRectangle
            enText="Inclusive Working conditions"
            arText="ظروف العمل الشاملة"
            bgColor="rgb(250, 180, 40)"
            textColor="rgb(35, 0, 80)"
        />
          <DropDownText
            enTitle="Equal Pay for Equal Work"
            enText="All workers must be paid equally for similar work conducted. Discrimination on this regards is not tolerated under the EIIP."
            arTitle="الأجر المتساوي للعمل المتساوي"
            arText="يجب دفع نفس الأجر لجميع العمال مقابل العمل المماثل. لا يُتسامح في التمييز في هذا الشأن ضمن إطار مشاريع الEIIP و الILO"
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <DropDownText
            enTitle="Close Working Sites"
            enText="Close and safe working sites are to be provided"
            arTitle="مواقع العمل القريبة"
            arText="يجب توفير مواقع عمل آمنة وقريبة."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <DropDownText
            enTitle="Separate working places"
            enText="Each area has its own specificities and requirements for enhancing women’s participation, thus it would be good to assess the requirements and situation in each area and address the challenges accordingly. In some cases it is more effective to have separate working places for men and women in others it is not necessary."
            arTitle="أماكن عمل منفصلة"
            arText="لكل منطقة خصوصياتها ومتطلباتها لزيادة مشاركة النساء، لذا من الجيد تقييم المتطلبات والوضع في كل منطقة ومعالجة التحديات وفقًا لذلك. في بعض الحالات، قد يكون من الأكثر فعالية وجود أماكن عمل منفصلة للرجال والنساء، في حين أنه في حالات أخرى قد لا يكون ذلك ضروريًا."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <DropDownText
            enTitle="Piece-Work in planning tasks"
            enText="Introducing piece-work for women and workers that require flexible work arrangements is promoted under the EIIP. This will enhance the productivity of the workers, while ensuring that they can still accommodate to other commitments they might have. This methodology is encouraged especially in circumstances where workers otherwise may not be able to be part of the work."
            arTitle="العمل بالقطعة في التخطيط للمهام"
            arText="يتم ترويج العمل بالقطعة للنساء والعمال الذين يحتاجون إلى ترتيبات عمل مرنة تحت إشراف EIIP. سيزيد ذلك من إنتاجية العمال، مع التأكد من أنهم يستطيعون التكيف مع أي التزامات أخرى قد تكون لديهم. يتم تشجيع هذه الطريقة خاصة في الظروف التي قد لا يتمكن العمال فيها من المشاركة في العمل."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <DropDownText
            enTitle="Women Team leaders"
            enText="promote the participation of women team leaders on EIIP project sites (team leaders, supervisors, site engineers, etc.) this will pave the way and motivate women to work on EIIP project sites."
            arTitle="قادة فرق نساء"
            arText="تعزيز مشاركة قائدات الفرق من النساء في مواقع المشاريع التابعة لـ EIIP (قادة الفرق، المشرفين، المهندسين، إلخ.) الأمر الذي سيمهد الطريق ويحفز النساء على العمل في مواقع المشاريع التابعة لـ EIIP."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <DropDownText
            enTitle="Close Working Sites"
            enText="On EIIP minimum quotas are implemented (they change from phase to the other), the quotas are important to monitor progress, however, EIIP team will monitor and asses the effective participation on sites rather only numbers achieved."
            arTitle="تحديد حد أدنى لحصة مشاركة المرأة والأشخاص ذوي الإعاقة"
            arText="في برنامج EIIP يتم تنفيذ الحد الأدنى من الحصص (تتغير من مرحلة إلى أخرى)، تعتبر الحصص مهمة لرصد التقدم، ومع ذلك، سيقوم فريق EIIP بمراقبة وتقييم المشاركة الفعالة في المواقع بدلاً من الأرقام التي تم تحقيقها فقط."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
           <DropDownText
            enTitle="Inclusive Promotion"
            enText="Promotion should be inclusive to all workers equally, and should not discriminate between workers. There should be specific, clear and transparent criteria for the promotion that is communicated to everyone equally."
            arTitle="الترقية الشاملة والعادلة"
            arText="يجب أن تكون الترقية شاملة لجميع العمال بالتساوي، ويجب عدم التمييز بين العمال. يجب أن تكون هناك معايير واضحة وشفافة للترقية يتم توضيحها للجميع بالتساوي."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
         <DropDownText
            enTitle="Childcare when possible"
            enText="EIIP, when needed, should provide a safe childcare facility for working women. This can be either through an already established entity (SDC, CDC, NGO) or through skilled and well-trained women."
            arTitle="رعاية الأطفال عند الحاجة"
            arText="يجب على EIIP، عند الحاجة، توفير منشأة آمنة لرعاية الأطفال، للنساء العاملات. يمكن أن يكون ذلك من خلال كيان مؤسس بالفعل (SDC, CDC, NGO) أو من خلال نساء ماهرات ومدربات جيدًا"
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
         <DropDownText
            enTitle="On-site Capacity building"
            enText="Given that women might not have high skills in the field of construction, it is the responsibility of the contractor to ensure that on-site trainings are provided to all equally to support that they have the needed skills to efficiently and safely perform their tasks, as well as increasing their employability for future work opportunities beyond the EIIP."
            arTitle="تعزيز القدرات في الموقع"
            arText="بالنظر إلى أن النساء قد لا يملكن مهارات عالية في مجال البناء، فإنه يعد من مسؤولية المقاول التأكد من تقديم التدريبات في الموقع للجميع بالتساوي لدعم حصولهن على المهارات اللازمة لأداء مهامهن بكفاءة وأمان، بالإضافة إلى زيادة مهارتهم للتوظيف في فرص عمل مستقبلية خارج نطاق EIIP."
            bgColor="rgb(255, 235, 171)"
            textColor="rgb(35, 0, 80)"
        
        />
          <ColoredRectangle
            enText="Safe Working Conditions"
            arText="ظروف عمل آمنة"
            bgColor="rgb(105, 228, 228)"
            textColor="rgb(35, 0, 80)"
        />
  <DropDownText
            enTitle="Sexual harassment and Exploitation"
            enText="ILO through all its programmes and projects adopt a 0 tolerance policy regarding sexual harassment and exploitation. It is the responsibility of the contractor to make sure that all work sites are safe and free of harassment and exploitation. Awareness materials must at all times be present on the site locations."
            arTitle="التحرش الجنسي والاستغلال"
            arText="تعتمد منظمة العمل الدولية في جميع برامجها ومشروعاتها سياسة عدم التسامح بشأن التحرش الجنسي والاستغلال. من مسؤولية المقاول التأكد من أن جميع مواقع العمل آمنة وخالية من التحرش والاستغلال. يجب أن تكون المواد التوعوية متاحة في جميع الأوقات في مواقع العمل."
            bgColor="rgb(105, 228, 228)"
            textColor="black"
        
        />
 <DropDownText
            enTitle="Complaint Mechanism"
            enText="The ILO’s Social Safeguard Officers are responsible for mobilizing the complaint mechanism, through a confidential and prompt approach (as shown in the following chapter). The complaint mechanism does not only target workers on site, but also contractor’s team and community members within the vicinity of the project"
            arTitle="آلية الشكوى"
            arText="مسؤولو الضمانات الاجتماعية في منظمة العمل الدولية مسؤولون عن تنشيط آلية الشكوى، من خلال نهج سري وفوري (كما هو موضح في الفصل التالي). لا تستهدف آلية الشكوى العمال في الموقع فقط، ولكن أيضًا فريق المقاول وأعضاء المجتمع في محيط المشروع."
            bgColor="rgb(105, 228, 228)"
            textColor="black"
        
        />
     <CompletionButton chapterNumber="6" questionNumber={23}/>
        </div>
        </>
       
    )
}
Question23.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId:23 });
export default Question23;