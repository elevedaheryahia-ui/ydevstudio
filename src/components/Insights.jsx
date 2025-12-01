import React from 'react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: 'Optimisation des performances',
      description: 'Sites rapides avec des temps de chargement optimisés pour une meilleure expérience utilisateur et un meilleur référencement.',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'Design adaptatif',
      description: 'Des interfaces qui s\'adaptent parfaitement à tous les appareils, du mobile au desktop.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'SEO avancé',
      description: 'Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne.',
      icon: '🔍'
    },
    {
      id: 4,
      title: 'Sécurité renforcée',
      description: 'Protection des données et mise en place des meilleures pratiques de sécurité web.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="insights-section" id="insights">
      <h2>Mes expertises techniques</h2>
      <div className="insights-grid">
        {insights.map(insight => (
          <div className="insight-card" key={insight.id}>
            <div className="insight-icon">{insight.icon}</div>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
