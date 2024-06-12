import React, { useEffect } from "react";
import { FaGithub, FaReact, } from "react-icons/fa";
import { HiArrowLeft, HiArrowUp, HiOutlineMail } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import { SiJavascript, SiReactrouter, SiTailwindcss, } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Link } from "react-router-dom";
import foodDeliveryImg from "../assets/images/foodDelivery.png";
import implimentImg from "../assets/images/implement.png";
import objImg from "../assets/images/objectives.png";
import expectedImg from "../assets/images/outcomes.png";

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
            Frontend Application
          </p>
          <h1
            className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
            data-aos="zoom-in"
          >
            Personal Portfolio Website
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
            The Personal Portfolio Website is a dynamic and visually appealing web application designed to showcase an individual’s skills, projects, and professional achievements. Built using React and styled with Tailwind CSS, this portfolio aims to provide a modern and responsive interface that highlights the user’s personal brand and work in an engaging manner.
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
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Professional Presentation:</span>{" "}
                    Create a polished and professional online presence to showcase skills, projects, and experience.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Responsive Design:
                    </span>{" "}
                    Ensure the website is fully responsive and accessible on all devices, including desktops, tablets, and smartphones.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    User Engagement:
                    </span>{" "}
                    Design an interactive and easy-to-navigate interface to keep visitors engaged.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Customization:
                    </span>{" "}
                    Allow for easy updates and customization of content as the user’s portfolio evolves.
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
              className="w-[170px] lgl:w-[250px] h-auto"
              src={objImg}
              alt="objectives"
            />
          </div>
        </div>

        {/* FEATURES */}

        <div className="flex flex-col-reverse lgl:flex-row gap-10 justify-center items-center">
          <div
            className="w-full lgl:w-1/3 flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[220px] lgl:w-[320px] h-auto"
              src={foodDeliveryImg}
              alt="food_delivery"
            />
          </div>
          <div className="w-full lgl:w-2/3">
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
                    <span className="text-white">Home Section:</span>{" "}
                    A welcoming landing page with a brief introduction and a professional headshot.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Projects Section:</span>{" "}
                    Showcase of completed projects with descriptions, technologies used, and links to live demos or GitHub repositories.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">About Section:</span> A detailed section about the user, including a biography, skills, and professional background.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Experience Section:</span>{" "}
                    Timeline of professional experience, including job roles, responsibilities, and achievements.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Contact Section:</span>{" "}
                    A contact form and social media links for easy communication.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Animations and Effects:</span>{" "}
                    Smooth animations and interactive effects to enhance user experience.
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
                <FaReact />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                React
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiJavascript />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                JavaScript
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiReactrouter />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                React Router
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiTailwindcss />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Tailwind
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <TbBrandFramerMotion />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Framer Motion
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <HiOutlineMail />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Email.js
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

        <div className="flex flex-col lgl:flex-row gap-10 justify-center items-center">
          <div className="w-full lgl:w-2/3">
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
                    Initialize the React project and configure the project structure.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Tailwind CSS Integration:</span> Set up Tailwind CSS for styling and configure the theme and custom styles.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Component Development:</span>{" "}
                    Develop React components for each section of the portfolio (Home, About, Projects, Experience, Contact, Blog).
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Routing:</span>{" "}
                    Implement React Router to handle navigation between different sections.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Animations:</span>{" "}
                    Add smooth animations and interactive effects using Framer Motion.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Form Handling:</span>{" "}
                    Integrate EmailJS for handling contact form submissions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Testing and Optimization:</span>{" "}
                    Test the website across different devices and browsers, optimizing for performance and accessibility.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Deployment:</span>{" "}
                    Deploy the website on a hosting platform such as Vercel or Netlify for live access.
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
              className="w-[250px] lgl:w-[400px] h-auto"
              src={implimentImg}
              alt="impliment_img"
            />
          </div>
        </div>

        {/* EXPECTED */}

        <div className="flex flex-col-reverse lgl:flex-row gap-10 justify-center items-center">
          <div
            className="w-full lgl:w-1/3 flex justify-center items-center "
            data-aos="zoom-in"
          >
            <img
              className="w-[220px] lgl:w-[250px] h-auto"
              src={expectedImg}
              alt="objectives"
            />
          </div>
          <div className="w-full lgl:w-2/3">
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
                  <span className="text-bold text-white">Enhanced Online Presence:</span> A professional and visually appealing portfolio website that effectively showcases the user’s skills and projects.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Increased Engagement:</span> An interactive and easy-to-navigate interface that keeps visitors engaged and encourages them to explore the user’s work.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Responsive Design:</span> A fully responsive website that looks great and functions well on all devices.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Easy Maintenance:</span> A modular and maintainable codebase that allows for easy updates and additions to the portfolio.
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p
            className="text-md text-bold font-light text-lightText tracking-wide"
            data-aos="zoom-in"
          >
            By developing a Personal Portfolio Website using React and Tailwind CSS, the user will have a powerful tool to present their professional brand, attract potential employers or clients, and demonstrate their expertise in a modern and engaging way.
          </p>
        </div>
        <div className="text-designColor flex justify-center items-center">
          - END -
        </div>
      </div>
    </>
  );
}
