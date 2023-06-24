import { linkList } from "@/data/linkList";
import { AiOutlineClose } from "react-icons/ai";
import ModernDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Drawer: React.FC<Props> = ({ isOpen, toggleDrawer }) => {
  return (
    <ModernDrawer open={isOpen} onClose={toggleDrawer} direction="right">
      <div className="p-3 bg-blue-950 h-full flex items-start flex-col">
        <div>
          <AiOutlineClose className="text-slate-50" />
        </div>
        <h1 className="text-xl font-bold text-slate-50 py-3">Navigation</h1>
        <ul className=" text-start w-full">
          {linkList.map((link) => (
            <li
              key={link.url}
              className="flex gap-3 items-center py-2 text-slate-50"
            >
              {link.icon} <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </ModernDrawer>
  );
};

export default Drawer;
