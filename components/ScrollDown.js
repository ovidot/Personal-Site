import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

export const ScrollDown = () => {
  return (
    <div className=" hidden mx-auto ps-2 lg:flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25 font-mono cursor-none ">
      <FontAwesomeIcon icon={faComputerMouse} className="h-7" />
      <span className="">Scroll Down</span>
      <FontAwesomeIcon icon={faArrowDown} className="h-5 w-2 animate-bounce" />
    </div>
  );
};
