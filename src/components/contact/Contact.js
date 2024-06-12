import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import contactImg from "../../assets/contact_images/contact_img.png";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );

      emailjs
        .sendForm("service_k918xce", "template_bwke4fq", form.current, {
          publicKey: "RVdjFgeK3-m4-E8RM",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full pt-10 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="zoom-in">
            Contact
          </h3>
          <h1 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize" data-aos="zoom-in">
            Let's have a conversation
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-full flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:p-5">
          <div className="w-full lg:w-[35%] xl:w-[25%] h-full" data-aos="zoom-in">
            <div className="bg-cardColor shadow-shadowOne p-5 lg:p-8 flex flex-col gap-5 lg:gap-8 rounded-md">
              <div className="w-full flex justify-center">
                <img
                  className="rounded-lg object-cover"
                  src={contactImg}
                  alt="shaed_noor"
                  style={{ height: "250px", width: "auto" }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-lg lg:text-xl font-bold">
                    Syed Shaeduzzaman Noor
                  </h2>
                  <p className="text-sm tracking-wide text-gray-500">
                    Software Engineer | SQA Engineer | SEO Specialist
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base text-gray-400">
                    8no. Tootpara Central Rd, Khulna Sadar, Khulna, Bangladesh
                  </p>
                  <p className="text-base text-gray-400">
                    Mobile: +88 01782 734573
                  </p>
                  <p className="text-base text-gray-400">
                    Email: syednoor058@gmail.com
                  </p>
                  <div className="flex gap-4 mt-3">
                    <span className="bannerIcon">
                      <a
                        href="https://www.facebook.com/shaed058/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a
                        href="https://www.linkedin.com/in/shaednoor/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a
                        href="https://www.instagram.com/shaed_noor/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a
                        href="https://github.com/syednoor058"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] xl:w-[70%] h-full" data-aos="zoom-in">
            <div className="flex flex-col justify-between">
              <div className="w-full h-full py-5 lg:py-8 bg-cardColor shadow-shadowOne rounded-md px-5 lg:px-8 flex flex-col justify-center gap-8">
                <form ref={form} className="w-full flex flex-col gap-3">               
                  <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-8">
                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                      <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wide">
                        Your Name
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        name='from_name'
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                      <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                      </p>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        name='from_mobile'
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wide">
                      Email Address
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name='from_email'
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="email"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name='from_subject'
                      className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name='message'
                      className={`${
                        errMsg === "Message is required!" &&
                        "outline-designColor"
                      } contactTextArea`}
                      type="text"
                      cols="lg:30"
                      rows="8"
                    ></textarea>
                  </div>

                  {errMsg && (
                    <p className="py-1 lg:py-3 bg-cardColor shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-cardColor shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}

                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className="w-full h-10 lg:h-12 bg-bodyColor rounded-md text-sm lg:text-base text-gray-400 tracking-wider uppercase hover:text-white hover:bg-designColor duration-300 flex gap-2 justify-center items-center"
                    >
                      <span className="text-lg lg:text-xl">
                        <IoIosSend />
                      </span>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
