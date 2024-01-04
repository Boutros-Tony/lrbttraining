import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
import ExampleSlider from "../../../../components/example-slider/example-slider.component";
const Question9= () => {
    const lang = LanguageDetector();

    return (
        <div className="main-questions">
       <HeadingOne 
       enText="Here are example of some labour productivity norms" 
       arText="ها هي بعض الأمثلة على معايير إنتاجية العمال."/>
        <Paragraph
            enText="Some task rate examples are shown in the above table. While these can be a good general indication, it should be noted that each bidder should base their rates on their own experience and contextual background for the project."
            arText="بعض الأمثلة على معدلات المهام موضحة في الجدول أعلاه. وعلى الرغم من أنها قد تكون دلالة عامة جيدة، يجب الإشارة إلى أن كل مقاول يجب أن يستند في تقديراته إلى خبرته الخاصة والخلفية السياقية للمشروع."
        />
       
        <ImageComponent
            enSrc="/assets/slide-1.jpg"
            arSrc="/assets/slide-1.jpg"
            enAlt="Workers in high-visibility vests perform task-based work by installing kerb stones alongside a rural road, indicative of group task activities."
            arAlt="عمال يرتدون سترات عاكسة يقومون بتركيب أحجار الرصيف بجانب طريق ريفي، مما يعكس أنشطة العمل الجماعي المبني على المهام."
            width="80%"
        />
        <ImageComponent
            enSrc="/assets/slide-2.jpg"
            arSrc="/assets/slide-2.jpg"
            enAlt="Laborers in reflective gear are engaged in excavation work in a trench, representing task-based group activities in construction"
            arAlt="عمال يرتدون معدات السلامة يعملون في حفرة، يمثلون أنشطة العمل الجماعي المبني على المهام في البناء"
            width="80%"
        />
        <ImageComponent
            enSrc="/assets/slide-3.jpg"
            arSrc="/assets/slide-3.jpg"
            enAlt="Laborers in safety vests and hard hats working on a rocky terrain with tools, showcasing active construction work and task coordination"
            arAlt="عمال يرتدون سترات السلامة وخوذات يعملون في منطقة صخرية مع أدوات، مما يظهر العمل الجاري في موقع البناء وتنسيق المهام."
            width="80%"
        />
       
          <CompletionButton chapterNumber="4" questionNumber={9}/>
        </div>
    )
}
Question9.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 9 });
export default Question9;