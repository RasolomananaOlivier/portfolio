"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const imageRef = useRef(null);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (value) => value / 2);
  const muiY = useTransform(scrollY, (value) => value / 3);
  const bootstrapY = useTransform(scrollY, (value) => value / 2.5);

  const aboutRef = useRef(null);
  const aboutSection = useInView(aboutRef, { margin: "-50%" });
  return (
    <section id="section" className="bg-slate-50 flex justify-center relative">
      <div className="container">
        <div className="flex flex-col py-9 md:py-0  md:flex-row ">
          <div
            className="flex flex-col justify-start align-top md:pt-[20rem] md:pb-[10rem] w-[100%] md:w-[48%]"
            ref={ref}
          >
            {aboutSection && (
              <motion.span
                className="text-6xl font-bold text-gray-500 fixed top-[5rem] left-[20rem] z-0 opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 1 }}
              >
                ABOUT.
              </motion.span>
            )}

            <motion.div className="flex flex-col justify-start gap-3 z-10 text-neutral-900 px-3 py-10">
              <motion.h2
                className="text-neutral-900"
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I am <span className="font-bold ">Olivier</span>
              </motion.h2>
              <motion.h1
                className="font-bold text-4xl md:text-7xl text-gradient w-full "
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", delay: 0.1, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                A Web Developer since 2021.
              </motion.h1>
              <motion.p
                className="my-3 w-full  text-neutral-900"
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                From the first time I started coding and now, I have always
                cared about code maintainability and readabitity. I like
                bringing up modern solutions to solve real world problems using
                popular technologies such as React.js, React Native, Node.js and
                many more.
              </motion.p>
              <p className="md:hidden my-3 w-full md:w-2/3 text-neutral-900">
                I can help you from designing to frontend implementation, and
                even develop a backend. A fullstak developer at your service.
              </p>
            </motion.div>

            <motion.div className="hidden md:flex flex-col justify-start gap-3 z-10 text-neutral-900 px-4 relative top-[20rem]">
              <motion.h2
                className=" text-white md:text-neutral-900"
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I work on every step of
              </motion.h2>
              <motion.h1
                className="font-bold text-4xl md:text-7xl text-gradient w-full"
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", delay: 0.1, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                A Software development lifecycle.
              </motion.h1>
              <motion.p
                className="my-3 text-neutral-900"
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I can help you from designing to frontend implementation, and
                even develop a backend. A fullstak developer at your service.
              </motion.p>
            </motion.div>
          </div>
          <motion.div
            className="hidden md:block md:h-[250vh] py-[2rem]"
            ref={aboutRef}
          >
            <motion.div
              initial={{ opacity: 0, y: 200, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              className=" md:sticky top-[5rem]"
            >
              <Image
                src="/img/pic1.png"
                alt=""
                width={600}
                height={500}
                ref={imageRef}
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{ y }}
              className="absolute top-0 right-5 z-10 md:right-[10rem]  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Image
                src="/code.png"
                alt=""
                width={80}
                height={80}
                className="relative"

                // ref={imageRef}
                // className="rounded-xl md:sticky top-[5rem]"
              />
            </motion.div>
            <motion.div
              style={{ y: muiY }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-0 right-5 z-10 md:right-[40rem]  md:top-[30rem] bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
            >
              <Image
                src="/mui.png"
                alt=""
                width={80}
                height={80}
                className="relative"

                // ref={imageRef}
                // className="rounded-xl md:sticky top-[5rem]"
              />
            </motion.div>
            <motion.div
              style={{ y: bootstrapY }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-0 right-5 z-10 md:right-[35rem]  md:top-[0rem] bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
            >
              <Image
                src="/bootstrap.png"
                alt=""
                width={80}
                height={80}
                className="relative"

                // ref={imageRef}
                // className="rounded-xl md:sticky top-[5rem]"
              />
            </motion.div>
            <motion.div
              style={{ y: bootstrapY }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-0 right-5 z-10 md:right-[5rem]  md:top-[30rem] bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
            >
              <Image
                src="/laravel.png"
                alt=""
                width={80}
                height={80}
                className="relative"

                // ref={imageRef}
                // className="rounded-xl md:sticky top-[5rem]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
