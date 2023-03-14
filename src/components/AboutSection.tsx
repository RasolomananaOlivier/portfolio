"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const imageRef = useRef(null);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  return (
    <>
      <section id="section" className="bg-light flex justify-center relative">
        <div className="container">
          <div className="h-[100rem]">
            <div className="flex flex-col justify-center align-middle w-[100%] md:w-[48%] ">
              <motion.div className="flex flex-col justify-start gap-3 z-10 absolute text-neutral-900 px-4  md:pl-8 top-[16rem] md:px-0">
                <h2 className=" text-white md:text-neutral-900">
                  I am <span className="font-bold ">Olivier</span>
                </h2>
                <h1 className="font-bold text-3xl-sm md:text-3xl text-gradient w-full md:w-1/3">
                  A Web Developer since 2021.
                </h1>
                <p className="my-3 w-full md:w-[45%] text-neutral-900">
                  From the first time I started coding and now, I have always
                  cared about code maintainability and readabitity. I like
                  bringing up modern solutions to solve real world problems
                  using popular technologies such as React.js, React Native,
                  Node.js and many more.
                </p>
                <p className="md:hidden my-3 w-full md:w-2/3 text-neutral-900">
                  I can help you from designing to frontend implementation, and
                  even develop a backend. A fullstak developer at your service.
                </p>
              </motion.div>
            </div>
            <motion.div className="md:sticky top-0">
              <Image
                src="/img/pic1.png"
                alt=""
                width={600}
                height={500}
                ref={imageRef}
              />
            </motion.div>

            <div className="hidden md:flex flex-col justify-center align-middle w-[48%] ">
              <motion.div className="flex flex-col justify-start gap-3 z-10 absolute text-neutral-900 pl-8 top-[45rem]">
                <h2 className="flex justify-start items-center gap-3 249 250 251">
                  I work on every step of
                </h2>
                <h1 className="font-bold text-3xl-sm md:text-3xl text-gradient w-[50rem]">
                  A Software Development Lifecycle.
                </h1>
                <p className="my-3 w-full md:w-2/3 text-neutral-900">
                  I can help you from designing to frontend implementation, and
                  even develop a backend. A fullstak developer at your service.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
