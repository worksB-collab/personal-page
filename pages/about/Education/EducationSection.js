import EducationCard from "@/pages/about/Education/EducationCard";
import {EducationData} from "@/data/DataSet";

const EducationSection = (props) => {

    const getEducationCards = item => {
        return <EducationCard
            key={item.id}
            program={item.program}
            school={item.school}
            time={item.time}
            location={item.location}
            content={item.content}
        />
    };

    const data = props.isCsRelated ? EducationData
            .filter(item => item.isCsRelated)
            .map(getEducationCards)
        :
        EducationData.map(getEducationCards);

    return (
        <>
            {data}
        </>
    )
}

export default EducationSection;