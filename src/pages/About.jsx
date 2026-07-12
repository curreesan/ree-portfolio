import aboutData from "../data/about.json";
import { calculateAge } from "../utils/age";
import "../styles/About.css";

function About() {
  const age = calculateAge(aboutData.birth.year, aboutData.birth.month);

  return (
    <div className="about-page">
      <div className="container">
        {aboutData.introTemplate.map((paragraph, i) => (
          <p className="about-intro" key={i}>
            {paragraph.replace("{age}", age)}
          </p>
        ))}

        {aboutData.sections.map((section) => (
          <section className="about-section" key={section.title}>
            <h2 className="about-section__heading">{section.title}</h2>
            <div className="about-section__boxes">
              {section.items.map((item) => (
                <span className="about-box" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default About;
