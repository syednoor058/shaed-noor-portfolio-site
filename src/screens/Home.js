import React from "react";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Testimonial from "../components/testimonials/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div>
          <div className="w-full px-5 md:px-20">
            <Banner />
          </div>
          <div className="bg-bodyColor">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 200">
              <path
                fill="#ff014f"
                fill-opacity="1"
                d="M0,128L720,192L1440,128L1440,320L720,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <div className="w-full px-5 md:px-20 bg-designColor">
            <About />
          </div>
          <div className="bg-designColor">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 200">
              <path
                fill="#212428"
                fill-opacity="1"
                d="M0,128L720,192L1440,128L1440,320L720,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <div className="w-full px-5 md:px-20">
            <Features />
          </div>
        </div>

        <div>
          <div className="bg-lightText">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315">
              <path
                fill="#212428"
                fill-opacity="1"
                d="M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,208C672,160,768,96,864,96C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="w-full px-5 md:px-20 bg-lightText">
            <Projects />
          </div>
        </div>

        <div className="bg-lightText">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
            <path
              fill="#212428"
              fill-opacity="1"
              d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,170.7C672,160,768,96,864,64C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="w-full px-5 md:px-20">
          <Resume />
        </div>

        <div className="w-full px-5 md:px-20">
          <Testimonial />
        </div>

        <div className="bg-bodyColor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315">
            <path
              fill="#c4cfde"
              fill-opacity="1"
              d="M0,64L40,85.3C80,107,160,149,240,149.3C320,149,400,107,480,106.7C560,107,640,149,720,186.7C800,224,880,256,960,266.7C1040,277,1120,267,1200,229.3C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="w-full px-5 md:px-20 bg-lightText">
          <Contact />
        </div>

        <div className="w-full px-5 md:px-10 bg-cardColorHover">
          <Footer />
        </div>
        <div className="w-full px-5 md:px-10 bg-cardColorHover">
          <FooterBottom />
        </div>
      </div>
    </>
  );
}
