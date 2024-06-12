import React from "react";
import { FaBootstrap, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { MdDoubleArrow } from "react-icons/md";
import { SiAxios, SiExpress, SiGooglemaps, SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { Link } from "react-router-dom";
import foodDeliveryImg from "../assets/images/foodDelivery.png";
import implimentImg from "../assets/images/implement.png";
import objImg from "../assets/images/objectives.png";
import expectedImg from "../assets/images/outcomes.png";

export default function Project1() {
  return (
    <>
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
            Full Stack Web Application
          </p>
          <h1
            className="text-2xl md:text-3xl text-gray-300 font-bold capitalize text-center"
            data-aos="zoom-in"
          >
            HUNGRY SHAED WEB APPLICATION (MERN STACK)
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
            The Food Delivery Full Stack Web Application is a comprehensive
            platform designed to connect users with local restaurants and
            streamline the process of ordering food online. Built using the MERN
            stack (MongoDB, Express.js, React, Node.js), this application
            provides a seamless and efficient user experience, enabling
            customers to browse menus, place orders, and track deliveries in
            real-time.
          </p>
        </div>

        {/* OBJECTIVES */}

        <div className="flex flex-col lgl:flex-row gap-10">
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
                    <span className="text-white">User-Friendly Interface:</span>{" "}
                    Develop an intuitive and responsive interface for both
                    customers and restaurant partners.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                      Efficient Order Management:
                    </span>{" "}
                    Implement features to manage orders, track delivery status,
                    and handle payments securely.
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
                    Ensure the application is scalable and performs efficiently
                    under high traffic conditions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Secure Transactions:</span>{" "}
                    Provide secure authentication and payment processing to
                    protect user data and transactions.
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

        <div className="flex flex-col-reverse lgl:flex-row gap-10">
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
                    <span className="text-white">User Authentication:</span>{" "}
                    Enable users to register, log in, and manage their profiles
                    securely.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Restaurant Listings:</span>{" "}
                    Display a list of available restaurants with detailed menus
                    and reviews.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Search and Filter:</span> Allow
                    users to search for restaurants and filter results based on
                    cuisine, ratings, and location.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Order Placement:</span>{" "}
                    Facilitate the easy selection of menu items, customization
                    of orders, and addition to the cart.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Payment Integration:</span>{" "}
                    Integrate secure payment gateways for processing
                    transactions.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Order Tracking:</span> Provide
                    real-time order tracking from preparation to delivery.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Admin Dashboard:</span> Create
                    a dashboard for administrators and restaurant partners to
                    manage listings, orders, and delivery logistics.
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
                <SiMongodb />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                MongoDB
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiExpress />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Express
              </p>
            </div>
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
                <FaNodeJs />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Node
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <FaBootstrap />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Bootstrap
              </p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <TbBrandRedux />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Redux
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiAxios />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Axios
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="projectIcon">
                <SiGooglemaps />
              </div>
              <p className="w-full text-designColor flex justify-center items-center text-xs md:text-base">
                Map
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

        <div className="flex flex-col lgl:flex-row gap-10">
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
                    Initialize the MERN stack project with a structured
                    directory layout.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Database Design:</span> Design
                    MongoDB schemas for users, restaurants, menu items, and
                    orders.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Backend Development:</span>{" "}
                    Develop RESTful APIs using Express.js to handle user
                    authentication, restaurant data, order processing, and
                    payment integration.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Frontend Development:</span>{" "}
                    Build the React application with components for user
                    interfaces, including registration, restaurant browsing,
                    order management, and tracking.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">State Management:</span>{" "}
                    Implement Redux for managing the global state and handling
                    actions related to authentication, order placement, and data
                    fetching.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Integration:</span> Connect the
                    frontend with backend APIs using Axios, ensuring secure and
                    efficient data transfer.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                      Payment and Maps Integration:
                    </span>{" "}
                    Integrate payment gateways and Google Maps API for enhanced
                    functionality.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Testing and QA:</span> Conduct
                    thorough testing of all components and features to ensure
                    functionality, security, and performance.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Deployment:</span> Deploy the
                    application on a cloud platform like AWS or Heroku for
                    scalability and accessibility.
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

        <div className="flex flex-col-reverse lgl:flex-row gap-10">
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
                    <span className="text-white">
                      Seamless User Experience:
                    </span>{" "}
                    Provide a smooth and intuitive platform for users to order
                    food and track deliveries.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">
                      Efficient Order Management:
                    </span>{" "}
                    Enable restaurants to manage orders efficiently and improve
                    customer satisfaction.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Scalability:</span>Scalability:
                    Ensure the application can handle high traffic and large
                    volumes of data seamlessly.
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="text-designColor pt-1.5">
                    <MdDoubleArrow />
                  </div>
                  <div>
                    <span className="text-white">Security:</span> Maintain high
                    standards of security for user data and transactions.
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
            By developing the Food Delivery Full Stack Web Application using the
            MERN stack, we aim to create a robust and scalable platform that
            meets the needs of customers and restaurant partners, enhancing the
            food ordering and delivery experience.
          </p>
        </div>
        <div className="text-designColor flex justify-center items-center">
          - END -
        </div>
      </div>
    </>
  );
}
