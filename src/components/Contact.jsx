import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    try {
      // Ici, vous pourriez ajouter la logique pour envoyer les données à votre API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage({
        type: 'success',
        text: 'Votre message a bien été envoyé ! Je vous répondrai dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contactez-moi</h2>
          <p>Vous avez un projet en tête ? Discutons-en !</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:contact@ydev.studio">contact@ydev.studio</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3>Téléphone</h3>
                <a href="tel:+33612345678">+33 6 12 34 56 78</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Localisation</h3>
                <p>Paris, France</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <span className="social-icon">🐙</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="social-icon">💼</span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="social-icon">🐦</span>
            </a>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Votre message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Dites-moi en plus sur votre projet..."
            ></textarea>
          </div>
          
          {submitMessage.text && (
            <div className={`submit-message ${submitMessage.type}`}>
              {submitMessage.text}
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
