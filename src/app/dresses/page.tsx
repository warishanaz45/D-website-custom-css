import React from 'react';

const Dresses = () => {
  const dressData = [
    { id: 1, name: 'Maya', price: 12000, description: 'Luxury Dress', image: 'image-01.jpg' },
    { id: 2, name: 'Mishka', price: 8000, description: 'Classic Charm', image: '/image-02.jpg' },
    { id: 3, name: 'Gulrukh', price: 25000, description: 'Elegant timepiece', image: '/image-03.jpg' },
    { id: 4, name: 'Tiya', price: 5000, description: 'Sporty and stylish', image: '/image-04.jpg' },
    { id: 5, name: 'Surya', price: 7000, description: 'Bold and rugged', image: '/image-05.jpg' },
    { id: 6, name: 'Alara', price: 1000, description: 'Affordable and reliable', image: '/image-06.jpg' },
  ];

  return (
    <div>
      <div className="dresses">
        {dressData.map((dress) => (
          <div key={dress.id} className="dress-card">
            <img src={dress.image} alt={dress.name} />
            <h3>{dress.name}</h3>
            <p>{dress.description}</p>
            <div className="price">${dress.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dresses;