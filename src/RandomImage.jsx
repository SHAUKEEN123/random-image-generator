import React, { useState } from 'react';

const RandomImage = () => {
  const [images, setImages] = useState([]);

  // Function to fetch 6 random images with larger dimensions
  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 6; i++) {
      newImages.push(`https://picsum.photos/400/500?random=${Math.random()}`);
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 p-6">
      <h1 className="text-4xl font-bold mb-6">Random Image Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Random ${index}`}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>

      <button
        onClick={fetchImages}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
      >
        Generate More Images
      </button>
    </div>
  );
};

export default RandomImage;