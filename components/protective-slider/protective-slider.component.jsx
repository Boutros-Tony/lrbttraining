import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import LanguageDetector from '../lang-detecter/lang-detecter.component';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
const ProtectiveSlider = () => {
    const lang = LanguageDetector();
    const equipments = [
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
    const [equip,setEquip] = useState(equipments)
    
    const handleChange = async (id,idd) =>  {
        await setEquip(equipments => 
            equipments.map(obj => {
                if (obj.id === id){
                   obj.options.map((objj) => {
                    if(objj.id === idd){
                        if(objj.answer){
                            objj.showAnswer = true
                        }else{
                            objj.showAnswer = true
                          const wer =  obj.options.find((x) => x.answer === true)
                          wer.showAnswer = true
                        }
                       
                    }
                   })
                    return {...obj  }
                }
               
                return obj;
                
            })
            )
     }
    return (
        <div className="protective-slider">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
    >
      {
            equip.map((item) => {
                return (
                    <SwiperSlide > <div className="equipments-box">
                    <h2>{item.id +1} of {equipments.length}:</h2>
                    <img src={item.imgUrl} alt="" />
                    <h2>
                        {lang === 'ar' ? item.arTitle : item.title}</h2>
                    {item.options.map((opt) => {
                        return (
                            <button className={opt.answer ? opt.showAnswer ? "options-box true" : "options-box" : "options-box"} onClick={() => {handleChange(item.id,opt.id)}}>
                            <h4>
                                {lang === 'ar' ? opt.arText : opt.text}
                                </h4>
                            {
                                opt.showAnswer ?  opt.answer ?<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#70B450"/>
                                <path d="M13.2258 19.475C12.9758 19.475 12.7383 19.375 12.5633 19.2L9.02578 15.6625C8.66328 15.3 8.66328 14.7 9.02578 14.3375C9.38828 13.975 9.98828 13.975 10.3508 14.3375L13.2258 17.2125L19.6508 10.7875C20.0133 10.425 20.6133 10.425 20.9758 10.7875C21.3383 11.15 21.3383 11.75 20.9758 12.1125L13.8883 19.2C13.7133 19.375 13.4758 19.475 13.2258 19.475Z" fill="white"/>
                                </svg>
                                 : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FA3C4B"/>
                                <path d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.62998C16.01 8.33998 16.49 8.33998 16.78 8.62998C17.07 8.91998 17.07 9.39998 16.78 9.68998L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z" fill="white"/>
                                </svg>
                                 : ""
                            }
                           
                            
                        </button>
                        )
                        
                    })}
                </div></SwiperSlide>
                   
                )
                
            })
        }
     
    </Swiper>
   
        </div>
    )
}


export default ProtectiveSlider;