import resumeData from "../data/resume.json";
import socials from "../data/socials.json";
import "../styles/Resume.css";

function formatMonthYear(dateStr) {
  if (!dateStr) return "Present";
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function Resume() {
  const { pdfUrl, education, experience, projects, skills } = resumeData;
  const linkedin = socials.find((s) => s.label === "LinkedIn");
  const github = socials.find((s) => s.label === "GitHub");

  return (
    <div className="resume-page">
      <div className="container">
        <div className="resume-header">
          <div>
            <h1 className="resume-header__name">S Purandhar</h1>
            <div className="resume-header__links">
              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-header__link"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-header__link"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-header__pdf-link"
          >
            View PDF resume ↗
          </a>
        </div>

        <section className="resume-section">
          <h2 className="resume-section__heading">Education</h2>
          {education.map((edu) => (
            <div className="resume-entry" key={edu.institution}>
              <div className="resume-entry__row">
                <span className="resume-entry__title">{edu.institution}</span>
                <span className="resume-entry__dates">
                  {formatMonthYear(edu.start)} – {formatMonthYear(edu.end)}
                </span>
              </div>
              <div className="resume-entry__row">
                <span className="resume-entry__subtitle">{edu.degree}</span>
                <span className="resume-entry__meta">CGPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section__heading">Experience</h2>
          {experience.map((exp) => (
            <div className="resume-entry" key={exp.company}>
              <div className="resume-entry__row">
                <span className="resume-entry__title">{exp.company}</span>
                <span className="resume-entry__dates">
                  {formatMonthYear(exp.start)} – {formatMonthYear(exp.end)}
                </span>
              </div>
              <div className="resume-entry__row">
                <span className="resume-entry__subtitle">{exp.role}</span>
                <span className="resume-entry__meta">{exp.location}</span>
              </div>
              <ul className="resume-entry__highlights">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section__heading">Projects</h2>
          {projects.map((project) => (
            <div className="resume-entry" key={project.name}>
              <div className="resume-entry__row">
                <span className="resume-entry__title">{project.name}</span>
              </div>
              <p className="resume-entry__stack">{project.stack.join(", ")}</p>
              <ul className="resume-entry__highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section__heading">Skills</h2>
          <div className="resume-skills">
            <div className="resume-skills__group">
              <span className="resume-skills__label">Languages</span>
              <div className="resume-skills__tags">
                {skills.languages.map((s) => (
                  <span className="resume-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="resume-skills__group">
              <span className="resume-skills__label">Technologies</span>
              <div className="resume-skills__tags">
                {skills.technologies.map((s) => (
                  <span className="resume-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="resume-skills__group">
              <span className="resume-skills__label">Tools</span>
              <div className="resume-skills__tags">
                {skills.tools.map((s) => (
                  <span className="resume-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
