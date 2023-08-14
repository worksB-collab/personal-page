import styles from '../Card.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const EventCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.spaceBetweenContainer}>
                    <div className={styles.flexColumn}>
                        <a href={props.eventSite}
                           target='_blank'
                           className={styles.title}>{props.title}</a>
                        <a href={props.hostSite}
                           target='_blank'
                           className={styles.host}>{props.host}</a>
                    </div>
                    <p className={styles.location}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        {` ${props.location}`}
                    </p>
                </div>
                <p className={styles.content}>{props.content}</p>
            </div>
        </div>
    )
}

export default EventCard;