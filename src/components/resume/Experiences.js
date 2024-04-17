import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-8 font-titleFont" data-aos="zoom-in">
        <p className="text-xs md:text-sm text-designColor tracking-[4px]">2020 - 2023</p>
        <h2 className="text-xl md:text-3xl font-bold">Company Experiences</h2>
      </div>
      <div className="w-full">
        <div>
          <div className="w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10" data-aos="zoom-in">
            <ResumeCard
              title="SEO Specialist and Analyst"
              subTitle="PuppetBrush Digital Solutions"
              studyYear="(Oct 2020 - July 2021)"
              result="Canada"
              desc="PuppetBrush is a digital marketing firm based in Halifax, Canada. They are one of the best digital online marketing agencies in Canada for all the online marketing needs under one umbrella. They develop online marketing campaigns and online solutions customized to clients' requirements."
            />
            <ResumeCard
              title="Digital Marketing Manager"
              subTitle="Inter AiD"
              studyYear="(Sep 2021 - Aug 2022)"
              result="Bangladesh"
              desc="InterAid is providing top class tuition services as one of the best coaching centers in Khulna, Bangladesh for past 8 consecutive years. They mainly focus on Jashore educational board exam for PEC, JSC, SSC & HSC candidates. This coaching center has been involved in the overall development of formal education since its inception."
            />
            <ResumeCard
              title="Digital Marketing Manager"
              subTitle="Spandan Education Care"
              studyYear="(Aug 2022 - May 2023)"
              result="Bangladesh"
              desc="Spandan Edu Care is providing top class tuition services as one of the best coaching centers in Khulna, Bangladesh for past 8 consecutive years. They mainly focus on Jashore educational board exam for PEC, JSC, SSC & HSC candidates. This coaching center has been involved in the overall development of formal education since its inception."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
