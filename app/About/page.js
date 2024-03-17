"use client";
// import { About } from "@/components/About";
// import { Contact } from "@/app/Contact";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Fade } from "react-awesome-reveal";
// import { Projects } from "@/components/Projects";
// import { Skills } from "@/components/Skills";

export default function AboutUs() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen max-w-7xl mx-auto   bg-cover bg-center bg-fixed p-3  ">
      {/* Navbar */}
      <Fade direction="down">
        <Navbar />
      </Fade>
      <div
        className="grid grid-cols-12 gap-1 h-full place-content-center"
        id="Home"
      >
        {/* Sidebar */}
        <div className="col-span-2 h-fit md:col-span-2">
          <Fade direction="left">
            <Sidebar />
          </Fade>
        </div>

        <div className="md:col-span-10 col-span-10 grid pt-9 mx-auto my-3 h-auto ">
          {/* Home page */}
          <Fade direction="">
            <About />
          </Fade>
        </div>
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
