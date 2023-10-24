import styles from './SocialLinks.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <Link href={'mailto:pingchunwu.master@gmail.com'} target='_blank'><FontAwesomeIcon
                icon={faEnvelope}/></Link>
            <Link href={'https://www.linkedin.com/in/pingchunwu/'} target='_blank'><FontAwesomeIcon
                icon={faLinkedinIn}/></Link>
            <Link href={'https://github.com/worksB-collab'} target='_blank'><FontAwesomeIcon icon={faGithub}/></Link>
        </div>
    )
}

export default SocialLinks;