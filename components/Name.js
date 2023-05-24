import React from "react";
import Button from "./Button";

const Name = () => {
  return (
    <>
      <div className="container grid">
        <div className="grid-rows-1">
          <div className="grid-cols-12">
            <h1 className="myname text-gray-700 text-7xl font-bold h-full py-5">
              {" "}
              Uzezi Henry Ovraiti
            </h1>
            <span className="myname p-2 py-2 text-gray-700 font-extrabold h-full">
              -----Full-Stack Software Developer
            </span>
            <p className="myname p-2 py-5 text-gray-700 h-full">
              I am a software engineer with a keen eye for detail and a deep
              love for problem-solving.
            </p>

            <Button text="Say Hello" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Name;
