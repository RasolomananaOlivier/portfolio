import { ReactElement } from "react";
import { IconType } from "react-icons";
import { TbHome } from "react-icons/tb";
import { RiContactsBookLine } from "react-icons/ri";
import { GoInfo } from "react-icons/go";
import { AiOutlineProject } from "react-icons/ai";

type LinkList = {
  url: string;
  label: string;
  icon: ReactElement;
};
export const linkList: LinkList[] = [
  { url: "hero", label: "Home", icon: <TbHome /> },
  { url: "about", label: "About", icon: <GoInfo /> },
  { url: "project", label: "Projects", icon: <AiOutlineProject /> },
  {
    url: "contact",
    label: "Contact",
    icon: <RiContactsBookLine />,
  },
];
