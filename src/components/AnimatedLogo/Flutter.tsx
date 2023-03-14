"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOGOSIZE } from "@/data/constant";

export default function FlutterLogo() {
  return (
    <motion.div
      className="absolute z-10 bottom-[5rem] left-[3rem]"
      whileHover={{ scale: 1.05 }}
    >
      <Image src="/flutter.png" alt="" width={LOGOSIZE} height={LOGOSIZE} />
    </motion.div>
  );
}
