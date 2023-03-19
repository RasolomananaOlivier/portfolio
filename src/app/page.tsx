import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <section id="about" className="back-white h-[100rem] relative"></section>
    </main>
  );
}
