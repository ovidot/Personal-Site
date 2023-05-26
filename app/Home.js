import React from "react";
import { Sidebar } from "@/components/Sidebar";
import Name from "@/components/Name";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFontAwesome,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Logo from "@/components/Logo";
import { ScrollDown } from "../components/ScrollDown";

const Home = () => {
  return (
    <>
      <div
        className="grid grid-cols-12 gap-1 h-full place-content-center "
        id="Home"
      >
        {/* Sidebar */}
        <div className=" col-span-2">
          <Sidebar />
        </div>
        {/* middle content */}
        {/* Name and intro */}
        <div className="md:col-span-5 col-span-10 grid pt-9 mx-auto my-3 h-auto ">
          <Name />
          {/* <ScrollDown /> */}
        </div>
        {/* Image */}
        <div className="md:col-span-5 md:mx-auto my-auto md:my-24 col-span-12  mx-auto ">
          <Image
            src="/p2.png"
            alt="image"
            width={3375}
            height={3375}
            className=" w-80 h-auto rounded-full home_img "
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
