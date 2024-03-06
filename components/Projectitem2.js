import React from "react";
import Image from "next/image";
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
import { Fade } from "react-awesome-reveal";
import {
  faDatabase,
  faFlask,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Projectitem2 = ({
  projectimg,
  Title,
  About,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  name1,
  name2,
  name3,
  name4,
  name5,
  repolink,
  livelink,
}) => {
  return (
    <>
      {/* RIGHT SECTION */}
      <div className="col-span-full lg:col-span-6  text-start my-auto p-11 rounded-3xl ">
        <Fade direction="left">
          <h1 className="font-bold text-[#eeb271] text-2xl hover:text-gray-700 mt-10 text-start">
            {Title}
          </h1>
          <p className="text-start  ">
            <Image
              src={projectimg}
              alt=""
              className="md:hidden"
              width={3375}
              height={3375}
            />

            {About}
          </p>
          <p className="mt-3">Stack:</p>
          <p className="text-left font-bold flex p-5 md:flex flex-wrap items-center text-gray-700 ">
            {icon1 ? (
              <span className="flex hoverEffect">
                <FontAwesomeIcon icon={icon1} className="h-6" text="" />
                {name1}
              </span>
            ) : (
              []
            )}
            {icon2 ? (
              <span className="flex hoverEffect">
                <FontAwesomeIcon icon={icon2} className="h-6" />
                {name2}
              </span>
            ) : (
              []
            )}
            {icon3 ? (
              <span className="flex hoverEffect">
                <FontAwesomeIcon icon={icon3} className="h-6" />
                {name3}
              </span>
            ) : (
              []
            )}
            {icon4 ? (
              <span className="flex hoverEffect">
                <FontAwesomeIcon icon={icon4} className="h-6" />
                {name4}
              </span>
            ) : (
              []
            )}
            {icon5 ? (
              <span className="flex hoverEffect">
                <FontAwesomeIcon icon={icon5} className="h-6" />
                {name5}
              </span>
            ) : (
              []
            )}
          </p>
          {repolink ? (
            <div className="flex gap-2">
              {" "}
              <Logo style="" iconname={faGithub} />
              <a
                className="hover:scale-105 text-gray-700 font-bold hover:text-[#eeb271]"
                href={repolink}
                target="_blank"
              >
                Code Repository
              </a>
            </div>
          ) : (
            []
          )}

          <div className="flex gap-2">
            {" "}
            <Logo style="" iconname={faGlobe} />
            <a
              className="hover:scale-105  hover:text-[#eeb271] text-gray-700 font-bold"
              href={livelink}
              target="_blank"
            >
              Live Site
            </a>
          </div>
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
        </Fade>
      </div>

      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 hidden shadow-lg md:flex cursor-pointer">
        <Fade direction="right">
          <Image
            src={projectimg}
            alt=""
            className=""
            width={3375}
            height={3375}
          />
        </Fade>
      </div>
    </>
  );
};

export default Projectitem2;
