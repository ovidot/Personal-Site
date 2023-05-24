import React from "react";
import { Sidebar } from "@/components/Sidebar";
import Name from "@/components/Name";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowDown91,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "@/components/Logo";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12  gap-1">
        {/* Sidebar */}
        <div className=" col-span-2">
          <Sidebar />
        </div>
        {/* middle content */}
        {/* Name and intro */}
        <div className="md:col-span-5 col-span-10 grid pt-9 mx-auto my-3 h-auto ">
          <Name />
          <div className=" hidden mx-auto ps-2 lg:flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25 font-mono ">
            <FontAwesomeIcon icon={faComputerMouse} className="h-7" />
            <span className="">Scroll Down</span>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="h-5 w-2 animate-bounce"
            />
          </div>
        </div>
        {/* Image */}
        <div className="md:col-span-5 md:mx-auto my-auto col-span-12  mx-auto ">
          <Image
            src="/portrait1.png"
            alt="image"
            width={3375}
            height={3375}
            className=" w-80 h-auto rounded-full "
          />
        </div>

        {/* scroll indication */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-20 md:gap-y-20 ">
          <Name />
        </div> */}
      </div>
    </>
  );
};

export default Home;
