import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"Select the sentence that is correct about the Environmental and Social Safeguard Framework (ESSF).",
            arQuestion :"حدد الجملة الصحيحة فيما يتعلق بإطار الضمانات البيئية والاجتماعية (ESSF).",
            enPossibilities:[
                "The ESSF is a guidance document that the EIIP works under, but it is not mandatory for the contractors to comply with, and it is used just for information",
"The ESSF is the responsibility of the ILO and the EIIP team to implement, the contractor has nothing to do with it",
"The ESSF governs all EIIP Projects, it is contractually binding, and mandatory for the contractors to work on its basis"],
            arPossibilities:[
                "إن إطار العمل البيئي والاجتماعي (ESSF) عبارة عن وثيقة توجيهية حيث (EIIP) تعمل بموجبها ، ولكنها ليست إلزامية للمقاولين للامتثال لها، ويتم استخدامها فقط للحصول على معلومات",
                "يقع تنفيذ ESSF على عاتق منظمة العمل الدولية وفريق EIIP، وليس للمقاول أي علاقة به",
                "يحكم إطار ESSF جميع مشاريع EIIP، وهو ملزم تعاقديًا وإلزامي للمقاولين للعمل على أساسه"],
            multipleAnswer:false
        },
        {
            id:1,
            enQuestion: "Decent Work is",
            arQuestion :"العمل اللائق هو",
            enPossibilities:[
                "A job opportunity that provides a fair income, safe and secure working environment, supports legality of status, ensures a signature of employment contract, provides capacity building and skills development, and promotes social dialogue",
                "A job opportunity that prioritizes the recruitment of women over men, provides flexible working arrangements for women and overworks men",
                "A job opportunity that obliges workers to work overtime and without breaks, allowing them to make more money"],
            arPossibilities:[
                "فرصة عمل توفر دخلاً عادلاً، بيئة عمل آمنة ومستقرة، تدعم الشرعية القانونية، تضمن التوقيع على عقد العمل، توفر بناء القدرات وتطوير المهارات، وتعزز الحوار الاجتماعي",
                "فرصة عمل تعطي الأولوية لتوظيف النساء على حساب الرجال، وتوفر ترتيبات عمل مرنة للنساء وتثقل كاهل الرجال",
                "فرصة عمل تلزم العمال بالعمل لساعات إضافية وبدون فترات راحة، مما يتيح لهم كسب المزيد من المال"],
            multipleAnswer:false
        },
        {
            id:2,
            enQuestion:"Under a decent work opportunity transportation is provided to workers, but the fees are deducted from their salaries",
            arQuestion :"في إطار فرص العمل اللائق يتم توفير وسائل النقل للعمال، ولكن يتم خصم الرسوم من رواتبهم",
            enPossibilities:[
                "Correct",
                "Incorrect"],
            arPossibilities:[
                    "صحيح",
                    "غير صحيح"],
            multipleAnswer:false
        },
        {
            id:3,
            enQuestion:  "The Social Safeguard Officers (SSO) on the EIIP Project sites do not have any decision-making role, and are there only to provide guidance and advise, compliance with the same are optional depending on the contractor’s team and assessment",
            arQuestion :"ليس لمسؤولي الضمانات الاجتماعية (SSO) في مواقع مشروع EIIP أي دور في اتخاذ القرار، وهم موجودون فقط لتقديم التوجيه والمشورة، ويكون الالتزام بها اختياريًا اعتمادًا على فريق المقاول وتقييمه.",
            enPossibilities:[
                "True, the contractor does not have to abide by any guidance provided by the SSO.",
                "False, the SSO has a leading role on site in terms of providing instructions on the ESSF, and in cases on non-compliance the SSO alerts the central team to take necessary measures"
                ],
            arPossibilities:[
                   "صحيح أن المقاول لا يتعين عليه الالتزام بأي توجيهات يقدمها مسؤول الضمانات الاجتماعية.",
                   "خطأ، لدى مسؤول الضمانات الاجتماعية دور رئيسي في الموقع من حيث تقديم التعليمات بشأن ESSF، وفي حالات عدم الامتثال، ينبه مسؤول الضمانات الاجتماعية الفريق المركزي لاتخاذ التدابير اللازمة",
                 
                ],
            multipleAnswer:false
        },   
        {
            id:4,
            enQuestion:"Select the correct statement on Outreach Mechanism",
            arQuestion :"اختر العبارة الصحيحة حول آلية التوعية",
            enPossibilities:[
                "The contractor should only coordinate with the municipality for outreaching for workers",
                "The contractor should only post job advertisements at the municipal building and depend solely on the word of mouth to outreach for the workers",
                "The contractor with the support of the Social Safeguard Officer is supposed to utilize different outreach outlets, make sure that job advertisements are posted in different locations, make sure the application process is inclusive to reach out for the most vulnerable people within the vicinity of the project"
                ],
            arPossibilities:[
                  "يجب على المقاول التنسيق مع البلدية فقط للتواصل مع العمال",
                    "يجب على المقاول نشر إعلانات الوظائف فقط في مبنى البلدية والاعتماد فقط على الكلام الشفهي للتواصل مع العمال",
                   "من المفترض أن يستخدم المقاول، بدعم من مسؤول الضمانات الاجتماعية، أساليب ومنافذ تواصل مختلفة، والتأكد من نشر إعلانات الوظائف في مواقع مختلفة، والتأكد من أن عملية التقديم شاملة للوصول إلى الأشخاص الأكثر ضعفًا في محيط المشروع."  
                ],
            multipleAnswer:false
        },
        {
            id:5,
            enQuestion:"Select the correct statement on Occupational Safety and Health",
            arQuestion :"اختر العبارة الصحيحة عن السلامة والصحة المهنية",
            enPossibilities:[
                "Occupational Safety and Health is optional, especially that workers might not feel comfortable wearing their PPEs while working",
                "The basics of construction state that Occupational Safety and Health measures should not be put in place at the onset of the project; on the contrary, initiating the discussion on safety measures should start after works start to properly assess the risks while workers are working",
                "Occupational safety and health is a priority, an OSH plan is to be submitted with the bidding documents, safety measures should be put in place before work starts and before workers are mobilized on site. A risk assessment and safety plan should be regularly reviewed by an OSH focal point on site"
                ],
            arPossibilities:[
                  "تعتبر السلامة والصحة المهنية اختيارية، خاصة وأن العمال قد لا يشعرون بالراحة عند ارتداء معدات الوقاية الشخصية أثناء العمل",
                   "تنص أساسيات البناء على أنه لا ينبغي تطبيق تدابير السلامة والصحة المهنية في بداية المشروع؛ على العكس من ذلك، فإن بدء المناقشة حول تدابير السلامة يجب أن يبدأ بعد بدء الأعمال لتقييم المخاطر بشكل صحيح أثناء عمل العمال",
                    "تعتبر السلامة والصحة المهنية أولوية، ويجب تقديم خطة السلامة والصحة المهنية مع وثائق المناقصة، ويجب وضع تدابير السلامة قبل بدء العمل وقبل تعبئة العمال في الموقع. ينبغي مراجعة خطة تقييم المخاطر والسلامة بانتظام من قبل مسؤول تنسيق السلامة والصحة المهنية في الموقع"
                ],
            multipleAnswer:false
        },
        {
            id:6,
            enQuestion:"Inclusive participation means that contractors are only responsible for achieving targets on employing women and employing persons with disability regardless of the type of task that is being conducted.",
            arQuestion :"تعني المشاركة الشاملة أن المقاولين مسؤولون فقط عن تحقيق الأهداف المتعلقة بتوظيف النساء وتوظيف الأشخاص ذوي الإعاقة بغض النظر عن نوع المهمة التي يتم تنفيذها.",
            enPossibilities:[
                "True – The contractor signs on a target quota, thus is only supposed to reach the target regardless of what the workers are doing on site.",
                "False – Inclusive participation is not only about reaching targets and numbers, but also about productivity of work and tasks conducted on site by women and persons with disabilities. Inclusive participation includes as well increase of employability to workers involved in the project"
                ],
            arPossibilities:[
               "صحيح – يوقع المقاول على حصة مستهدفة، وبالتالي من المفترض أن يصل إلى الهدف فقط بغض النظر عما يفعله العمال في الموقع.",
                  "خطأ – لا تقتصر المشاركة الشاملة على تحقيق الأهداف والأرقام فحسب، بل تتعلق أيضًا بإنتاجية العمل والمهام التي تقوم بها النساء والأشخاص ذوو الإعاقة في الموقع. وتشمل المشاركة الشاملة أيضًا زيادة فرص التوظيف للعاملين المشاركين في المشروع"

                ],
            multipleAnswer:false
        },
        {
            id:7,
            enQuestion:"Select the correct statement/s on Grievance Mechanism",
            arQuestion :"اختر البيان/العبارات الصحيحة في آلية الشكاوى (اختر كل ما ينطبق)",
            enPossibilities:[
                "The EIIP team share all grievances and complaints with the contractor and other stakeholders as part of being transparent",
                "The EIIP team treats all grievances and complaints with utmost confidentiality and shares the necessary information with relevant colleagues to address the issue",
                "The EIIP team protects all workers/beneficiaries that raise a grievance or a complaint from all types of retaliation"
                ],
            arPossibilities:[
                  "يشارك فريق EIIP جميع الشكاوى مع المقاول وأصحاب المصلحة الآخرين كجزء من الشفافية",
                "يتعامل فريق EIIP مع جميع الشكاوى بمنتهى السرية ويشارك المعلومات اللازمة مع الزملاء المعنيين لمعالجة المشكلة",
                  "يقوم فريق EIIP بحماية جميع العمال/المستفيدين الذين يرفعون شكوى من جميع أنواع الانتقام"  
                ],
            multipleAnswer:true
        },
        {
            id:8,
            enQuestion:"Select the correct statement/s on proper screening processes for social and environmental risks",
            arQuestion :"اختر العبارة/العبارات الصحيحة بشأن عمليات التقييم المناسبة للمخاطر الاجتماعية والبيئية (اختر كل ما ينطبق)",
            enPossibilities:[
                "The social and environmental screening is done during the project identification and design phases",
                "An Environmental screening is sent to the Ministry of Environment for approval prior to the start of any project",
                "The screening is usually carried out once the project implementation phase kicks off"
                ],
            arPossibilities:[
                  "يتم إجراء التقييم الاجتماعي والبيئي أثناء مرحلتي تحديد المشروع وتصميمه",
                "يتم إرسال التقييم البيئي إلى وزارة البيئة للموافقة عليه قبل البدء بأي مشروع",
                    "يتم إجراء التقييم عادةً بمجرد بدء مرحلة تنفيذ المشروع"   
                ],
            multipleAnswer:true
        },
        {
            id:9,
            enQuestion: "Select the correct statement/s on proper implementation processes for social and environmental safeguards",
            arQuestion :"اختر البيان/العبارات الصحيحة بشأن عمليات التنفيذ المناسبة للضمانات الاجتماعية والبيئية (اختر كل ما ينطبق)",
            enPossibilities:[
                "It is the responsibility of the contractor to implement the ESSF with no specific need to adhering to the EIIP Environmental and Social Management Plan",
                "The designated EIIP official will monitor and document compliance by completing compliance check lists periodically and communicating with contractor and/or specific project partner on proper corrective measure",
                "The ESSF facilitation process assists contractors and/or implementing agencies in understanding the proper compliance mechanisms and ensures that they are fully informed about the procedures specific to the EIIP projects", 
                ],
            arPossibilities:[
                  'تقع على عاتق المقاول مسؤولية تنفيذ إطار البيئي والاجتماعي (ESSF) دون الحاجة المحددة للالتزام بخطة الإدارة البيئية والاجتماعية الخاصة بـ EIIP',
                   "سيقوم مسؤول EIIP المعين بمراقبة وتوثيق الامتثال من خلال استكمال قوائم التحقق من الامتثال بشكل دوري والتواصل مع المقاول و/أو شريك المشروع المحدد بشأن الإجراء التصحيحي المناسب",
                   "تساعد عملية التسهيل الخاصة بـ ESSF المقاولين و/أو الوكالات المنفذة على فهم آليات الامتثال المناسبة وتضمن أنهم على علم كامل بالإجراءات الخاصة بمشاريع EIIP" 
                ],
            multipleAnswer:true
        }
    ]
    return (
        <>
        <QuizTemplate gradeToPass="90" questions={list}  chapterNumber="6" quizTitle="Environmental&SocialSafeguardFramework"/>
        </>
    )
}
export default Attempt;