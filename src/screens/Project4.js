import React, { useEffect } from "react";
import { FaGithub, FaJava, FaLaptopCode } from "react-icons/fa";
import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import { SiApachejmeter, SiApachemaven, SiJunit5, SiSelenium } from "react-icons/si";
import { Link } from "react-router-dom";
import objImg from "../assets/images/objectives.png";
import eLearningApp from "../assets/images/project_five/elearningAppUI.png";
import extentReport from "../assets/images/project_five/extentReport.PNG";
import iListenerImg from "../assets/images/project_five/iListenerClass.PNG";
import readExelImg from "../assets/images/project_five/readXLS.PNG";

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
      <div className="w-full h-[300px] bg-projectFiveMobCover md:bg-projectFiveCover bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-gradient-to-t from-bodyColor to-transparent">
        <div className="px-10 pt-10 lgl:px-20 lgl:pt-20 h-full flex flex-col gap-10 lg:gap-15">
          <div className="flex">
            <Link to="/">
              {" "}
              <p className="flex justify-center items-center">
                <span className="text-lightText pr-2">
                  <HiArrowLeft />
                </span>
                Home
              </p>
            </Link>
          </div>
          <div className="w-full h-full flex flex-col gap-2 justify-end items-center">
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
        </div>
        </div>
      </div>
      <div className="w-full h-auto py-20 px-5 lgl:px-20 flex flex-col gap-20 lg:gap-15">        
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
            This project explores the implementation of Selenium automation testing for the "LearnIt360" online course portal, utilizing TestNG, JUnit, Maven, and Java. The automation framework covers critical functionalities, including user login, signup, dashboard navigation, course enrollment, course checkout, payment gateway integration, and logout processes. The primary objective is to ensure a seamless user experience by validating the reliability and performance of these essential features. By leveraging Selenium's capabilities for browser automation and TestNG's robust testing framework, we systematically develop and execute test scripts that mimic real-world user interactions. This approach not only enhances the efficiency of regression testing but also aids in the early detection of defects, ultimately contributing to the platform's overall quality and user satisfaction. The paper details the architecture of the automation framework, the design of test cases, and the integration with continuous integration/continuous deployment (CI/CD) pipelines, demonstrating the effectiveness of automated testing in maintaining a high standard of software quality for dynamic web applications.
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
                <div className="flex flex-col gap-3">
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

        {/* TEST CASES */}
        <div className="flex flex-col-reverse gap-10 justify-center items-center">
        <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="zoom-in"
              >
                Test Scenarios
              </h3>
              <p
                className="text-md text-bold font-light text-lightText tracking-wide"
                data-aos="zoom-in"
              >
                <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">User Signup and Login:</span>{" "}
                    For user signup, scenarios include verifying successful registration with valid credentials and validating error messages for invalid or incomplete information, as well as checking the email verification process. For user login, tests will confirm successful login with valid credentials, validate error messages for incorrect usernames or passwords, and test the password recovery process.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Dashboard Navigation:</span>{" "}
                    Dashboard navigation scenarios will ensure the correct loading of the user dashboard after login, verify navigation to different sections like profile, courses, and settings, and check for the correct display of user-specific information and notifications. Course enrollment tests will verify successful enrollment in a course, proper handling of prerequisites and availability, and accurate display of course details and enrollment confirmation.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Course Enrollment and Checkout:</span>{" "}For course checkout, scenarios include validating the course selection process and addition to the shopping cart, confirming the accuracy of course prices, discounts, and total amounts, and verifying the functionality of promotional codes and vouchers. Payment gateway integration will ensure successful processing of payments using various methods, validate error handling for failed transactions, and check the security and encryption of payment data.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">User Logout:</span>{" "}
                    Logout process scenarios will verify successful logout from the portal, ensure redirection to the login page post-logout, and confirm that no user-specific data is accessible after logout. User profile management tests will verify updating profile information, check for accurate reflection of changes across the portal, and validate error messages for invalid input data.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Payment Gateway Integration:</span>{" "}
                    The payment scenario for the LearnIt360 online course portal involves several key steps to ensure the payment process is smooth, secure, and user-friendly. Initially, the scenario verifies that users can successfully add courses to their shopping cart and proceed to checkout. It checks that the course prices, discounts, and total amounts are accurately displayed, and that any promotional codes or vouchers applied are correctly processed.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Search Functionality:</span>{" "}
                    Search functionality scenarios will verify the accuracy and relevance of search results for courses, test search filters and sorting options, and ensure correct handling of no results found scenarios. Finally, accessibility and usability tests will check for compatibility with different browsers and devices, validate accessibility features, and ensure a user-friendly interface and intuitive navigation.
                  </div>
                </div>
                </div>
              </p>
            </div>
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
