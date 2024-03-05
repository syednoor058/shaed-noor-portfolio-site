import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full flex flex-col mdl:flex-row gap-5 mdl:gap-20">
        {/* Programing Languages Skills */}

        <div className="w-full mdl:w-1/2 flex flex-col gap-5 mdl:gap-8">
          <div>
            <div className="py-8 font-titleFont">
              <p className="text-xs md:text-sm text-designColor tracking-[4px]">
                Features
              </p>
              <h2 className="text-xl md:text-3xl font-bold">
                Programing Languages
              </h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">C++</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-60%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[60%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">60%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Java</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-72%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[72%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">72%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Python</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-89%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[89%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">89%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Javascript</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-78%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[78%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">78%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">SQL</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-64%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[64%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">64%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>

          {/* Software Skills */}

          <div>
            <div className="py-8 font-titleFont">
              <p className="text-xs md:text-sm text-designColor tracking-[4px]">
                Features
              </p>
              <h2 className="text-xl md:text-3xl font-bold">Softwares</h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  Microsoft Visual Studio
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-95%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  Microsoft Office
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-83%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[83%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">83%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  Jupyter Notebook
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-48%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[48%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">48%</span>
                  </motion.span>
                </span>
              </div>

              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Selenium IDE</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-85%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">MongoDB Compass</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-96%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[96%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">96%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Eclipse</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-38%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[38%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">38%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>

          {/* Design Skills */}

          <div>
            <div className="py-8 font-titleFont">
              <p className="text-xs md:text-sm text-designColor tracking-[4px]">
                Features
              </p>
              <h2 className="text-xl md:text-3xl font-bold">Design</h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Adobe Photoshop</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-70%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[70%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">70%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Figma</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-85%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Canva Pro</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[100%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">100%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks Skills */}

        <div className="w-full mdl:w-1/2 flex flex-col gap-5 mdl:gap-8">
          <div>
            <div className="py-8 font-titleFont">
              <p className="text-xs md:text-sm text-designColor tracking-[4px]">
                Features
              </p>
              <h2 className="text-xl md:text-3xl font-bold">
                Frameworks/Libraries
              </h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Node js</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-74%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[74%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">74%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">React js</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-92%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[92%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">92%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Express js</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-70%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[70%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">70%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Mongoose</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-37%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[37%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">37%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Selenium</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-95%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Bootstrap 5</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-90%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[90%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">90%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Tailwind CSS</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-70%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[70%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">70%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>

          {/* Digital Marketing Skills */}

          <div>
            <div className="py-8 font-titleFont">
              <p className="text-xs md:text-sm text-designColor tracking-[4px]">
                Features
              </p>
              <h2 className="text-xl md:text-3xl font-bold">
                Digital Marketing Skills
              </h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">SEO</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-86%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[86%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">86%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  Facebook Business Manager
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-90%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[90%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">90%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  Google Analytics
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-84%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[84%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">84%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">SEMRush</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-85%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">Ahref</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-78%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[78%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">78%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">
                  SEO Based Content Writing
                </p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-95%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-xs mdl:text-sm uppercase font-medium">SEO Audit</p>
                <span className="w-full h-1 mdl:h-2 bgOpacity inline-flex rounded-sm">
                  <motion.span
                    initial={{ x: "-95%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-designColor rounded-sm relative"
                  >
                    <span className="text-xs mdl:text-sm absolute -top-5 mdl:-top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
