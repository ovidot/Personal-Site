"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import Name from "@/components/Name";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <div
        className="grid min-h-full grid-cols-12   place-content-center mt-32 lg:mt-0 "
        id="Home"
      >
        {/* Sidebar */}

        <div className="col-span-2 h-fit md:col-span-2">
          {" "}
          <Fade direction="left">
            <Sidebar />
          </Fade>
        </div>
        {/* middle content */}
        {/* Name and intro */}
        <div className="md:col-span-5  col-span-10 mx-auto my-3 mt-11 h-auto ">
          <Name />
          {/* <ScrollDown /> */}
        </div>
        {/* Image */}

        <div className="md:col-span-5 md:mx-auto my-auto  md:my-24 col-span-12 flex  justify-center mx-auto ">
          <Fade direction="right">
            {" "}
            <Image
              src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?w=740"
              alt="image"
              width={3375}
              height={3375}
              loading="lazy"
              className=" w-96 h-auto rounded-full home_img "
            />
          </Fade>
        </div>

        {/* scroll indication */}
      </div>
    </>
  );
};

export default Home;
