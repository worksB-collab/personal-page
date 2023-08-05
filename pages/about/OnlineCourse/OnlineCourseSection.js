import {OnlineCourseData} from "@/data/DataSet";
import OnlineCourseCard from "@/pages/about/OnlineCourse/OnlineCourseCard";

const OnlineCourseSection = (props) => {
    const getOnlineCourseCards = item => {
        return <OnlineCourseCard
            key={item.id}
            title={item.title}
            courseUrl={item.courseUrl}
            host={item.host}
            hostSite={item.hostSite}
            time={item.time}
            content={item.content}
        />
    };

    const data = props.isCsRelated ? OnlineCourseData
            .filter(item => item.isCsRelated)
            .map(getOnlineCourseCards)
        :
        OnlineCourseData.map(getOnlineCourseCards);

    return (
        <>
            {data}
        </>
    )
}

export default OnlineCourseSection;