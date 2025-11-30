import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstagram = () => {
    navigator.clipboard.writeText("@ydevstudio_off").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section className="contact-cta">
      <div>
        <h3>Construisons ton prochain site</h3>
        <p>Je vous accompagne dans la création d'un site moderne, rapide et entièrement personnalisé pour mettre en valeur votre marque et atteindre vos objectifs.</p>
        
        <div className="pricing-box">
          <p><strong>Site vitrine simple</strong> · 1500 DH</p>
          <p><strong>Site complet</strong> · 2500–3000 DH</p>
          <p><strong>Catalogue / marque</strong> · 3000–4000 DH</p>
        </div>

        <div className="pricing-reminder">
          <strong>⚠️ Attention :</strong> Acompte 30–40% avant démarrage
        </div>
      </div>
      <div className="contact-actions">
        <p>Contact</p>
        <a href="https://wa.me/212770186546" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.4 3.2 1.1 4.6L2 22l5.6-1.5c1.3.7 2.8 1.1 4.4 1.1 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z" stroke="#25d366" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.3 8.5l.7-.4c.2-.1.5 0 .6.2l.6 1.3c.1.2 0 .4-.1.5l-.6.6c-.1.1-.1.3 0 .4 0 0 1.1 2 2.8 2.8.2.1.3 0 .4 0l.7-.9c.1-.2.4-.2.6-.1l1.2.6c.2.1.3.4.2.6l-.4.9c-.1.2-.3.3-.5.4-1 .4-3.3.7-5.7-1.7s-2.2-4.7-1.8-5.6c.1-.2.2-.4.4-.5z" fill="#25d366" />
          </svg>
          WhatsApp · +212 6 18 73 13 66
        </a>
        <a href="https://instagram.com/ydev.studio" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#grad)" strokeWidth="1.4" />
            <defs>
              <linearGradient id="grad" x1="3" y1="3" x2="21" y2="21">
                <stop stopColor="#f58529" />
                <stop offset="0.5" stopColor="#dd2a7b" />
                <stop offset="1" stopColor="#8134af" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="3.8" stroke="#fff" strokeWidth="1.3" />
            <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
          </svg>
          Instagram · @ydevstudio_off
        </a>
        <a href="mailto:hello@ydev.studio">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#a5b4fc" strokeWidth="1.3" />
            <path d="M4 7l8 6 8-6" stroke="#a5b4fc" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          ydevstudio@gmail.com
        </a>
      </div>
      <div className="cta-row">
        <a className="primary" href="mailto:ydevstudio@gmail.com">
          Envoyer un mail
        </a>
        <button type="button" onClick={handleCopyInstagram}>
          {copied ? "Instagram copié ✔" : "Copier l'Instagram"}
        </button>
      </div>
    </section>
  );
};

export default Contact;

