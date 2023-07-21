import Wrapper from "@/components/Wrapper";
import styles from '../Homepage.module.css';
import SocialLinks from "@/components/SocialLinks";

const AboutPage = () => {
    return (
        <Wrapper>
            <h2>Ping-Chun, Wu (Billy)</h2>
            <SocialLinks/>
            <hr className={styles.hrLine}/>
        </Wrapper>
    )
}

export default AboutPage;