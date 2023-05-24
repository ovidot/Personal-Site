"use client";
import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  IdentificationIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { NavbarMenuItem } from "./NavbarMenuItem";
import { useState } from "react";

export const Navbar = () => {
  // Toggle menu
  const [Toggle, showNav] = useState(false);
  return (
    <div className="fixed md:grid grid-cols-1 inset-x-0 bottom-0 lg:sticky lg:top-0  ">
      <div className="flex flex-row sm:flex  justify-between  p-5   h-auto w-full">
        {/* Logo */}
        <div className="hoverEffect hover:scale-125 p-0 hover:bg-none xl:p-1">
          <Image
            src={"/uzi-dark.svg"}
            width={"70"}
            height={"70"}
            alt=""
            onClick={() => {
              showNav(!Toggle);
            }}
          ></Image>
        </div>
        {/* Menu */}
        <div
          className={`${
            !Toggle
              ? "hidden"
              : " flex mt-1 md:flex my-auto mb-2.5 xl:items-start"
          } md:flex`}
        >
          <NavbarMenuItem text="Home" Icon={HomeIcon} active />
          <NavbarMenuItem text="About" Icon={InformationCircleIcon} />
          <NavbarMenuItem text="Skills" Icon={WrenchScrewdriverIcon} />
          <NavbarMenuItem text="Projects" Icon={BriefcaseIcon} />
          <NavbarMenuItem text="Contact" Icon={IdentificationIcon} />
        </div>
        {/* Button */}

        {/* <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <button
          className="bg-black text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline"
          onClick={""}
        >
          Sign In
        </button>
      </div> */}
      </div>
    </div>
  );
};
