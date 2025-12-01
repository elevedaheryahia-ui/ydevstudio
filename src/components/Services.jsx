import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création de sites vitrines, blogs et applications web sur mesure avec les dernières technologies du web.',
      icon: '🌐'
    },
    {
      title: 'Design UI/UX',
      description: 'Conception d\'interfaces utilisateur intuitives et d\'expériences utilisateur optimisées pour la conversion.',
      icon: '🎨'
    },
    {
      title: 'E-commerce',
      description: 'Solutions e-commerce personnalisées pour vendre vos produits en ligne de manière efficace et sécurisée.',
      icon: '🛒'
    },
    {
      title: 'SEO',
      description: 'Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne.',
      icon: '🔍'
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2>Mes services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
