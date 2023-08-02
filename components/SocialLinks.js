import styles from './SocialLinks.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <Link href={'mailto:billy31103@gmail.com'} target='_blank'><FontAwesomeIcon icon={faEnvelope}/></Link>
            <Link href={'https://www.linkedin.com/in/billy-wu-ymlsbhktd3u/'} target='_blank'><FontAwesomeIcon
                icon={faLinkedinIn}/></Link>
            <Link href={'https://github.com/worksB-collab'} target='_blank'><FontAwesomeIcon icon={faGithub}/></Link>
        </div>
    )
}

export default SocialLinks;