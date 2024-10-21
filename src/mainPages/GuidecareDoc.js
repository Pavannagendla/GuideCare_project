import React from "react";
import Hero from "../Components/hero/Hero";
import Subscribe from "../Components/subscribe/Subscribe";
import Info from "../Components/info/Info";
import Footer from "../Components/footer/Footer";
import Docinfo from "../pages/guidecare/docinfo/Docinfo";

function GuidecareDoc() {
  return (
    <>
      <Hero />
      <div className="guidecaredoctor">
        <Docinfo />
      </div>
      <Subscribe />
      <Info />
      <Footer />
    </>
  );
}

export default GuidecareDoc;
