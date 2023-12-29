import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question8 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
            <HeadingOne 
                enText="Choice of technology - LRBT vs equipment"
                arText="اختيار التكنولوجيا - LRBT مقابل المعدات"
            />
            <Paragraph
                enText="LRBT methods offer a minimal environmental impact by performing only the exact required task, due to the controlled and precise output of using hand tools"
                arText="طرق LRBT تقدم أدنى تأثير على البيئة من خلال أداء المهمة المطلوبة فقط، نتيجة للإنتاج المحكم والدقيق عند استخدام الأدوات اليدوية."
            />
            {
                lang === 'ar' ?  <img width="80%" src="/assets/lrbtvsequipment-arabic.jpg" alt="صورة مقارنة تُظهر طريقتين لحفر التربة. على اليمين، صورة لحفَّارة آلية في العمل مع تعليق 'أعمال حفر التربة الشائعة - باستخدام حفَّارة. وعلى اليسار، صورة لعمال يحفرون يدويًا مع تعليق 'أعمال حفر التربة الشائعة - بواسطة العمّال'. مربع نص في المنتصف مع سهم يشير من الحفَّارة إلى العمّال يقرأ 'يمكن استبداله بـ'، مشيرًا إلى أن العمل اليدوي يمكن أن يحل محل الآلات في هذه المهمة." srcset="" /> : <img width="80%" src="/assets/lrbtvsequipment.jpg" alt="A comparative image showing two methods of soil excavation. On the left, a photo of an excavator at work with a caption 'Common soil excavation work - by Excavator.' On the right, a photo of laborers manually digging with a caption 'Common soil excavation work - by Labourers.' A central text box with an arrow pointing from the excavator to the laborers reads 'Can be replaced by,' indicating that manual labor can replace machinery for this task." srcset="" />
            }

<Paragraph
                enText="The LRBT approach must be subject to meticulous site preparation and quality control mechanisms in order to guarantee output quality"
                arText="يجب أن تخضع منهجية LRBT لاستعدادات دقيقة للموقع وآليات رقابة على الجودة من أجل ضمان جودة المردود."
            />
            {
                lang === 'ar' ?  <img width="80%" src="/assets/lrbtvsequipment-arabic2.jpg" alt="عرض مقارن بين صورتين يظهران طرقًا مختلفة لتجهيز سطح طريق. الصورة على اليمين تظهر آلة تسوية مع التعليق 'تسوية الحصى لسطح طريق زراعي - بواسطة مُسوِّي.' وعلى اليسار، يقوم العمال يدويًا بنشر الحصى مع التعليق 'نشر الحصى لسطح طريق زراعي - بواسطة عمال.' جملة توصيلية 'يمكن استبدالها بـ' مع سهم يشير من آلة التسوية إلى العمال، مما يوحي بطرق بديلة لإنشاء الطرق." srcset="" /> : <img width="80%" src="/assets/lrbtvsequipment2.jpg" alt="A comparative display with two images showing different methods of preparing a road surface. The left image features a grader machine with the caption 'Grading gravel for road surface of an agricultural road - by Grader.' To the right, laborers spread gravel manually with the caption 'Spreading gravel for road surface of an agricultural road - by Labourers.' A connecting phrase 'Can be replaced by' with an arrow points from the grader to the laborers, suggesting alternative methods of road construction." srcset="" />
            }
          
            <CompletionButton chapterNumber="2" questionNumber={8}/>
        </div>
    )
}

Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;