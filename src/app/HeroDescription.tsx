import SkillsTyping from "@/components/SkillsTyping";
import React from "react";

export default function HeroDescription() {
  return (
    <div className="flex flex-col justify-start gap-3 text-white z-10 relative">
      <h2 className="font-semibold text-gradient flex justify-start items-center gap-3">
        <div className="bg-gradient-to-r from-pink-700 to-purple-800 w-[2rem] h-[0.3rem] rounded-sm"></div>
        RASOLOMANANA Olivier
      </h2>
      <h1 className="font-bold text-3xl-sm md:text-3xl text-gradient ">
        <SkillsTyping />
      </h1>
      <p className="my-3 w-full  md:w-2/3 text-gray-200">
        A passionate and skilled web and mobile app developer that already build
        10+ projects.
      </p>
      <div>
        <button
          type="button"
          className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Contact me
        </button>
      </div>
    </div>
  );
}
