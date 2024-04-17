import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      {loading ? (
        <div className=" w-full h-screen flex flex-col justify-center items-center gap-2">
          <BarLoader color={"#ff014f"} loading={loading}/>
          <div>
            <h1 className="text-white text-base">Loading...</h1>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-5">
            <Banner />
            <Features />
            <Projects />
            <Resume />
            <Testimonial />
            <Contact />
            <Footer />
            <FooterBottom />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
