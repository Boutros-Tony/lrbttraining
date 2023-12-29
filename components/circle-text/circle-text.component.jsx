import styles from './circle-text.module.scss';


import HeadingTwo from '../heading-2/heading-2.component';
const CircleText = ({enText,arText,color,width,height,miniColor}) => {
    return (
        <div className={styles.circleText}>
            <span style={{backgroundColor:color}} className={styles.fullCircle} role='presentation'>
                <span className={styles.semiCircle} style={{width:width,height:height,backgroundColor:miniColor}}></span>
                </span>
            <HeadingTwo
                enText={enText}
                arText={arText}
            />
        </div>
    )
}

export default CircleText;