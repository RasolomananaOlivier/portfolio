"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface Props {
  tags: string[];
}

const ProjectCardTags: React.FC<Props> = ({ tags }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value / 15);
  const y2 = useTransform(scrollY, (value) => value / 10);
  const y3 = useTransform(scrollY, (value) => value / 5);

  const tagsPropreties = [
    {
      class:
        "hidden md:block absolute top-14 left-5 z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg",
      src: "/mui.png",
      alt: "",
      y,
    },
    {
      class:
        "hidden md:block absolute -top-[80%] left-[42%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg",
      src: "/mui.png",
      alt: "",
      y: y2,
    },
    {
      class:
        "hidden md:block absolute top-[10%] left-[28%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg",
      src: "/mui.png",
      alt: "",
      y: y2,
    },
    {
      class:
        "hidden md:block absolute -top-[180%] left-[18%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg",
      src: "/mui.png",
      alt: "",
      y: y3,
    },
  ];

  return (
    <>
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          style={{ y: tagsPropreties[index].y }}
          className={tagsPropreties[index].class}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
        >
          <Image
            src="/mui.png"
            alt={tagsPropreties[index].alt}
            width={80}
            height={80}
            className="relative"
          />
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCardTags;
