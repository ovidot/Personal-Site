"use client";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";
import { Fade } from "react-awesome-reveal";

export default function myProjects() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen max-w-7xl mx-auto   bg-cover bg-center bg-fixed ">
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
          <Fade>
            <Sidebar />
          </Fade>
        </div>

        <div className="col-span-10 grid pt-9 mx-auto my-3 h-auto ">
          {/* Home page */}
          <Projects />
        </div>
        <div className="col-span-full">
          <Fade direction="up">
            <Footer />
          </Fade>
        </div>
      </div>
    </main>
  );
}
