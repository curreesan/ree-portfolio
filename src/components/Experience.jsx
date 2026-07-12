import experience from "../data/experience.json";
import ExperienceItem from "./ExperienceItem";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="experience__heading">Experience</h2>
        {experience.map((entry) => (
          <ExperienceItem key={entry.company} experience={entry} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
