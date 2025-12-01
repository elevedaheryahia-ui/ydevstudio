import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "YDev Studio a complètement redonné de la clarté et du caractère à notre identité en ligne. Grâce au nouveau site, notre positionnement haut de gamme est enfin perceptible.",
      author: "Bennetts Design",
      role: "Agence de design"
    },
    {
      id: 2,
      quote: "Le site créé par YDev Studio a dépassé nos attentes. La navigation est fluide et nous avons constaté une nette hausse des demandes entrantes.",
      author: "Master CAWEB",
      role: "Formation en ligne"
    },
    {
      id: 3,
      quote: "Un travail professionnel avec une attention particulière aux détails. Les performances du site sont excellentes sur tous les appareils.",
      author: "UrbanLine",
      role: "Marque de vêtements"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Ce qu'ils disent de moi</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-quote">"{testimonial.quote}"</div>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
