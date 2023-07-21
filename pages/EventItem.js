import styles from './EventItem.module.css';

const EventItem = (props) => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{props.title}</h4>
            <h5 className={styles.date}>{props.date}</h5>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
}

export default EventItem;