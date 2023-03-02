"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOGOSIZE } from "@/data/constant";

export default function ReactLogo() {
  return (
    <motion.div
      className="absolute z-10 top-[23rem] left-[20rem]"
      animate={{
        transform: "rotate(360deg)",
        transition: {
          repeat: Infinity,
          duration: 10,
        },
      }}
    >
      <Image src="/react.png" alt="" width={LOGOSIZE} height={LOGOSIZE} />
    </motion.div>
  );
}
