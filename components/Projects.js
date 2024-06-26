import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Logo from "./Logo";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faReact,
  faWordpress,
  faElementor,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMysql } from "react-icons/si";
import { IoOptions } from "react-icons/io";
import {
  faDatabase,
  faFlask,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Projectitem from "./Projectitem";
import Projectitem2 from "./Projectitem2";
import { Fade } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <section
      className="grid grid-cols-12 gap-1  justify-center text-center  min-h-full "
      id="About"
    >
      <div className="md:col-span-12 text-center col-span-full md:text-right mb-5 ">
        <p className="text-5xl  text-center p-5  font-bold text-gray-700 underline ">
          My Works
        </p>
      </div>
      {/*---------------------------------------------------*/}{" "}
      <Projectitem
        projectimg="/ArtGallery3.png"
        Title={"Ovidot's Art Gallery "}
        About={
          " This is an e-commerce app built with the main purpose of buying and selling art online, This app helps New Up coming fine Artists get seen and their Arts recognised"
        }
        icon1={faHtml5}
        name1={"HTML5"}
        icon2={faCss3}
        name2={"CSS3(Bootstrap)"}
        icon3={faJs}
        name3={"  JavaScript"}
        icon4={faPython}
        name4={"Python(FLASK)"}
        icon5={faDatabase}
        name5={"MySQL"}
        repolink={"https://github.com/ovidot/flask_gallery_app"}
        livelink={""}
        titlelink={"https://github.com/ovidot/flask_gallery_app"}
        vid={"/Art.mkv"}
        // titlelink={repolink}
      />
      <Projectitem2
        projectimg="/portfolio.png"
        Title={"My Personal Portfolio "}
        About={
          "  You are here already, Thanks for stopping by, now you can find below details, the Languages and tools used in creating this if you are interested"
        }
        icon1={faReact}
        name1={"ReactJS"}
        icon2={faCss3}
        name2={"CSS3(Bootstrap)"}
        icon3={faJs}
        name3={"NextJS"}
        icon4={""}
        name4={""}
        icon5={""}
        name5={""}
        repolink={"https://github.com/ovidot/"}
        livelink={"https://uzeziovraiti.com"}
        titlelink={"https://uzeziovraiti.com"}
        vid={"/Art.mkv"}
      />
      <Projectitem
        projectimg="/Journalappmockupss.png"
        Title={"Ovidot's Journal App "}
        About={
          "  Want to Journal Events in your day in a stylish way? Ovi Journal app got you covered"
        }
        icon1={faReact}
        name1={"ReactJS"}
        icon2={faCss3}
        name2={"Tailwind-CSS"}
        icon3={faJs}
        name3={"NextJS"}
        icon4={faDatabase}
        name4={"Firebase"}
        icon5={""}
        name5={""}
        repolink={"https://github.com/ovidot/Journal"}
        livelink={"#"}
        titlelink={"https://github.com/ovidot/Journal"}
        vid={""}
      />
      <Projectitem2
        projectimg="/sk-mockup.png"
        Title={"Skattathebrand "}
        About={
          " Skatta the brand is a fashion brand that sells clothes and accesoriesfor fashion and this app was made to showcase these products in an organized FASHION."
        }
        icon1={faWordpress}
        name1={"Wordpress"}
        icon2={faElementor}
        name2={"Elementor"}
        icon3={faCss3}
        name3={"CSS"}
        icon4={faHtml5}
        name4={"Html5"}
        icon5={""}
        name5={""}
        repolink={"#"}
        livelink={"http://https://skattathebrand.com/"}
        vid={"/Art.mkv"}
        titlelink={"http://https://skattathebrand.com/"}
      />
      <Projectitem
        projectimg="/samofficial.png"
        Title={"Sam Ovraiti Official "}
        About={"  Oficial Website of Artist Sam Ovraiti"}
        icon1={faWordpress}
        name1={"Wordpress"}
        icon2={faElementor}
        name2={"Hostinger"}
        icon3={faCss3}
        name3={"CSS"}
        icon4={faHtml5}
        name4={"Html5"}
        icon5={""}
        name5={""}
        repolink={"#"}
        livelink={"http://samovraitiofficial.com/"}
        vid={""}
        titlelink={"http://samovraitiofficial.com/"}
      />
    </section>
  );
};
