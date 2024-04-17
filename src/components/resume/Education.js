import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div data-aos="zoom-in">
        <div className="py-8 font-titleFont">
          <p className="text-xs md:text-sm text-designColor tracking-[4px]">2004 - 2024</p>
          <h2 className="text-xl md:text-3xl font-bold">Educational Qualification</h2>
        </div>
        <div className="w-full">
          <div className="w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc in Software Engineering"
              subTitle="Anhui University of Technology, Anhui, China"
              studyYear="(2019 - 2023)"
              result="3.8 / 4.5"
              desc="Anhui University of Technology is a university based in Ma'anshan, Anhui, China. It offers instruction in engineering, economics, management, literature, science and law. It is more accurate to consider it an industrial university, catering to the needs of local industries like Ma Steel."
            />
            <ResumeCard
              title="HSC in Science"
              subTitle="Govt. M. M. City College, Khulna, Bangladesh"
              studyYear="(2015 - 2017)"
              result="5.0 / 5.0"
              desc="Government Majid Memorial City College is a college in Khulna, Bangladesh. The institute was established in the middle of the 19th century. It is beside the Khan Jahan Ali Road, near the Royal. It is a combined college offering 11th and 12th grades in three major subjects: science, commerce, and arts."
            />
            <ResumeCard
              title="SSC in Science"
              subTitle="Khulna Zilla School, Khulna, Bangladesh"
              studyYear="(2007 - 2015)"
              result="5.0 / 5.0"
              desc="Khulna Zilla School is the oldest high school in the Khulna district of Bangladesh. It was established in 1885. It provides education from class three to class ten. The school has 50 faculty members and about 3000 students. The faculty members are graduates from universities in Bangladesh."
            />
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}
