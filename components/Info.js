import { BriefcaseIcon } from "@heroicons/react/24/solid";
import React from "react";
import Logo from "./Logo";

export const Info = () => {
  return (
    <div className="grid grid-col-3">
      <div className="col-span-1">
        <BriefcaseIcon className="h-7" />
      </div>
      <div className="col-span-1">
        <BriefcaseIcon className="h-7" />
      </div>
      <div className="col-span-1">
        <BriefcaseIcon className="h-7" />
      </div>
    </div>
  );
};
