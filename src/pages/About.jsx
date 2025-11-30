import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Insights from '../components/Insights';

const AboutPage = () => {
  return (
    <div className="page">
      <About />
      <Testimonials />
      <Insights />
    </div>
  );
};

export default AboutPage;

