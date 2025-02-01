import React from "react";
import "../styles.css"; // Importation du fichier CSS
import "../styles.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <img src={logo} alt="logo" /> </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
