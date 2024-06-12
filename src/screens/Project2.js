import React, { useEffect } from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import { SiFastapi, SiNextdotjs, SiNumpy, SiPandas, SiScikitlearn, SiTailwindcss } from "react-icons/si";
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
            Machine Learning Suggestion Application
          </p>
          <h1
            className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
            data-aos="zoom-in"
          >
            Movies Suggestion System
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
            The Similar Movies Suggestion System is a recommendation engine designed to provide users with personalized movie recommendations based on their viewing history and preferences. This system leverages machine learning algorithms and data analysis techniques to identify movies similar to those the user has liked or rated highly, enhancing their viewing experience and helping them discover new content.
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
                    <span className="text-white">User Personalization:</span>{" "}
                    Deliver tailored movie suggestions to users based on their unique tastes and past interactions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Similarity Analysis:
                    </span>{" "}
                    Implement robust algorithms to evaluate and determine movie similarities based on various attributes such as genre, director, cast, user ratings, and plot keywords.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                      Scalability and Performance:
                    </span>{" "}
                    Ensure the system can handle a large database of movies and a growing user base with efficient performance.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">User-Friendly Interface:</span>{" "}
                    Develop an intuitive interface for users to interact with the recommendation system, providing easy access to suggested movies.
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
                    <span className="text-white">User Profile Management:</span>{" "}
                    Allow users to create profiles, save preferences, and rate movies.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Movie Database:</span>{" "}
                    Integrate a comprehensive database of movies with detailed metadata.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Recommendation Algorithm:</span> Utilize collaborative filtering, content-based filtering, and hybrid methods to generate movie suggestions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Real-Time Updates:</span>{" "}
                    Continuously update recommendations based on the latest user interactions and ratings.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Search Functionality:</span>{" "}
                    Enable users to search for movies and receive recommendations based on search results.
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
                <FaPython />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Python
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiScikitlearn   />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Scikit-Learn
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiNumpy />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Numpy
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiPandas />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Pandas
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiFastapi />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                FastAPI
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
                <SiNextdotjs />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Next.js
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
                    <span className="text-white">Data Collection and Preprocessing:</span>{" "}
                    Gather movie data from APIs and preprocess it to create a structured database.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Algorithm Development:</span> Implement and train machine learning models for collaborative filtering and content-based filtering.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">System Integration:</span>{" "}
                    Develop backend and frontend components, integrating the recommendation engine with the user interface.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Testing and Evaluation:</span>{" "}
                    Test the system with real user data, evaluate its performance, and fine-tune the algorithms.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Deployment:</span>{" "}
                    Deploy the application on a cloud platform for accessibility and scalability.
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
                  Enhanced user satisfaction through personalized movie recommendations.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  Increased user engagement and interaction with the recommendation system.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  A scalable solution capable of handling extensive movie databases and user profiles.
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
            By creating the Similar Movies Suggestion System, we aim to improve the movie-watching experience for users by introducing them to content they are likely to enjoy, fostering a deeper engagement with the platform.
          </p>
        </div>
        <div className="text-designColor flex justify-center items-center">
          - END -
        </div>
      </div>
    </>
  );
}
