"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProjectCardImage from "./ProjectCardImage";
import { Project } from "@/utils/types";
import ProjectCardTags from "./ProjectCardTags";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row relative">
      <ProjectCardImage src={project.imageUrl} />

      <div className="flex flex-col flex-1 py-5 md:px-6 gap-4 mb-16 md:mb-0 relative">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
        >
          A real time chat app.
        </motion.h5>
        <motion.h2
          className="font-bold text-[#FF00AC] text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.2 }}
        >
          QuickTalks.
        </motion.h2>
        <span className="md:hidden text-3xl font-bold text-gray-200 absolute top-4 left-5 z-30 opacity-10 ">
          QUICKTALKS
        </span>
        <motion.p
          className="mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, cum
          tempora hic eligendi quos dolor iste eveniet vel ratione dignissimos
          molestias rem ab, veritatis quod, itaque voluptatibus quae rerum
          pariatur?
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mb-3 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.3 }}
        >
          <span className="font-semibold">React.js</span>
          <span className="font-semibold">Node.js</span>
          <span className="font-semibold">Express.js</span>
          <span className="font-semibold">MongoDb</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.4 }}
        >
          <button className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-[#FF00AC] border-2 border-[#FF00AC] rounded-full hover:text-white group hover:bg-slate-500">
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative"> View demo</span>
          </button>
        </motion.div>
      </div>
      <ProjectCardTags tags={["1", "2", "3", "4"]} />
    </div>
  );
};

export default ProjectCard;
