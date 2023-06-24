"use client";

import React, { PropsWithChildren } from "react";

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

  return (
    <button
      onClick={handleClickScroll}
      className="block py-2 pl-3 pr-4 text-white md:p-0 font-bold text-md"
    >
      {children}
    </button>
  );
}
