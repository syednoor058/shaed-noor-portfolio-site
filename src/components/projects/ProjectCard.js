import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <>
      <div
        className="w-full px-5 py-5 rounded-md flex flex-col gap-5 justify-between items-center shadow shadow-[#696969] bg-cardColor hover:bg-cardColorHover hover:bg-gradient-to-b transition-colors duration-500 group"
        data-aos={props.aos}
      >
        <div className="w-full">
          <div className="w-full h-auto overflow-hidden rounded-lg">
            <img
              className="w-full h-[200px] object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={props.coverSrc}
              alt="project_cover_img"
            />
          </div>
          <div className="w-full mt-5 flex justify-between items-center gap-5">
            <div>
              <Link>
                <h3 className="text-sm md:text-base uppercase text-designColor font-normal">
                  {props.title}
                </h3>
              </Link>
            </div>
            <div>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={props.githubLink}>
                  <FaGithub />
                </a>
              </span>
            </div>
          </div>
          <div className="w-full">
            <p className="text-gray-400 text-xs md:text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              {props.desc}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row gap-3">
          <div className="w-[50%] border border-gray-400 text-gray-400 hover:bg-designColor hover:border-designColor hover:text-white duration-500 py-2 px-2 rounded">
            <Link to={props.githubLink}>
              <div className="flex flex-row">
                <div className="w-[85%] flex items-center justify-center">
                  View Codes
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <FaGithub />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[50%]  bg-gray-400 text-cardColor hover:bg-designColor hover:text-white duration-500 py-2 px-2 rounded">
            <Link to={props.forwordUrl}>
              <div className="flex flex-row">
                <div className="w-[85%] flex items-center justify-center">
                  Project Details
                </div>
                <div className="w-[15%] text-xl flex items-center justify-center">
                  <IoCaretForwardOutline />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
