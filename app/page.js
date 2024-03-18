"use client";
import Home from "@/app/Home";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Fade } from "react-awesome-reveal";

export default function App() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen  lg:max-w-7xl w-full mx-auto bg-cover  bg-center bg-fixed ">
      {/* Navbar */}
      <Fade triggerOnce={true}>
        <Navbar />
      </Fade>
      {/* Home page */}
      <Home />
      <Fade triggerOnce={true}>
        <Footer />
      </Fade>
    </main>
  );
}
