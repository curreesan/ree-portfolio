import { FaLinkedin } from "react-icons/fa";
import socials from "../data/socials.json";
import { playClickSound } from "../utils/clickSound";
import { iconMap } from "../utils/icons";
import "../styles/Hero.css";

function SocialIcon({ social }) {
  if (social.icon === "linkedin") {
    return <FaLinkedin size={18} color="var(--text-secondary)" />;
  }

  const icon = iconMap[social.icon];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="var(--text-secondary)"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__avatar">
          <img src="/pixelart.png" alt="Purandhar" />
        </div>

        <div className="hero__name">
          <h1>S Purandhar</h1>
        </div>

        <div className="hero__tagline">
          <p>Junior Dev · Full Stack · AI ML</p>
        </div>

        <div className="hero__bio">
          <p>One bug at a time.</p>
        </div>

        <div className="hero__intro">
          <p>
            Full Stack Developer diving into AI/ML, looking for opportunities in
            startups or product-based teams with room to keep learning.
          </p>
        </div>

        <div className="hero__socials">
          {socials.map((social) => {
            const isMailto = social.url.startsWith("mailto");

            return (
              <a
                key={social.label}
                href={social.url}
                className="hero__social-link"
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                onClick={playClickSound}
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon social={social} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
