

import { gsap } from "gsap";

import { useState,useRef} from "react";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
const WorkersResponsibility = () => {
  
   const lang = LanguageDetector()
   const tl = useRef();
   const app = useRef();
   const [canClick ,setCanClick ] = useState(true)
   const [canClickk ,setCanClickk ] = useState(true)
   const handleFew = () => {
    setCanClick(false)
    const ctx = gsap.context(() => {
      
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current = gsap.timeline()
        .to("#red-circle-r",{display:"none",opacity:0,duration:0.1})
        .to("#blue-semi-circle",{borderTopRightRadius:0,borderTopLeftRadius:0,duration:0,ease:"ease-in"})
            .to("#blue-semi-circle",{height:"100%",width:"100%",borderTopRightRadius:0,borderTopLeftRadius:0,duration:0.5,left:0,top:0,duration:0.5,ease:"ease-in"})
            
            
            .to("#yes-answer",{opacity:0,display:"none"})
            .to("#well-no",{opacity:1,display:"block"})
            .to("#well-no",{opacity:0,display:"none",delay:0.3})
            .to("#no-answer",{opacity:1,display:"block"})
            .to("#workers-res-holder",{height:"auto"})
            
    },app);
    return () => ctx.revert();
   }
   const handleFeww = () => {
    setCanClickk(false)
    const ctx = gsap.context(() => {
      
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current = gsap.timeline()
        .to("#blue-semi-circle",{display:"none",opacity:0,duration:0.1})
        .to("#red-circle-r",{borderBottomRightRadius:0,borderBottomLeftRadius:0,duration:0,ease:"ease-in"})
            .to("#red-circle-r",{height:"100%",width:"100%",borderBottomRightRadius:0,borderBottomLeftRadius:0,duration:0.5,left:0,top:0,ease:"ease-in"})
            
            .to("#yes-answer-r",{opacity:0,display:"none"})
            .to("#well-no-r",{opacity:1,display:"block"})
            .to("#well-no-r",{opacity:0,display:"none",delay:0.3})
            .to("#no-answer-r",{opacity:1,display:"block"})
            .to("#workers-res-holder",{height:"auto"})
            
    },app);
    return () => ctx.revert();
   }
   
    return ( 
        <>
     
        <div style={{width:"80%",marginBottom:"1em"}} ref={app}>
        <div  className="workers-res-holder" id="workers-res-holder">
            <div onClick={canClick ? handleFew : null} id="blue-semi-circle" className="blue-half-circle">
                <button style={{backgroundColor:"transparent",border:"none",color:"white"}} id="yes-answer">
                    {
                        lang === 'ar' ? <> نعم <br />  تماماً</> : <>  Yes <br /> completely</>
                    }
                  </button>
                <h1 aria-live="polite" id="well-no">
                {
                        lang === 'ar' ? <> بالتاكيد<br />  لا</> : <>   Well <br /> No !</>
                    }
                   </h1>
                <h2 aria-live="polite" id="no-answer">
                    {
                        lang === 'ar' ? "لا، لن تعمل الصحة والسلامة المهنية (OSH) بشكل صحيح بدون لجان مشتركة مناسبة وترتيبات مشاركة في مجال الصحة والسلامة المهنية." : "No, OSH will not function properly without proper joint committees and participatory OSH arrangements;"
                    }
         
</h2>
               
            </div>
            <div onClick={canClickk ? handleFeww : null} id="red-circle-r" className="red-half-circle">
            <button  style={{backgroundColor:"transparent",border:"none",color:"white"}} id="yes-answer-r">  {
                        lang === 'ar' ? <> بالتاكيد<br />  لا</> : <>   Well <br /> No !</>
                    }</button>
                <h1 aria-live="polite" id="well-no-r">  {
                        lang === 'ar' ? <> نعم <br />  تماماً</> : <>  Yes <br /> completely</>
                    }</h1>
                <h2  aria-live="polite" id="no-answer-r">
                {lang ==='ar' ? "نعم، ستعمل الصحة والسلامة المهنية (OSH) بشكل صحيح مع وجود لجان مشتركة مناسبة وترتيبات مشاركة في مجال الصحة والسلامة المهنية."






: "Yes, OSH will  function properly with proper joint committees and participatory OSH arrangements;"}
</h2>
            </div>
        </div>
        </div>
        

        </>
    )
}

export default WorkersResponsibility;