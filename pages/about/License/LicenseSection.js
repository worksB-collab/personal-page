import LicenseCard from "@/pages/about/License/LicenseCard";
import {LicenseData} from "@/data/DataSet";

const LicenseSection = (props) => {
    const getLicenseCards = item => {
        return <LicenseCard
            key={item.id}
            title={item.title}
            company={item.company}
            time={item.time}
        />
    };

    const data = props.isCsRelated ? LicenseData
            .filter(item => item.isCsRelated)
            .map(getLicenseCards)
        :
        LicenseData.map(getLicenseCards);

    return (
        <>
            {data}
        </>
    )
}

export default LicenseSection;