import ExperienceCard from "@/pages/about/Experience/ExperienceCard";
import {ExperienceData} from "@/pages/about/DataSet";

const ExperienceSection = (props) => {

    const data = props.isCsRelated ? ExperienceData.filter(item => item.isCsRelated)
            .map(item => {
                return <ExperienceCard
                    key={item.id}
                    title={item.title}
                    company={item.company}
                    time={item.time}
                    companySite={item.companySite}
                    location={item.location}
                    content={item.content}
                />
            })
        :
        ExperienceData.map(item => {
            return <ExperienceCard
                key={item.id}
                title={item.title}
                company={item.company}
                time={item.time}
                companySite={item.companySite}
                location={item.location}
                content={item.content}
            />
        })

    return (
        <>
            {data}
        </>
    )
}

export default ExperienceSection;