import Typewriter from "typewriter-effect";
import { FaReact, FaFigma, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiJavascript,
} from "react-icons/si";
const About = () => {
  return (
    <div className="mx-auto">
      <div className="text-2xl select-none font-gothaml">
        <Typewriter
          options={{
            strings: ["नमस्ते", "hello !", "olá !"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="mt-8 text-base text-gothamm">
        i am niraj. i can do some tech stuffs. i can design upto my creativity.
        i can develop apps — no i am not master at any of this. i have to figure
        out what i want to do.
      </p>
      <p className=" text-lg mt-6 pb-2 border-b-2 select-none">
        socials &#x40;
        <span className="font-bold p-8 text-xs">
          <a href="https://twitter.com/iamnirajacharya">TWT</a>
        </span>
        <span className="font-bold text-xs">
          <a href="https://github.com/nirajacharyaa">GH</a>
        </span>
      </p>
      <p className="text-lg mt-6 pb-2 border-b-2 select-none">
        t&t &#x1F527;
        <span className="p-6 [&>*]:inline [&>*]:m-1 [&>*]:text-xs sm:[&>*]:text-lg">
          <SiVisualstudiocode />
          <SiJavascript />
          <FaReact />
          <FaNodeJs />
          <SiTailwindcss />
          <FaFigma />
          <FaGitAlt />
          <FaGithub />
        </span>
      </p>
    </div>
  );
};

export default About;
