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
            Machine Learning Prediction Application
          </p>
          <h1
            className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
            data-aos="zoom-in"
          >
            Real Estate House Price Prediction System
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
            The Real Estate House Price Prediction System is a machine learning-powered application designed to estimate the market value of residential properties. This system aids real estate agents, buyers, sellers, and investors by providing accurate price predictions based on various property attributes, enabling more informed decision-making in the real estate market.
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
                    <span className="text-white">Accurate Price Estimation:</span>{" "}
                    Develop a model that predicts the price of pre-owned cars with high accuracy.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    User-Friendly Interface:
                    </span>{" "}
                    Create an easy-to-use interface for users to input property details and receive price predictions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                    Data-Driven Insights:
                    </span>{" "}
                    Provide insights into how different factors influence house prices.
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
                    <span className="text-white">Input Property Details:</span>{" "}
                    Allow users to input various property attributes such as location, size, number of bedrooms and bathrooms, age, condition, and amenities.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Price Prediction:</span>{" "}
                    Generate an estimated market value based on the provided property details using advanced machine learning algorithms.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Visualization:</span> Offer visual insights and trends to show how different factors affect house prices.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Comparative Analysis:</span>{" "}
                    Enable users to compare predicted prices with historical data and similar properties in the area.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Location-Based Insights:</span>{" "}
                    Provide detailed insights based on geographical location, including neighborhood trends and local amenities.
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
                    Collect comprehensive datasets of residential property sales from various sources. Clean and preprocess the data to handle missing values, outliers, and categorical encoding.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Feature Engineering:</span> Identify and create relevant features that impact house prices, such as location, property size, age, and additional amenities.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Model Development:</span>{" "}
                    Train multiple machine learning models (e.g., linear regression, decision trees, random forests, gradient boosting) and evaluate their performance.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">System Integration:</span>{" "}
                    Develop backend and frontend components to integrate the prediction model with a user-friendly interface.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Testing and Evaluation:</span>{" "}
                    Test the system with real-world data, validate the model’s accuracy, and make necessary adjustments.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Deployment:</span>{" "}
                    Deploy the application on a cloud platform to ensure wide accessibility and scalability.
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
                  <span className="text-bold text-white">Enhanced Pricing Accuracy:</span> Provide users with accurate price estimates for residential properties, reducing the uncertainty in buying, selling, and investing decisions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">Market Insights:</span> Offer valuable insights into the factors affecting house prices, helping users understand market trends.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                  <span className="text-bold text-white">User Convenience:</span> Simplify the process of estimating house prices with a straightforward, user-friendly application.
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
            By implementing the Real Estate House Price Prediction System, we aim to create a robust tool that enhances transparency and efficiency in the real estate market, benefiting all stakeholders through accurate and data-driven price estimations.
          </p>
        </div>
        <div className="text-designColor flex justify-center items-center">
          - END -
        </div>
      </div>
    </>
  );
}
