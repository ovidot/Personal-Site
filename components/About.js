"use client";
import React from "react";
import Image from "next/image";
import { Info } from "/components/Info";
import Button from "./Button";
import { useRouter } from "next/navigation";

export const About = () => {
  const router = useRouter();
  const contct = () => {
    router.push("/Contact");
  };
  return (
    <section
      className="grid grid-cols-12 gap-1 justify-center text-center   "
      id="About"
    >
      <div className="md:col-span-12 col-span-full md:text-center ">
        <p className="text-5xl   pb-0 col-span-12 font-bold text-gray-700 underline ">
          About-Me
        </p>
        <span className="text-lg col-span-12 h-fit font-secondary text-gray-700 ">
          My Introduction
        </span>
      </div>

      {/* IMAGE */}
      <div className="col-span-12 lg:col-span-6 ">
        <div className="col-span-12 md:col-span-6  grid pt-5 mx-auto my-3 text-center font-bold text-gray-700  justify-between  text-xl space-y-20 ">
          <div className="col-span-12 md:col-span-6 px-2 md:grid mx-auto  ">
            <Image
              src="/portrait1.png"
              alt="image"
              width={3375}
              height={3375}
              loading="lazy"
              className=" shadow-2xl lg:max-w-lg  w-80 h-auto rounded-full shrink home_img "
            />
          </div>
        </div>
      </div>
      {/* ABOUT TEXT */}
      <div className="col-span-12 lg:col-span-6 shrink-0  lg:ms-0">
        <div className="md:col-span-6 col-span-12 grid pt-9 mx-auto my-3  font-semibold text-gray-700  justify-between  text-2xl space-y-20 text-left ">
          <bio>
            <p> Hi, Welcome to my world! </p>
            Im
            <span className="myname text-2xl text-gray-500">
              Uzezi Henry Ovraiti
            </span>
            , a passionate and results-driven Full-Stack software engineer with
            a deep love for creating innovative solutions. I help agencies and
            businesses bring their ideas to life with strategically well
            structured web services from simple, yet great UI designs to
            functional and well optimized web appllications.
          </bio>
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 -ms-14 lg:-ms-20 items-center justify-center ">
        <div className="col-span-12 lg:col-span-6">
          <Info />
        </div>
        <p className="text-md inline-flex justify-center items-center col-span-12 lg:col-span-6">
          Got any Questions?{" "}
          <span>
            <Button
              text="Click Me"
              func={contct}
              style="text-gray-950 font-bold bg-[#ddcfc0] text-sm"
            />
          </span>
        </p>
      </div>
    </section>
  );
};
