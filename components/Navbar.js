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
// import { useSession } from "next-auth/react";

export const Navbar = () => {
  return (
    <div className="flex flex-row sm:flex  justify-between  p-5   h-auto w-full">
      {/* Logo */}
      <div className="hoverEffect hover:scale-125 p-0 hover:bg-none xl:p-1">
        <Image
          src={"/uzi-dark.svg"}
          width={"100"}
          height={"100"}
          alt=""
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 flex my-auto mb-2.5 xl:items-start ">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="About" Icon={InformationCircleIcon} />
        <SidebarMenuItem text="Skills" Icon={WrenchScrewdriverIcon} />
        <SidebarMenuItem text="Projects" Icon={BriefcaseIcon} />
        <SidebarMenuItem text="Contact" Icon={IdentificationIcon} />
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
  );
};
