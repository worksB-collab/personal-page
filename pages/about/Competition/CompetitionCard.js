import styles from '../Card.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const CompetitionCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.spaceBetweenContainer}>
                    <div className={styles.flexColumn}>
                        <p className={styles.price}>{props.price}</p>
                        <a href={props.competitionSite}
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
                {/*<p>{props.content}</p>*/}
            </div>
        </div>
    )
}

export default CompetitionCard;