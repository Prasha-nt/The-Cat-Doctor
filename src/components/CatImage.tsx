import React, { useState } from 'react';
import { Image } from 'lucide-react';
import { fetchCatImage } from '../api/catApi';
import '../styles/CatImage.css';

const CatImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGetImage = async () => {
    setLoading(true);
    setError('');
    
    try {
      const newImageUrl = await fetchCatImage();
      setImageUrl(newImageUrl);
    } catch (err) {
      setError('Failed to fetch cat image. Please try again.');
      console.error('Error fetching cat image:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cat-image-container">
      <button 
        className="cat-image-button" 
        onClick={handleGetImage}
        disabled={loading}
      >
        <Image size={20} />
        Get a Random Cat Image
      </button>
      
      <div className="cat-image-display">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && imageUrl && (
          <div className="image-wrapper">
            <img src={imageUrl} alt="Random cat" />
          </div>
        )}
        {!loading && !error && !imageUrl && (
          <div className="placeholder-image">
            <p>Click the button to see a cute cat!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatImage;