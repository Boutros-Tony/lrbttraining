import { ChaptersPageLayout } from ".";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import FlagList from "../../../../components/flag-list/flag-list.component";
import TrueOrFalse from "../../../../components/true-or-false/true-or-false.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
const Question4 = () => {
    const lang = LanguageDetector();
    const arListt = [
    "بنية تحتية عالية الجودة تحظى بالأولوية من قبل البلديات ",
    "توليد فرص العمل",
    "استهداف الفئات الأكثر ضعفاً في المجتمعات",
    "دمج النساء والأشخاص ذوي الإعاقة",
    "خلق فرص عمل لأعضاء المجتمع اللبناني واللاجئين السوريين (النسبة المثالية للسوريين ",
    "غير المهرة / العمال اللبنانيين 50:50)"
    ]
    const arList = [
        "بنية تحتية عالية الجودة تحظى بالأولوية من قبل البلديات ",
        "توليد فرص العمل",
        "استهداف الفئات الأكثر ضعفاً في المجتمعات",
        "دمج النساء والأشخاص ذوي الإعاقة",
        "خلق فرص عمل لأعضاء المجتمع اللبناني واللاجئين السوريين (النسبة المثالية للسوريين غير المهرة / العمال اللبنانيين ٥٠ : ٥٠)"

    ]
    const enList = [
        "Quality infrastructure prioritised by municipalities",
        "Employment generation",
        "Targeting the most vulnerable in the communities",
        "Inclusion of women and Persons with Disabilities",
        "Opportunities for both Lebanese community members and Syrian refugees (ideally ratio unskilled Syrians/Lebanese workers 50:50)"
    ]
    return (
        <div className="main-questions">
       <HeadingOne 
       enText="EIIP In Lebanon" 
       arText="الـ EIIP في لبنان"/>
        <p className="red-paragraph">
        {lang ==='ar' ? "تعزيز صمود المجتمعات المحلية المضيفة عبر تحسين سبل العيش لأعضاء المجتمع المضيف واللاجئين السوريين من خلال خلق فرص عمل وتطوير البنية التحتية." : "“Strengthen resilience of local host communities by improving livelihoods for host community members and Syrian refugees through job creation and infrastructure development.”"}
        </p>
        <FlagList arList={arList} enList={enList}/>
        <TrueOrFalse
            enQuestion="EIIP in Lebanon started in 2017 ?"
            arQuestion="بدأ برنامج EIIP في لبنان في عام 2017"
            enAnswer="EIIP in Lebanon started in 2017, through funding from Germany through the German Development Bank (KfW), targeting the most vulnerable people from Lebanese hosting communities and Syrian Refugees. Activities are implemented through local and national governments. Projects are focused on asset creation and development. For example: road maintenance, rehabilitation of public buildings, generation of short-term job opportunities, as well as capacity development to workers, private sector partners, and the local and central government. Being implemented under the ILO, the EIIP’s comparative advantage in comparison to other similar programs is the focus on mainstreaming decent working conditions and increasing the employability of the workers through capacity development and ad-hoc trainings."
            arAnswer="بدأ برنامج EIIP في لبنان في عام ٢٠١٧، بتمويل من ألمانيا من خلال بنك التنمية الألماني (KfW)، مستهدفًا الأشخاص الأكثر هشاشة من المجتمعات اللبنانية المضيفة واللاجئين السوريين. يتم تنفيذ الأنشطة من خلال الحكومات المحلية والوطنية. تركز المشاريع على إنشاء الأصول وتطويرها. على سبيل المثال: صيانة الطرق، ترميم المباني العامة، وتوليد فرص عمل قصيرة الأمد، فضلاً عن تطوير القدرات للعمال، شركاء القطاع الخاص، والحكومة المحلية والمركزية. مُنفّذة ضمن إطار عمل ILO، تتمثل القوة التنافسية لـ EIIP مقارنة ببرامج مشابهة أخرى في التركيز على دمج ظروف العمل اللائقة وزيادة قابلية التوظيف للعمال من خلال تطوير القدرات وتدريبات مخصصة."
            correctAnswer={true}
        />
          <CompletionButton chapterNumber="1" questionNumber={4}/>
        </div>
    )
}
Question4.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 4 });
export default Question4;