import React from "react";
import Image from "next/image";
import HeroDescription from "../../app/HeroDescription";
import ReactLogo from "../AnimatedLogo/ReactLogo";
import AnimatedLogo from "../AnimatedLogo";

export default function HeroSection() {
  return (
    <section id="hero" className="flex justify-center px-3 mt-[7rem]">
      <div className="container flex ">
        <div className="py-[6rem] flex-1">
          <HeroDescription />
          <Image
            src="/img/vector1.svg"
            width={790}
            height={800}
            alt="vector"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="hidden md:block flex-1 relative">
          <AnimatedLogo />
          <Image
            src="/img/me.png"
            width={628}
            height={740}
            alt="Olivier"
            className="absolute bottom-0 -left-10"
          />
        </div>
      </div>
    </section>
  );
}
