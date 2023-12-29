import { ChaptersPageLayout } from ".";
import Paragraph from "../../../../components/paragraph/paragaraph.component";
import LanguageDetector from "../../../../components/lang-detecter/lang-detecter.component";
import HeadingOne from "../../../../components/heading-1/heading-1.component";
import CompletionButton from "../../../../components/completion-button/completion-button.component";
import ImageComponent from "../../../../components/image-component/image-component";
const Question8 = () => {
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
        <Paragraph
            enText="In some cases, the semi-skilled or skilled worker can be a group leader/foreman – so his/her task rate is calculated as the sum of all the task rates of the workers he supervises."
            arText="في بعض الحالات، قد يكون العامل شبه الماهر أو الماهر هو قائد المجموعة / أمين - لذا يتم حساب معدل مهمته كمجموع جميع معدلات المهام للعمال الذين يشرف عليهم."
        />
        <Paragraph
            enText="i.e. Leader Task Rate = Unskilled Task Rate x Number of Workers in the Group"
            arText="أي معدل المهام للقائد = معدل المهمة غير الماهر × عدد العمال في المجموعة."
        />
          <ImageComponent
            enSrc="/assets/labour-productivity-1.jpg"

            arSrc="/assets/labour-productivity-1-ar.jpg"
            width="80%"
        />
        <Paragraph
            enText="In other cases, the semi-skilled or skilled worker is a specialist in a specific trade, with a higher pay than unskilled workers, but he doesn’t supervise anyone. In this case, his/her task rate is calculated based on the amount of work he can achieve individually per day"
            arText="في حالات أخرى، العامل شبه الماهر أو الماهر هو متخصص في مهنة معينة، وله أجر أعلى من العمال غير الماهرين، لكنه لا يشرف على أحد. في هذه الحالة، يتم حساب معدل مهمته استنادًا إلى كمية العمل التي يمكنه إنجازها فرديًا في اليوم."
        />
        <ImageComponent
            enSrc="/assets/labour-productivity-2.jpg"

            arSrc="/assets/labour-productivity-2-ar.jpg"
            width="80%"
        />
        <Paragraph
            enText="The equipment task rate is the quantity of an activity that can be achieved per day per equipment. i.e. A small concrete mixer can cover 10 – 12 m3 of concrete per day, setting its task rate."
            arText="معدل مهمة المعدات هو كمية النشاط التي يمكن تحقيقها في اليوم لكل معدة. أي أن الخلاط الصغير يمكن أن يغطي 10 – 12 م3 من الخرسانة في اليوم، مما يحدد معدل مهمته."
        />
        <Paragraph
            enText="P.S. Hand tools are estimated as a percentage on top of labour cost since this is a miscellaneous item. The percentage is to be added while costing (to be covered in the URA session)"
            arText="ملاحظة: تُقدر الأدوات اليدوية كنسبة مئوية على قمة تكلفة العمل حيث أن هذا بندًا متفرقًا. يجب إضافة النسبة المئوية أثناء التكلفة (سيتم تغطيتها في جلسة URA)."
        />
          <ImageComponent
            enSrc="/assets/labour-productivity-3.jpg"

            arSrc="/assets/labour-productivity-3-ar.jpg"
            width="80%"
        />
          <CompletionButton chapterNumber="4" questionNumber={8}/>
        </div>
    )
}
Question8.getLayout = (page) => ChaptersPageLayout(page, { currentQuestionId: 8 });
export default Question8;