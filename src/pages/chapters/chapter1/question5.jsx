import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import ColoredRectangle from "../../../../components/colored-rectangle/colored-rectangle.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question5 = () => {
    const lang = LanguageDetector();
 
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="EIIP Strategy" 
       arText="استراتيجية EIIP"/>
      <Paragraph
        enText="The aim of Employment Intensive methodology is providing short-term employment opportunities, While providing public infrastructure and services that support longer-term social, environmental and economic development."
        arText="الهدف من منهجية التوظيف المكثف هو توفير فرص عمل قصيرة الأجل، مع توفير البنية التحتية والخدمات العامة التي تدعم التنمية الاجتماعية والبيئية والاقتصادية على المدى الطويل."
      />
      <Paragraph
        enText="Technically, a lot of infrastructure projects that are being implemented today can switch from the traditional way of works to adopt this method that promotes employment and sustainability."
        arText="ومن الناحية الفنية، فإن الكثير من مشاريع البنية التحتية التي يتم تنفيذها اليوم يمكن أن تتحول من طريقة العمل التقليدية إلى اعتماد هذا الأسلوب الذي يعزز التوظيف والاستدامة."
      />
      <Paragraph
      enText="The core strategies of EIIP Lebanon will be discussed in-depth during this training and they include:"
      arText="ستتم مناقشة الاستراتيجيات الأساسية لمشروع الاستثمار الأوروبي في لبنان بشكل متعمق خلال هذا التدريب وهي تشمل:"
      />
      <ColoredRectangle
      enText="Local Resource Based Technology"
      arText="التكنولوجيا القائمة على الموارد المحلية"
      bgColor="rgb(171, 59, 119)"
      textColor="white"
      />
      <Paragraph
      enText="Local Resource Based Technology (LRBT), i.e. work methods and technologies where the use of local resources, is favoured and optimised, without compromising the quality."
      arText="التكنولوجيا القائمة على الموارد المحلية (LRBT)، أي أساليب العمل والتقنيات التي يتم فيها تفضيل وتحسين استخدام الموارد المحلية، دون المساس بالجودة."
      />
      <ColoredRectangle
      enText="Decent work principles"
      arText="مبادئ العمل اللائق"
      bgColor="#c0000f"
      textColor="white"
      />
      <Paragraph
        enText="Decent Work Principles, i.e. labour contracts, development, working hours and conditions, health and safety."
        arText="مبادئ العمل اللائق، أي عقود العمل، والتطوير، وساعات العمل وشروطه، والصحة والسلامة."
      />
      <ColoredRectangle
      enText="Private Sector Engagement"
      arText="مشاركة القطاع الخاص"
      bgColor="rgb(50, 100, 200)"
      textColor="white"
      />
      <Paragraph
        enText="Complemented by training for contractors and capacity building for public institutions, with gender and environmental concerns as cross cutting themes."
        arText="ويكتمل ذلك بتدريب المقاولين وبناء قدرات المؤسسات العامة، مع مراعاة الانواع الاجتماعية والبيئية كمواضيع شاملة."
      />
       <ColoredRectangle
      enText="Environmental & Social Safeguard Framework"
      arText="إطار الضمانات البيئية والاجتماعية"
      bgColor="rgb(105, 228, 228)"
      textColor="rgb(35, 0, 80)"
      />
      <Paragraph
        enText="Framework that regulates the work of the EIIP. It is designed to guide implementation of inclusive and rights-based practices in infrastructure & mitigate negative social & environmental impacts. ESS is developed for the guidance and use by Contractors and Contracts Supervisors, and to be used by designated Social & Environmental Safeguards Officers (SSOs) on employment intensive projects. "
        arText="الإطار الذي ينظم عمل EIIP مصمم لتوجيه تنفيذ الممارسات الشاملة والقائمة على الحقوق في البنية التحتية والتخفيف من الآثار الاجتماعية والبيئية السلبية. تم تطوير المعايير البيئية والاجتماعية ESS للتوجيه والاستخدام من قبل المقاولين ومشرفي العقود، وليستخدمه مسؤولو الضمانات الاجتماعية والبيئية المعينون (SSOs) في المشاريع كثيفة العمالة."
      />
       <ColoredRectangle
      enText="Capacity Building and Development"
      arText="بناء القدرات وتنميتها"
      bgColor="rgb(250, 180, 40)"
      textColor="rgb(35, 0, 80)"
      />
        <ColoredRectangle
      enText="Women’s and PWD’s Effective Participation"
      arText="المشاركة الفعالة للنساء والأشخاص ذوي الإعاقة"
      bgColor="rgb(112, 180, 80)"
      textColor="white"
      />
        <CompletionButton chapterNumber="1" questionNumber={5}/>
        </div>
    )
}
Question5.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 5 });
export default Question5;