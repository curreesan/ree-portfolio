import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { playClickSound } from "../utils/clickSound";
import { iconMap } from "../utils/icons";
import socials from "../data/socials.json";
import "../styles/Footer.css";

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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__group">
            <p className="footer__heading">Navigate</p>
            <div className="footer__row">
              <NavLink to="/" className="footer__link" onClick={playClickSound}>
                Home
              </NavLink>
              <NavLink
                to="/resume"
                className="footer__link"
                onClick={playClickSound}
              >
                Resume
              </NavLink>
              <NavLink
                to="/about"
                className="footer__link"
                onClick={playClickSound}
              >
                About
              </NavLink>
            </div>
          </div>

          <div className="footer__group footer__group--right">
            <p className="footer__heading">Connect</p>
            <div className="footer__row">
              {socials.map((social) => {
                const isMailto = social.url.startsWith("mailto");

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="footer__icon-link"
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
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Purandhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
