import React from 'react';
import CatFact from './CatFact';
import CatImage from './CatImage';
import ServiceButton from './ServiceButton';
import '../styles/CatServices.css';

const CatServices: React.FC = () => {
  const handleBookAppointment = () => {
    alert('Coming soon! Our online booking system will be available shortly.');
  };

  const handleDietTips = () => {
    alert('Cats thrive on protein-rich diets. Always provide fresh water and consult with our veterinarians for a diet plan tailored to your cat\'s specific needs.');
  };

  const handleContact = () => {
    alert('Contact us at meow@catdoctor.com or call us at (555) CAT-MEOW');
  };

  return (
    <div className="services-container">
      <div className="interactive-section">
        <CatFact />
        <CatImage />
      </div>
      
      <div className="service-buttons">
        <ServiceButton 
          icon="calendar" 
          label="Book Appointment" 
          onClick={handleBookAppointment}
          color="purple"
        />
        <ServiceButton 
          icon="utensils" 
          label="Diet Tips" 
          onClick={handleDietTips}
          color="teal"
        />
        <ServiceButton 
          icon="phone" 
          label="Contact" 
          onClick={handleContact}
          color="pink"
        />
      </div>
    </div>
  );
};

export default CatServices;