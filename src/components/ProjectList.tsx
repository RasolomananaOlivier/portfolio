import { Project } from "@/utils/types";
import ProjectCard from "./ProjectCard";

interface Props {
  // Props type definition here
}
const project: Project = {
  imageUrl: "/img/qt-login.png",
  tags: ["react"],
  name: "Lorem",
  description: "Lispsun",
  about: "about",
  githubRepo: "https",
  liveDemo: "htpps",
};
const ProjectList: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-5 md:gap-[25rem] pb-0 md:pb-[5rem]">
      {[1, 2, 3].map((i) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
