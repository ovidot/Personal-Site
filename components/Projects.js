import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Logo from "./Logo";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faReact,
  faWordpress,
  faElementor,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMysql } from "react-icons/si";
import { IoOptions } from "react-icons/io";
import {
  faDatabase,
  faFlask,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Projectitem from "./Projectitem";
import Projectitem2 from "./Projectitem2";
import { Fade } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <section
      className="grid grid-cols-12 gap-1  justify-center text-center  min-h-full "
      id="About"
    >
      <div className="md:col-span-12 text-center col-span-full md:text-right mb-5 ">
        <p className="text-5xl  text-center p-5  font-bold text-gray-700 underline ">
          My Works
        </p>
      </div>
      {/*---------------------------------------------------*/}{" "}
      <Projectitem
        projectimg="/ArtGallery3.png"
        Title={"Ovidot's Art Gallery "}
        About={
          " This is an e-commerce app built with the main purpose of buying and selling art online, This app helps New Up coming fine Artists get seen and their Arts recognised"
        }
        icon1={faHtml5}
        name1={"HTML5"}
        icon2={faCss3}
        name2={"CSS3(Bootstrap)"}
        icon3={faJs}
        name3={"  JavaScript"}
        icon4={faPython}
        name4={"Python(FLASK)"}
        icon5={faDatabase}
        name5={"MySQL"}
        repolink={"https://github.com/ovidot/flask_gallery_app"}
        livelink={""}
        vid={"/Art.mkv"}
      />
      <Projectitem2
        projectimg="/portfolio.png"
        Title={"My Personal Portfolio "}
        About={
          "  You are here already, Thanks for stopping by, now you can find below details, the Languages and tools used in creating this if you are interested"
        }
        icon1={faReact}
        name1={"ReactJS"}
        icon2={faCss3}
        name2={"CSS3(Bootstrap)"}
        icon3={faJs}
        name3={"NextJS"}
        icon4={""}
        name4={""}
        icon5={""}
        name5={""}
        repolink={"https://github.com/ovidot/"}
        livelink={"https://uzeziovraiti.com"}
        vid={"/Art.mkv"}
      />
      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 hidden shadow-lg md:flex">
        <Image
          src="/Journalappmockupss.png"
          alt=""
          className=""
          width={3375}
          height={3375}
        />
      </div>
      {/* RIGHT SECTION */}
      <div className="col-span-full lg:col-span-6  text-start my-auto p-11 rounded-3xl ">
        <h1 className="font-bold text-[#eeb271] text-2xl hover:text-gray-700 mt-10 text-start">
          {" Ovidot's Journal App "}
        </h1>
        <p className="text-start ">
          <Image
            src="/Journalappmockupss.png"
            alt=""
            className="md:hidden"
            width={3375}
            height={3375}
          />
          This is an e-commerce app built with the main purpose of buying and
          selling art online, This app helps New Up coming fine Artists get seen
          and their Arts recognised
        </p>
        <p className="mt-3">Stack:</p>
        <p className="text-left font-bold flex p-5 md:flex flex-wrap items-center text-gray-700 ">
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faReact} className="h-6" text="" />
            ReactJS
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faCss3} className="h-6" />
            Tailwind-CSS
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faJs} className="h-6" />
            NextJS
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faDatabase} className="h-6" />
            Firebase
          </span>
        </p>
        <div className="flex gap-2">
          {" "}
          <Logo style="" iconname={faGithub} />
          <a
            className="hover:scale-105 text-[#eeb271]"
            href="https://github.com/ovidot/flask_gallery_app"
            target="_blank"
          >
            Code Repository
          </a>
        </div>
        <p className="">Live site: coming soon...</p>
        {/* <div className="flex place-content-center">
          <video
            autoPlay
            loop
            className="rounded-3xl  h-fit hover:shadow-2xl hover:scale-105 md:mt-4 md:mb-4"
            style={{ width: "400px", height: "225px" }}
          >
            <source src="/Art.mkv" />
          </video>
        </div> */}
      </div>
      {/* RIGHT SECTION */}
      <div className="col-span-full lg:col-span-6  text-start my-auto p-11 rounded-3xl ">
        <h1 className="font-bold text-[#eeb271] text-2xl hover:text-gray-700 mt-10 text-start">
          {"Skattathebrand "}
        </h1>
        <p className="text-start ">
          <Image
            src="/sk-mockup.png"
            alt=""
            className="md:hidden"
            width={3375}
            height={3375}
          />
          Skatta the brand is a fashion brand that sells clothes and accesories
          for fashion and this app was made to showcase these products in an
          organized fashion.
        </p>
        <p className="mt-3">Stack:</p>
        <p className="text-left font-bold flex p-5 md:flex flex-wrap items-center text-gray-700 ">
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faWordpress} className="h-6" text="" />
            Wordpress
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faElementor} className="h-6" text="" />
            Elementor
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faCss3} className="h-6" />
            CSS
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faHtml5} className="h-6" />
            HTML
          </span>
        </p>

        <p className="">
          Live site:{" "}
          <a href="http://https://skattathebrand.com/">skattathebrand.com</a>
        </p>
        {/* <div className="flex place-content-center">
          <video
            autoPlay
            loop
            className="rounded-3xl  h-fit hover:shadow-2xl hover:scale-105 md:mt-4 md:mb-4"
            style={{ width: "400px", height: "225px" }}
          >
            <source src="/Art.mkv" />
          </video>
        </div> */}
      </div>
      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 hidden shadow-lg md:flex">
        <Image
          src="/sk-mockup.png"
          alt=""
          className=""
          width={3375}
          height={3375}
        />
      </div>
    </section>
  );
};
