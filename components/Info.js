import React from "react";
import Logo from "./Logo";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import {
  TbBrandPython,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
} from "react-icons/tb";
import { SiFlask } from "react-icons/si";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaGit,
  FaWordpress,
} from "react-icons/fa";

export const Info = (iconName, text) => {
  return (
    <div className="grid grid-col-12  p-7  text-center">
      <div className="col-span-6 lg:col-span-6 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <TbBrandPython /> Python(
        <SiFlask /> Flask)
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <TbBrandNextjs /> NextJs
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <FaReact /> React
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <TbBrandJavascript /> JavaScript
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <FaGithub /> Github
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <FaGit /> Git
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center justify-center p-3 hover:scale-125 hover:duration-1000 duration-1000 hoverEffect">
        <FaWordpress /> Wordpress
      </div>
    </div>
  );
};
