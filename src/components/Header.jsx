import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="hero-copy">
        <div className="hero-badges">
          <span className="badge">Studio indépendant</span>
          <span className="badge badge--ghost">Réponse &lt; 1h</span>
          <span className="badge">+20 projets réalisés</span>
        </div>
        <h1>
          <span className="hero-crown"></span>
          <strong>YDev Studio</strong>
        </h1>
        <p>
          Création de sites vitrines, portfolios modernes et catalogues
          produits pour marques ambitieuses.
        </p>
        <div className="stack-grid" aria-label="Stack principal">
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 3l7-2 7 2-1 13-6 3-6-3L5 3z" fill="#e34f26" />
              <path d="M12 4v13l4-2.1.7-9.7L12 4z" fill="#ef652a" />
              <path d="M9.5 7h2.5v1.4H11l.1 1.5h2.4l-.2 2.4-1.8.7-1.8-.7-.1-1h1.2v.4l.7.2.7-.2.1-1.1H9.3L9 7.9 9.5 7z" fill="#fff" />
            </svg>
            HTML
          </span>
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 3l7-2 7 2-1 13-6 3-6-3L5 3z" fill="#1572b6" />
              <path d="M12 4v13l4-2.1.7-9.7L12 4z" fill="#33a9dc" />
              <path d="M9 7h6l-.2 1.4H11l.1 1.4h3.2l-.3 3-2 1-2-.9-.1-.9h1.2v.3l.9.3.9-.3.1-1.1H9.2L9 7z" fill="#fff" />
            </svg>
            CSS
          </span>
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 4l8-3 8 3-1 14-7 3-7-3V4z" fill="#f7df1e" />
              <path d="M13 6h2v7c0 2.5-1.4 3.6-3.5 3.6-.9 0-1.9-.2-2.6-.6l.6-1.7.9.3c.6.1 1.2.1 1.6-.1.5-.2.8-.7.8-1.5V6z" fill="#232323" />
            </svg>
            JavaScript
          </span>
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2c-3.1 0-5 1.4-5 3.8 0 1.5.8 2.6 2.4 3.1-1.9.6-2.9 1.7-2.9 3.5 0 3 2.9 4.6 5.5 4.6s5.5-1.6 5.5-4.6c0-1.8-1-2.9-2.9-3.5 1.6-.5 2.4-1.6 2.4-3.1C17 3.4 15.1 2 12 2zm-1.2 2.2h2.4c.9 0 1.4.4 1.4 1.2 0 .8-.5 1.2-1.4 1.2h-2.4c-.9 0-1.4-.4-1.4-1.2 0-.8.5-1.2 1.4-1.2zm0 5h2.4c1.3 0 2.2.6 2.2 1.8s-.9 1.8-2.2 1.8h-2.4c-1.3 0-2.2-.6-2.2-1.8s.9-1.8 2.2-1.8z" fill="#3778ab" />
            </svg>
            Python
          </span>
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#2b2d42" />
              <path d="M8 8h8v8H8z" stroke="#8be9fd" strokeWidth="1.5" />
              <path d="M9 9h6v6H9z" stroke="#ff79c6" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>
            C++
          </span>
          <span className="stack-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#20232a" />
              <circle cx="12" cy="12" r="6" stroke="#61dafb" strokeWidth="2" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.2" />
              <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)" />
            </svg>
            React
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

