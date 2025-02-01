import React from "react";
import "../styles.css";
import "../styles.css";

const testimonials = [
  "Les conseils de Bigoodee ont transformé ma relation avec mes boucles ! Grâce à leurs astuces simples mais efficaces, j'ai appris à apprécier la beauté naturelle de mes cheveux texturés. !",
  "La transition vers des cheveux naturels était intimidante, mais Bigoodee a rendu ce processus tellement plus facile ! Leurs conseils sur la détox capillaire et la création d'une nouvelle routine capillaire ont été une révélation pour moi.",
  "J'avais du mal à trouver des conseils capillaires adaptés à mes cheveux texturés jusqu'à ce que je découvre Bigoodee. Leurs recommandations sur les produits naturels et les techniques de coiffage ont vraiment changé la donne pour moi.."
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-grid">
        {testimonials.map((text, index) => (
          <div key={index} className="testimonial-card">
            <span className="stars">★★★★★</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
