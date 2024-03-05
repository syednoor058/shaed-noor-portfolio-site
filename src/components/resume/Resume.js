import React, { useState } from "react";
import Education from './Education';
import Experiences from "./Experiences";
import Skills from "./Skills";

export default function Resume() {

  const [educationData, setEducationData] = useState(true);
  const [skillData, SetSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            Resume
          </h3>
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize">
            Everything you need to know about me
          </h1>
        </div>
      </div>
      <div className="mb-5">
        <ul className="w-full grid grid-cols-1 md:grid-cols-3">
          <li onClick={()=> setEducationData(true) & SetSkillData(false) & setExperienceData(false)} className={`${educationData ? "border-designColor rounded-sm" : "border-transparent"} resume-li`}>Education</li>
          <li onClick={()=> setEducationData(false) & SetSkillData(true) & setExperienceData(false)} className={`${skillData ? "border-designColor rounded-sm" : "border-transparent"} resume-li`}>Prefessional Skills</li>
          <li onClick={()=> setEducationData(false) & SetSkillData(false) & setExperienceData(true)} className={`${experienceData ? "border-designColor rounded-sm" : "border-transparent"} resume-li`}>Experiences</li>
        </ul>
      </div>
      {/* <Education /> */}
      {/* <Skills /> */}
      {educationData && <Education /> }
      {skillData && <Skills /> }
      {experienceData && <Experiences /> }
    </section>
  );
}
