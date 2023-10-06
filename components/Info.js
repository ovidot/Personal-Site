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
import { FaReact, FaPython, FaGithub, FaGit } from "react-icons/fa";

export const Info = (iconName, text) => {
  return (
    <div className="grid grid-col-12  shadow-2xl p-7 rounded-3xl ">
      <div className="col-span-6 w-full lg:col-span-6 flex items-center p-3 hoverEffect">
        <TbBrandPython /> Python(
        <SiFlask /> Flask)
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center p-3 hoverEffect">
        <TbBrandNextjs /> NextJs
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center p-3 hoverEffect">
        <FaReact /> React
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center p-3 hoverEffect">
        <TbBrandJavascript /> JavaScript
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center p-3 hoverEffect">
        <FaGithub /> Github
      </div>
      <div className="col-span-6 lg:col-span-3 w-full flex items-center p-3 hoverEffect">
        <FaGit /> Git
      </div>
    </div>
  );
};
