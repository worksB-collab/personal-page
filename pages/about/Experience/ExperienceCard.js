import styles from '../Card.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.spaceBetweenContainer}>
                    <div className={styles.flexColumn}>
                        <p className={styles.title}>{props.title}</p>
                        <a href={props.companySite}
                           target='_blank'
                           className={styles.company}>{props.company}</a>
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

export default ExperienceCard;