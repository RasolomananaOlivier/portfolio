"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOGOSIZE } from "@/data/constant";

export default function NodeLogo() {
  return (
    <motion.div
      className="absolute z-10 top-[5rem] right-[11rem]"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Image src="/nodejs.png" alt="" width={LOGOSIZE} height={LOGOSIZE} />
    </motion.div>
  );
}
