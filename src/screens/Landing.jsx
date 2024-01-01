import React from "react";
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
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <About/>

      {/* <Projects /> */}
      {/* <Blog /> */}
      <Pricing />
      <Web2Pricing />
      <DigitalPricing/>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}


