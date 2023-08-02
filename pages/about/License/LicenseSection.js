import LicenseCard from "@/pages/about/License/LicenseCard";

const LicenseSection = () => {
    return (
        <>
            <LicenseCard title={'Golden Award Year of the Rabbit'}
                         company={'Codility'}
                         time={'Mar. 2023'}
            />
            <LicenseCard title={'DAT208x Introduction to Python for Data Science'}
                         company={'Microsoft'}
                         time={'Jul. 2019'}
            />
            <LicenseCard title={'Google Adwords'}
                         company={'Google'}
                         time={'Apr. 2017'}
            />
            <LicenseCard title={'PMA+'}
                         company={'National Project Management Association'}
                         time={'Jun 2015'}
            />
            <LicenseCard title={'Foundation Certificate in Logistics'}
                         company={'Taiwan Association of Logistics Management'}
                         time={'Jun. 2014'}
            />
        </>
    )
}

export default LicenseSection;