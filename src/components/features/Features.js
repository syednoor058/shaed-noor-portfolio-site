import React from "react";
import { BsColumnsGap, BsFillBarChartLineFill } from "react-icons/bs";
import { FaCode, FaGlobeAmericas, FaRobot } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import Cards from "./Cards";

export default function Features() {
  return (
    <section id="features" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            Features
          </h3>
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize">
            What I Do
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        <Cards
          title="App Development"
          desc="Proficient in developing robust and scalable software solutions tailored to meet diverse business needs, leveraging expertise in various programming languagess."
          icon={<FaCode />}
        />
        <Cards
          title="Software Testing"
          desc="Skilled in ensuring the quality and reliability of software through meticulous testing methodologies, including automated testing, to identify and resolve defects efficiently."
          icon={<FaBugSlash />}
        />
        <Cards
          title="UI/UX Design"
          desc="Experienced in crafting intuitive and visually appealing user interfaces, with a focus on enhancing user experience through thoughtful design principles and usability."
          icon={<BsColumnsGap />}
        />
        <Cards
          title="Machine Learning"
          desc="Advanced knowledge in applying machine learning algorithms to analyze data, derive insights, and develop predictive models that drive innovation and optimization."
          icon={<FaRobot />}
        />
        <Cards
          title="Digital Marketing"
          desc="Expertise in designing & executing comprehensive digital marketing strategies, utilizing various channels such as social media, email, & content marketing."
          icon={<BsFillBarChartLineFill />}
        />
        <Cards
          title="SEO"
          desc="Proficient in optimizing website content and structure to improve visibility and ranking on search engine results pages, utilizing strategic keyword research."
          icon={<FaGlobeAmericas />}
        />
      </div>
    </section>
  );
}
