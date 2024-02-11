import HeroSection from "./HeroSection";
import ThemeSwitcher from "./ThemeSwitcher";
import ProjectSections from "./ProjectSections";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <HeroSection />
      <ProjectSections />
      <ContactSection />
    </>
  );
}
