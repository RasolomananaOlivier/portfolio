"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOGOSIZE } from "@/data/constant";

export default function HtmlLogo() {
  return (
    <motion.div
      className="absolute z-10 top-[5rem] left-[5rem]"
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src="/html.png"
        alt=""
        width={LOGOSIZE + 10}
        height={LOGOSIZE + 10}
      />
    </motion.div>
  );
}
