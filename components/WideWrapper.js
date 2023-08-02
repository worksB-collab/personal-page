import styles from './Wrapper.module.css';

const WideWrapper = (props) => {
    return (
        <div className={`${styles.card} ${styles.wideCard}`}>
            {props.children}
        </div>
    )
}

export default WideWrapper;