import {SkillData} from "@/data/DataSet";
import SkillCard from "@/pages/about/Skill/SkillCard";

const SkillSection = () => {

    const data = SkillData.map(item => {
        return <SkillCard
            key={item.id}
            title={item.title}
            skills={item.skills}
        />
    });

    return (
        <>
            {data}
        </>
    )
}

export default SkillSection;