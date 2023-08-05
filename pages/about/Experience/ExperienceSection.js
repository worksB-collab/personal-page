import ExperienceCard from "@/pages/about/Experience/ExperienceCard";
import {ExperienceData} from "@/data/DataSet";

const ExperienceSection = (props) => {

    const getExperienceCards = item => {
        return <ExperienceCard
            key={item.id}
            title={item.title}
            company={item.company}
            time={item.time}
            companySite={item.companySite}
            location={item.location}
            content={item.content}
        />
    };

    const data = props.isCsRelated ? ExperienceData
            .filter(item => item.isCsRelated)
            .map(getExperienceCards)
        :
        ExperienceData.map(getExperienceCards);

    return (
        <>
            {data}
        </>
    )
}

export default ExperienceSection;