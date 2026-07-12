import { iconMap, getIconColor } from "../utils/icons";
import skills from "../data/skills.json";
import "../styles/SkillsCarousel.css";

function SkillIcon({ skill }) {
  const icon = iconMap[skill.icon];

  if (!icon) {
    return <span className="skills-chip skills-chip--text">{skill.name}</span>;
  }

  return (
    <span className="skills-chip">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill={getIconColor(icon)}
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
      {skill.name}
    </span>
  );
}

function SkillsCarousel() {
  const track = [...skills, ...skills];

  return (
    <div className="skills-carousel">
      <div className="skills-track">
        {track.map((skill, i) => (
          <SkillIcon key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsCarousel;
