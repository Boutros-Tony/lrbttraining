import LanguageDetector from "../lang-detecter/lang-detecter.component";
const ImageComponent = ({enSrc,enAlt,arSrc,arAlt,width}) => {
    const lang = LanguageDetector();
    return (
        <>
        {lang === 'ar' ? 
        <picture aria-label={arAlt} > <img style={{width:`${width}`,marginBottom:"1em"}} src={arSrc} ></img></picture>
         :  
        <img style={{width:`${width}`,marginBottom:"1em"}} src={enSrc} alt={enAlt} ></img> 
    }
        </>
    )
}

export default ImageComponent;