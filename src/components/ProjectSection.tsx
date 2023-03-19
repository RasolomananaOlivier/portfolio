"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectSection() {
  const ref = useRef(null);

  const projectSection = useInView(ref, { margin: "-50%" });
  return (
    <section id="project" className="flex justify-center relative">
      <div className="container ">
        <div className="flex text-white py-7 relative">
          <div className="flex flex-col flex-2">
            <motion.h5
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween" }}
            >
              See the list of my
            </motion.h5>
            <motion.h1
              className="text-3xl text-gradient font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", delay: 0.3 }}
            >
              Featured Projects.
            </motion.h1>
            <div className="h-[335vh] py-10 relative" ref={ref}>
              <motion.div
                className="sticky top-20 "
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

              <div className="flex gap-4">
                <motion.div
                  className="shadow-lg z-10 ml-3"
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

                <div className="flex flex-col flex-1 px-6 gap-4">
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
                    className="flex flex-wrap gap-2"
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

              <div className="flex gap-4 my-[20rem]">
                <motion.div
                  className="shadow-lg z-10 ml-3"
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

                <div className="flex flex-col flex-1 px-6 gap-4">
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
                    className="flex flex-wrap gap-2"
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

              <div className="flex gap-4">
                <motion.div
                  className="shadow-lg z-10 ml-3"
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

                <div className="flex flex-col flex-1 px-6 gap-4">
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
                    className="flex flex-wrap gap-2"
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
            <span className="text-3xl font-bold text-gray-200 fixed top-[5rem] right-10 z-0 opacity-10">
              PROJECTS.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
