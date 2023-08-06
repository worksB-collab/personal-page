import styles from '../Card.module.css';

const OnlineCourseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <a href={props.courseUrl}
                   target='_blank'
                   className={styles.title}>{props.title}</a>
                <a href={props.hostSite}
                   target='_blank'
                   className={styles.host}>{props.host}</a>
                {/*<p>{props.content}</p>*/}
            </div>
        </div>
    )
}

export default OnlineCourseCard;