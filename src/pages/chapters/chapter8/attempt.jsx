import QuizTemplate from "../../../../components/quiz-template/quiz-template.component"
const Attempt = () => {
    const list = [
        {
            id:0,
            enQuestion:"Who is funding the EIIP in Lebanon?",
            arQuestion :"من هو الممول لـ EIIP في لبنان؟",
            enPossibilities:["Germany","Japan","Germany through the German Development Bank KfW"],
            arPossibilities:["ألمانيا","اليابان","ألمانيا من خلال بنك التنمية الألماني KfW"],
            multipleAnswer:false
        },
        {
            id:1,
            enQuestion:"What is meant by Local Resource Based Technology?",
            arQuestion :"ما المقصود بالتكنولوجيا المعتمدة على الموارد المحلية LRBT؟",
            enPossibilities:[
                "Work methods and technologies where the use of local resources, is favored and optimized, without compromising the quality",
                "Work methods and technologies where the use of local resources, is favoured and optimised, regardless of the quality",
                "Utilizing local resources, and work stops if local resources are not available"
                ],
            arPossibilities:[
                  "أساليب وتقنيات العمل حيث يتم تفضيل استخدام الموارد المحلية وتحسينها، دون المساس بالجودة",
                    "أساليب وتقنيات العمل حيث يتم تفضيل وتحسين استخدام الموارد المحلية، بغض النظر عن الجودة",
                    "الاستفادة من الموارد المحلية، ويتوقف العمل في حالة عدم توفر الموارد المحلية."   
                ],
            multipleAnswer:false
        },
        {
            id:2,
            enQuestion:"Select the appropriate Local Resource Based Work Method/s?",
            arQuestion :"حدد أساليب العمل المناسبة القائمة على الموارد المحلية؟ (حدد كل ما ينطبق)",
            enPossibilities:[
                "Employing as many people as possible from within the vicinity of the project while ensuring productivity",
                "Using the local resources available, even if they adversely affect the quality of the work",
                "Use of Appropriate (light) equipment to support the activities",
                "LRB is all about using local resources regardless of outcomes and results"],
            arPossibilities:[
                    "توظيف أكبر عدد ممكن من الأشخاص من داخل محيط المشروع مع ضمان الإنتاجية",
                    "استخدام الموارد المحلية المتاحة، حتى إذا كانت تؤثر سلبًا على جودة العمل",
                    "استخدام المعدات (الخفيفة) المناسبة لدعم الأنشطة",
                    "يدور LRB حول استخدام الموارد المحلية بغض النظر عن النتائج"
                ],
            multipleAnswer:true
        },
        {
            id:3,
            enQuestion:"What are the socio-economic advantages of LRBT?",
            arQuestion :"ما هي المزايا الاجتماعية والاقتصادية للLRBT؟ (اختر كل ما ينطبق)",
            enPossibilities:[
                "Providing employment opportunities",
                "Developing Skills",
                "Quick implementation and results",
                "High foreign exchange is needed"
                ],
            arPossibilities:[
                   "توفير فرص العمل",
                    "تطوير المهارات",
                   "سرعة التنفيذ والنتائج",
                    "هناك حاجة إلى احتياطي كبير من العملات الأجنبية"
                ],
            multipleAnswer:true
        },   
        {
            id:4,
            enQuestion:"Is the following statement on Work Plans True or False?",
            arQuestion :"هل البيان التالي حول خطط العمل صحيح أم خاطئ؟ إن خطة العمل المعدة جيدًا تساعد المقاول على التخطيط بشكل أفضل للمدخلات والموارد المطلوبة، ومراقبة تقدم العمل بشكل أفضل، والمساعدة في إنهاء العمل في الوقت المحدد وبأقل تكلفة",
            enPossibilities:[
                "Correct",
                "Incorrect"    
                ],
            arPossibilities:[
                  "صحيح",
                 "غير صحيح"
                ],
            multipleAnswer:false
        },
        {
            id:5,
            enQuestion:"What should a work plan include",
            arQuestion :"ما الذي يجب أن تتضمنه خطة العمل (اختر كل ما ينطبق)",
            enPossibilities:[
                "Bill of Quantities (BoQ)",
                "Percentage completion on a bi-weekly basis",
                "Number of workers per activity",
                "Number of workdays per activity",
                "Map of stakeholders you will be working with",
                ],
            arPossibilities:[
                  "فاتورة الكميات (BoQ)",
                "نسبة الإنجاز على أساس نصف أسبوعي",
                   "عدد العاملين لكل نشاط",
                   "عدد أيام العمل لكل نشاط",
                   "خريطة أصحاب المصلحة الذين ستعمل معهم"
                ],
            multipleAnswer:true
        },
        {
            id:6,
            enQuestion:"Select the correct statement/s on the use of task rates and productivity",
            arQuestion :"اختر العبارة/العبارات الصحيحة حول استخدام معدلات المهام والإنتاجية (اختر كل ما ينطبق)",
            enPossibilities:[
                "Task Rates and productivities are used to calculate labour or equipment costing for submitting bids",
                "Task Rates and Productivities are used to calculate the profit the contractor will make out of the project",
                "Task Rates and Productivities are used to check whether local resources are available and sufficient",
                "Task Rates and Productivities are used to manage labour and equipment for construction works",
                ],
            arPossibilities:[
                 "يتم استخدام معدلات المهام والإنتاجية لحساب تكاليف العمالة أو المعدات لتقديم المناقصات",
                   "يتم استخدام معدلات المهام والإنتاجية لحساب الربح الذي سيحققه المقاول من المشروع",
                 "يتم استخدام معدلات المهام والإنتاجية للتحقق مما إذا كانت الموارد المحلية متوفرة وكافية",
                 "يتم استخدام معدلات المهام والإنتاجية لإدارة العمالة والمعدات اللازمة لأعمال البناء"  
                ],
            multipleAnswer:true
        },
        {
            id:7,
            enQuestion:"Select the correct statement/s on the use of task rates and productivity",
            arQuestion :"أي من العناصر التالية تعد من بين مبادئ العمل اللائق (اختر كل ما ينطبق)",
            enPossibilities:[
                "Fair recruitment",
"Recruitment of women only (prioritizing women over men)",
"Provide safe and free of charge transportation",
"Provide training and capacity building", 
"Work without signing any contract",
"Recruit only skilled workers and those that are knowledgeable",
                ],
            arPossibilities:[
                  "التوظيف العادل",
                    "توظيف النساء فقط (تفضيل النساء على الرجال)",
                  "توفير وسائل نقل آمنة ومجانية",
                  "توفير التدريب وبناء القدرات"   ,
                  "العمل دون توقيع أي عقد",
                  "توظيف العمال الماهرين فقط وأولئك الذين لديهم معرفة"
                ],
            multipleAnswer:true
        },
        {
            id:8,
            enQuestion:"Why is a comprehensive outreach mechanism important?",
            arQuestion :"لماذا تعتبر آلية التوعية الشاملة مهمة؟",
            enPossibilities:[
                "It is important because it will enhance the ownership of the municipality on the project.  The contractor should ONLY talk to the municipality and in turn the municipality will reach out for the available outreach outlets in the area",
                "To ensure inclusivity of all vulnerable groups (including women and Persons with Disabilities), eliminate bias in recruitment, promote for the project objectives, and optimize local recruitment",
                "A comprehensive outreach mechanism is not important, especially that previously used methodologies (word of mouth, general announcements, etc.) have been working well",
                ],
            arPossibilities:[
                "هي مهمّة لأنها ستعزز ملكية البلدية في المشروع. يجب على المقاول التحدث مع البلدية فقط، وفي المقابل ستقوم البلدية بالتواصل مع منافذ التوعية المتاحة في المنطقة",
                    "لضمان شمولية جميع الفئات الضعيفة (بما في ذلك النساء والأشخاص ذوي الإعاقة)، والقضاء على التحيز في التوظيف، وتعزيز أهداف المشروع، وتحسين التوظيف المحلي",
                 "إن وجود آلية توعية شاملة ليس مهما، خاصة وأن المنهجيات المستخدمة سابقًا (الكلام الشفهي، والإعلانات العامة، وما إلى ذلك) كانت تعمل بشكل جيد."
                ],
            multipleAnswer:false
        },
        {
            id:9,
            enQuestion:"Select all that are correct with regards to Occupational Safety and Health (OSH) measures on site",
            arQuestion :"حدد كل ما هو صحيح فيما يتعلق بتدابير السلامة والصحة المهنية (OSH) في الموقع (اختر كل ما ينطبق)",
            enPossibilities:[
                "OSH is a collective effort, and it is everyone’s responsibility including managers, supervisors, and workers",
                "Risk assessments, OSH plans and OSH measures should be put in place before any works start on site",
                "OSH measures are optional depending on how risky the nature of the project is",
                "OSH is to be considered a priority only when there are excavation works and/or scaffolding",
                "Relevant Personal Protective Equipment are to be provided in sufficient amounts to everyone on-site before works start",
                ],
            arPossibilities:[
                  "إن السلامة والصحة المهنية هي جهد جماعي، وهي مسؤولية الجميع بما في ذلك المديرين والمشرفين والعاملين",
                   'ينبغي وضع تقييمات المخاطر وخطط السلامة والصحة المهنية وتدابير السلامة والصحة المهنية قبل بدء أي أعمال في الموقع',
                   "تعتبر تدابير السلامة والصحة المهنية اختيارية اعتمادًا على مدى خطورة طبيعة المشروع",
                   "يجب اعتبار السلامة والصحة المهنية أولوية فقط عندما تكون هناك أعمال حفر و/أو سقالات"  ,
                   "يجب توفير معدات الحماية الشخصية ذات الصلة بكميات كافية لكل شخص في الموقع قبل بدء الأعمال"
                ],
            multipleAnswer:true
        },
        {
            id:10,
            enQuestion:"Select all that apply in relevance to ensuring effective inclusion of women on EIIP Sites",
            arQuestion :"حدد كل ما ينطبق فيما يتعلق بضمان الإدماج الفعال للنساء في مواقع EIIP (اختر كل ما ينطبق)",
            enPossibilities:[
                "Advertise jobs in frequently accessible to women",
                "Ensure Equal pay for Equal work",
                "Assign tasks to women that are basic and do not require any skills",
                "Be culturally sensitive and understand the specificities of the community you are working at",
                "Do not provide capacity building and training for skilled work as it is a waste of time, instead stick to traditionally accepted tasks for women (coffee making, cleaning site, etc.)",
                "Promote women team leaders on site",
                ],
            arPossibilities:[
                 "الإعلان عن وظائف في الأماكن التي تتواجد فيها النساء بشكل متكرر",
                    "ضمان المساواة في الأجر لنفس العمل",
                   "تكليف النساء بمهام أساسية ولا تتطلب أي مهارات",
                    "كن حساسًا ثقافيًا وافهم خصوصيات المجتمع الذي تعمل فيه",
                    "عدم توفير التدريب وبناء القدرات للعمل المهني لأنها مضيعة للوقت، بدلاً من ذلك التمسك بالمهام المقبولة تقليديًا للنساء (صنع القهوة، تنظيف الموقع، إلخ)",
                    "تعزيز قادة الفرق النسائية في الموقع"
                ],
            multipleAnswer:true
        },
        {
            id:11,
            enQuestion: "Is the following statement True or False “A contractor has the right to end a worker’s contract if s/he have submitted a complaint against the contractor or one of their team members",
            arQuestion :"هل البيان التالي صحيح أم خاطئ؟ يحق للمقاول إنهاء عقد العامل إذا تقدم بشكوى ضد المقاول أو أحد أعضاء فريقه",
            enPossibilities:[
                "Correct",
                "Incorrect"
                ],
            arPossibilities:[
                  "صحيح",
                "غير صحيح" 
                ],
            multipleAnswer:false
        },
        {
            id:12,
            enQuestion:"Which statement is correct with regards to Environmental and Social Safeguarding?",
            arQuestion :"ما هي العبارة الصحيحة فيما يتعلق بالحماية البيئية والاجتماعية؟",
            enPossibilities:[
                "The contractors must implement the required social & environmental safeguard measures only in mobilization phase",
                "Environmental & Social safeguard measures shall be implemented during planning, design, mobilization, and works implementation phases",
                "The Environmental and Social Safeguards management is developed once during the planning phase, and it cannot be updated beyond that", 
                ],
            arPossibilities:[
                  "يجب على المقاولين تنفيذ تدابير الحماية الاجتماعية والبيئية المطلوبة فقط في مرحلة التعبئة",
                  "يجب تنفيذ تدابير الحماية البيئية والاجتماعية أثناء مراحل التخطيط والتصميم والتعبئة وتنفيذ الأعمال",
                    'يتم تطوير إدارة الضمانات البيئية والاجتماعية مرة واحدة خلال مرحلة التخطيط، ولا يمكن تحديثها بعد ذلك'
                ],
            multipleAnswer:false
        },
        {
            id:13,
            enQuestion:"Is the following statement True or False “A DO NO HARM approach is important as it ensures that no conflict sensitivity issues effect the goals to be achieved by the project”",
            arQuestion :"هل البيان التالي صحيح أم خاطئ؟ يعد نهج عدم الإضرار أمرًا مهمًا لأنه يضمن عدم تأثير أي مشكلات تتعلق بحساسية الصراع على الأهداف التي يتعين على المشروع تحقيقها",
            enPossibilities:[
                "Correct",
                "Incorrect"
                ],
            arPossibilities:[
                 "صحيح",
                   "غير صحيح"
                ],
            multipleAnswer:false
        },
        {
            id:14,
            enQuestion:"Select the correct order of procedures for submitting a bid with EIIP",
            arQuestion :"حدد الترتيب الصحيح للإجراءات لتقديم عرض مع EIIP",
            enPossibilities:[
                "Bid Submission, LRBT Training, Bid Award, Bid clarification",
                "Bid Clarification, LRBT Training, Bid Submission, Bid Award",
                "LRBT Training, Bid Clarification, Bid Submission, Bid Award",
                "LRBT Training, Bid Submission, Bid Clarification, Bid Award"
                ],
            arPossibilities:[
                  "تقديم العرض، تدريب LRBT، جائزة العرض، توضيح العرض",
                    "توضيح العرض، تدريب LRBT، تقديم العرض، جائزة العرض",
                    "تدريب LRBT، توضيح العرض، تقديم العرض، جائزة العرض",
                    "تدريب LRBT، تقديم العرض، توضيح العرض، منح العرض"
                ],
            multipleAnswer:false
        },
    ]
    return (
        <>
        <QuizTemplate gradeToPass="93" questions={list} chapterNumber="8" quizTitle="FinalQuiz"/>
        </>
    )
}
export default Attempt;