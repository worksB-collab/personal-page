import styles from '../Card.module.css';

const SkillCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.skillContainer}>
                <h5 className={styles.title}>{props.title}</h5>
                <div className={styles.skillTagContainer}>
                    {
                        props.skills.map((item, index) => {
                            return (
                                <p key={index} className={styles.skillTag}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillCard;