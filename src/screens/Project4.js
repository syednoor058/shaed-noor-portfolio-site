import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaGithub, FaJava, FaLaptopCode } from "react-icons/fa";
import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import {
  SiApachejmeter,
  SiApachemaven,
  SiJunit5,
  SiSelenium,
} from "react-icons/si";
import { Link } from "react-router-dom";
import browserDriver from "../assets/images/project_five/browser001.PNG";
import extentReport002 from "../assets/images/project_five/extentReport.PNG";
import extentReport001 from "../assets/images/project_five/extentReport001.png";
import iListener from "../assets/images/project_five/ilistener001.PNG";
import pomXml from "../assets/images/project_five/pom001.PNG";
import readXml from "../assets/images/project_five/read001.PNG";
import testCases from "../assets/images/project_five/test001.PNG";
import testNGImg from "../assets/images/project_five/testng001.PNG";
import testngConsole from "../assets/images/project_five/testngConsoleReport.PNG";
import website001 from "../assets/images/project_five/website001.png";
import website002 from "../assets/images/project_five/website002.png";
import website003 from "../assets/images/project_five/website003.png";
import website004 from "../assets/images/project_five/website004.png";
import website005 from "../assets/images/project_five/website005.png";
import website006 from "../assets/images/project_five/website006.png";

export default function Project1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const colorVariants = {
    visible: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  const svgVariants = {
    visible: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const pathVariants = {
    visible: {
      opacity: 1,
      pathLength: [0, 1, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full bottom-0 fixed z-50 flex justify-end items-end px-5 py-5 lgl:py-16">
          <div
            className="w-10 h-10 flex justify-center items-center lgl:w-14 lgl:h-14 bg-designColor text-2xl rounded-md cursor-pointer"
            onClick={goToTop}
          >
            <HiArrowUp />
          </div>
        </div>
        <div
          className="w-full h-[300px] bg-projectFiveMobCover md:bg-projectFiveCover bg-no-repeat bg-cover bg-center"
          data-aos="fade-down"
        >
          <div
            className="w-full h-full bg-gradient-to-t from-bodyColor to-transparent"
            data-aos="fade-up"
          >
            <div
              className="px-10 pt-10 lgl:px-20 lgl:pt-20 h-full flex flex-col gap-10 lg:gap-15"
              data-aos="fade-left"
            >
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
                  data-aos="fade-right"
                >
                  Automation Testing Project
                </p>
                <h1
                  className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
                  data-aos="fade-left"
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
              data-aos="fade-right"
            >
              Overview
            </h3>
            <p
              className="text-md text-bold font-light text-lightText tracking-wide"
              data-aos="fade-left"
            >
              This project explores the implementation of Selenium automation
              testing for the "LearnIt360" online course portal, utilizing
              TestNG, JUnit, Maven, and Java. The automation framework covers
              critical functionalities, including user login, signup, dashboard
              navigation, course enrollment, course checkout, payment gateway
              integration, and logout processes. The primary objective is to
              ensure a seamless user experience by validating the reliability
              and performance of these essential features. By leveraging
              Selenium's capabilities for browser automation and TestNG's robust
              testing framework, we systematically develop and execute test
              scripts that mimic real-world user interactions. This approach not
              only enhances the efficiency of regression testing but also aids
              in the early detection of defects, ultimately contributing to the
              platform's overall quality and user satisfaction. The paper
              details the architecture of the automation framework, the design
              of test cases, and the integration with continuous
              integration/continuous deployment (CI/CD) pipelines, demonstrating
              the effectiveness of automated testing in maintaining a high
              standard of software quality for dynamic web applications.
            </p>
          </div>

          {/* OBJECTIVES */}

          <div className="flex flex-col lgl:flex-row gap-10 justify-center items-center">
            <div className="w-full lgl:w-2/3">
              <div className="w-full flex flex-col gap-4">
                <h3
                  className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                  data-aos="fade-left"
                >
                  Objectives
                </h3>
                <p className="text-md text-bold font-light text-lightText tracking-wide">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-4 " data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Automate Key Functionalities:
                        </span>{" "}
                        Ensure critical features of the e-learning app function
                        correctly through automated testing.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Enhance Test Coverage:
                        </span>{" "}
                        Increase the scope of testing to cover a wide range of
                        scenarios and edge cases.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Cross-Browser Compatibility:
                        </span>{" "}
                        Confirm the calculator works correctly across different
                        web browsers.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Continuous Integration:
                        </span>{" "}
                        Integrate automated tests into a CI/CD pipeline to
                        maintain quality with every update.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Maintain High Quality:
                        </span>{" "}
                        Ensure the application meets high standards of quality
                        and provides a seamless user experience.
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div
              className="w-full lgl:w-1/3 flex justify-center items-center"
              data-aos="fade-left"
            >
              <motion.svg
                viewBox="0 -0.5 1025 1025"
                class="icon h-[200px]"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#c4cfde"
                stroke="#c4cfde"
                stroke-width="10.25"
                variants={svgVariants}
                animate="visible"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M447.427363 1024c-246.884027 0-447.427363-200.543336-447.427363-447.427363s200.543336-447.427363 447.427363-447.427363 447.427363 200.543336 447.427363 447.427363-200.543336 447.427363-447.427363 447.427363z m0-862.895628c-229.306523 0-415.468266 186.161742-415.468266 415.468265s186.161742 415.468266 415.468266 415.468266 415.468266-186.161742 415.468265-415.468266-186.161742-415.468266-415.468265-415.468265z"
                    fill="none"
                  ></motion.path>
                  <motion.path
                    variants={colorVariants}
                    animate="visible"
                    d="M447.427363 576.572637m-324.384838 0a324.384838 324.384838 0 1 0 648.769676 0 324.384838 324.384838 0 1 0-648.769676 0Z"
                    fill="#ff014f"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M447.427363 917.736001c-187.759697 0-340.364387-152.60469-340.364387-340.364386S259.667666 237.007228 447.427363 237.007228s340.364387 152.60469 340.364387 340.364387-152.60469 340.364387-340.364387 340.364386z m0-649.568653c-170.182193 0-308.405289 138.223096-308.40529 308.405289s138.223096 308.405289 308.40529 308.40529 308.405289-138.223096 308.405289-308.40529S617.609556 268.167348 447.427363 268.167348z"
                    fill="#212428"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M447.427363 576.572637m-208.53311 0a208.53311 208.53311 0 1 0 417.06622 0 208.53311 208.53311 0 1 0-417.06622 0Z"
                    fill="#212428"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M447.427363 801.884273c-123.841502 0-224.512659-100.671157-224.512659-224.512658S323.585861 352.059978 447.427363 352.059978s224.512659 100.671157 224.512659 224.512659-100.671157 225.311636-224.512659 225.311636zM447.427363 384.019076c-106.263999 0-192.553562 86.289563-192.553562 192.553561S341.163364 769.126199 447.427363 769.126199s192.553562-86.289563 192.553561-192.553562S553.691362 384.019076 447.427363 384.019076z"
                    fill="#212428"
                  ></motion.path>
                  <motion.path
                    variants={colorVariants}
                    animate="visible"
                    d="M447.427363 576.572637m-101.470134 0a101.470134 101.470134 0 1 0 202.940268 0 101.470134 101.470134 0 1 0-202.940268 0Z"
                    fill="#c4cfde"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M447.427363 694.02232c-64.717172 0-117.449683-52.732511-117.449683-117.449683S382.710191 459.122954 447.427363 459.122954 564.877046 511.855465 564.877046 576.572637c0 65.51615-52.732511 117.449683-117.449683 117.449683z m0-202.141291c-47.139669 0-85.490585 38.350917-85.490586 85.490586S400.287694 662.063223 447.427363 662.063223 532.917948 623.712306 532.917948 576.572637 494.567031 491.881029 447.427363 491.881029z"
                    fill="#212428"
                  ></motion.path>

                  <motion.path
                    variants={colorVariants}
                    animate="visible"
                    d="M1008.309521 114.76368L878.875177 243.399047l-100.671157 2.396933 2.396933-100.671157L910.035297 16.489456l-3.994887 102.269112z"
                    fill="#C2CDDC"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M779.002998 261.775528c-3.994887 0-7.989774-1.597955-11.185684-4.793864-3.19591-3.19591-4.793865-7.190797-4.793865-11.984662l2.396933-100.671157c0-3.994887 1.597955-7.989774 4.793864-11.185684L899.64859 4.504795c4.793865-4.793865 11.984662-5.592842 17.577504-3.19591 6.391819 2.396932 9.587729 8.788752 9.587729 15.180571l-3.19591 84.691608 84.691608-3.19591c6.391819 0 12.783639 3.19591 15.180572 9.58773s1.597955 12.783639-3.19591 17.577503l-129.434344 128.635367c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864l-100.671157 3.19591zM796.580501 152.31562l-1.597954 77.500811 77.500811-1.597955 95.877292-95.877292-61.521263 2.396932c-4.793865 0-8.788752-1.597955-11.984661-4.793864s-4.793865-7.190797-4.793865-11.984662l2.396932-61.521262-95.877292 95.877292z"
                    fill="#212428"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    animate="visible"
                    d="M455.417137 580.567524c-3.994887 0-7.989774-1.597955-11.185684-4.793864-6.391819-6.391819-6.391819-15.979549 0-22.371368l525.727152-525.727152c6.391819-6.391819 15.979549-6.391819 22.371368 0s6.391819 15.979549 0 22.371368L466.602821 575.77366c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864z"
                    fill="#212428"
                  ></motion.path>
                  <motion.path
                    variants={colorVariants}
                    animate="visible"
                    d="M942.793372 188.269604h-95.078315c-8.788752 0-15.979549-7.190797-15.979548-15.979548V78.809696c0-8.788752 7.190797-15.979549 15.979548-15.979549s15.979549 7.190797 15.979549 15.979549v77.500811h79.098766c8.788752 0 15.979549 7.190797 15.979548 15.979549s-7.190797 15.979549-15.979548 15.979548z"
                    fill="#ff014f"
                  ></motion.path>
                </g>
              </motion.svg>
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
                <p className="text-md text-bold font-light text-lightText tracking-wide">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          User Signup and Login:
                        </span>{" "}
                        For user signup, scenarios include verifying successful
                        registration with valid credentials and validating error
                        messages for invalid or incomplete information, as well
                        as checking the email verification process. For user
                        login, tests will confirm successful login with valid
                        credentials, validate error messages for incorrect
                        usernames or passwords, and test the password recovery
                        process.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Dashboard Navigation:
                        </span>{" "}
                        Dashboard navigation scenarios will ensure the correct
                        loading of the user dashboard after login, verify
                        navigation to different sections like profile, courses,
                        and settings, and check for the correct display of
                        user-specific information and notifications. Course
                        enrollment tests will verify successful enrollment in a
                        course, proper handling of prerequisites and
                        availability, and accurate display of course details and
                        enrollment confirmation.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Course Enrollment and Checkout:
                        </span>{" "}
                        For course checkout, scenarios include validating the
                        course selection process and addition to the shopping
                        cart, confirming the accuracy of course prices,
                        discounts, and total amounts, and verifying the
                        functionality of promotional codes and vouchers. Payment
                        gateway integration will ensure successful processing of
                        payments using various methods, validate error handling
                        for failed transactions, and check the security and
                        encryption of payment data.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">User Logout:</span> Logout
                        process scenarios will verify successful logout from the
                        portal, ensure redirection to the login page
                        post-logout, and confirm that no user-specific data is
                        accessible after logout. User profile management tests
                        will verify updating profile information, check for
                        accurate reflection of changes across the portal, and
                        validate error messages for invalid input data.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Payment Gateway Integration:
                        </span>{" "}
                        The payment scenario for the LearnIt360 online course
                        portal involves several key steps to ensure the payment
                        process is smooth, secure, and user-friendly. Initially,
                        the scenario verifies that users can successfully add
                        courses to their shopping cart and proceed to checkout.
                        It checks that the course prices, discounts, and total
                        amounts are accurately displayed, and that any
                        promotional codes or vouchers applied are correctly
                        processed.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Search Functionality:
                        </span>{" "}
                        Search functionality scenarios will verify the accuracy
                        and relevance of search results for courses, test search
                        filters and sorting options, and ensure correct handling
                        of no results found scenarios. Finally, accessibility
                        and usability tests will check for compatibility with
                        different browsers and devices, validate accessibility
                        features, and ensure a user-friendly interface and
                        intuitive navigation.
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* FEATURES */}

          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="w-full">
              <div className="w-full flex flex-col gap-4">
                <h3
                  className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                  data-aos="zoom-in"
                >
                  Key Features
                </h3>
                <p className="text-md text-bold font-light text-lightText tracking-wide">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">Data-Driven Testing:</span>{" "}
                        This feature allows the framework to execute test cases
                        with multiple sets of data inputs. By utilizing external
                        data sources such as Excel files, CSV files, or
                        databases, data-driven testing ensures comprehensive
                        coverage of different input scenarios and edge cases,
                        enhancing the robustness of the tests.
                      </div>
                    </div>

                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">Parallel Execution:</span>{" "}
                        With the capability to run multiple test cases
                        simultaneously, the framework significantly reduces the
                        total execution time. This is achieved through TestNG's
                        parallel execution feature, which allows for running
                        test methods, classes, or suites in parallel, improving
                        the efficiency of the testing process.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Multiple Browser Testing:
                        </span>{" "}
                        The framework supports cross-browser testing to ensure
                        that the LearnIt360 portal performs consistently across
                        different web browsers such as Chrome, Firefox, Safari,
                        and Edge. This is essential for validating the
                        application's compatibility and functionality in various
                        user environments.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          ITestListener Implementation:
                        </span>{" "}
                        By implementing TestNG's ITestListener interface, the
                        framework can capture and log detailed information about
                        test execution events. This includes custom logging,
                        taking screenshots on test failures, and performing
                        specific actions before and after each test, enhancing
                        the ability to monitor and analyze test results.
                      </div>
                    </div>

                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Continuous Integration/Continuous Deployment (CI/CD)
                          Integration:
                        </span>{" "}
                        The automation framework is designed to integrate
                        seamlessly with CI/CD pipelines. This enables continuous
                        testing, ensuring that any code changes are
                        automatically tested before being deployed to
                        production, thereby maintaining high-quality standards
                        and facilitating rapid development cycles.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Continuous Integration/Continuous Deployment (CI/CD)
                          Integration:
                        </span>{" "}
                        The automation framework is designed to integrate
                        seamlessly with CI/CD pipelines. This enables continuous
                        testing, ensuring that any code changes are
                        automatically tested before being deployed to
                        production, thereby maintaining high-quality standards
                        and facilitating rapid development cycles.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">Reusable Components:</span>{" "}
                        The framework is built with modular and reusable
                        components, including page objects and custom utility
                        functions. This promotes maintainability and
                        scalability, allowing for easy updates and additions to
                        the test suite as the application evolves.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Automated Report Generation:
                        </span>{" "}
                        The framework is designed to generate detailed test
                        reports automatically upon test execution. These reports
                        include a summary of test results, execution times, and
                        detailed logs of test steps, making it easier to
                        identify issues and track the overall quality of the
                        application.
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-row gap-4">
                  <div className="h-full w-auto " data-aos="fade-right">
                    <img
                      className="object-cover rounded shadow-md shadow-cardColor"
                      src={readXml}
                      alt="objectives"
                    />
                  </div>
                  <div className="h-full w-auto " data-aos="fade-up">
                    <img
                      className="object-cover rounded shadow-md shadow-cardColor"
                      src={iListener}
                      alt="objectives"
                    />
                  </div>
                </div>
                <div className="h-full w-auto " data-aos="fade-left">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={browserDriver}
                    alt="objectives"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row gap-4">
                <div className="h-full w-auto " data-aos="fade-right">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={testNGImg}
                    alt="objectives"
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <div className="h-full w-auto " data-aos="fade-up">
                    <img
                      className="object-cover rounded shadow-md shadow-cardColor"
                      src={testCases}
                      alt="objectives"
                    />
                  </div>
                  <div className="h-full w-auto " data-aos="fade-left">
                    <img
                      className="object-cover rounded shadow-md shadow-cardColor"
                      src={pomXml}
                      alt="objectives"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TECH & TOOLS */}

          <div className="w-full flex flex-col gap-7">
            <h3
              className="w-full text-xl md:text-2xl text-gray-300 font-bold capitalize flex justify-center items-center"
              data-aos="zoom-left"
            >
              Technologies and Tools
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7 gap-3 md:gap-4">
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <FaJava />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  Java
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <FaLaptopCode />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  TestNG
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <SiSelenium />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  Selenium
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <SiJunit5 />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  JUnit
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <SiApachejmeter />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  JMeter
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
                <div className="projectIcon">
                  <SiApachemaven />
                </div>
                <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                  Maven
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="zoom-in"
                data-aos-offset="0"
              >
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
                  data-aos="fade-left"
                >
                  Implementation Steps
                </h3>
                <p className="text-md text-bold font-light text-lightText tracking-wide">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">Project Setup:</span>{" "}
                        Initialize a Maven project and configure the project
                        structure for automation testing.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Selenium Configuration:
                        </span>{" "}
                        Set up Selenium WebDriver and configure browser drivers
                        for Chrome, Firefox, and other target browsers.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          TestNG Configuration:
                        </span>{" "}
                        Configure TestNG for test case management, including
                        setting up test suites and test reports.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">Develop Test Cases:</span>{" "}
                        Verify that the calculator handles valid, invalid, and
                        edge case inputs appropriately. Validate the accuracy of
                        simple and compound interest calculations for various
                        input scenarios.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Continuous Integration Setup:
                        </span>{" "}
                        Integrate automated tests into a CI/CD pipeline using
                        Jenkins, GitHub Actions, or GitLab CI.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Reporting and Analysis:
                        </span>{" "}
                        Configure reporting tools like Allure or ExtentReports
                        to generate detailed test reports and logs.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-white">
                          Execution and Monitoring:
                        </span>{" "}
                        Run automated tests regularly, monitor results, and
                        address any identified issues.
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lgl:flex-row gap-10 justify-center items-center">
            <div className="w-full flex flex-col gap-4">
              <h3
                className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                data-aos="fade-left"
              >
                Website Interface
              </h3>
              <div className="flex flex-row gap-4">
                <div className="h-full w-auto" data-aos="fade-right">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website001}
                    alt="website_home_portal"
                  />
                </div>
                <div className="h-full w-auto" data-aos="fade-left">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website002}
                    alt="website_login"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="h-full w-auto" data-aos="fade-right">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website004}
                    alt="website_payment_portal"
                  />
                </div>
                <div className="h-full w-auto" data-aos="fade-left">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website003}
                    alt="website_dashboard_portal"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="h-full w-auto" data-aos="fade-right">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website005}
                    alt="website_course_portal"
                  />
                </div>
                <div className="h-full w-auto" data-aos="fade-left">
                  <img
                    className="object-cover rounded shadow-md shadow-cardColor"
                    src={website006}
                    alt="website_course_portal"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* EXPECTED */}

          <div className="flex flex-col-reverse lgl:flex-row gap-10 justify-center items-center">
            <div className="w-full">
              <div className="w-full flex flex-col gap-4">
                <h3
                  className="text-xl md:text-2xl text-gray-300 font-bold capitalize"
                  data-aos="fade-left"
                >
                  Expected Outcomes
                </h3>
                <p className="text-md text-bold font-light text-lightText tracking-wide">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-bold text-white">
                          Accurate Calculations:
                        </span>{" "}
                        Ensure the bank interest calculator provides correct
                        results for all tested scenarios.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-bold text-white">
                          Enhanced Performance:
                        </span>{" "}
                        Verify that the calculator performs efficiently under
                        various load conditions.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-bold text-white">
                          Cross-Browser Functionality:
                        </span>{" "}
                        Confirm that the calculator works seamlessly across
                        different web browsers.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-left">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-bold text-white">
                          Consistent User Interface:
                        </span>{" "}
                        Maintain a consistent and functional UI across different
                        devices and screen sizes.
                      </div>
                    </div>
                    <div className="flex flex-row gap-4" data-aos="fade-right">
                      <div className="text-designColor pt-1.5">
                        <MdDoubleArrow />
                      </div>
                      <div>
                        <span className="text-bold text-white">
                          Continuous Quality Assurance:
                        </span>{" "}
                        Maintain high quality and reliability of the calculator
                        through automated testing integrated into the
                        development pipeline.
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="h-full w-auto " data-aos="fade-right">
                <img
                  className="object-cover rounded shadow-md shadow-cardColor"
                  src={testngConsole}
                  alt="testNG_console_report"
                />
              </div>
              <div className="h-full w-auto " data-aos="fade-left">
                <img
                  className="object-cover rounded shadow-md shadow-cardColor"
                  src={extentReport001}
                  alt="extent_report"
                />
              </div>
            </div>
            <div>
              <div className="h-full w-auto " data-aos="zoom-in">
                <img
                  className="object-cover rounded shadow-md shadow-cardColor"
                  src={extentReport002}
                  alt="extent_report"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <p
              className="text-md text-bold font-light text-lightText tracking-wide"
              data-aos="zoom-in"
            >
              By implementing the E-learning App Automation project with
              Selenium, Java, and TestNG, we aim to achieve a robust and
              efficient testing process that ensures the app's high quality and
              reliability, providing a seamless user experience.
            </p>
          </div>
          <div className="text-designColor flex justify-center items-center">
            - END -
          </div>
        </div>
      </div>
    </>
  );
}
