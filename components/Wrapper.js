import styles from './Wrapper.module.css';

const Wrapper = (props) => {
    return (
        <div className={styles.profileCard}>
            {props.children}
        </div>
    )
}

export default Wrapper;