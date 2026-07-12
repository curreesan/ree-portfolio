import { ExternalLink } from "lucide-react";
import { iconMap, getIconColor } from "../utils/icons";
import { playClickSound } from "../utils/clickSound";
import projects from "../data/projects.json";
import "../styles/Projects.css";

function ProjectItem({ project }) {
  const githubIcon = iconMap.github;

  return (
    <div className="project-item">
      <div className="project-item__header">
        <span className="project-item__name">{project.name}</span>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item__icon-link"
          onClick={playClickSound}
          aria-label={`${project.name} on GitHub`}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill={getIconColor(githubIcon)}
            aria-hidden="true"
          >
            <path d={githubIcon.path} />
          </svg>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item__icon-link"
            onClick={playClickSound}
            aria-label={`${project.name} live site`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className="project-item__description">{project.description}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
