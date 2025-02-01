// FooterComponent.js
import React from 'react';
import '../styles.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
 <footer className="footer-container">
       
      <div className="footer-content">
      
        <div className="footer-left">
        <div className="logo"> <img src={logo1} alt="logo1" /> </div>
          <p className="footer-description">
            Bigoodeeaccompagne les femmes aux cheveux texturés dans leur quête de naturel,
            dans leur besoin de prendre soin de leurs cheveux afin de leur permettre de s’épanouir au quotidien.
          </p>
          
        </div>

  <div className="foot-menu">
        <nav className="footer-nav">
          <ul>
            <li>Accueil</li>
            <li>Témoignages</li>
            <li>FAQ</li>
            <li>À Propos</li>
            <li>Nous contacter</li>
          </ul>
        </nav>
        </div>
    
         
  <div class="footer-inscription">
        
        </div>
        <div className="footer-socials">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>

      <div className="footer-newsletter">
          <p>Inscrivez-vous et rejoignez notre communauté.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Entrez votre adresse mail" />
            <button>S'inscrire</button>
          </div>
        </div>

        <hr className="footer-divider" />

    
      <div className="footer-bottom">
        <span>Mentions légales</span>
        <span>CGU</span>
      </div>
    </footer>
  );
};

export default Footer;