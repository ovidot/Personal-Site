import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Logo = ({ iconname, text, link, style }) => {
  return (
    <div className={style}>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={iconname} className="h-6" />
        <span className="">{text}</span>
      </a>
    </div>
  );
};

export default Logo;
