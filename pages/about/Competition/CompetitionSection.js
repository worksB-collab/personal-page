import {CompetitionData} from "@/data/DataSet";
import CompetitionCard from "@/pages/about/Competition/CompetitionCard";

const CompetitionSection = (props) => {
    const getCompetitionCards = item => {
        return <CompetitionCard
            key={item.id}
            price={item.price}
            title={item.title}
            competitionSite={item.competitionSite}
            time={item.time}
            location={item.location}
            host={item.host}
            hostSite={item.hostSite}
            content={item.content}
        />
    };

    const data = props.isCsRelated ? CompetitionData
            .filter(item => item.isCsRelated)
            .map(getCompetitionCards)
        :
        CompetitionData.map(getCompetitionCards);

    return (
        <>
            {data}
        </>
    )
}

export default CompetitionSection;