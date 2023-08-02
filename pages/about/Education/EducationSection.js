import EducationCard from "@/pages/about/Education/EducationCard";

const EducationSection = () => {
    return (
        <>
            <EducationCard school={'CMoney Software Engineer Camp'}
                           program={'Computer Science, Certificate'}
                           time={'2019 - 2020'}
                           location={'Taipei City, Taiwan'}
                           content={'Throughout the study, 3 practical projects fostered the in depth knowledge of tool manipulation and algorithm optimizing.\n' +
                               '\n' +
                               '- Bunny Shift/ Xcode (Swift 5.2)\n' +
                               'A dual platform app, aimed to simplify service workers\' redundancy of doing shift arrangement with paper and inefficient leave taking process.\n' +
                               '\n' +
                               '- Undercover/ Android Studio (Java 8)\n' +
                               'An independent board game app that connects to Google Sheet data base for random puzzles.\n' +
                               '\n' +
                               '- Alien Defender/ NetBeans 8.0.2 (Java 8)\n' +
                               'Am Alien tower defense game, which is easy playing with intensively strategy taking over its pixel style graphic.'}/>
            <EducationCard school={'Otto-von-Guericke-Universität MagdeburgOtto-von-Guericke-Universität Magdeburg'}
                           program={'International Business and Economics, Exchange'}
                           time={'2016 - 2017'}
                           location={'Magdeburg, Germany'}
                           content={'IKUS Interkulturelle Studenten Magdeburg\n' +
                               ' - Created favorable social events for all students\n' +
                               ' - Organized and cooperated with school on international activities'}/>
            <EducationCard school={'National Institute of Technology, Ube College'}
                           program={'Business Administration, Exchange'}
                           time={'2016'}
                           location={'Yamaguchi, Japan'}
                           content={'Researched program in field of Open Innovation'}/>
            <EducationCard school={'National United University'}
                           program={'Business Management, Bachelor'}
                           time={'2012 - 2016'}
                           location={'Miaoli, Taiwan'}
                           content={'NUU Goodwill Ambassador Group\n' +
                               'NUU Business Elite\n' +
                               'NUU Case Study Competition\n' +
                               'Research Project: Total Quality Control - Tachien Hospital'}/>
        </>
    )
}

export default EducationSection;