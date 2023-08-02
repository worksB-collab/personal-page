import styles from '../Card.module.css';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EducationCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.contentContainer}>
                <h5 className={styles.school}>{props.school}</h5>
                <p className={styles.program}>{props.program}</p>
                <p className={styles.location}>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    {` ${props.location}`}
                </p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default EducationCard;