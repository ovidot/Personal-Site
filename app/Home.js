import React from "react";
import { Sidebar } from "@/components/Sidebar";
import Name from "@/components/Name";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        className="grid grid-cols-12  h-full place-content-center "
        id="Home"
      >
        {/* Sidebar */}
        <div className="col-span-12 h-fit md:col-span-2">
          <Sidebar />
        </div>
        {/* middle content */}
        {/* Name and intro */}
        <div className="md:col-span-5 col-span-12 grid md:pt-9 mx-auto md:my-20 h-fit ">
          <Name />
          {/* <ScrollDown /> */}
        </div>
        {/* Image */}
        <div className="md:col-span-5 md:mx-auto mb-5 md:my-24 col-span-12  mx-auto ">
          <Image
            src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?w=740"
            alt="image"
            width={3375}
            height={3375}
            loading="lazy"
            className=" w-90 h-auto rounded-full home_img "
          />
        </div>

        {/* scroll indication */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-20 md:gap-y-20 ">
          <Name />
        </div> */}
      </div>
    </>
  );
};

export default Home;
