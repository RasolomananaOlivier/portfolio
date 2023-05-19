"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectList from "../ProjectList";

export default function ProjectSection() {
  const ref = useRef(null);
  const projectSection = useInView(ref, { margin: "-50%" });

  return (
    <section
      id="project"
      className="flex justify-center relative w-[100vw]  md:w-auto overflow-x-hidden md:overflow-x-visible"
    >
      <div className="container">
        <div className="flex text-white py-7 relative">
          <div className="flex flex-col flex-2 px-3 md:px-0 ">
            <div className="py-10 relative" ref={ref}>
              <motion.div
                className="hidden md:inline-block md:sticky md:top-10"
                initial={{ opacity: 0, y: 50, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "tween", delay: 0.3 }}
              >
                <Image
                  src="/img/pic1.png"
                  alt="project background"
                  width={550}
                  height={550}
                  className="rounded-xl"
                />
              </motion.div>

              <ProjectList />
            </div>
          </div>
          {projectSection && (
            <span className="hidden md:block text-6xl font-bold text-gray-200 fixed top-[5rem] right-10 z-0 opacity-10">
              PROJECTS.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
