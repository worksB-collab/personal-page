import ExperienceCard from "@/pages/about/Experience/ExperienceCard";

const ExperienceSection = () => {
    return (
        <>
            <ExperienceCard title={'Software Developer'}
                            company={'Arena Management Consulting AG, Full-Time'}
                            time={'May 2021 - Jul. 2023'}
                            companySite={'https://www.arena-banking.com/?lang=en'}
                            location={'Taipei City, Taiwan'}
                            content={'- Crafting extensible and scalable modules to expertly manipulate portfolios to EAM clients within the Arena ecosystem.\n' +
                                '- Employing industry-leading best practices to ensure optimal maintainability and readability of the platform.\n' +
                                '- Focusing on the continuous enhancement of the code base to streamline and maximize system performance, backed by comprehensive unit testing.\n' +
                                '- Facilitating daily peer reviews to foster mutual learning and accommodate diverse requests.'}
            />
            <ExperienceCard title={'Software Engineer'}
                            company={'TiMOTION, Full-Time'}
                            companySite={'https://www.timotion.com/en'}
                            time={'Apr. 2020 - May 2021'}
                            location={'Taipei City, Taiwan'}
                            content={'- Designed and developed cutting-edge mobile applications for iOS and Android that seamlessly integrate with IoT devices.\n' +
                                '- Revamped the existing code base with the introduction of the MVVM structure and modularization, resulting in greater efficiency and ease of maintenance.\n' +
                                '- Collaborated closely with the Firmware and Test Team to conduct integration tests, ensuring seamless functionality and optimal performance.'}
            />
            <ExperienceCard title={'Marketing Specialist/ Visual Merchandiser'}
                            company={'HMD Global, Full-Time'}
                            companySite={'https://www.hmdglobal.com/'}
                            time={'Mar. 2018 - May 2019'}
                            location={'Taipei City, Taiwan'}
                            content={'- Collaborated with a variety of teams and stakeholders to support global marketing efforts, including the GCR team, HK team, investors, suppliers, operators, distributors, media, agencies, and consumers.\n' +
                                '- Developed & executed marketing campaigns on mobile devices, including seasonal promotions, retail investments and also supporting social, BTL, ATL with the goal of enhancing brand awareness, purchase preference and market share.\n' +
                                '- Supported on other field forces, including sales, care and logistics with team to pursuit business objectives.\n' +
                                '- Contributed to over 200% Growth on virtual sellout in Taiwan market, made GFK virtual channel sell out grew from 4.9% in August to 10.1% in January, which surpassed Samsung\'s to be the 3rd place including Apple.\n' +
                                '- Assisted 3 press events and 3 fans events. Gathered over 300 exposure coverage from online and offline.'}
            />
            <ExperienceCard title={'Creative Planner'}
                            company={'Rules Creative Ltd., Contract'}
                            companySite={'https://rulescreative.com/'}
                            time={'Aug. 2017 - Dec. 2017'}
                            location={'Taipei City, Taiwan'}
                            content={'- Utilized analytical skills to conduct competitor analysis and develop effective strategy planning.\n' +
                                '- Contributed to the success of multiple marketing campaigns, with a focus on Facebook operations.\n' +
                                '- Demonstrated a proven ability to manage budgets effectively and meet assigned key performance indicators (KPIs).'}
            />
            <ExperienceCard title={'Marketing Graphic Designer'}
                            company={'NICECAM TECHNOLOGY CO., LTD., Contract'}
                            companySite={'https://www.linkedin.com/company/nicecam/about/'}
                            time={'Mar. 2017 - Jun. 2017'}
                            location={'Taipei City, Taiwan'}
                            content={'- Led the redesign of the entire set of product specifications and served as the primary decision maker in the development of a new brand webpage.\n' +
                                '- Created and executed an effective marketing plan for Secutech 2017 exhibition, resulting in increased brand awareness and sales.\n' +
                                '- Demonstrated strong project management skills by successfully overseeing the redesign of product specs and the development of a new brand webpage.'}
            />
            <ExperienceCard title={'Project Assistant'}
                            company={'BoniO Inc., Internship'}
                            companySite={'https://www.bonio.co/'}
                            time={'Sep. 2015 - Dec. 2015'}
                            location={'Taipei City, Taiwan'}
                            content={'- Successfully planned and executed the "Calculus World Cup" online marketing campaign, resulting in a participation of over 2,000 people from 45 countries.\n' +
                                '- Led data analysis efforts to improve the effectiveness of online marketing campaigns and identify key areas for improvement.\n' +
                                '- Contributed to the Dandelion project, focusing on creating an effective user database and improving the quality of service for new clients.'}
            />
        </>
    )
}

export default ExperienceSection;