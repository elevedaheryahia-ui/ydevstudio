import React, { useEffect, useRef } from 'react';

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const handleMouseMove = (event) => {
          const bounds = card.getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          const deltaX = event.clientX - centerX;
          const deltaY = event.clientY - centerY;
          const rotateX = (deltaY / bounds.height) * -8;
          const rotateY = (deltaX / bounds.width) * 8;
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        };

        const handleMouseLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    }
  }, []);

  return (
    <section className="info-grid" aria-label="Présentation professionnelle">
      <article 
        className="info-card" 
        data-tilt
        ref={(el) => (cardsRef.current[0] = el)}
      >
        <h3>Compétences</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Python, C++, Java</li>
          <li>C, C#, Node.js</li>
          <li>SQL, MongoDB</li>
          <li>React, Vue.js</li>
          <li>PHP, MySQL</li>
        </ul>
      </article>
      <article 
        className="info-card" 
        data-tilt
        ref={(el) => (cardsRef.current[1] = el)}
      >
        <h3>Services</h3>
        <ul>
          <li>Site moderne</li>
          <li>Landing page promotionnelle</li>
          <li>Blog simple / site d'articles</li>
          <li>Creation de sites e-commerce ou Pro</li>
        </ul>
      </article>
    </section>
  );
};

export default Services;

