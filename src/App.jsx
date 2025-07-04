import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/heroMain";
import SubHero from "./components/heroSection/subHero";
import AboutMain from "./components/aboutMe/AboutMain";
import Helper from "./components/helper";
import AllSkills from "./components/Skills/AllSkills";
import SkillsMain from "./components/Skills/SkillsMain";
import SubSkills from "./components/Skills/SubSkills";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import ContactMeMain from "./components/contactMe/ContactMeMain";
import FooterMain from "./components/footer/footerMain";
function App() {
  return (
    <main className="font-body text-white relative overflow-hidden ">
      <NavbarMain></NavbarMain>
      <HeroMain></HeroMain>
      <SubHero></SubHero>
      <AboutMain></AboutMain>
      <SkillsMain></SkillsMain>
      <SubSkills></SubSkills>
      <ExperienceMain></ExperienceMain>
      <ProjectsMain></ProjectsMain>
      <ContactMeMain></ContactMeMain>
      <FooterMain />
    </main>
  );
}

export default App;
