import React from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="bg-[ #757ca1] flex flex-col shadow-xl rounded-xl  md:mb-1 px-5 items-center ">
      <h1 className="my-3 myname font-bold text-gray-700">
        Uzezi Henry Ovraiti
      </h1>
      <p className="my-3 text-xs myname text-gray-700">
        Full-Stack Software Engineer
      </p>
      <div className="flex">
        <Logo
          iconname={faInstagram}
          link="https://www.instagram.com/_ovidot/"
          style=" ps-2 flex items-center text-gray-700 justify-center my-3 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faLinkedin}
          link="https://www.linkedin.com/in/ovidot/"
          style="  ps-2 flex items-center text-gray-700 justify-center my-3 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faGithub}
          link="https://github.com/ovidot"
          style="  ps-2 flex items-center text-gray-700 justify-center my-3 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
      </div>
    </section>
  );
};

export default Footer;
