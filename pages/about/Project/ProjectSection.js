import ProjectCard from "@/pages/about/Project/ProjectCard";

const ProjectSection = () => {
    // todo add other projects
    return (
        <>
            <ProjectCard title={'Happy Bubble'}
                         time={'Feb 2022 - Present'}
                         content={'This platform offers opportunities for individuals to explore a wide array of social events, facilitating connections that can lead to meeting their ideal partners. Beyond matchmaking, it also serves as a catalyst for personal growth, empowering singles to hone their social skills and foster meaningful relationships.'}
            />
            <ProjectCard title={'TicketC'}
                         time={'Oct. 2020 - Mar. 2022'}
                         content={'A personal tool application seamlessly communicates with MySQL using the MVVM structure, providing users with a streamlined interface to track and monitor task statuses. With its refined design, this app offers a formal and efficient solution, ensuring seamless integration and enhancing productivity for individuals.'}
            />
            <ProjectCard title={'KP Order System'}
                         time={'Apr. 2020 - Nov. 2021'}
                         content={'This tool serves as a valuable resource for customers, enabling them to effortlessly customize stamp designs while also generating comprehensive operation reports tailored to their businesses\' needs.'}
            />
            <ProjectCard title={'Bunny Shift'}
                         time={'Dec. 2019 - Sep. 2020'}
                         content={'A shift arrangement system seamlessly caters to the needs of both employees and HR professionals, functioning flawlessly on the iOS and Android platforms. This robust solution streamlines the process of scheduling shifts, ensuring optimal efficiency and convenience for all stakeholders involved.'}
            />
        </>
    )
}

export default ProjectSection;