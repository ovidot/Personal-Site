import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { SiGmail } from "react-icons/si";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section
      className="grid grid-cols-12 gap-1 justify-center text-center  min-h-full "
      id="About"
    >
      <div className="md:col-span-12 text-center col-span-full md:text-right mb-5 ">
        <p className="text-5xl  text-center p-5  font-bold text-gray-700 underline ">
          Get in touch
        </p>
      </div>
      {/* RIGHT SECTION */}
      <div className="col-span-full lg:col-span-6 m-11">
        <Image
          src="/uzi-dark.svg"
          alt=""
          className=""
          width={3375}
          height={3375}
        />
      </div>
      {/* LEFT SECTION */}
      <div className="col-span-full lg:col-span-6 my-auto">
        <div className=" shadow-2xl text-start -ms-14 md:m-0 p-11 rounded-3xl">
          {" "}
          <p className="text-2xl font-bold text-gray-700">Email Me:</p>
          <p className="flex items-center text-2xl font-bold text-gray-700">
            <a
              href="mailto:uovraiti@gmail.com?subject=Feedback&body=Message"
              target="_blank"
              className="flex items-center"
            >
              <SiGmail className=" lg:me-3 p-1 shadow-inner" />
              {" uovraiti@gmail.com "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
