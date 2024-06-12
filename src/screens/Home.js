import React from 'react';
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
    <div>
      <div className="w-full px-5 md:px-10"><Banner /></div>
      <div className="w-full px-5 md:px-10"><Features /></div>
      <div className="w-full px-5 md:px-10"><Projects /></div>
      <div className="w-full px-5 md:px-10"><Resume /></div>
      <div className="w-full px-5 md:px-10"><Testimonial /></div>
      <div className="w-full px-5 md:px-10"><Contact /></div>
      <div className="w-full px-5 md:px-10 bg-cardColorHover"><Footer /></div>
      <div className="w-full px-5 md:px-10 bg-cardColorHover"><FooterBottom /></div>       
    </div>
    </>
  )
}