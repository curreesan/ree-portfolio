import Hero from "../components/Hero";
import SkillsCarousel from "../components/SkillsCarousel";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="page">
      <Hero />
      <SkillsCarousel />
      <Experience />
      <Projects />
    </div>
  );
}

export default Home;
