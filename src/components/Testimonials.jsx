import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "YDev Studio a complètement redonné de la clarté et du caractère à notre identité en ligne. Grâce au nouveau site, notre positionnement haut de gamme est enfin perceptible et nos prospects comprennent beaucoup mieux notre manière de travailler. Une vraie évolution pour notre image.",
      author: "Bennetts Design"
    },
    {
      id: 2,
      text: "YDev Studio a entièrement repensé notre site et le résultat dépasse nos attentes. Le design est clair, la navigation fluide et nous avons déjà constaté une nette hausse des demandes entrantes. Communication simple, travail propre, délais respectés : un vrai plaisir de collaborer avec YDev Studio.",
      author: "Master CAWEB"
    }
  ];

  return (
    <>
      <h2 className="section-title">Témoignages & preuve sociale</h2>
      <section className="testimonials">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <strong>— {testimonial.author}</strong>
          </article>
        ))}
      </section>
    </>
  );
};

export default Testimonials;

