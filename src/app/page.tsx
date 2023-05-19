import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <section id="about" className="back-white relative"></section>
    </main>
  );
}
