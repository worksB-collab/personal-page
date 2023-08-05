import ProjectCard from "@/pages/about/Project/ProjectCard";
import {ProjectData} from "@/data/DataSet";

const ProjectSection = (props) => {

    const getProjectCards = item => {
        return <ProjectCard
            key={item.id}
            title={item.title}
            time={item.time}
            content={item.content}
        />
    }
    const data = props.isCsRelated ? ProjectData
            .filter(item => item.isCsRelated)
            .map(getProjectCards)
        :
        ProjectData.map(getProjectCards);


    return (
        <>
            {data}
        </>
    )
}

export default ProjectSection;