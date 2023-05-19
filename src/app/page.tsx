import AboutSection from "@/components/section/AboutSection";
import ContactSection from "@/components/section/ContactSection";
import HeroSection from "@/components/section/HeroSection";
import ProjectSection from "@/components/section/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
