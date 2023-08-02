import styles from '../Card.module.css';

const LicenseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.contentContainer}>
                <h5 className={styles.title}>{props.title}</h5>
                <p className={styles.company}>{props.company}</p>
            </div>
        </div>
    )
}

export default LicenseCard;