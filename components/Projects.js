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
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMysql } from "react-icons/si";
import { IoOptions } from "react-icons/io";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section
      className="grid grid-cols-12 gap-1 justify-center text-center  min-h-full "
      id="About"
    >
      <div className="md:col-span-12 text-center col-span-full md:text-right mb-5 ">
        <p className="text-5xl  text-center p-5  font-bold text-gray-700 underline ">
          My Works
        </p>
      </div>

      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 hidden md:flex">
        <Image
          src="/ArtGallery3.png"
          alt=""
          className=""
          width={3375}
          height={3375}
        />
      </div>
      {/* RIGHT SECTION */}
      <div className="col-span-full lg:col-span-6 shadow-2xl text-start my-auto p-11 rounded-3xl ">
        <h1 className="font-bold text-[#eeb271] text-2xl hover:text-gray-700 mt-10 text-start">
          {" Ovidot's Art Gallery "}
        </h1>
        <p className="text-start ">
          <Image
            src="/ArtGallery3.png"
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
            <FontAwesomeIcon icon={faHtml5} className="h-6" text="" />
            HTML5
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faCss3} className="h-6" />
            CSS3(Bootstrap)
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faJs} className="h-6" />
            JavaScript
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faPython} className="h-6" />
            Python(FLASK)
          </span>
          <span className="flex hoverEffect">
            <SiMysql className="" />
            MySQL
          </span>
        </p>
        <div className="flex gap-2">
          {" "}
          <Logo style="" iconname={faGithub} />
          <a
            className="hover:scale-105 text-[#eeb271]"
            href="https://github.com/ovidot/flask_gallery_app"
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
      <div className="col-span-full lg:col-span-6 shadow-2xl text-start my-auto p-11 rounded-3xl ">
        <h1 className="font-bold text-[#eeb271] text-2xl hover:text-gray-700 mt-10 text-start">
          {" Ovidot's Art Gallery "}
        </h1>
        <p className="text-start ">
          <Image
            src="/ArtGallery3.png"
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
            <FontAwesomeIcon icon={faHtml5} className="h-6" text="" />
            HTML5
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faCss3} className="h-6" />
            CSS3(Bootstrap)
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faJs} className="h-6" />
            JavaScript
          </span>
          <span className="flex hoverEffect">
            <FontAwesomeIcon icon={faPython} className="h-6" />
            Python(FLASK)
          </span>
          <span className="flex hoverEffect">
            <SiMysql className="" />
            MySQL
          </span>
        </p>
        <div className="flex gap-2">
          {" "}
          <Logo style="" iconname={faGithub} />
          <a
            className="hover:scale-105 text-[#eeb271]"
            href="https://github.com/ovidot/flask_gallery_app"
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
      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 hidden md:flex">
        <Image
          src="/ArtGallery3.png"
          alt=""
          className=""
          width={3375}
          height={3375}
        />
      </div>
    </section>
  );
};
