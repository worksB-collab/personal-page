import aboutPageStyles from './AboutPage.module.css';
import SocialLinks from "@/components/SocialLinks";
import AccordionItem from "@/pages/about/AccordionItem";
import WideWrapper from "@/components/WideWrapper";
import ExperienceSection from "@/pages/about/Experience/ExperienceSection";
import EducationSection from "@/pages/about/Education/EducationSection";
import LicenseSection from "@/pages/about/License/LicenseSection";
import ProjectSection from "@/pages/about/Project/ProjectSection";
import {useState} from "react";
import CompetitionSection from "@/pages/about/Competition/CompetitionSection";
import OnlineCourseSection from "@/pages/about/OnlineCourse/OnlineCourseSection";
import EventSection from "@/pages/about/Event/EventSection";
import SkillSection from "@/pages/about/Skill/SkillSection";

const AboutPage = () => {

    const [accordionsCollapse, setAccordionsCollapse] = useState({
        experience: true,
        education: true,
        project: true,
        license: true,
        event: true,
        onlineCourse: true,
        competition: true,
        skill: true,
    });
    const [isCsRelatedToggles, setIsCsRelatedToggles] = useState({
        experience: false,
        education: false,
        project: false,
        license: false,
        event: false,
        onlineCourse: false,
        competition: false,
        skill: false,
    });

    const onPlusClickHandler = (e) => {
        const button = e.target;
        const id = button.id;
        const content = document.querySelector(`#content-${id}`);
        content.classList.remove(aboutPageStyles.hide);
        setAccordionsCollapse(prevState => {
            Object.keys(prevState).forEach(key => {
                prevState[key] = true;
            });
            prevState[id] = false;
            return {
                ...prevState
            }
        });

        button.scrollIntoView();
    }

    const onMinusClickHandler = (e) => {
        const button = e.target;
        const id = button.id;
        const content = document.querySelector(`#content-${id}`);
        content.classList.add(aboutPageStyles.hide);
        setAccordionsCollapse(prevState => {
            prevState[id] = true;
            return {
                ...prevState
            }
        });
    }

    return (
        <WideWrapper>
            <h2 className={aboutPageStyles.name}>Ping-Chun, Wu (Billy)</h2>
            <div className={aboutPageStyles.section}>
                <p className={aboutPageStyles.aboutMe}>
                    As a backend software engineer, I have had the opportunity to work in both fintech and IoT
                    industries. I possess extensive experience in Agile practices. I am passionate about helping my
                    team achieve maximum value within projects and enjoy working collaboratively with my team to
                    deliver efficient and high-quality software. I am always looking for ways to improve my
                    problem-solving skills and eager to learn and grow alongside my team.
                </p>
                <AccordionItem id={'skill'}
                               header={'Skill'}
                               collapse={accordionsCollapse['skill']}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <SkillSection/>
                </AccordionItem>
                <AccordionItem id={'experience'}
                               header={'Experience'}
                               collapse={accordionsCollapse['experience']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <ExperienceSection isCsRelated={isCsRelatedToggles['experience']}/>
                </AccordionItem>
                <AccordionItem id={'education'}
                               header={'Education'}
                               collapse={accordionsCollapse['education']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <EducationSection isCsRelated={isCsRelatedToggles['education']}/>
                </AccordionItem>
                <AccordionItem id={'onlineCourse'}
                               header={'Online Course'}
                               collapse={accordionsCollapse['onlineCourse']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <OnlineCourseSection isCsRelated={isCsRelatedToggles['onlineCourse']}/>
                </AccordionItem>
                <AccordionItem id={'project'}
                               header={'Project'}
                               collapse={accordionsCollapse['project']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <ProjectSection isCsRelated={isCsRelatedToggles['project']}/>
                </AccordionItem>
                <AccordionItem id={'event'}
                               header={'Event'}
                               collapse={accordionsCollapse['event']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <EventSection isCsRelated={isCsRelatedToggles['event']}/>
                </AccordionItem>
                <AccordionItem id={'license'}
                               header={'Certificate & License'}
                               collapse={accordionsCollapse['license']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <LicenseSection isCsRelated={isCsRelatedToggles['license']}/>
                </AccordionItem>
                <AccordionItem id={'competition'}
                               header={'Competition'}
                               collapse={accordionsCollapse['competition']}
                               setIsCsRelated={setIsCsRelatedToggles}
                               onPlusClickHandler={onPlusClickHandler}
                               onMinusClickHandler={onMinusClickHandler}>
                    <CompetitionSection isCsRelated={isCsRelatedToggles['competition']}/>
                </AccordionItem>

            </div>
            <SocialLinks/>
        </WideWrapper>
    )
}

export default AboutPage;