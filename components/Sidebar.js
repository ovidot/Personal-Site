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
} from "@fortawesome/free-brands-svg-icons";

import Name from "./Name";
import Logo from "./Logo";

export const Sidebar = () => {
  return (
    <div className=" sm:flex  flex-col p-2 xl:items-center  h-full">
      <div className="mt-4 mb-2.5 xl:items-center ">
        <Logo iconname={faGithub} link="https://github.com/ovidot" />
        <Logo iconname={faTwitter} link="https://twitter.com/UOvraiti" />
        <Logo
          iconname={faYoutube}
          link="https://www.youtube.com/channel/UC_4SXAQJmXhtAE2byFDWb0A"
        />
        <Logo
          iconname={faInstagram}
          link="https://www.instagram.com/_ovidot/"
        />
      </div>
    </div>
  );
};
