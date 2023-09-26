"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

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
        <h1 className="myname text-gray-700 text-7xl font-bold h-full py-5">
          {" "}
          Uzezi Henry Ovraiti
        </h1>
        <span className="myname p-2 py-2 text-gray-700 font-extrabold h-full">
          -----Full-Stack Software Developer
        </span>
        <p className="myname p-2 py-5 text-gray-700 h-full">
          I am a software engineer with a keen eye for detail and a deep love
          for problem-solving.
        </p>
        <div className="flex item-center">
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
      </div>
    </>
  );
};

export default Name;
