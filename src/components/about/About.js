import React from "react";
import aboutImg from "../../assets/images/about.png";

export default function About() {
  return (
    <>
      <section id="about" className="w-full h-full py-10 lg:py-0">
        <div className="flex justify-center items-center text-center mb-10">
          <div className="flex flex-col gap-4 font-titleFont">
            <h3
              className="text-sm uppercase font-light text-cardColorHover tracking-wide"
              data-aos="fade-right"
            >
              About
            </h3>
            <h1
              className="text-2xl md:text-3xl text-white font-bold capitalize"
              data-aos="fade-left"
            >
              A Breif About Myself
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-14 lg:gap-5 lg:flex-row-reverse justify-center items-center">
          <div
            className="w-full lg:w-3/5 flex justify-center items-center lg:justify-start lg:items-start"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-5">
              <p className="text sm lg:text-base text-lightText text-center text-wrap lg:text-left">
                Recent computer science graduate with a strong foundation in
                software development, algorithms, and data structures, seeking a
                challenging position as a Software Engineer. Eager to apply
                academic knowledge and hands-on experience from personal
                projects, and research to contribute to innovative projects and
                improve software solutions. Passionate about coding,
                problem-solving, and continuous learning in a dynamic,
                growth-oriented environment.
              </p>
              <p className="text sm lg:text-base text-lightText text-center text-wrap lg:text-left">
                My proficiency in working within Agile and Scrum methodologies
                has enabled me to adapt quickly to dynamic project environments,
                fostering seamless collaboration and rapid iteration cycles.
                With a proven track record of delivering results within
                fast-paced development lifecycles, I consistently ensure that
                software meets rigorous quality standards while adhering to
                tight deadlines.
              </p>
              <p className="text sm lg:text-base text-lightText text-center text-wrap lg:text-left">
                I thrive on challenges and enjoy staying at the forefront of
                technology trends. Whether it's ensuring flawless software
                performance or driving impactful digital marketing strategies,
                I'm driven by a passion for excellence and continuous growth.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-2/5 flex justify-center items-center"
            data-aos="fade-right"
          >
            <img
              className="h-[300px] lg:h-[400px] rounded-lg object-cover"
              src={aboutImg}
              alt="shaed_noor"
              style={{ width: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
