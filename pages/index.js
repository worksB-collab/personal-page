import ThinWrapper from "@/components/ThinWrapper";
import Image from 'next/image';
import styles from './Homepage.module.css';
import Link from "next/link";
import EventItem from "@/pages/EventItem";
import SocialLinks from "@/components/SocialLinks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
    return (
        <ThinWrapper>
            <div className={styles.profilePhotoFrame}>
                <Image
                    src='/images/profile.jpg'
                    alt={'profile'}
                    width={150}
                    height={150}
                />
            </div>
            <h4 className={styles.profileName}>Ping-Chun, Wu (Billy)</h4>
            <h5 className={styles.profileTitle}>Software Developer</h5>
            <div className={styles.linkButtons}>
              <Link href={'https://drive.google.com/file/d/12XsSXkakyv495dieFdeTPSsJVZI9kHF0/view?usp=sharing'}
                    target='_blank'>
                  <FontAwesomeIcon icon={faFilePdf}/> CV
              </Link>
                <Link href={'/about'}>About</Link>
            </div>
            <div className={styles.events}>
                <EventItem title={'Happy Bubble'} date={'Feb. 2022 - present'}
                           message={'A platform offers dating opportunities for individuals to explore a wide array of social events.'}/>
                <EventItem title={'KP Order System'} date={'Apr. 2020 - Nov. 2021'}
                           message={'A tool assists customers in customizing stamp designs and generating operation reports for businesses.'}/>
            </div>
            <SocialLinks/>
        </ThinWrapper>
    )
}

export default Homepage;