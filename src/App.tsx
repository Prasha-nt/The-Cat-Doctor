import React from 'react';
import Header from './components/Header';
import CatServices from './components/CatServices';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-card">
        <Header />
        <CatServices />
        <Footer />
      </div>
    </div>
  );
}

export default App;