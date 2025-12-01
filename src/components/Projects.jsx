import React, { useEffect, useRef } from 'react';
// Images dans le dossier public
const barberkzaImg = '/barberkza.png';
const snackyImg = '/snacky.png';
const urbanlineImg = '/urbanline.png';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'BarberKaza',
      image: barberkzaImg,
      description: "Site pro pour un barbeur avec le contact la prise de rendez-vous intelligent et la galerie des photos.",
      objective: "Moderniser les réservations et montrer l'expertise du salon.",
      solution: "UX mobile-first, galerie immersive et prise de rendez-vous WhatsApp instantanée.",
      result: "+32% de réservations hebdomadaires et une meilleure visibilité locale.",
      link: "https://barberkaz.vercel.app"
    },
    {
      id: 2,
      title: 'SnackyGo',
      image: snackyImg,
      description: "Site pour un snack avec le menu et le contact ainsi que des informations surérogatoires sur l'histoire du snack et une carte gooogle maps.",
      objective: "Augmenter les commandes click & collect et raconter l'histoire du snack.",
      solution: "Menu interactif, storytelling \"Notre snack\" et intégration Google Maps.",
      result: "Temps moyen sur page x2 et +18 commandes mensuelles.",
      link: "https://snackygo.vercel.app"
    },
    {
      id: 3,
      title: 'UrbanLine',
      image: urbanlineImg,
      description: "Site pour une marque de vêtements et accessoires très moderne et sophistiqué.",
      objective: "Offrir un lookbook premium pour les nouvelles collections.",
      solution: "Animations douces, fiches produits modulaires et CTA d'essayage virtuel.",
      result: "+45% de demandes de devis wholesale et engagement boosté.",
      link: "urbanline.vercel.app"
    }
  ];

  return (
    <>
      <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)' }}>Mes projets</h2>
      <section className="projects">
        {projects.map((project, index) => (
          <article 
            key={project.id}
            className="project-card" 
            data-tilt
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={project.image} alt={`Aperçu du site ${project.title}`} />
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="case-details">
                <strong>Objectif client</strong>
                {project.objective}
                <strong>Solution</strong>
                {project.solution}
                <strong>Résultat</strong>
                {project.result}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir en ligne
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;

