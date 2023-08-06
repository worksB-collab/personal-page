import styles from '../Card.module.css';

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.infoContainer}>
                <h5 className={styles.title}>{props.title}</h5>
                <p>{props.content}</p></div>
        </div>
    )
}

export default ProjectCard;