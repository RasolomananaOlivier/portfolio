import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
}

const ProjectCardImage: React.FC<Props> = ({ src }) => {
  return (
    <motion.div
      className="z-10 md:ml-3 relative"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "tween", delay: 0.3 }}
    >
      <Image
        src={src}
        alt="project background"
        width={580}
        height={450}
        className="rounded-xl"
      />
    </motion.div>
  );
};

export default ProjectCardImage;
