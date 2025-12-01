import React from 'react';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>YDev Studio</h1>
        <p className="hero-subtitle">Développement web sur mesure</p>
        <p className="hero-description">
          Création de sites web modernes, rapides et optimisés pour vos projets.
          Du design au déploiement, je vous accompagne dans la réalisation de votre projet web.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button primary">
            Discutons de votre projet
          </a>
          <a href="#projects" className="cta-button secondary">
            Voir mes réalisations
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
