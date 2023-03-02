import Image from "next/image";
import HeroDescription from "./HeroDescription";

export default function Home() {
  return (
    <main className="">
      <section id="hero" className="flex justify-center px-2 sm:px-12">
        <div className="container flex">
          <div className="py-[7rem] flex-1">
            <HeroDescription />
            <Image
              src="/img/vector1.svg"
              width={790}
              height={800}
              alt="vector"
              className="absolute top-0 left-0 "
            />
          </div>
          <div className="hidden md:block flex-1 relative">
            <Image
              src="/img/me.png"
              width={628}
              height={700}
              alt="Olivier"
              className="absolute bottom-0 -left-10"
            />
          </div>
        </div>
      </section>
      <section id="about" className="back-white h-[20rem] relative"></section>
    </main>
  );
}
