import React, { useEffect } from "react";
import { FaGithub, FaJava, FaLaptopCode } from "react-icons/fa";
import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import { SiApachejmeter, SiApachemaven, SiJunit5, SiSelenium } from "react-icons/si";
import { Link } from "react-router-dom";
import objImg from "../assets/images/objectives.png";
import eLearningApp from "../assets/project_five/elearningAppUI.png";
import extentReport from "../assets/project_five/extentReport.PNG";
import iListenerImg from "../assets/project_five/iListenerClass.PNG";
import readExelImg from "../assets/project_five/readXLS.PNG";

export default function Project1() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="w-full bottom-0 fixed z-50 flex justify-end items-end px-5 py-5 lgl:py-16">
        <div className="w-10 h-10 flex justify-center items-center lgl:w-14 lgl:h-14 bg-designColor text-2xl rounded-md cursor-pointer" onClick={goToTop}>
          <HiArrowUp />
        </div>
      </div>
      <div className="w-full h-auto py-20 px-10 lgl:px-20 flex flex-col gap-10 lg:gap-15">
        <div className="flex pb-5">
          <Link to="/">
            {" "}
            <p className="flex justify-center items-center">
              <span className="text-designColor pr-3">
                <HiArrowLeft />
              </span>
              Home
            </p>
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <p
            className="text-md text-bold uppercase font-light text-designColor tracking-wide"
            data-aos="zoom-in"
          >
            Automation Testing Project
          </p>
          <h1
            className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
            data-aos="zoom-in"
          >
            E-Learning Application Automation Testing Project
          </h1>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3
            className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
            data-aos="zoom-in"
          >
            Overview
          </h3>
          <p
            className="text-md text-bold font-light text-lightText tracking-wide"
            data-aos="zoom-in"
          >
            The E-learning App Automation project focuses on automating the testing process for an e-learning application similar to Udemy. This project aims to ensure the app's reliability, functionality, and performance by using Selenium WebDriver for browser automation, Java for scripting, and TestNG for test management. The automated tests cover critical features such as user authentication, course enrollment, payment processing, and user dashboard functionality.
          </p>
        </div>

        {/* OBJECTIVES */}

        <div className="flex flex-col lgl:flex-row gap-10 justify-center items-center">
          <div className="w-full lgl:w-2/3">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="zoom-in"
              >
                Objectives
              </h3>
              <p
                className="text-md text-bold font-light text-lightText tracking-wide"
                data-aos="zoom-in"
              >
                <div className="flex flex-row gap-4 ">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Automate Key Functionalities:</span>{" "}
                    Ensure critical features of the e-learning app function correctly through automated testing.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Enhance Test Coverage:
                    </span>{" "}
                    Increase the scope of testing to cover a wide range of scenarios and edge cases.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Cross-Browser Compatibility:
                    </span>{" "}
                    Confirm the calculator works correctly across different web browsers.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Continuous Integration:
                    </span>{" "}
                    Integrate automated tests into a CI/CD pipeline to maintain quality with every update.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Maintain High Quality:
                    </span>{" "}
                    Ensure the application meets high standards of quality and provides a seamless user experience.
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div
            className="w-full lgl:w-1/3 flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[170px] lgl:w-[250px] h-auto "
              src={objImg}
              alt="objectives"
            />
          </div>
        </div>

        {/* FEATURES */}

        <div className="flex flex-col-reverse gap-10 justify-center items-center">
          <div
            className="w-full flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[80%] h-auto"
              src={eLearningApp}
              alt="food_delivery"
            />
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="zoom-in"
              >
                Key Features
              </h3>
              <p
                className="text-md text-bold font-light text-lightText tracking-wide"
                data-aos="zoom-in"
              >
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Input Validation:</span>{" "}
                    Automate tests to verify that the calculator handles different types of input values correctly, including edge cases and invalid inputs.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Course Enrollment:</span>{" "}
                    Verify the process of searching for courses, enrolling in courses, and accessing course materials.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Payment Processing:</span>{" "}Test the entire payment workflow, including payment gateway integration and transaction validation.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">User Dashboard:</span>{" "}
                    Ensure the user dashboard displays accurate information and functions correctly.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Content Interaction:</span>{" "}
                    Validate interactions with course content, such as video playback, quizzes, and assignments.
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* TECH & TOOLS */}

        <div className="w-full flex flex-col gap-7">
          <h3
            className="w-full text-xl md:text-2xl text-gray-300 font-bold capitalize flex justify-center items-center"
            data-aos="zoom-in"
          >
            Technologies and Tools
          </h3>
          <div
            className="grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7 gap-3 md:gap-4"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-offset="0"
          >
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <FaJava />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Java
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <FaLaptopCode />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                TestNG
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiSelenium />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Selenium
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiJunit5 />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                JUnit
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiApachejmeter />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                JMeter
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiApachemaven />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Maven
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <FaGithub />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Github
              </p>
            </div>
          </div>
        </div>

        {/* IMPLIMENTATION */}

        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="zoom-in"
              >
                Implementation Steps
              </h3>
              <p
                className="text-md text-bold font-light text-lightText tracking-wide"
                data-aos="zoom-in"
              >
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Project Setup:</span>{" "}
                    Initialize a Maven project and configure the project structure for automation testing.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Selenium Configuration:</span> Set up Selenium WebDriver and configure browser drivers for Chrome, Firefox, and other target browsers.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">TestNG Configuration:</span>{" "} Configure TestNG for test case management, including setting up test suites and test reports.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Develop Test Cases:</span>{" "}
                    Verify that the calculator handles valid, invalid, and edge case inputs appropriately. Validate the accuracy of simple and compound interest calculations for various input scenarios.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Continuous Integration Setup:</span>{" "}
                    Integrate automated tests into a CI/CD pipeline using Jenkins, GitHub Actions, or GitLab CI.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Reporting and Analysis:</span>{" "}
                    Configure reporting tools like Allure or ExtentReports to generate detailed test reports and logs.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Execution and Monitoring:</span>{" "}
                    Run automated tests regularly, monitor results, and address any identified issues.
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div
            className="w-full flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[80%] h-auto shadow-md shadow-cardColor"
              src={iListenerImg}
              alt="impliment_img"
            />
          </div>
        </div>

        {/* EXPECTED */}

        <div className="flex flex-col-reverse lgl:flex-row gap-10 justify-center items-center">
          <div
            className="w-full lgl:w-1/2 flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[80%] lgl:w-[450px] h-auto shadow-md shadow-cardColor"
              src={readExelImg}
              alt="objectives"
            />
          </div>
          <div className="w-full lgl:w-1/2">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="zoom-in"
              >
                Expected Outcomes
              </h3>
              <p
                className="text-md text-bold font-light text-lightText tracking-wide"
                data-aos="zoom-in"
              >
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Accurate Calculations:</span> Ensure the bank interest calculator provides correct results for all tested scenarios.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Enhanced Performance:</span> Verify that the calculator performs efficiently under various load conditions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Cross-Browser Functionality:</span> Confirm that the calculator works seamlessly across different web browsers.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Consistent User Interface:</span> Maintain a consistent and functional UI across different devices and screen sizes.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Continuous Quality Assurance:</span> Maintain high quality and reliability of the calculator through automated testing integrated into the development pipeline.
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div
            className="w-full flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[80%] h-auto shadow-md shadow-cardColor"
              src={extentReport}
              alt="testNG_XML_file"
            />
        </div>


        <div className="w-full flex flex-col gap-4">
          <p
            className="text-md text-bold font-light text-lightText tracking-wide"
            data-aos="zoom-in"
          >
            By implementing the E-learning App Automation project with Selenium, Java, and TestNG, we aim to achieve a robust and efficient testing process that ensures the app's high quality and reliability, providing a seamless user experience.
          </p>
        </div>
        <div className="text-designColor flex justify-center items-center">
          - END -
        </div>
      </div>
    </>
  );
}
