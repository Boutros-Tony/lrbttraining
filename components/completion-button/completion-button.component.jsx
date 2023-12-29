
import { updateUserProgressAction } from "../../store/user/user.actions";
import { useDispatch } from "react-redux";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import { updateChapterProgress } from "../../firebase.utils";
import { useRouter } from "next/router";
const CompletionButton = ({chapterNumber,questionNumber}) => {
  const router = useRouter()
    const dispatch = useDispatch();
    const handleCompletion = async () => {
   await  dispatch(updateUserProgressAction(chapterNumber,questionNumber))
   if(chapterNumber === '7'){
    await updateChapterProgress(chapterNumber, 100);
    router.push(`/chapters/chapter8`)
   }else{
    router.push(`/chapters/chapter${chapterNumber}/question${questionNumber + 1}`)
   }
 

    }
    const lang = LanguageDetector()
    return (
        <>
        <button className="mainButton" onClick={handleCompletion}>
          {lang === 'ar' ? "تم الإنجاز" : "Mark as Completed"}</button>
        </>
    )
}

export default CompletionButton;