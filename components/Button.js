"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

const Button = ({ text, style, func }) => {
  return (
    <button
      className={`flex hover:bg-gray-700 bg-[#ddcfc0]-500 w-32 h-11 rounded-2xl my-5 mx-9 hover:scale-110 hoverEffect myname  justify-center items-center ${
        style ? style : "text-black font-bold"
      }`}
      onClick={func}
    >
      {text}
      <PaperAirplaneIcon className="-rotate-45 ms-1 w-5" />
    </button>
  );
};

export default Button;
