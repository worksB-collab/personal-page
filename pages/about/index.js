import aboutPageStyles from './AboutPage.module.css';
import SocialLinks from "@/components/SocialLinks";
import AccordionItem from "@/pages/about/AccordionItem";
import WideWrapper from "@/components/WideWrapper";
import ExperienceSection from "@/pages/about/Experience/ExperienceSection";
import EducationSection from "@/pages/about/Education/EducationSection";
import LicenseSection from "@/pages/about/License/LicenseSection";
import ProjectSection from "@/pages/about/Project/ProjectSection";
import {useState} from "react";

const AboutPage = () => {

    const [accordionsCollapse, setAccordionsCollapse] = useState({
        experience: false,
        education: false,
        project: false,
        license: false
    });

    const onPlusClickHandler = (e) => {
        const button = e.target;
        const id = button.id;
        const content = document.querySelector(`#content-${id}`);
        content.classList.remove(aboutPageStyles.hide);
        setAccordionsCollapse(prevState => {
            prevState[id] = !prevState[id]
            return {
                ...prevState
            }
        });
    }

    const onMinusClickHandler = (e) => {
        const button = e.target;
        const id = button.id;
        const content = document.querySelector(`#content-${id}`);
        content.classList.add(aboutPageStyles.hide);
        setAccordionsCollapse(prevState => {
            prevState[id] = !prevState[id]
            return {
                ...prevState
            }
        });
    }

    return (
        <WideWrapper>
            <h2 className={aboutPageStyles.name}>Ping-Chun, Wu (Billy)</h2>
            <div className={aboutPageStyles.section}>
                {/*<AccordionItem id={'about'}*/}
                {/*               header={'About'}*/}
                {/*               onPlusClickHandler={onPlusClickHandler}>*/}
                <p className={aboutPageStyles.aboutMe}>
                    As a backend software engineer, I have had the opportunity to work in both fintech and IoT
                    industries. I possess extensive experience in Agile practices. I am passionate about helping my
                    team achieve maximum value within projects and enjoy working collaboratively with my team to
                    deliver efficient and high-quality software. I am always looking for ways to improve my
                    problem-solving skills and eager to learn and grow alongside my team.
                </p>
                {/*</AccordionItem>*/}
                <AccordionItem id={'experience'}
                               header={'Experience'}
                               collapse={accordionsCollapse['experience']}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <ExperienceSection/>
                </AccordionItem>
                <AccordionItem id={'education'}
                               header={'Education'}
                               collapse={accordionsCollapse['education']}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <EducationSection/>
                </AccordionItem>
                <AccordionItem id={'project'}
                               header={'Project'}
                               collapse={accordionsCollapse['project']}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <ProjectSection/>
                </AccordionItem>
                <AccordionItem id={'license'}
                               header={'License'}
                               collapse={accordionsCollapse['license']}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <LicenseSection/>
                </AccordionItem>
            </div>
            <SocialLinks/>
        </WideWrapper>
    )
}

export default AboutPage;