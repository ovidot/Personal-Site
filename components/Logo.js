import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Logo = ({ iconname, text, link }) => {
  return (
    <div className="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25 ">
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={iconname} className="h-6" />
        <span className="">{text}</span>
      </a>
    </div>
  );
};

export default Logo;
