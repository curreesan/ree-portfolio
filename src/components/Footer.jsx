import { NavLink } from "react-router-dom";
import { playClickSound } from "../utils/clickSound";
import socials from "../data/socials.json";
import "../styles/Footer.css";

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
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="footer__link"
                  target={
                    social.url.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  onClick={playClickSound}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Purandhar. All rights reserved.</p>
          <p className="footer__shoutout">
            Sprite: LPC character generator, CC-BY-SA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
