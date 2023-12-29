import styles from './icon-text.module.scss';
import HeadingTwo from '../heading-2/heading-2.component';
const IconText = ({imgSrc,enText,arText}) => {
    return (
        <div className={styles.iconText}>
            <img src={imgSrc} aria-role="presentation"  />
            <HeadingTwo
                enText={enText}
                arText={arText}
            />
        </div>
    )
}

export default IconText