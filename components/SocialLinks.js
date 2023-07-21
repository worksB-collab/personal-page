import styles from './SocialLinks.module.css';
import Link from "next/link";

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <Link href={'mailto:billy31103@gmail.com'}>Email</Link>
            <Link href={'https://www.linkedin.com/in/billy-wu-ymlsbhktd3u/'}>LinkedIn</Link>
            <Link href={'https://github.com/worksB-collab'}>Github</Link>
        </div>
    )
}

export default SocialLinks;