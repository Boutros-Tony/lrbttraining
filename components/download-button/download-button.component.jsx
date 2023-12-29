import LanguageDetector from "../lang-detecter/lang-detecter.component"

const DownloadButton = () => {
    const lang = LanguageDetector()
    return (
        <button >
            {lang=== 'ar'? "تنزيل" : "Download"}
        </button>
    )
}

export default DownloadButton