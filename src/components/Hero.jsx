import socials from "../data/socials.json";
import { playClickSound } from "../utils/clickSound";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__avatar">
          <img src="/avatar.png" alt="Purandhar" />
        </div>

        <div className="hero__name">
          <h1>S Purandhar</h1>
        </div>

        <div className="hero__tagline">
          <p>Fullstack Dev · Engineer · Gamer</p>
        </div>

        <div className="hero__bio">
          <p>One bug at a time.</p>
        </div>

        <div className="hero__intro">
          <p>
            Hi, I'm Purandhar, an engineer who picked up fullstack development
            and is now diving into AI/ML, looking to work with startups or
            product-based teams where there's real room to keep learning.
          </p>
        </div>

        <div className="hero__socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="hero__social-link"
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
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
    </section>
  );
}

export default Hero;
