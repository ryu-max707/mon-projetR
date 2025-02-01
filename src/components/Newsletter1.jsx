import React from "react";
import "../styles.css";
import haircareImg from "../assets/haircare.jpg";  

const Newsletter = () => {
  return (
    <div className="newsletter-container1">
      <div className="newsletter-box">
        <img src={haircareImg} alt="Routine capillaire" className="newsletter-image" />
        <div className="newsletter-content">
          <h2>Pourquoi vous inscrire à <span>notre  <br />newsletter?</span> </h2>
          <h3>Conseils Experts</h3>
          <p>
            Bénéficiez de conseils avisés et personnalisés de nos experts en cheveux texturés, adaptés à vos besoins spécifiques. De la transition vers des cheveux naturels aux techniques de coiffage innovantes, nos conseils vous guident vers des cheveux épanouis.
          </p>

          <h3>Échange et Partage</h3>
          <p>
            Rejoignez une communauté bienveillante où le partage d’expériences et d’astuces est encouragé, vous offrant ainsi un soutien précieux dans votre parcours capillaire.
          </p>

          <h3>Actualités Capillaires Naturelles</h3>
          <p>
            Restez informé(e) sur les dernières tendances et découvertes en matière de soins capillaires naturels. Découvrez de nouveaux produits, des astuces de coiffage créatives et des méthodes innovantes pour sublimer vos cheveux.
          </p>
        </div>
      </div>

      <div className="newsletter-subscribe">
        <p>
          Recevez une routine exclusive et personnalisée, en fonction de votre objectif capillaire
        </p>
        <div className="newsletter-form1">
          <select>
            <option>Routine pour ouvrir les écailles des cheveux et permettre l'hydratation du cuir chevelu</option>
            <option>Routine pour renforcer la fibre capillaire</option>
            <option>Routine pour protéger les cheveux des agressions extérieures</option>
          </select>
          <button className="button3">RECEVOIR MA ROUTINE</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
