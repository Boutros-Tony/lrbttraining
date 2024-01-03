import Link from "next/link";
import LanguageDetector from "../lang-detecter/lang-detecter.component";
import styles from './navbar.module.scss';
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors";
import ChangeLang from "../change-lang/change-lang.component";
import { signOutFromFirebase } from "../../firebase.utils";
import { useRouter } from "next/router";
import { resetStore } from "../../store/store";
const Navbar = () => {
    const language = LanguageDetector();
    const user = useSelector(selectCurrentUser);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter()
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevents the default action for these keys
            toggleDropdown();
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleSignOut = async () => {
        await signOutFromFirebase();
        await resetStore();
        router.push('/')
        
    }
    return (
        <nav className={styles.navbar} aria-label="Main Navigation">
            <div className={styles.lfNav}>
            <Link className={styles.logo} href="/home">
                {
                    language === 'ar' ? (
                        <img src="/assets/blue-logo-arabic.png" alt='شعار منظمة العمل الدولية' />
                    ) : (
                        <img src="/assets/blue-logo.png" alt="ILO logo"/>
                    )
                }
            </Link>
            <ChangeLang/>
            </div>
         
            <div 
                className={styles.dropDown} 
                onClick={toggleDropdown} 
                onKeyDown={handleKeyDown}
                ref={dropdownRef}
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-label="dropdown button"
                role="button"
            >
                <img aria-hidden="true" src="/assets/user-rectangle.png" alt="Profile Icon" />
                <p aria-hidden="true">{user && user.name}</p>
                <img aria-hidden="true" src="/assets/down-angle.png" alt="dropdown Icon" />
                <div 
                    className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ''}`}
                    aria-hidden={!isDropdownOpen} // Hide from screen readers when not open
                    aria-live="polite"
                    aria-label="dropdown-content"
                   
                >
                    <Link href="/profile">{language === 'ar' ? "الملف الشخصي" : "Profile"}</Link>
<Link href="/chapters">{language === 'ar' ? "الفصول" : "Chapters"}</Link>
<button onClick={handleSignOut}>{language === 'ar' ? "تسجيل الخروج" : "Logout"}</button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
