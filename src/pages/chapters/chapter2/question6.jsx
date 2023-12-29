import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import AdvantagesOfLrbt from "../../../../components/advantages-of-lrbt/advantages-of-lrbt.component";
const Question6 = () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
            <HeadingOne 
                enText="Socio-economic advantages of LRBT"
                arText="المزايا الاجتماعية والاقتصادية لـ LRBT:"
            />
            <Paragraph
                enText="The LRBT has a multifaceted beneficial scope – through provision of short-term employment to local communities, and the purchase of local materials, and rentals of available equipment, etc. thus turning the economic cycle in the project’s locality."
                arText="يمتلك الـ LRBT نطاقًا متعدد الوجهات والفوائد - من خلال توفير فرص عمل قصيرة الأجل للمجتمعات المحلية، وشراء المواد المحلية، وتأجير الأجهزة المتاحة، وما إلى ذلك، وبالتالي تحويل الدورة الاقتصادية في موقع المشروع."
            />
            <Paragraph
                    enText="Being the ILO’s main area of concern, Decent Work is ensured to be implemented by offering productive and just job opportunities for all the vulnerable community members and allowing them chances to enhance their employability through On-the-Job Training mechanisms."
                    arText="وبصفتها المجال الرئيسي للإهتمام في منظمة العمل الدولية، يتم ضمان تنفيذ العمل اللائق من خلال تقديم فرص عمل إنتاجية وعادلة لجميع أعضاء المجتمعات الضعيفة، ومنحهم فرصًا لزيادة قابليتهم للتوظيف من خلال آليات التدريب أثناء العمل."
            />
            <Paragraph
                enText="The LRBT projects are purposed to provide short-term and long-term public benefits to the community, so the workers would be technically building their own assets while encouraging a sustainable approach through participation and engagement."
                arText="وهدف مشاريع الـLRBT هو توفير فوائد عامة قصيرة وطويلة الأجل للمجتمع، بحيث يقوم العمال فعليًا ببناء أصولهم الخاصة مع تشجيع النهج المستدام من خلال المشاركة والتفاعل."
            />
            <AdvantagesOfLrbt/>
            <CompletionButton chapterNumber="2" questionNumber={6}/>
        </div>
    )
}

Question6.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 6 });
export default Question6;