import {EventData} from "@/data/DataSet";
import EventCard from "@/pages/about/Event/EventCard";

const EventSection = (props) => {
    const getEventCards = item => {
        return <EventCard
            key={item.id}
            title={item.title}
            eventSite={item.eventSite}
            host={item.host}
            hostSite={item.hostSite}
            time={item.time}
            location={item.location}
            content={item.content}
        />
    };

    const data = props.isCsRelated ? EventData
            .filter(item => item.isCsRelated)
            .map(getEventCards)
        :
        EventData.map(getEventCards);

    return (
        <>
            {data}
        </>
    )
}

export default EventSection;