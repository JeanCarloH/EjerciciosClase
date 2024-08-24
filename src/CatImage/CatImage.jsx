// src/CatImage.js

import React, { useState, useEffect } from 'react';

function CatImage() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define la función que hará la solicitud a la API
    const fetchCatImage = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("data",data)
        setCatImageUrl(data[0].url);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCatImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  return (
    <div>
      <h1>Random Cat Image</h1>
      <img src={catImageUrl} alt="A Random Cat" width="300" />
      <button onClick={() => window.location.reload()}>Get Another Cat!</button>
    </div>
  );
}

export default CatImage;
