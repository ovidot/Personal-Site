import Home from "@/app/Home";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Navbarr from "@/components/Navbarr";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function App() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen shadow-2xl lg:max-w-7xl w-full mx-auto bg-cover  bg-center bg-fixed ">
      {/* Navbar */}
      <Navbar />
      {/* Home page */}
      <Home />
      <Footer />
    </main>
  );
}
