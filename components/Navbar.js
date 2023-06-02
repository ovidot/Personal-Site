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
import Link from "next/link";

export const Navbar = () => {
  // Toggle menu
  const [Toggle, showNav] = useState(false);
  return (
    // bg-[#d5e0ff]
    <div className="fixed md:grid grid-cols-1  inset-x-0 bottom-0 lg:sticky lg:top-0 h-18 bg-[#d5e0ff] rounded-full ">
      <div className="flex flex-row sm:flex  justify-between p-2 my-2 -mb-3  h-auto w-full">
        {/* Logo */}
        <div className="hoverEffect hover:scale-125 p-0 hover:bg-none xl:p-1">
          <Image
            src={"/uzi-dark.svg"}
            width={"50"}
            height={"50"}
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
              : " flex  md:flex my-auto mb-2.5 xl:items-start h-fit"
          } md:flex`}
        >
          <Link href="#" to="Home" className="h-fit ">
            <NavbarMenuItem text="Home" Icon={HomeIcon} active />
          </Link>
          <Link href="About" to="about" className="h-fit">
            <NavbarMenuItem text="About" Icon={InformationCircleIcon} />
          </Link>
          <Link href="Skills" to="Skills" className="h-fit">
            <NavbarMenuItem text="Skills" Icon={WrenchScrewdriverIcon} />
          </Link>
          <Link href="Projects" to="Projects" className="h-fit">
            <NavbarMenuItem text="Projects" Icon={BriefcaseIcon} />
          </Link>
          <Link href="Contact" to="Contact" className="h-fit">
            <NavbarMenuItem text="Contact" Icon={IdentificationIcon} />
          </Link>
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
