import { useState } from "react";
import { iconMap, getIconColor } from "../utils/icons";
import skills from "../data/skills.json";
import { playClickSound } from "../utils/clickSound";
import "../styles/Experience.css";

function formatMonthYear(dateStr) {
  if (!dateStr) return "Present";
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// Looks up the friendly display name for a tech slug via skills.json,
// falling back to the raw slug if it's not in there (e.g. a slug used
// only in experience.json, never added to skills.json).
function getTechName(slug) {
  const match = skills.find((skill) => skill.icon === slug);
  return match ? match.name : slug;
}

function ExperienceItem({ experience }) {
  const [isOpen, setIsOpen] = useState(false);

  const dateRange = `${formatMonthYear(experience.start)} – ${formatMonthYear(experience.end)}`;

  function handleToggle() {
    playClickSound();
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="exp-item">
      <button
        className="exp-item__header"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className="exp-item__company">
          <span className="exp-item__company-name">{experience.company}</span>
          {experience.status === "working" && (
            <span className="exp-item__badge">
              <span className="exp-item__badge-dot" />
              Working
            </span>
          )}
          <span
            className={`exp-item__chevron ${isOpen ? "exp-item__chevron--open" : ""}`}
          >
            ⌄
          </span>
        </div>
        <div className="exp-item__dates">{dateRange}</div>

        <div className="exp-item__role">{experience.role}</div>
        <div className="exp-item__location">{experience.location}</div>
      </button>

      {isOpen && (
        <div className="exp-item__dropdown">
          <div className="exp-item__tech-row">
            <p className="exp-item__section-heading">
              Technologies &amp; Tools
            </p>
            <div className="exp-item__tech-icons">
              {experience.technologies.map((slug) => {
                const icon = iconMap[slug];
                return (
                  <span key={slug} className="exp-item__tech-icon">
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill={getIconColor(icon)}
                        aria-hidden="true"
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : (
                      slug
                    )}
                    <span className="exp-item__tech-tooltip">
                      {getTechName(slug)}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          <ul className="exp-item__highlights">
            {experience.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;
