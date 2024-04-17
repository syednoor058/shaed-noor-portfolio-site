import React from "react";
import projectFiveCover from "../../assets/images/bank_interest_cover.png";
import projectThreeCover from "../../assets/images/car_price_predict_cover.png";
import projectOneImg from "../../assets/images/mern_project_cover.png";
import projectTwoCover from "../../assets/images/movie_recom_cover.png";
import projectSixCover from "../../assets/images/portfolio_project_cover.png";
import projectFourCover from "../../assets/images/raffle_draw_cover.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center mb-14">
        <div className="flex flex-col gap-4 font-titleFont">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="zoom-in">
            My Projects
          </h3>
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize" data-aos="zoom-in">
            Visit My Portfolio and Give Your Feedback
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        <ProjectCard title="Hungry Shaed Web Application (MERN Stack)" desc="HungryShaed is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to streamline the food delivery process. With an intuitive user interface, customers can browse a wide range of cuisines, place orders, and track their delivery in real-time." coverSrc={projectOneImg} githubLink="https://github.com/syednoor058/hungryShaed-MERN-stack.git" />
        <ProjectCard title="Movie Suggestion System (Machine Learning & Data Science)" desc="This is a system where user can type a movie title on the search box and can get 5 most similar movie suggestions using Machine Learning model. The system was built with Streamlit. Till now the system contains almost 5000 movies data." coverSrc={projectTwoCover} githubLink="https://github.com/syednoor058/movie-suggestion-system.git" />
        <ProjectCard title="Pre-owned Car Prediction (Machine Learning Model)" desc="The forecast of current pricing for used automobiles is critical in the automotive business, allowing buyers & sellers to make educated decisions. This work includes a detailed investigation into the development of dependable machine-learning model." coverSrc={projectThreeCover} githubLink="https://github.com/syednoor058/preowned_car_price_prediction.git" />
        <ProjectCard title="Raffle Draw Server Side Project (Node JS)" desc="Welcome to the Raffle Draw Project, a Node.js and Express.js application that makes raffle events more exciting and engaging. With this application, users can easily participate in raffle draws, buy one or multiple tickets, and experience the thrill of being a winner." coverSrc={projectFourCover} githubLink="https://github.com/syednoor058/nodeJS-project-raffle-draw.git" />
        <ProjectCard title="Bank Interest Calculator (Selenium Automation)" desc="Automate the calculation of total interest amounts with the Bank Interest Calculator Automation script. This Python script leverages Selenium to navigate bank websites, input criteria, and extract interest data. The results are then conveniently stored in an Excel file, making financial calculations a breeze." coverSrc={projectFiveCover} githubLink="https://github.com/syednoor058/selenium-project-bank-interest-automated-calculator.git" />
        <ProjectCard title="My Portfolio Site (React JS)" desc="This portfolio website is fully designed and developed by me. All rights reserved on my name. I used React Js with Tailwind CSS, Framer-motion, React Slick, and React-scroll. A visually stunning portfolio highlighting my skills and achievements." coverSrc={projectSixCover} githubLink="https://github.com/syednoor058/shaed-noor-portfolio-site.git" />
      </div>
    </section>
  );
}
