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
import { IoMdCloudDownload } from "react-icons/io";
import {
  SiMongodb,
  SiNextdotjs,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/documents/Resume of SYED SHAEDUZZAMAN NOOR.pdf";
import bannerImg from "../../assets/images/banner_pic.png";


export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "SQA Engineer.",
      "Full Stack Developer.",
      "AI Engineer.",
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
      className="w-full pb-10 lgl:pb-0 h-full pt-10 flex flex-col gap-14 lgl:flex-row lgl:gap-10 items-center font-titleFont"
    >
      <div className="w-full lgl:w-3/5 flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h4 className="text-base md:text-lg font-normal" data-aos="zoom-in">
            WELCOME TO MY GALAXY
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white" data-aos="zoom-in" data-aos-delay="100">
            Hi, I am{" "}
            <span className="text-designColor capitalize">Shaed Noor</span>
          </h1>
          <h2 className="text-lg md:text-3xl font-bold text-white" data-aos="zoom-in" data-aos-delay="200">
            an expert <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide text-gray-400" data-aos="zoom-in" data-aos-delay="300">
            Dynamic, motivated, hardworking, keen about the changes in the
            dynamic world of computer science technology. I want to export my
            potential & acquire knowledge & skills in my profession as required
            by an organization to achieve the target & develop the best
            performance.
          </p>

          <div className="w-full flex" data-aos="zoom-in" data-aos-delay="400">
            <button className="mt-5 w-auto px-4 h-10 lg:h-12 bg-[#141518] rounded-sm text-sm text-gray-400 tracking-wider hover:text-white hover:bg-designColor duration-300 flex gap-2 justify-center items-center">
              <a
                className="w-auto flex items-center gap-2"
                href={resume}
                download="Resume of SYED SHAEDUZZAMAN NOOR.pdf"
              >
                <span className="text-2xl lg:text-2xl">
                  <IoMdCloudDownload />
                </span>
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-5 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
              Find me in
            </h2>
            {/* <div className="flex gap-4" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="0">
              <span className="bannerIcon">
                <a
                  href="https://www.facebook.com/shaed058/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="bannerIcon">
                <a
                  href="https://www.linkedin.com/in/shaednoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="bannerIcon">
                <a
                  href="https://www.instagram.com/shaed_noor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
              <span className="bannerIcon">
                <a
                  href="https://github.com/syednoor058"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
            </div> */}
            <div className="grid grid-cols-3 sml:grid-cols-4 gap-3 md:gap-4" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="0">
              <div className="bannerIcon">
                <a
                  href="https://www.facebook.com/shaed058/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="bannerIcon">
                <a
                  href="https://www.linkedin.com/in/shaednoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="bannerIcon">
                <a
                  href="https://www.instagram.com/shaed_noor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="bannerIcon">
                <a
                  href="https://github.com/syednoor058"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
              Best skill on
            </h2>
            {/* <div className="flex flex-col gap-3" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="0">
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
            </div> */}
            <div className="grid grid-cols-3 sml:grid-cols-4 gap-3 md:gap-4" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="0">
                <div className="bannerIcon">
                  <FaReact />
                </div>
                <div className="bannerIcon">
                  <FaNodeJs />
                </div>
                <div className="bannerIcon">
                  <FaBootstrap />
                </div>
                <div className="bannerIcon">
                  <SiTailwindcss />
                </div>
                <div className="bannerIcon">
                  <SiMongodb />
                </div>
                <div className="bannerIcon">
                  <SiSelenium />
                </div>
                <div className="bannerIcon">
                  <SiNextdotjs />
                </div>
                <div className="bannerIcon">
                  <FaDocker />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-2/5 flex justify-center items-center" data-aos="zoom-in" data-aos-duration="1600">
        {/* <div className="py-2 px-6 lgl:py-2.5 lgl:px-10 shadow-shadowOne bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-end items-center"> */}
          <img
            className="w-[220px] lgl:w-[320px] h-auto z-10"
            src={bannerImg}
            alt="syed_shaeduzzaman_noor"
          />
        {/* </div> */}
      </div>
    </section>
  );
}
