"use client";
import React from "react";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";

const Name = () => {
  const router = useRouter();
  const contct = () => {
    router.push("/Contact");
  };
  const proj = () => {
    router.push("/Projects");
  };
  return (
    <>
      <div className="grid-cols-12 max-w-[320px] lg:max-w-full">
        <Fade direction="down">
          <h1 className="myname animate-typing  overflow-hidden text-gray-700 text-7xl font-bold h-full py-5">
            {" "}
            <TypeAnimation
              sequence={["Uzezi Henry Ovraiti", 1000]}
              wrapper="span"
              speed={100}
              cursor={false}
            />
            {/* Uzezi Henry Ovraiti */}
          </h1>

          <span className="myname p-2 py-2 text-gray-700 font-extrabold h-full">
            <TypeAnimation
              sequence={["-----", 1500, "-----Full-Stack Software Engineer"]}
              cursor={false}
            />
          </span>
          <p className="myname p-2 py-5 text-gray-700 h-full">
            <TypeAnimation
              sequence={[
                "i",
                3000,
                "I am a software engineer with a keen eye for detail and a deep love for problem-solving",
                500,
              ]}
              cursor={false}
            />
          </p>
        </Fade>
        <Fade direction="up">
          <div className="flex items-center">
            <Button
              text="Say Hello"
              style="text-gray-950 font-bold bg-[#ddcfc0]"
              func={contct}
            />
            <Button
              text="My Works"
              style="text-gray-950 font-bold bg-[#ddcfc0]"
              func={proj}
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Name;
