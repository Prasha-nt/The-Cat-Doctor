import React from 'react';
import { Calendar, Utensils, Phone } from 'lucide-react';
import '../styles/ServiceButton.css';

interface ServiceButtonProps {
  icon: 'calendar' | 'utensils' | 'phone';
  label: string;
  onClick: () => void;
  color: 'purple' | 'teal' | 'pink';
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, label, onClick, color }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'calendar':
        return <Calendar size={24} />;
      case 'utensils':
        return <Utensils size={24} />;
      case 'phone':
        return <Phone size={24} />;
      default:
        return null;
    }
  };

  return (
    <button 
      className={`service-button ${color}`} 
      onClick={onClick}
    >
      <span className="icon">{renderIcon()}</span>
      <span className="label">{label}</span>
    </button>
  );
};

export default ServiceButton;