import styles from './sign-in-form.module.scss';
import { useState } from 'react';
import LoadingDots from '../loading-dots/loading-dots.component';
import { signInWithEmailAction } from '../../store/user/user.actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectEmailSignInError,selectEmailSignInLoading,selectIsUserVerified } from '../../store/user/user.selectors';
const SignInForm = ({language}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const error = useSelector(selectEmailSignInError);
    const loading = useSelector(selectEmailSignInLoading)
    const dispatch = useDispatch();
    const isVerified = useSelector(selectIsUserVerified);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const success = await dispatch(signInWithEmailAction(email, password));
            if (success) {
                if (isVerified) {
                    router.push('/home');
                } else {
                    router.push('/verify-email');
                }
            }
        } catch (e) {
            console.error('Sign in failed:', e);
        }
    };
    const text = {
        emailLabel: language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address',
        passwordLabel: language === 'ar' ? 'كلمه السر' : 'Password',
        signInButton: language === 'ar' ? 'تسجيل الدخول' : 'Sign In',
        
    };
    return (
        <form className={styles.signInForm} onSubmit={handleSubmit}>
            <label htmlFor="email">{text.emailLabel}</label>
            <input 
                id="email" 
                type="email" 
                placeholder={text.emailLabel}
                aria-label={text.emailLabel}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">{text.passwordLabel}</label>
            <input 
                id="password" 
                type="password" 
                placeholder={text.passwordLabel}
                aria-label={text.passwordLabel}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='error-message'>{error}</p>}
            <button type="submit" className='mainButton' disabled={loading}>
                {loading ? <LoadingDots/> : text.signInButton}
            </button>
        </form>
    )
}

export default SignInForm;
