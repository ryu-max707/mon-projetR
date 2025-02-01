// EbookComponent.js
import React, { useState } from 'react';
import '../styles.css';

const Ebook = () => {
  const [selectedGuide, setSelectedGuide] = useState('crepus');
  return (
      <div className="block-container">

          <h1 className="block-title" align="center">
          Découvrez des conseils et astuces <br /> exclusifs pour prendre soin de vos <br /> cheveux grâce à nos <span className="highlight">guides complets</span>
        </h1>
        <div class="fontyou">
        
        <form action="">
          <div className="block-question">
            <label>
              <input 
                type="radio" 
                name="hairType" 
                value="boucles" 
                checked={selectedGuide === 'boucles'}
                onChange={() => setSelectedGuide('boucles')}
              />
              Guide cheveux bouclés au naturel
            </label>
            <label>
              <input 
                type="radio" 
                name="hairType" 
                value="crepus" 
                checked={selectedGuide === 'crepus'}
                onChange={() => setSelectedGuide('crepus')}
              />
              Guide cheveux crépus au naturel
            </label>
            <div className="block-input">
            
              <input type="email" placeholder="Entrez votre adresse mail" />
              <button>RECEVOIR MON EBOOK</button>
                
            </div>
          </div>
        </form>
        </div>
      </div>
  );
};


export default Ebook;