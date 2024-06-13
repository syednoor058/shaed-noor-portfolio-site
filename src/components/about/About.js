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
              data-aos="zoom-in"
            >
              About
            </h3>
            <h1
              className="text-2xl md:text-3xl text-white font-bold capitalize"
              data-aos="zoom-in"
            >
              A Breif About Myself
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-14 lg:gap-0 lg:flex-row-reverse justify-center items-center">
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-start lg:items-start" data-aos="zoom-in">
            <div className="flex flex-col gap-5">
            <p className="text sm lg:text-base text-lightText text-center text-wrap lg:text-left">
              Recent computer science graduate with a strong foundation in
              software development, algorithms, and data structures, seeking a
              challenging position as a Software Engineer. Eager to apply
              academic knowledge and hands-on experience from personal projects,
              and research to contribute to innovative projects and improve
              software solutions. Passionate about coding, problem-solving, and
              continuous learning in a dynamic, growth-oriented environment.
            </p>
            <p className="text sm lg:text-base text-lightText text-center text-wrap lg:text-left">
              Recent computer science graduate with a strong foundation in
              software development, algorithms, and data structures, seeking a
              challenging position as a Software Engineer. Eager to apply
              academic knowledge and hands-on experience from personal projects,
              and research to contribute to innovative projects and improve
              software solutions. Passionate about coding, problem-solving, and
              continuous learning in a dynamic, growth-oriented environment.
            </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center" data-aos="zoom-in">
            <img
              className="h-[250px] lg:h-[400px] rounded-lg object-cover"
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
