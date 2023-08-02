import styles from './Wrapper.module.css';

const ThinWrapper = (props) => {
    return (
        <div className={`${styles.card} ${styles.thinCard}`}>
            {props.children}
        </div>
    )
}

export default ThinWrapper;