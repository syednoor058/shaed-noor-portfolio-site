import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { LuQuote } from "react-icons/lu";
import { RiStarFill } from "react-icons/ri";
import Slider from "react-slick";
import azizulImg from "../../assets/testimonial_images/azizul.png";
import rhituImg from "../../assets/testimonial_images/rhitu.png";
import shararImg from "../../assets/testimonial_images/sharar.png";
import tanhaImg from "../../assets/testimonial_images/tanha.png";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-[40%] h-8 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-lg lg:text-2xl text-gray-400 flex justify-center items-center absolute -top-10 lg:top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
      data-aos="zoom-in"
    ><HiArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-[40%] h-8 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-lg lg:text-2xl text-gray-400 flex justify-center items-center absolute -top-10 lg:top-0 lg:right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
      data-aos="zoom-in"
    ><HiArrowLeft /></div>
  );
}


export default function Testimonial() {

  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul className="flex gap-[15px] justify-center items-center mt-[5px] lg:mt-[20px]"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full h-auto pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="zoom-in">
            Testimonials
          </h3>
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize" data-aos="zoom-in">
            What Clients Say
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:p-5">
              <div className="w-full lg:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex lg:flex-col p-5 lg:p-8 gap-8 lg:justify-center mb-3 lg:mb-0" data-aos="zoom-in">
                <img
                  className="h-20 lg:h-auto rounded-lg object-cover"
                  src={tanhaImg}
                  alt="Tanjina_tanha"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Sweet Cakes
                  </p>
                  <h3 className="text-base sm:text-sm lg:text-xl font-bold">Sheikh Tanjina Tanha</h3>
                  <p className="text-xs lg:text-base tracking-wide text-gray-500">
                    Owner
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <span className="text-6xl lg:text-8xl" data-aos="zoom-in">
                  <LuQuote />
                </span>
                <div className="w-full h-[70%] py-5 lg:py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-5 lg:px-8 flex flex-col justify-center gap-5" data-aos="zoom-in">
                  <div className="flex gap-2 lg:gap-0 justify-between items-center border-b-2 border-b-gray-900 pb-6">
                    <div>
                      <h3 className="text-base lg:text-xl tracking-wide text-medium">
                        Cake Order & Delivery Application
                      </h3>
                      <p className="text-xs text-gray-400 mt-3">
                        via Personal Meeting (April, 2023 - August, 2023)
                      </p>
                    </div>

                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Creating my cake business website with Shaed Noor was an
                    absolute pleasure. Their expertise and attention to detail
                    brought my vision to life beautifully. With their guidance,
                    my online presence now mirrors the quality and creativity of
                    my cakes. I highly recommend their services to anyone
                    looking to elevate their online presence."
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:p-5">
              <div className="w-full lg:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex lg:flex-col p-5 lg:p-8 gap-8 lg:justify-center mb-3 lg:mb-0">
                <img
                  className="h-20 lg:h-auto rounded-lg object-cover"
                  src={shararImg}
                  alt="Sharar"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    PuppetBrush
                  </p>
                  <h3 className="text-base sm:text-sm lg:text-xl font-bold">Kazi Fahim Sharar</h3>
                  <p className="text-xs lg:text-base tracking-wide text-gray-500">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <span className="text-6xl lg:text-8xl">
                  <LuQuote />
                </span>
                <div className="w-full h-[70%] py-5 lg:py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-5 lg:px-8 flex flex-col justify-center gap-5">
                  <div className="flex gap-2 lg:gap-0 justify-between items-center border-b-2 border-b-gray-900 pb-6">
                    <div>
                      <h3 className="text-base lg:text-xl tracking-wide text-medium">
                        Search Engine Optimization
                      </h3>
                      <p className="text-xs text-gray-400 mt-3">
                        via Personal Meeting (October, 2020 - July, 2021)
                      </p>
                    </div>

                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Thanks to Shaed's SEO services, our website's visibility has soared. His expertise and dedication have significantly boosted our and clients' online presence, driving more traffic to clients' sites than ever before. We couldn't be happier with the results and highly recommend Shaed Noor to anyone seeking top-notch SEO solutions."
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:p-5">
              <div className="w-full lg:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex lg:flex-col p-5 lg:p-8 gap-8 lg:justify-center mb-3 lg:mb-0">
                <img
                  className="h-20 lg:h-auto rounded-lg object-cover"
                  src={rhituImg}
                  alt="Rhitu"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Rhitu Dental Care
                  </p>
                  <h3 className="text-base sm:text-sm lg:text-xl font-bold">Rhituparna Das</h3>
                  <p className="text-xs lg:text-base tracking-wide text-gray-500">
                    Owner
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <span className="text-6xl lg:text-8xl">
                  <LuQuote />
                </span>
                <div className="w-full h-[70%] py-5 lg:py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-5 lg:px-8 flex flex-col justify-center gap-5">
                  <div className="flex gap-2 lg:gap-0 justify-between items-center border-b-2 border-b-gray-900 pb-6">
                    <div>
                      <h3 className="text-base lg:text-xl tracking-wide text-medium">
                        Social Media Marketing
                      </h3>
                      <p className="text-xs text-gray-400 mt-3">
                        via Facebook (May, 2022 - April, 2023)
                      </p>
                    </div>

                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Shaed Noor has been instrumental in transforming my digital marketing strategy. His innovative approach and thorough understanding of the industry have led to increased engagement and brand recognition across various platforms. I am impressed by his professionalism and commitment to my chamber's success. Working with Shaed Noor has been a game-changer for my career."
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:p-5">
              <div className="w-full lg:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex lg:flex-col p-5 lg:p-8 gap-8 lg:justify-center mb-3 lg:mb-0">
                <img
                  className="h-20 lg:h-auto rounded-lg object-cover"
                  src={azizulImg}
                  alt="Azizul_hoque"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    InterAiD & Spandan
                  </p>
                  <h3 className="text-base sm:text-sm lg:text-xl font-bold">MD Azizul Hoque</h3>
                  <p className="text-xs lg:text-base tracking-wide text-gray-500">
                    Owner | Chief Executive Officer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <span className="text-6xl lg:text-8xl">
                  <LuQuote />
                </span>
                <div className="w-full h-[70%] py-5 lg:py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-5 lg:px-8 flex flex-col justify-center gap-5">
                  <div className="flex gap-2 lg:gap-0 justify-between items-center border-b-2 border-b-gray-900 pb-6">
                    <div>
                      <h3 className="text-base lg:text-xl tracking-wide text-medium">
                        Web Development | Digital Marketing
                      </h3>
                      <p className="text-xs text-gray-400 mt-3">
                        via Personal Meeting (September, 2021 - May, 2023)
                      </p>
                    </div>

                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Choosing Shaed Noor for both digital marketing and web development was one of the best decisions I made for our business. His seamless integration of these services has resulted in a cohesive online presence that perfectly aligns with our brand. From designing our website to implementing effective marketing strategies, Shaed Noor has exceeded our expectations at every turn."
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
