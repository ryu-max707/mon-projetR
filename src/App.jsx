import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Newsletter1 from "./components/Newsletter1";
import FAQ from "./components/FAQ";
import Ebook from "./components/Ebook"; 
import Pied from "./components/Pied";
 
 
 
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <Newsletter/>
      <Newsletter1/>
      <FAQ/>
      <Ebook/>
      <Pied/>



    </div>
  );
};

export default App;
