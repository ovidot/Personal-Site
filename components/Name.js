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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="text-gray-700 text-7xl font-bold py-5">
            Uzezi Henry Ovraiti
          </h1>
          <span className="text-gray-700 font-extrabold">
            -----Full-Stack Software Developer
          </span>
          <p className="text-gray-700 py-5">
            I am a software engineer with a keen eye for detail and a deep love
            for problem-solving.
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Name;
