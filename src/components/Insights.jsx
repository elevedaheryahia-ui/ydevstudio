import React from 'react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "My First Website · +2",
      description: "Design responsive, typographies adaptées aux écrans mobiles et CTA accessibles au pouce."
    },
    {
      id: 2,
      title: "artdezstudio.com · +2",
      description: "Lazy-loading des visuels 3D, minification des scripts et balisage Schema pour booster le référencement."
    }
  ];

  return (
    <>
      <h2 className="section-title">Optimisation mobile / performance / SEO</h2>
      <section className="insight-grid">
        {insights.map((insight) => (
          <article key={insight.id} className="insight-card">
            <strong>{insight.title}</strong>
            <p>{insight.description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Insights;

