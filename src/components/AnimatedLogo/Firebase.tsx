"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOGOSIZE } from "@/data/constant";

export default function FirebaseLogo() {
  return (
    <motion.div
      className="absolute z-10 bottom-[3rem] right-[8rem]"
      whileHover={{ scale: 1.05 }}
    >
      <Image src="/firebase.png" alt="" width={LOGOSIZE} height={LOGOSIZE} />
    </motion.div>
  );
}
