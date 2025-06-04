/**
 * API functions for fetching cat facts and images
 */

/**
 * Fetches a random cat fact from the Cat Fact API
 * @returns {Promise<string>} A promise that resolves to a cat fact
 */
export const fetchCatFact = async (): Promise<string> => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.fact;
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    throw error;
  }
};

/**
 * Fetches a random cat image from The Cat API
 * @returns {Promise<string>} A promise that resolves to a cat image URL
 */
export const fetchCatImage = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error('Error fetching cat image:', error);
    throw error;
  }
};