import Wrapper from "@/components/Wrapper";
import Image from 'next/image';
import styles from './Homepage.module.css';
import Link from "next/link";

const Homepage = () => {
    return (
        <Wrapper>
            <div className={styles.profileCard}>
                <div className={styles.profilePhotoFrame}>
                    <Image
                        src='/../public/img/profile.jpg'
                        alt={'profile'}
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <h3>Ping-Chun, Wu (Billy)</h3>
                </div>
                <hr className={styles.hrLine}/>
                <div>
                    <h4>Software Developer at Arena Banking</h4>
                </div>
                <div className={styles.linkButtons}>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/about'}>About</Link>
                </div>
                <div className="title">
                    <i className="fa fa-car"></i>
                    {/*<a className="social-btn" href="mailto:yylou@purdue.edu"*/}
                    {/*   target="_blank" rel="noopener noreferrer">*/}
                    {/*    <i className="fa fa-fw fa-envelope-square"></i>*/}
                    {/*</a>*/}
                    {/*<a className="social-btn" href="http://linkedin.com/in/yylou" target="_blank"*!/*/}
                    {/*           rel="noopener noreferrer">*/}
                    {/*    <i className="fa fa-fw fa-linkedin-square"></i>*/}
                    {/*</a>*/}
                    {/*    <a className="social-btn"*/}
                    {/*       href="http://github.com/yylou" target="_blank"*/}
                    {/*       rel="noopener noreferrer"><i*/}
                    {/*        className="fa fa-fw fa-github"></i></a>*/}
                </div>
            </div>
        </Wrapper>
    )
}

export default Homepage;