import React from "react";
import {
  FaBootstrap,
  FaDocker,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import bannerImg from "../../assets/images/banner_pic.png";

export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "SQA Engineer.",
      "Full Stack Developer.",
      "SEO Specialist.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 lgl:flex-row xl:gap-0 items-center font-titleFont"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:gap-4">
          <h4 className="text-base md:text-lg font-normal">WELCOME TO MY GALAXY</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I am{" "}
            <span className="text-designColor capitalize">Shaed Noor</span>
          </h1>
          <h2 className="text-lg md:text-3xl font-bold text-white">
            an expert <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide text-gray-400">
            Dynamic, motivated, hardworkingl, keen about the
            changes in the dynamic world of computer science technology. I want to
            export my potential & acquire knowledge & skills in my
            profession as required by an organization to
            achieve the target & develop the best performance.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
          <div>
            <h2 className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <a href="https://www.facebook.com/shaed058/" target="_blank" rel="noopener noreferrer" ><FaFacebookF /></a>
              </span>
              <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/shaednoor/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
              </span>
              <span className="bannerIcon">
              <a href="https://www.instagram.com/shaed_noor/" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a>
              </span>
              <span className="bannerIcon">
              <a href="https://github.com/syednoor058" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4">
              Best skill on
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaReact />
                </span>
                <span className="bannerIcon">
                  <FaNodeJs />
                </span>
                <span className="bannerIcon">
                  <FaBootstrap />
                </span>
                <span className="bannerIcon">
                  <SiTailwindcss />
                </span>
              </div>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <SiMongodb />
                </span>
                <span className="bannerIcon">
                  <SiSelenium />
                </span>
                <span className="bannerIcon">
                  <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                  <FaDocker />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img className="w-[250px] lgl:w-[400px] h-auto z-10" src={bannerImg} alt="syed_shaeduzzaman_noor" />
        <div className="absolute bottom-0 w-[300px] h-[250px] lgl:w-[350px] lgl:h-[380px] shadow-shadowOne bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
      </div>
    </section>
  );
}
