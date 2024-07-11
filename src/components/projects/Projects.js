import React from "react";
import projectThreeCover from "../../assets/images/car_price_predict_cover.png";
import projectFiveCover from "../../assets/images/elearning_app_testing.png";
import projectEightCover from "../../assets/images/house_price_pred.png";
import projectOneImg from "../../assets/images/mern_project_cover.png";
import projectTwoCover from "../../assets/images/movie_recom_cover.png";
import projectSixCover from "../../assets/images/portfolio_project_cover.png";
import projectSevenCover from "../../assets/images/wp_automation.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-10 lg:py-0">
      <div className="flex justify-center items-center text-center mb-14">
        <div className="flex flex-col gap-4 font-titleFont">
          <h3
            className="text-sm uppercase font-light text-cardColorHover tracking-wide"
            data-aos="fade-right"
          >
            My Projects
          </h3>
          <h1
            className="text-2xl md:text-3xl text-designColor font-bold capitalize"
            data-aos="fade-left"
          >
            Visit My Portfolio and Give Your Feedback
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        <ProjectCard
          forwordUrl="/hungry-shaed-web-application-details"
          title="Hungry Shaed Web Application (MERN Stack)"
          desc="A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to streamline the food delivery process."
          coverSrc={projectOneImg}
          githubLink="https://github.com/syednoor058/hungryShaed-MERN-stack.git"
          aos="fade-right"
        />
        <ProjectCard
          forwordUrl="/movie-suggestion-system-details"
          title="Movie Suggestion System (Machine Learning & Data Science)"
          desc="A trained machine learning model to suggest five similar movies compering to the input of a movie name that is provided by the users."
          coverSrc={projectTwoCover}
          githubLink="https://github.com/syednoor058/movie-suggestion-system.git"
          aos="fade-up"
        />
        <ProjectCard
          forwordUrl="/car-price-prediction-system-details"
          title="Pre-owned Car Price Prediction (Machine Learning)"
          desc="Forcasting current market price for pre-owned automobiles allowing buyers & sellers to make educated decisions."
          coverSrc={projectThreeCover}
          githubLink="https://github.com/syednoor058/preowned_car_price_prediction.git"
          aos="fade-left"
        />
        <ProjectCard
          forwordUrl="/e-learning-app-automation-test-details"
          title="E-Learning Application Automation Test (Selenium & TestNG)"
          desc="Selenium-based automation test project for the 'LearnIt360', an online course portal using Java, TestNG, JUnit, and includes tests for all the main functionalities."
          coverSrc={projectFiveCover}
          githubLink="https://github.com/syednoor058/LearnIT360-Selenium-Automation-Testing-Project.git"
          aos="fade-right"
        />
        <ProjectCard
          forwordUrl="/personal-portfolio-site-details"
          title="My Personal Portfolio Website (React JS)"
          desc="A portfolio website designed to showcase my skills and expertise along with my educational and experience background.."
          coverSrc={projectSixCover}
          githubLink="https://github.com/syednoor058/shaed-noor-portfolio-site.git"
          aos="fade-up"
        />
        <ProjectCard
          forwordUrl="/wordpress-plugins-automation-details"
          title="Wordpress Plugins Automation Test (Playwright & JavaScript)"
          desc="A comprehensive project to enhance the testing process for WordPress plugins, 'WP Dark Mode', developed by WPPOOL. "
          coverSrc={projectSevenCover}
          githubLink="https://github.com/syednoor058/WordPress-plugin-automation-test-by-Playwright.git"
          aos="fade-left"
        />
        <ProjectCard
          forwordUrl="/house-price-prediction-details"
          title="Real Estate House Price Prediction (Machine Learning & React JS)"
          desc="A machine learning model to predict house prices in Bengaluru to predict the accurate prices according to the important features of an appartment."
          coverSrc={projectEightCover}
          githubLink="https://github.com/syednoor058/Machine_Learning_Real_Estate_Price_Prediction.git"
          aos="fade-right"
        />
      </div>
    </section>
  );
}
