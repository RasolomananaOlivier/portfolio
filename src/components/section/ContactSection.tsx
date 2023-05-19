import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

interface Props {
  // Props type definition here
}

const ContactSection: React.FC<Props> = ({}) => {
  return (
    <section className="bg-light px-3 md:px-8">
      <div className="container py-10 flex flex-col gap-5">
        <h1 className="font-bold text-3xl-sm md:text-6xl text-gradient h-full py-1">
          Let's <br /> get in touched
        </h1>
        <h3 className="text-base">I am always interested about</h3>
        <div className="flex flex-wrap gap-5 w-auto md:w-1/2">
          {[
            "React development",
            "React-Native development",
            "Front end development",
            "Full Stack developmemt",
            "UI/UX Design",
          ].map((s) => (
            <div className="border-2 border-purple-500 rounded-full py-4 px-5 h-[30px] flex justify-center items-center cursor-pointer">
              {s}
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="flex gap-5 pt-4 pb-10">
        <AiFillGithub size="34" color="gray" />
        <AiOutlineTwitter size="34" color="gray" />
        <FaLinkedinIn size="30" color="gray" />
        <BsFacebook size="30" color="gray" />
      </div>
    </section>
  );
};

export default ContactSection;
