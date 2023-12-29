import { selectCurrentUser } from "../../store/user/user.selectors"
import { useSelector } from "react-redux"
import LanguageDetector from "../../components/lang-detecter/lang-detecter.component";
import Navbar from "../../components/navbar/navbar.component";
import styles from '../styles/profile.module.scss'
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfileAction } from "../../store/user/user.actions";
import LoadingDots from "../../components/loading-dots/loading-dots.component";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Profile = () => {
    const lang = LanguageDetector();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

// At the beginning of your component, after other useSelector calls
const loading = useSelector(state => state.user.loading.updateUserProfile);
const error = useSelector(state => state.user.error.updateUserProfile);

    const [occupation, setOccupation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [company, setCompany] = useState('');
    const [educationDegree, setEducationDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [field, setField] = useState('');

   
    const [isFormChanged, setIsFormChanged] = useState(false);

    useEffect(() => {
        if (user) {
            setOccupation(user.occupation || '');
            setExperienceLevel(user.experienceLevel || '');
            setCompany(user.company || '');
            setEducationDegree(user.educationDegree || '');
            setUniversity(user.university || '');
            setField(user.field || '');
        }
    }, [user]);

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
        setIsFormChanged(true);
    };

    const hasCompletedCourse = user && user.progress && user.progress.completedChapters && user.progress.completedChapters.length === 9;
  

    
    const text = {
        occupationLabel: lang === 'ar' ? "المهنة" : "Occupation",
        occupationPlaceHolder: lang === 'ar' ? "مثال: مدير المنتج" : "Ex: Product Manager",
        experienceLevelLabel: lang === 'ar' ? "مستوى الخبرة" : "Experience Level",
        experienceLevelPlaceHolder: lang === 'ar' ? "مثال: قائد / مدير" : "Ex: Lead / Manager",
        companyLabel: lang === 'ar' ? "الشركة" : "Company",
        companyPlaceHolder: lang === 'ar' ? "اسم الشركة" : "Company name",
        educationDegreeLabel: lang === 'ar' ? "الدرجة العلمية" : "Education Degree",
        educationDegreePlaceHolder: lang === 'ar' ? "مثال: بكالوريوس" : "Ex: Bachelor",
        universityLabel: lang === 'ar' ? "الجامعة" : "University",
        universityPlaceHolder: lang === 'ar' ? "اسم الجامعة" : "University name",
        fieldLabel: lang === 'ar' ? "التخصص" : "Field or Major",
        fieldPlaceHolder: lang === 'ar' ? "مثال: الهندسة" : "Ex: Engineering",
        signInButton: lang === 'ar' ? 'تسجيل الدخول' : 'Continue',
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
    
        const updatedUserInfo = {
            occupation,
            experienceLevel,
            company,
            educationDegree,
            university,
            field,
        };
    
        try {
            // Dispatch the action to update user profile
            dispatch(updateUserProfileAction(user.uid, updatedUserInfo));
    
         
            setIsFormChanged(false); // Reset form changed state
        } catch (error) {
            setError(error.message);
           
        }
    };
    
    const downloadCertificate = () => {
        const certificateElement = document.getElementById('certificate');
    
        // Desired dimensions for the PDF
        const pdfWidth = 800;
        const pdfHeight = 600;
    
        html2canvas(certificateElement, {
            // Scale the canvas to fit the desired dimensions
            onclone: (documentClone) => {
                const cloneContainer = documentClone.getElementById('certificate');
                cloneContainer.style.width = `${pdfWidth}px`;
                cloneContainer.style.height = `${pdfHeight}px`;
            }
        }).then(canvas => {
            // Create an image from the canvas
            const imgData = canvas.toDataURL('image/png');
    
            // Create a PDF with the desired dimensions
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [pdfWidth, pdfHeight]
            });
    
            // Calculate the scaling factors to fit the canvas in the PDF
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('certificate.pdf');
        }).catch(err => {
            console.error('Error generating certificate PDF:', err);
        });
    };
    
    
    return (
        <div className={styles.profileWrapper}>
            <Navbar/>
            <h1 className={styles.title}>{user && user.name}</h1>
            <p className={styles.subtitle}>{
                lang ===  'ar' ? "أدر معلوماتك وتحقق من شهادتك هنا بالضبط." : "Manage your info and check your certificate right here."
                }</p>

            <h2>
                {
                    lang === 'ar' ? "شهادة" : "Certificate"
                }
            </h2>

            {hasCompletedCourse ? (
                <>
                <div className={styles.certificate}  id="certificate">
                    {/* Display certificate details here */}
                    <img className={styles.certiLogo} src="/assets/certi-logo-2.png" alt="ILO LOGO "  />
                    <div>
                        <h1>LRBT Training Certificate</h1>
                        <h2>{user && user.name}</h2>
                        <p>Has successfully completed the online, <br />
LRBT Training Certificate</p>
<p>From <br /> {user.certification.certificateDate}</p>
                    <p>Till <br /> {user.certification.certificateDateEnd}</p>
                    </div>
                    <img className={styles.banner} src="/assets/certificate-banner.png" role="presentation"  />
                </div>
                <button onClick={downloadCertificate} className="mainButton">
                    {lang === 'ar' ? "تحميل الشهادة" : "Download Certificate"}</button>
                </>
            ) : (
                <div className={styles.noCertificate}>
                    <p>{lang === 'ar' ? "عندما تنهي الدورة، ستجد شهادتك هنا." : "When you finish the course, you will find your certificate here."}</p>
                </div>
                
            )}
            <div className={styles.profileInfo}>
                <h2>
                    {lang === 'ar' ?  "معلومات الملف الشخصي" : "Profile Info"}
                </h2>
                <form aria-live="polite" className={styles.signInForm} onSubmit={handleSubmit}>
            <div className={styles.doubleInputHolder}>
                <div className={styles.inputHolder}>
                    <label tabIndex='0' htmlFor="Occupation">{text.occupationLabel}</label>
                    <input 
                        type="text" 
                        id='Occupation' 
                        placeholder={text.occupationPlaceHolder} 
                        value={occupation}
                        aria-label={text.occupationLabel}
                        onChange={handleInputChange(setOccupation)}
                         />
                </div>
                <div  className={styles.inputHolder}>
                    <label htmlFor="experience-level">{text.experienceLevelLabel}</label>
                    <input 
                        type="text" 
                        id='experience-level' 
                        placeholder={text.experienceLevelPlaceHolder} 
                        value={experienceLevel}
                        aria-label={text.experienceLevelLabel}
                        onChange={handleInputChange(setExperienceLevel)}
                         />
                </div>
                <div className={styles.inputHolder}>
                    <label htmlFor="Company">{text.companyLabel}</label>
                    <input 
                        type="text" 
                        id='Company' 
                        placeholder={text.companyPlaceHolder} 
                        value={company}
                        aria-label={text.companyLabel}
                        onChange={handleInputChange(setCompany)}
                         />
                </div>
            </div>
           
            <div className={styles.doubleInputHolder}>
            <div  className={styles.inputHolder}>
                    <label htmlFor="education-degree">{text.educationDegreeLabel}</label>
                    <input 
                        type="text" 
                        id='education-degree' 
                        placeholder={text.educationDegreePlaceHolder} 
                        value={educationDegree}
                        aria-label={text.educationDegreeLabel}
                        onChange={handleInputChange(setEducationDegree)}
                         />
                </div>
                <div className={styles.inputHolder}>
                    <label htmlFor="University">{text.universityLabel}</label>
                    <input 
                        type="text" 
                        id='University' 
                        placeholder={text.universityPlaceHolder} 
                        value={university}
                        aria-label={text.universityLabel}
                        onChange={handleInputChange(setUniversity)}
                         />
                </div>
                <div  className={styles.inputHolder}>
                    <label htmlFor="field">{text.fieldLabel}</label>
                    <input 
                        type="text" 
                        id='field' 
                        placeholder={text.fieldPlaceHolder} 
                        value={field}
                        aria-label={text.fieldLabel}
                        onChange={handleInputChange(setField)}
                         />
                </div>
            </div>
            <button className="mainButton" type="submit" disabled={!isFormChanged || loading}>
                {loading ? <LoadingDots/> : lang === 'ar' ? "حفظ التغييرات" :"Save Changes"}
            </button>
        </form>
            </div>
        </div>
    )
}

export default Profile;
