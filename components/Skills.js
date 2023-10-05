import React from "react";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { SkillItems } from "./SkillItems";
import {
  faBriefcase,
  faLaptopCode,
  faPalette,
  faPallet,
} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  return (
    <div className=" grid grid-col-12  " id="Home">
      <div className="col-span-12 flex items-center justify-center  md:text-center md:-mt-28 ">
        <p className="text-5xl   pb-0 font-bold text-gray-700 underline ">
          Skills
        </p>
      </div>

      <SkillItems
        className="col-span-3"
        url="/laptops.png"
        text="FRONT-END"
        one="HTML5"
        two="CSS3"
        three="Javascript"
        four="React-js"
        five="Bootstrap & Tailwind"
      />
      <SkillItems
        url="/database-storage.png"
        text="BACK-END"
        one="Python(Flask)"
        two="DBMS(MySql)"
        three="API"
        four="DSA"
      />
      <SkillItems
        url="/programming.png"
        text="TOOLS"
        one="Visual Studio Code"
        two="Git & GitHub"
        three="Postman-API"
        four="NPM "
      />
      <SkillItems
        url="/responsive-design.png"
        text="DESIGN"
        one="Figma"
        two="Canva"
        three="Coolors.co"
      />

      {/* <div className="">
        <HomeSkill />
      </div> */}
    </div>
  );
};
