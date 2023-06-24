import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

interface Props {
  // Props type definition here
}

const ContactSection: React.FC<Props> = ({}) => {
  return (
    <section id="contact" className="bg-slate-50 px-3 md:px-8">
      <div className="container py-10 flex flex-col gap-5">
        <h1 className="font-bold text-5xl md:text-7xl text-gradient h-full py-1">
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
            <a
              href={`mailto:herimanitraolivier@gmail.com?subject=${s}`}
              target="_blank"
              className="border-2 border-purple-500 rounded-full py-4 px-5 h-[30px] flex justify-center items-center cursor-pointer"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
      <hr />

      <div className="flex gap-5 pt-4 pb-10">
        <a
          href="https://github.com/RasolomananaOlivier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="28" color="gray" />
        </a>
        <a
          href="https://twitter.com/OlivierFullDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size="28" color="gray" />
        </a>

        <a
          href="https://www.linkedin.com/in/rasolomanana-herimanitra-olivier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size="28" color="gray" />
        </a>
        <a
          href="https://www.facebook.com/olivier.rasolomananaherimanitra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook size="26" color="gray" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
