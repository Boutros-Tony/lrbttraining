import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './paragraph.module.scss';
const Paragraph = ({enText,arText}) => {
    const lang = LanguageDetector();
    return (
        <>
        <p className={styles.heading}>{lang === 'ar' ? arText : enText}</p>
        </>
    )
}

export default Paragraph; 
const equipments = 
    [
    {
        id:0,
        title:"Hard hats (helmets)",
        arTitle:"القبعات الصلبة (الخوذات)",
        imgUrl :"../../assets/hat.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:true,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
             
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
             
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
              
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
             
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:1,
        title:"Reflective jackets",
        arTitle:"السترات العاكسة",
        imgUrl :"../../assets/jackets.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:true
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:2,
        title:"Pairs of safety boots",
        arTitle:"زوج من أحذية السلامة",
        imgUrl :"../../assets/boots.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:true,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:3,
        title:"Masks",
        arTitle:"أقنعة",
        imgUrl :"../../assets/mask.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:true
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:4,
        title:"Gloves",
        arText:"قفازات",
        imgUrl :"../../assets/gloves.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:true
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:5,
        title:"Raincoats",
        arTitle:"معاطف المطر",
        imgUrl :"../../assets/raincoats.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:true
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:6,
        title:"Safety Goggles",
        arTitle:"نظارات أمان",
        imgUrl :"../../assets/goggles.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:true
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:false
            },
        ]
    },
    {
        id:7,
        title:"Traffic cones",
        arTitle:"أقماع تحذيرية",
        imgUrl :"../../assets/cones.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:true
            },
        ]
    },
    {
        id:8,
        title:"Warning signs ",
        arTitle:"لوحات التحذير",
        imgUrl :"../../assets/attention.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:true
            },
        ]
    },
    {
        id:9,
        title:"Stop/Go",
        arTitle:"لوحات التوقف/المرور",
        imgUrl :"../../assets/stop-sign.png",
        options :[
            {
                id:0,
                text:"Risk of falling stones, etc.",
                arText:"خطر سقوط الحجارة، الخ.",
                answer:false,
                showAnswer:false
            },
            {
                id:1,
                text:"At all times",
                arText:"في كل الأوقات",
                answer:false
            },
            {
                id:2,
                text:"Dust from traffic and work",
                arText:"الغبار من حركة المرور والعمل",
                answer:false
            },
            {
                id:3,
                text:"Risk of damage to hands",
                arText:"خطر تلف اليدين",
                answer:false
            },
            {
                id:4,
                text:"When raining",
                arText:"عند هطول الامطار",
                answer:false
            },
            {
                id:5,
                text:"Flying stone chips, dust ",
                arText:"رقائق الحجر المتطايرة، الغبار",
                answer:false
            },
            {
                id:6,
                text:"Traffic control ",
                arText:"التحكم بالمرور",
                answer:true
            },
        ]
    },
]