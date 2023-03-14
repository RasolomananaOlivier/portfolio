import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface INavbarLinkProps extends PropsWithChildren {
  href: string;
}
export default function NavbarLink({ href, children }: INavbarLinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white md:p-0 "
      // aria-current="page"
    >
      {children}
    </Link>
  );
}
