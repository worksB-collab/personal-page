import Wrapper from "@/components/Wrapper";
import Image from 'next/image';
import styles from './Homepage.module.css';
import Link from "next/link";
import EventItem from "@/pages/EventItem";
import SocialLinks from "@/components/SocialLinks";

const Homepage = () => {
    return (
        <Wrapper>
            <div className={styles.profilePhotoFrame}>
                <Image
                    src='/../public/static/images/profile.jpg'
                    alt={'profile'}
                    width={150}
                    height={150}
                />
            </div>
            <div className={styles.profileName}>
                <h3>Ping-Chun, Wu (Billy)</h3>
            </div>
            {/*<hr className={styles.hrLine}/>*/}
            <div className={styles.profileTitle}>
                <h4>Software Developer at Arena Banking</h4>
            </div>
            <div className={styles.linkButtons}>
                <Link
                    href={'https://drive.google.com/drive/u/0/folders/0BwmBNMDCk4AtakpzanM2T3lscFU?resourcekey=0-evidSmhjGeJWqv-pRo06Qw'}>CV</Link>
                <Link href={'/about'}>About</Link>
            </div>
            <div className={styles.events}>
                <EventItem title={'Happy Bubble'} date={'Feb. 2022 - present'}
                           message={'A platform offers dating opportunities for individuals to explore a wide array of social events.'}/>
                <EventItem title={'KP Order System'} date={'Apr. 2020 - Nov. 2021'}
                           message={'A tool assists customers in customizing stamp designs and generating operation reports for businesses.'}/>
            </div>
            <SocialLinks/>
        </Wrapper>
    )
}

export default Homepage;