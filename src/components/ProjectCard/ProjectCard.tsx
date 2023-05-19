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
    <div className="flex relative">
      <ProjectCardImage src={project.imageUrl} />

      <div className="flex flex-col flex-1 md:px-6 gap-4 mb-16 md:mb-0 relative">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
        >
          A real time chat app.
        </motion.h5>
        <motion.h2
          className="font-bold text-[#FF00AC] text-3xl-sm"
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
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border border-[#FF00AC]"
          >
            View demo
          </button>
        </motion.div>
      </div>
      <ProjectCardTags tags={["1", "2", "3", "4"]} />
    </div>
  );
};

export default ProjectCard;
