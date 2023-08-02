import styles from './EventItem.module.css';

const EventItem = (props) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{props.title}</h5>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
}

export default EventItem;