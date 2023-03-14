"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function SkillsTyping() {
  return (
    <>
      <span className="flex gap-5">
        A
        <span>
          <Typewriter
            options={{
              strings: ["React.js", "React Native", "Node.js", "Full Stack"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </span>
      <span>Developer & UI/UX Designer.</span>
    </>
  );
}
