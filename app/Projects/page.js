// import { About } from "@/components/About";
// import { Contact } from "@/app/Contact";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";

export default function myProjects() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen max-w-7xl mx-auto   bg-cover bg-center bg-fixed ">
      {/* Navbar */}
      <Navbar />
      <div
        className="grid grid-cols-12 gap-1 h-full place-content-center"
        id="Home"
      >
        {/* Sidebar */}
        <div className=" col-span-2">
          <Sidebar />
        </div>

        <div className="md:col-span-10 col-span-10 grid pt-9 mx-auto my-3 h-auto ">
          {/* Home page */}
          <Projects />
        </div>
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
