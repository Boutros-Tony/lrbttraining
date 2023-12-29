import styles from './sign-in-form.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingDots from '../loading-dots/loading-dots.component';
import { signUpWithEmailStart } from '../../store/user/user.actions';
import { useDispatch } from 'react-redux';
import ResendVerification from '../resend-verification/resend-verification.component';
import { selectEmailSignUpLoading,selectEmailSignUpError } from '../../store/user/user.selectors';
const ProfileForm = ({language,userData}) => {
    const dispatch = useDispatch();
    const [occupation, setOccupation] = useState('');
    const [experienceLevel, setexperienceLevel] = useState('');
    const [company, setCompany] = useState('');
    const [educationDegree, seteducationDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [field, setField] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const signUpLoading = useSelector(selectEmailSignUpLoading);
    const signUpError = useSelector(selectEmailSignUpError);
    const [showVerification, setShowVerification] = useState(false);

    const areAllFieldsFilled = () => {
        return occupation && experienceLevel && company && educationDegree && university && field;
    };
    const handleResendVerification = () => {
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!areAllFieldsFilled()) {
            setError(language === 'ar' ? 'جميع الحقول مطلوبة' : 'All fields are required');
            setLoading(false);
            return;
        }

        // Prepare the full user data
        const fullUserData = {
            ...userData, // existing user data
            occupation,
            experienceLevel,
            company,
            educationDegree,
            university,
            field
        };

        const success = await dispatch(signUpWithEmailStart(fullUserData));
        if (success) {
            setShowVerification(true); // Show verification message on success
        } 
    };

    
    const text = {
        occupationLabel: language === 'ar' ? "المهنة" : "Occupation",
        occupationPlaceHolder: language === 'ar' ? "مثال: مدير المنتج" : "Ex: Product Manager",
        experienceLevelLabel: language === 'ar' ? "مستوى الخبرة" : "Experience Level",
        experienceLevelPlaceHolder: language === 'ar' ? "مثال: قائد / مدير" : "Ex: Lead / Manager",
        companyLabel: language === 'ar' ? "الشركة" : "Company",
        companyPlaceHolder: language === 'ar' ? "اسم الشركة" : "Company name",
        educationDegreeLabel: language === 'ar' ? "الدرجة العلمية" : "Education Degree",
        educationDegreePlaceHolder: language === 'ar' ? "مثال: بكالوريوس" : "Ex: Bachelor",
        universityLabel: language === 'ar' ? "الجامعة" : "University",
        universityPlaceHolder: language === 'ar' ? "اسم الجامعة" : "University name",
        fieldLabel: language === 'ar' ? "التخصص" : "Field or Major",
        fieldPlaceHolder: language === 'ar' ? "مثال: الهندسة" : "Ex: Engineering",
        signInButton: language === 'ar' ? 'تسجيل الدخول' : 'Continue',
    };
    
    return (
        <>
         
        {
            !showVerification && (<form aria-live="polite" className={styles.signInForm} onSubmit={handleSubmit}>
            <div className={styles.doubleInputHolder}>
                <div className={styles.inputHolder}>
                    <label tabIndex='0' htmlFor="Occupation">{text.occupationLabel}</label>
                    <input 
                        type="text" 
                        id='Occupation' 
                        placeholder={text.occupationPlaceHolder} 
                        value={occupation}
                        aria-label={text.occupationLabel}
                        onChange={(e) => setOccupation(e.target.value)}
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
                        onChange={(e) => setexperienceLevel(e.target.value)}
                         />
                </div>
            </div>
            <div className={styles.doubleInputHolder}>
                <div className={styles.inputHolder}>
                    <label htmlFor="Company">{text.companyLabel}</label>
                    <input 
                        type="text" 
                        id='Company' 
                        placeholder={text.companyPlaceHolder} 
                        value={company}
                        aria-label={text.companyLabel}
                        onChange={(e) => setCompany(e.target.value)}
                         />
                </div>
                <div  className={styles.inputHolder}>
                    <label htmlFor="education-degree">{text.educationDegreeLabel}</label>
                    <input 
                        type="text" 
                        id='education-degree' 
                        placeholder={text.educationDegreePlaceHolder} 
                        value={educationDegree}
                        aria-label={text.educationDegreeLabel}
                        onChange={(e) => seteducationDegree(e.target.value)}
                         />
                </div>
            </div>
            <div className={styles.doubleInputHolder}>
                <div className={styles.inputHolder}>
                    <label htmlFor="University">{text.universityLabel}</label>
                    <input 
                        type="text" 
                        id='University' 
                        placeholder={text.universityPlaceHolder} 
                        value={university}
                        aria-label={text.universityLabel}
                        onChange={(e) => setUniversity(e.target.value)}
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
                        onChange={(e) => setField(e.target.value)}
                         />
                </div>
            </div>
            {error && <p className='error-message'>{error}</p>}
            {signUpError && <p className='error-message'>{signUpError}</p>}
            <button type="submit" className='mainButton' disabled={loading}>
                {signUpLoading ? <LoadingDots/> : text.signInButton}
            </button>
        </form>)
        }
        {showVerification && (
                <ResendVerification email={userData.email} onResendClick={handleResendVerification} />
            )}
        </>
       
    )
}

export default ProfileForm;
