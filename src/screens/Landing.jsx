import React, { useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import About from "../components/Sections/About";
import Pricing from "../components/Sections/Pricing";
import Web2Pricing from "../components/Sections/Web2Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import DigitalPricing from "../components/Sections/DigitalPricing";

export default function Landing() {

  const [open, setOpen] = useState(false)
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <About />

      {/* <Projects /> */}
      {/* <Blog /> */}
      <Pricing />
      {open === false ? (
        <button
          className="flex justify-center items-center m-auto bg-[#7620ff] text-white py-2 rounded-2xl font-extrabold px-5 mb-5"
          onClick={() => setOpen(true)}
        >
          Show More Packages
        </button>
      ) : null}
      {open ? (
        <>
          <Web2Pricing />
          <DigitalPricing />
          <button
            className="flex justify-center items-center m-auto bg-[#7620ff] text-white py-2 rounded-2xl font-extrabold px-5 mb-5"
            onClick={() => setOpen(false)}
          >
            Show less
          </button>
        </>
      ) : null}

      {/* <Contact /> */}
      <Footer />
    </>
  );
}


