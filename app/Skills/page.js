import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/Skills";

export default function AboutUs() {
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
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10 md:col-span-10 grid md:pt-9 h-auto ">
          {/* Home page */}
          <Skills />
        </div>
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
