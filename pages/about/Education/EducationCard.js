import styles from '../Card.module.css';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EducationCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.spaceBetweenContainer}>
                    <div className={styles.flexColumn}>
                        <h5 className={styles.school}>{props.school}</h5>
                        <p className={styles.program}>{props.program}</p>
                    </div>
                    <p className={styles.location}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        {` ${props.location}`}
                    </p>
                </div>
                {
                    props.content && props.content.split('- ')
                        .filter(item => item.length > 0)
                        .map((item, index) => {
                            return (
                                <p key={index} className={styles.content}>{`◆ ${item}`}</p>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default EducationCard;