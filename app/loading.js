"use client";
import Image from "next/image";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const loading = () => {
  return (
    <div className="col-span-full lg:col-span-6 m-11 mx-auto  animate-pulse max-h-screen">
      <Zoom>
        <div className="text-xl text-gray-700 myname font-bold ">
          <Image
            src="/uzi-dark.svg"
            alt="uzezi ovraiti"
            width={3375}
            height={3375}
            loading="lazy"
            className="w-96 h-auto mx-auto "
          />
          <div className="mx-auto justify-center text-center align-middle">
            <TypeAnimation
              sequence={["LOADING", 1000]}
              speed={500}
              cursor={false}
            />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default loading;
