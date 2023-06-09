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
      className=" p-5 place-content-center mx-5 myname text-gray-700 font-bold shadow-2xl rounded-2xl
     "
    >
      {/* Icon */}
      <Image
        src={url}
        alt="image"
        width={3375}
        height={3375}
        className=" w-32 h-auto rounded-xl mx-auto hover:animate-bounce hover:scale-110 "
      />
      <h2 className="font-bold text-center text-black">{text}</h2>
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
