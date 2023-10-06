import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const SkillItems = ({
  url,
  text,
  style,
  one,
  two,
  three,
  four,
  five,
  six,
}) => {
  return (
    <div
      className=" col-span-12 md:col-span-6 xl:col-span-3   p-5 items-center justify-center mx-5 myname text-gray-700 font-bold shadow-2xl rounded-2xl hover:scale-110 hover:transition-transform hover:ease-in
     "
    >
      {/* Icon */}
      <Image
        src={url}
        alt="image"
        width={3375}
        height={3375}
        className="my-auto w-32 h-auto rounded-xl mx-auto hover:animate-bounce hover:scale-105 "
      />
      <h2 className=" text-center text-black text-lg font-extrabold">{text}</h2>
      <ol className="text-center">
        <li className=" hover:scale-110">{one}</li>
        <li className=" hover:scale-110">{two}</li>
        <li className=" hover:scale-110">{three}</li>
        <li className=" hover:scale-110">{four}</li>
        <li className=" hover:scale-110">{five}</li>
        <li className=" hover:scale-110">{six}</li>
      </ol>
    </div>
  );
};
