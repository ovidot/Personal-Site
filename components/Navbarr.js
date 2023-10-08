import { Navbar, Brand } from "flowbite";
import Image from "next/image";
import { NavbarMenuItem } from "./NavbarMenuItem";

import React from "react";

const Navbarr = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          src={"/uzi-dark.svg"}
          width={"50"}
          height={"50"}
          alt=""
          loading="lazy"
          onClick={() => {
            showNav(!Toggle);
          }}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" to="Home" className="h-fit ">
          <NavbarMenuItem text="Home" Icon={HomeIcon} active />
        </Navbar.Link>
        <Navbar.Link href="About" to="about" className="h-fit">
          <NavbarMenuItem text="About" Icon={InformationCircleIcon} />
        </Navbar.Link>
        <Navbar.Link href="Skills" to="Skills" className="h-fit">
          <NavbarMenuItem text="Skills" Icon={WrenchScrewdriverIcon} />
        </Navbar.Link>
        <Navbar.Link href="Projects" to="Projects" className="h-fit">
          <NavbarMenuItem text="Projects" Icon={BriefcaseIcon} />
        </Navbar.Link>
        <Navbar.Link href="Contact" to="Contact" className="h-fit">
          <NavbarMenuItem text="Contact" Icon={IdentificationIcon} />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarr;
