// import { About } from "@/components/About";
// import { Contact } from "@/app/Contact";
import Home from "@/app/Home";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
// import { Projects } from "@/components/Projects";
// import { Skills } from "@/components/Skills";

export default function App() {
  return (
    // bg-[url('/2.svg')]
    <main className="container min-h-screen lg:max-w-7xl w-full mx-auto bg-cover bg-center bg-fixed ">
      {/* Navbar */}
      <Navbar />
      {/* Home page */}
      <Home />

      <Footer />
    </main>
  );
}
