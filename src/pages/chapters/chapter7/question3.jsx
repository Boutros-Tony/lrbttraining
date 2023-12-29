import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import Head from "next/head";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import DropDownText from "../../../../components/dropdown-text/dropdown-text.component";
const Question3 = () => {
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
       enText="Particular Conditions - highlights - please see Annex 4b!" 
       arText="الشروط الخاصة - النقاط البارزة - يرجى الاطلاع على الملحق 4 ب!"/>
        <DropDownText
        bgColor="rgb(171, 59, 119)"
        textColor="white"
        enText="The works will generally be carried out using local-resource-based methods; giving preference to the use of local labour, Materials and services."
        arText="سيتم بشكل عام تنفيذ الأعمال باستخدام الأساليب المبنية على الموارد المحلية، مع إعطاء الأفضلية لاستخدام العمالة المحلية، والمواد، والخدمات."
        enTitle="4.1.1 Labour-based Methods"
        arTitle="4.1.1 الأساليب المبنية على العمالة"
        />
         <DropDownText
        bgColor="#c0000f"
        textColor="white"
        enText="The Contractor undertakes to respect, at all times and in all circumstances relevant to the performance of the Contract and in relation to all its personnel, the following principles concerning international labour standards of the International Labour Organization …"
        arText="يتعهد المقاول بالاحترام، في جميع الأوقات وفي جميع الظروف ذات الصلة بتنفيذ العقد وفيما يتعلق بجميع موظفيه، المبادئ المتعلقة بمعايير العمل الدولية لمنظمة العمل الدولية."
        enTitle="4.1.5 Labour Standards"
        arTitle="4.1.5 معايير العمل"
        />
           <DropDownText
        bgColor="rgb(50, 100, 200)"
        textColor="white"
        enText="The Contractor and its personnel undertake to support and respect the protection of internationally proclaimed human rights, and observe the highest ethical standards throughout its supply chain …"
        arText="يتعهد المقاول وموظفوه بدعم واحترام حماية حقوق الإنسان المعلنة دولياً، ومراعاة أعلى المعايير الأخلاقية في جميع أجزاء سلسلة التوريد الخاصة به."
        enTitle="4.1.6 Responsible business practices"
        arTitle="4.1.6 الممارسات التجارية المسؤولة"
        />
           <DropDownText
        bgColor="rgb(105, 228, 228)"
        textColor="rgb(35, 0, 80)"
        enText="The Contractor will reach out to vulnerable groups previously identified by the Employer. Workers will be recruited from the poorer segments of the community of the Project area and each worker will be offered 40 days of employment. Both male and female workers will have equal opportunity to participate in the Project Works …"
        arText="سيوجه المقاول نداءً للمجموعات المعرضة للخطر التي تم التعرف عليها مسبقًا من قبل صاحب العمل. سيتم التوظيف من الشرائح الأكثر فقرًا ضمن الإطار الجيوغرافي للمشروع وسيتم تقديم 40 يومًا من العمل لكل عامل. سيكون للعمال والعاملات فرصة متساوية للمشاركة في أعمال المشروع."
        enTitle="4.1.7 Recruitment of Labour"
        arTitle="4.1.7 توظيف العمالة"
        />
          <DropDownText
        bgColor="rgb(250, 180, 40)"
        textColor="rgb(35, 0, 80)"
        enText="the Contractor will ensure compliance with applicable requirements of the EIIP Lebanon Social & Environmental Safeguards Framework, included in this Contract as Annex 4c ... The Contractor will ensure compliance with applicable requirements of the EIIP Lebanon COVID-19 Guidelines, included in the Contract as Annex 4d …"
        arText="سيضمن المقاول الامتثال للمتطلبات المعمول بها من إطار الضمانات الاجتماعية والبيئية لـ EIIP في لبنان، المدرج في هذا العقد بوصفه الملحق 4c ... سيضمن المقاول الامتثال للمتطلبات المعمول بها من إرشادات EIIP لبنان لكوفيد-19، المدرجة في العقد بوصفها الملحق 4d."
        enTitle="4.1.13 Environment, Safety and Health"
        arTitle="4.1.13 البيئة والسلامة والصحة"
        />
          <DropDownText
        bgColor="rgb(112, 180, 80)"
        textColor="white"
        enText="The currency and minimum daily wage rate is stated in the Appendix. During the execution of the Contract, price adjustments may be considered by the Employer in accordance with Sub-Clause 11.1.2 PC."
        arText="يتم تحديد العملة ومعدل الأجر اليومي الأدنى في الملحق. خلال تنفيذ العقد، قد يتم النظر في تعديلات الأسعار من قبل صاحب العمل وفقًا للفقرة الفرعية 11.1.2 PC."
        enTitle="4.1.14 Minimum Wage"
        arTitle="4.1.14 الحد الأدنى للأجور"
        />
         <DropDownText
        bgColor="rgb(171, 59, 119)"
        textColor="white"
        enText="The Contractor agrees to undertake all reasonable efforts to ensure that no funds received under the Contract are used, directly or indirectly, to provide support to individuals or entities associated with terrorism, and that recipients of any funds provided hereunder do not appear on any sanctions list issued by the United Nations Security Council or by the European Union … This provision must be included in all subcontracts or sub-agreements entered into under the Contract."
        arText="يوافق المقاول على بذل كل الجهود للتأكد من أن لا تُستخدم أموال تم تلقيها بموجب العقد، مباشرة أو غير مباشرة، لتقديم الدعم للأفراد أو الكيانات المرتبطة بالإرهاب، وأن المستفيدين من أي أموال تقدم بموجب هذا العقد لا يظهرون في أي قائمة عقوبات أصدرها مجلس الأمن التابع للأمم المتحدة أو الاتحاد الأوروبي. يجب تضمين هذا البند في جميع العقود الفرعية أو الاتفاقيات الفرعية المبرمة بموجب العقد."
        enTitle="4.1.15 Terrorism/UN and EU sanctions lists"
        arTitle="4.1.15 الإرهاب/قوائم عقوبات الأمم المتحدة والاتحاد الأوروبي"
        />
          <DropDownText
        bgColor="#c0000f"
        textColor="white"
        enText="Wages will be paid in the form of electronic cash transfers, made directly to each individual worker through a third party financial service provider in the currency stated in 4.1.14 PC … As soon as the name and relevant information of each individual worker is known by the financial service provider and at the latest prior to the processing of any payment, the financial service provider will conduct mandatory security screening … Payment receipts will be made available to the Employer following each transfer … The terms of the subcontract will require the approval of the Employer before its signature."
        arText="سيتم دفع الأجور في شكل تحويلات نقدية إلكترونية، تتم مباشرة إلى كل عامل من خلال مزود خدمة مالية ثالث في العملة المذكورة في 4.1.14 PC. بمجرد معرفة اسم كل عامل والمعلومات ذات الصلة به من قبل مزود الخدمة المالية وقبل معالجة أي دفع، سيجري مزود الخدمة المالية التقييم الأمني الإلزامي. سيتم تقديم إيصالات الدفع لصاحب العمل بعد كل تحويل. ستتطلب شروط العقد الفرعي موافقة صاحب العمل قبل توقيعها."
        enTitle="4.1.17 Electronic payment of wages"
        arTitle="4.1.17 الدفع الإلكتروني للأجور"
        />
          <DropDownText
        bgColor="rgb(50, 100, 200)"
        textColor="white"
        enText="The Contractor will establish a Site Office."
        arText="سيقوم المقاول بإنشاء مكتب في الموقع."
        enTitle="4.1.19 Contractor’s Site Office and Site facilities"
        arTitle="4.1.19 مكتب موقع المقاول ومرافق الموقع"
        />
          <DropDownText
        bgColor="rgb(105, 228, 228)"
        textColor="rgb(35, 0, 80)"
        enText="In the event that the Contractor requires the services of any subcontractor, the Contractor will obtain the prior written authorization to subcontract and the approval of the Employer of the subcontractor selected …"
        arText="في حال حاجة المقاول  إلى خدمات أي متعاقد فرعي، سيحصل المقاول على التصريح المكتوب المسبق للعقد الفرعي وموافقة صاحب العمل على المتعاقد الفرعي المختار."
        enTitle="4.3.1 Conditions for subcontracting"
        arTitle="4.3.1 شروط العقد الفرعي"
        />
         <DropDownText
        bgColor="rgb(250, 180, 40)"
        textColor="rgb(35, 0, 80)"
        enText="The Contractor is required to indicate in the original Work Programme the number of worker days needed for each activity, which will be reviewed by the Employer and agreed by the Parties … Failure to achieve the agreed number of worker days will attract a penalty as stipulated in Sub-Clause 11.6.1 PC"
        arText="يتعين على المقاول أن يشير في برنامج العمل الأصلي إلى عدد أيام العمل اللازمة لكل نشاط، والتي سيتم مراجعتها من قبل صاحب العمل والموافقة عليها من قبل الطرفين. الفشل في تحقيق العدد المتفق عليه من أيام العمل سوف يؤدي إلى فرض عقوبة على النحو المنصوص عليه في البند الفرعي 11.6.1 PC"
        enTitle="7.2.3 Number of worker days per activity"
        arTitle="7.2.3 عدد أيام العمل لكل نشاط"
        />
          <DropDownText
        bgColor="rgb(112, 180, 80)"
        textColor="white"
        enText="Adjustments to the Contract price may be considered by the Employer and reflected in an addendum to the Contract, following sharp increase/decrease in the costs of local labour or Materials."
        arText="قد يتم النظر في تعديلات سعر العقد من قبل صاحب العمل وتضمينها في ملحق للعقد، بعد زيادة/انخفاض حاد في تكاليف العمالة المحلية أو المواد."
        enTitle="11.1.2 Price Adjustment"
        arTitle="11.1.2 تعديل الأسعار"
        />
           <DropDownText
        bgColor="rgb(171, 59, 119)"
        textColor="white"
        enText="Two thirds of the retention (10%) will be paid by the Employer to the Contractor within fourteen (14) days after issuing the notice under Sub-Clause 8.2 GC upon successful completion of the Works."
        arText="سيتم دفع ثلثي المبلغ المحتجز (10٪) من قبل صاحب العمل إلى المقاول في غضون أربعة عشر (14) يومًا بعد إصدار الإشعار بموجب المادة الفرعية 8.2 GC عند الانتهاء بنجاح من الأعمال."
        enTitle="11.4 Payment of 2/3 of Retention"
        arTitle="11.4 دفع ثلثين من المبلغ المحتفظ به"
        />
           <DropDownText
        bgColor="rgb(50, 100, 200)"
        textColor="white"
        enText="The remainder of the retention (5%) will be paid by the Employer to the Contractor within fourteen (14) days upon approval by the Employer of the successful completion of the Defects and Liability Period stated in the Appendix and the receipt of the Defects and Liability certificate to be submitted by the Contractor."
        arText="سيتم دفع باقي المبلغ المحتفظ به (5%) من قبل صاحب العمل إلى المقاول خلال أربعة عشر (14) يومًا عند الموافقة من قبل صاحب العمل على الانتهاء الناجح من فترة العيوب والمسؤولية المذكورة في الرفقة واستلام شهادة العيوب والمسؤولية التي يجب تقديمها من قبل المقاول."
        enTitle="11.5 Payment of remaining - 1/3 of Retention"
        arTitle="11.5 دفع الباقي - ثلث من المبلغ المحتفظ به"
        />
             <DropDownText
        bgColor="rgb(105, 228, 228)"
        textColor="rgb(35, 0, 80)"
        enText="The Contract Price will be expressed entirely in United States Dollars (USD) and payments to the Contractor will be made in USD. To convert USD into LBP, the Contractor will use the conversion rate established by the Bank du Liban through the ‘Sayrafa’ electronic platform at the time of the transfer ..."
        arText="سيتم التعبير عن سعر العقد بالكامل بالدولار الأمريكي (USD) وسيتم الدفع للمقاول بالدولار الأمريكي. لتحويل الدولار الأمريكي إلى LBP، سيستخدم المقاول سعر التحويل الذي أنشأه مصرف لبنان من خلال منصة Sayrafa الإلكترونية في وقت التحويل."
        enTitle="11.7.1 Exchange from USD into LBP"
        arTitle="11.7.1 التحويل من الدولار الأمريكي إلى الليرة اللبنانية"
        />
        <CompletionButton chapterNumber="7" questionNumber={3}/>
        </div>
        </>
       
    )
}
Question3.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 3 });
export default Question3;