import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BarberKaza',
      image: '/barberkza.png',
      description: 'Site pro pour un barbeur avec prise de rendez-vous en ligne et galerie photos.',
      link: 'https://barberkaz-b0734gix6-elevedaheryahia-uis-projects.vercel.app',
      tags: ['React', 'Responsive', 'UI/UX']
    },
    {
      id: 2,
      title: 'SnackyGo',
      image: '/snacky.png',
      description: 'Site vitrine pour un snack avec menu interactif et localisation Google Maps.',
      link: 'https://snackygo-1spirlgha-elevedaheryahia-uis-projects.vercel.app',
      tags: ['Next.js', 'Mobile-first', 'SEO']
    },
    {
      id: 3,
      title: 'UrbanLine',
      image: '/urbanline.png',
      description: 'E-commerce pour une marque de vêtements avec catalogue produits et panier.',
      link: 'https://urbanline-b5mwnp2sk-elevedaheryahia-uis-projects.vercel.app',
      tags: ['E-commerce', 'React', 'Stripe']
    }
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateY = (x - centerX) / 20;
          const rotateX = (centerY - y) / 20;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = () => {
          card.style.transform = '';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Mes projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le projet →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
