import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Name from "./Name";
import Logo from "./Logo";

export const Sidebar = () => {
  return (
    <div className=" flex  flex-col p-2 xl:items-center  h-full">
      <div className="mt-4 mb-2.5 xl:items-center ">
        <Logo
          iconname={faGithub}
          link="https://github.com/ovidot"
          style="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faTwitter}
          link="https://twitter.com/UOvraiti"
          style="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faYoutube}
          link="https://www.youtube.com/channel/UC_4SXAQJmXhtAE2byFDWb0A"
          style="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faInstagram}
          link="https://www.instagram.com/_ovidot/"
          style="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
        <Logo
          iconname={faLinkedin}
          link="https://www.linkedin.com/in/ovidot/"
          style="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center my-11 xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25"
        />
      </div>
    </div>
  );
};
