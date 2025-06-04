import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { fetchCatFact } from '../api/catApi';
import '../styles/CatFact.css';

const CatFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGetFact = async () => {
    setLoading(true);
    setError('');
    
    try {
      const newFact = await fetchCatFact();
      setFact(newFact);
    } catch (err) {
      setError('Failed to fetch cat fact. Please try again.');
      console.error('Error fetching cat fact:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cat-fact-container">
      <button 
        className="cat-fact-button" 
        onClick={handleGetFact}
        disabled={loading}
      >
        <Info size={20} />
        Get a Random Cat Fact
      </button>
      
      <div className="cat-fact-display">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && fact && (
          <div className="fact-text">
            <p>{fact}</p>
          </div>
        )}
        {!loading && !error && !fact && (
          <div className="placeholder-text">
            <p>Click the button to get an interesting cat fact!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatFact;