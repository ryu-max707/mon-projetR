import React from "react";
import "../styles.css";
import "../styles.css";
import illustration from "../assets/illustration.svg";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Avec Bigoodee, <span className="highlight">prendre soin de vos cheveux</span> n'aura jamais  <br />été aussi simple.</h2>
        <p>
          Bigoodee accompagne les femmes aux cheveux texturés dans leur quête de naturel, 
          leur besoin de prendre soin de leurs cheveux afin de leur permettre de  s’épanouir au quotidien .
        </p>
      </div>
      <div className="hero-image">
      <img src={illustration} alt="Illustration" />
      </div>
    </section>
  );
};

export default Hero;
