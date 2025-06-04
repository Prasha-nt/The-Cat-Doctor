import React from 'react';
import { Cat } from 'lucide-react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Cat size={48} strokeWidth={1.5} />
      </div>
      <h1>Welcome to The Cat Doctor 🐱</h1>
      <p className="subtitle">Caring for your feline friend with love and expertise.</p>
    </header>
  );
};

export default Header;