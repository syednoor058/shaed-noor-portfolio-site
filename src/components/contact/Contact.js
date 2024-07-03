import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
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
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [subErrMsg, setSubErrMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const closeSuccessMsg = (e) => {
    e.preventDefault();
    setSuccessMsg("");
  }

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setNameErrMsg("* Name is required!");
    } else {
      setNameErrMsg("");
      if (phoneNumber === "") {
        setPhoneErrMsg("* Phone number is required!");
      } else {
          setPhoneErrMsg("");
          if (email === "") {
            setEmailErrMsg("* Email is required!");
          } else if (!emailValidation(email)) {
              setEmailErrMsg("* Invalid email address!");
          } else {
            setEmailErrMsg("");
            if (subject === "") {
              setSubErrMsg("* Subject is required!");
            } else {
              setSubErrMsg("");
              if (message === "") {
                setErrMsg("* Blank message can not be sent!");
              }
              else {
                setErrMsg("");
                setSuccessMsg(
                  `Thank you dear ${username}, your message has been sent successfully!`
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
                  setNameErrMsg("");
                  setPhoneErrMsg("");
                  setEmailErrMsg("");
                  setSubErrMsg("");
              }
            }
          }
      }
    }
  }

  return (
    <section id="contact" className="w-full pt-10 lg:pt-0 pb-10 md:pb-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3
            className="text-sm uppercase font-light text-designColor tracking-wide"
            data-aos="zoom-in"
          >
            Contact
          </h3>
          <h1
            className="text-2xl md:text-3xl text-bodyColor font-bold capitalize"
            data-aos="zoom-in"
          >
            Let's have a conversation
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-full flex flex-col md:flex-row gap-10 lg:gap-16 justify-center lg:p-5 items-center">
          <div
            className="w-[85%] lg:w-[30%] xl:w-[30%] h-full"
            data-aos="zoom-in"
          >
            <div className="bg-cardColor shadow-xl shadow-shadowThree shadow-designColor p-5 lg:p-8 flex flex-col gap-5 lg:gap-8 rounded-md">
              <div className="w-full flex justify-center">
                <img
                  className="h-[180px] lg:h-[250px] rounded-lg object-cover"
                  src={contactImg}
                  alt="shaed_noor"
                  style={{ width: "auto" }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-center lg:text-left text-lg lg:text-xl font-bold text-designColor">
                    Syed Shaeduzzaman Noor
                  </h2>
                  <p className="text-xs lg:text-sm text-center lg:text-left tracking-wide text-gray-500">
                    Software Engineer | SQA Engineer | SEO Specialist
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base text-center lg:text-left text-gray-400">
                    8no. Tootpara Central Rd, Khulna Sadar, Khulna, Bangladesh
                  </p>
                  <p className="text-sm lg:text-base text-center lg:text-left text-gray-400">
                    Mobile: +88 01782 734573
                  </p>
                  <p className="text-sm lg:text-base text-center lg:text-left text-gray-400">
                    Email: syednoor058@gmail.com
                  </p>
                  <div className="w-full flex gap-4 mt-3 justify-center lg:justify-start">
                    <div className="contactIcon">
                      <a
                        href="https://www.facebook.com/shaed058/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </div>
                    <div className="contactIcon">
                      <a
                        href="https://www.linkedin.com/in/shaednoor/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className="contactIcon">
                      <a
                        href="https://www.instagram.com/shaed_noor/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                    <div className="contactIcon">
                      <a
                        href="https://github.com/syednoor058"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-[50%] xl:w-[50%] h-full"
            data-aos="zoom-in"
          >
            <div className="w-full h-full">
              <div className="w-full h-full py-5 lg:py-0 lg:pb-8 px-5 lg:px-8 flex flex-col justify-center gap-8">
                <h3 className="text-lg lg:text-xl text-designColor text-center text-wrap uppercase">
                  Send Me message!
                </h3>
                <form
                  ref={form}
                  className="w-full flex flex-col gap-6 lg:gap-10"
                >
                  <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="w-full lg:w-1/2">
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        name="from_name"
                        className="contactInput"
                        placeholder="Enter full name"
                        type="text"
                      />
                      {nameErrMsg && (
                        <p className="pt-1 text-red-500 text-base tracking-wide">
                          {nameErrMsg}
                        </p>
                      )}
                    </div>
                    <div className="w-full lg:w-1/2">
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        name="from_mobile"
                        className="contactInput"
                        placeholder="Enter phone number"
                        type="text"
                      />
                      {phoneErrMsg && (
                        <p className="pt-1 text-red-500 text-base tracking-wide">
                          {phoneErrMsg}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="from_email"
                      className="contactInput"
                      placeholder="Enter e-mail address"
                      type="email"
                    />
                    {emailErrMsg && (
                        <p className="pt-1 text-red-500 text-base tracking-wide">
                          {emailErrMsg}
                        </p>
                      )}
                  </div>
                  <div className="w-full">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="from_subject"
                      className="contactInput"
                      placeholder="Enter message subject"
                      type="text"
                    />
                    {subErrMsg && (
                        <p className="pt-1 text-red-500 text-base tracking-wide">
                          {subErrMsg}
                        </p>
                      )}
                  </div>
                  <div className="w-full">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      className="contactTextArea"
                      placeholder="Write message here"
                      type="text"
                      cols="lg:30"
                      rows="6"
                    ></textarea>
                    {errMsg && (
                        <p className="pt-1 text-red-500 text-base tracking-wide">
                          {errMsg}
                        </p>
                      )}
                  </div>

                  <div className="w-full">
                    <AnimatePresence>
                        {successMsg && (
                          <motion.div initial={{ x: "-50%", opacity: 0}}
                          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                          exit={{ x: "-50%", opacity: 0, transition: { duration: 0.5 } }}
                          className="w-full mb-2 py-2 px-3 rounded-sm bg-green-500 text-white text-base tracking-wide flex justify-between z-50">
                            {successMsg}
                            <span><button className="cursor-pointer text-bodyColor" onClick={closeSuccessMsg}>X</button></span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    {/* {successMsg && (
                      <p className="mb-2 py-2 px-3 rounded-sm bg-green-500 text-white text-base tracking-wide flex justify-between">
                        {successMsg}
                        <span><button className="cursor-pointer text-bodyColor" onClick={closeSuccessMsg}>X</button></span>
                      </p>
                      
                    )} */}
                    <button
                      onClick={handleSend}
                      className="w-full h-10 lg:h-12 bg-cardColorHover rounded-md text-sm lg:text-base text-gray-400 tracking-wider uppercase hover:text-white hover:bg-designColor duration-300 flex gap-2 justify-center items-center"
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
