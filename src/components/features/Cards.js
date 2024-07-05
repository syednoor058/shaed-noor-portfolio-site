import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Cards(props) {
  return (
    <div className="w-full px-5 h-60 py-5 rounded-lg shadow-shadowOne flex items-center bg-cardColor hover:bg-cardColorHover group hover:bg-gradient-to-b transition-colors duration-100" data-aos={props.aos}>
      <div className="h-55 overflow-y-hidden">
        <div className="h-full flex flex-col gap-4 translate-y-9 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-3xl text-designColor">{props.icon}</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                {props.title}
              </h2>
              <p className="text-sm text-gray-400">{props.desc}</p>
            </div>
            <span className="text-2xl text-designColor">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
