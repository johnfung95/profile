import { softskills } from "../../data/softskills";

const SoftSkillCard = () => {
  return (
    <div className="my-4 md:grid md:grid-cols-3 md:gap-3">
      {softskills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="py-2 flex justify-center items-center gap-3"
          >
            <div className={skill.css}>{skill.pic}</div>
            <div>{skill.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SoftSkillCard;
