"use client";

import { useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";

interface INavbarLinkProps extends PropsWithChildren {
  href: string;
}
export default function NavbarLink({ href, children }: INavbarLinkProps) {
  const handleClickScroll = () => {
    const element = document.getElementById(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const elementRef = useRef(null);
  const isInView = useInView(elementRef);

  useEffect(() => {
    const element = document.getElementById(href);
    // @ts-ignore
    elementRef.current = element;
  }, [href]);

  return (
    <button
      onClick={handleClickScroll}
      className={
        isInView
          ? "block py-2 pl-3 pr-4 text-white md:pt-2  text-md font-bold"
          : "block py-2 pl-3 pr-4 text-white md:pt-2  text-md"
      }
    >
      {children}
    </button>
  );
}
