"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function ProjectSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (value) => value / 15);
  const reactY = useTransform(scrollY, (value) => value / 10);
  const mongodbY = useTransform(scrollY, (value) => value / 5);

  const projectSection = useInView(ref, { margin: "-50%" });
  return (
    <section id="project" className="flex justify-center relative">
      <div className="container">
        <div className="flex text-white py-7 relative">
          <div className="flex flex-col flex-2 px-3 md:px-0 ">
            {/* <motion.h5
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween" }}
            >
              See the list of my
            </motion.h5>
            <motion.h1
              className="text-3xl-sm md:text-3xl text-gradient font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", delay: 0.3 }}
            >
              Featured Projects.
            </motion.h1> */}
            <div className="h-[335vh] py-10" ref={ref}>
              <motion.div
                className="hidden md:inline-block md:sticky md:top-20"
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

              <div className="flex flex-col md:flex-row gap-4 relative">
                <motion.div
                  className="z-10 md:ml-3 relative"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "tween", delay: 0.3 }}
                >
                  <Image
                    src="/img/qt-login.png"
                    alt="project background"
                    width={580}
                    height={450}
                    className="rounded-xl"
                  />
                </motion.div>
                <motion.div
                  style={{ y }}
                  className="absolute top-14 left-5 z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
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
                  style={{ y: reactY }}
                  className="absolute -top-[80%] left-[42%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <Image
                    src="/react.png"
                    alt=""
                    width={80}
                    height={80}
                    className="relative"

                    // ref={imageRef}
                    // className="rounded-xl md:sticky top-[5rem]"
                  />
                </motion.div>
                <motion.div
                  style={{ y: reactY }}
                  className="absolute top-[10%] left-[28%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <Image
                    src="/nodejs.png"
                    alt=""
                    width={80}
                    height={80}
                    className="relative"

                    // ref={imageRef}
                    // className="rounded-xl md:sticky top-[5rem]"
                  />
                </motion.div>
                <motion.div
                  style={{ y: mongodbY }}
                  className="absolute -top-[180%] left-[18%] z-10  bg-light w-[4rem] h-[4rem] rounded-full p-2 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                >
                  <Image
                    src="/mongodb.png"
                    alt=""
                    width={80}
                    height={80}
                    className="relative"

                    // ref={imageRef}
                    // className="rounded-xl md:sticky top-[5rem]"
                  />
                </motion.div>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, cum tempora hic eligendi quos dolor iste eveniet vel
                    ratione dignissimos molestias rem ab, veritatis quod, itaque
                    voluptatibus quae rerum pariatur?
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
                      View
                    </button>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-16 md:my-[20rem] relative">
                <motion.div
                  className="shadow-lg z-10 md:ml-3"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "tween", delay: 0.3 }}
                >
                  <Image
                    src="/img/qt-login.png"
                    alt="project background"
                    width={580}
                    height={450}
                    className="rounded-xl"
                  />
                </motion.div>

                <div className="flex flex-col flex-1 md:px-6 gap-4 relative">
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
                    TemplateHub.
                  </motion.h2>
                  <span className="md:hidden text-3xl font-bold text-gray-200 absolute top-4 left-5 z-30 opacity-10 ">
                    TEMPLATEHUB.
                  </span>
                  <motion.p
                    className="mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.3 }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, cum tempora hic eligendi quos dolor iste eveniet vel
                    ratione dignissimos molestias rem ab, veritatis quod, itaque
                    voluptatibus quae rerum pariatur?
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-3"
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
                      View
                    </button>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 relative">
                <motion.div
                  className="shadow-lg z-10 md:ml-3"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "tween", delay: 0.3 }}
                >
                  <Image
                    src="/img/qt-login.png"
                    alt="project background"
                    width={580}
                    height={450}
                    className="rounded-xl"
                  />
                </motion.div>

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
                    ScreenSurfer.
                  </motion.h2>
                  <span className="md:hidden text-3xl font-bold text-gray-200 absolute top-4 left-5 z-30 opacity-10 ">
                    ScreenSurfer.
                  </span>
                  <motion.p
                    className="mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 0.3 }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, cum tempora hic eligendi quos dolor iste eveniet vel
                    ratione dignissimos molestias rem ab, veritatis quod, itaque
                    voluptatibus quae rerum pariatur?
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-3"
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
                      View
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {projectSection && (
            <span className="hidden md:block text-3xl font-bold text-gray-200 fixed top-[5rem] right-10 z-0 opacity-10">
              PROJECTS.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
