import React from "react";
import "../styles.css";
import "../styles.css";
import emailImg from "../assets/email.png";
import naturalImg from "../assets/natural.png";
import beautyImg from "../assets/beauty.png";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2 align="center">
        Notre newsletter vous donne des <br />
        <span>conseils et astuces</span> pobrur en{" "}
        <span>apprendre <br /> plus sur l'entretien de vos cheveux.</span>
      </h2>
      
      <div className="newsletter-cards">
        <div className="card">
          <img src={emailImg} alt="Sur mesure" />
          <h3>Sur mesure</h3>
          <p>Des conseils adaptés à votre type de cheveux et à vos besoins spécifiques pour un programme capillaire au mieux.</p>
        </div>
        
        <div className="card">
          <img src={naturalImg} alt="Approche naturelle" />
          <h3>Approche naturelle</h3>
          <p>Connectez-vous à votre véritable essence en utilisant une routine holistique et naturelle dans vos soins capillaires.</p>
        </div>
        
        <div className="card">
          <img src={beautyImg} alt="Simple et pratique" />
          <h3>Simple et pratique</h3>
          <p>Des conseils pratiques et faciles à suivre qui s'adaptent à votre style de vie, pour des résultats visibles et durables.</p>
        </div>
      </div>
      <div className="email1">
      <div className="block-input">
            
            <input type="email" placeholder="Entrez votre adresse mail" />
            <button>RECEVOIR,  LA NEWSLETTER</button>
            </div>
          </div>
   </div> 
  );
};

export default Newsletter;
