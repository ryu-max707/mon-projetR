import React, { useState } from "react";
import "../styles.css";
import { FaPlus, FaMinus } from "react-icons/fa"; // Icônes pour les boutons

const faqData = [
  {
    question: "Qu'est-ce qui différencie Bigoodee des autres sources d'information capillaire ?",
    answer: "Bigoodee propose des conseils personnalisés adaptés aux cheveux texturés, avec des techniques innovantes et une approche naturelle.",
  },
  {
    question: "Est-ce que les conseils de Bigoodee conviennent à tous les types de cheveux ?",
    answer: "Oui, nos experts adaptent leurs recommandations en fonction du type de cheveux et des besoins spécifiques de chacun.",
  },
  {
    question: "Comment puis-je poser des questions ou demander des conseils personnalisés ?",
    answer: "Vous pouvez nous contacter via notre formulaire en ligne ou rejoindre notre communauté pour échanger avec nos experts.",
  },
  {
    question: "Qu'est-ce que Bigoodee propose exactement ?",
    answer: "Nous offrons des conseils, des guides complets et des routines personnalisées pour prendre soin de vos cheveux de manière naturelle.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 align="center">FAQ</h2>
      <div className="faq-box">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>{item.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default FAQ;
