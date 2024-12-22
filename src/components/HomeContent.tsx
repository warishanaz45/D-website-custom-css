import React from 'react';
const Home = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('background.png')" }}>
        <div>
          <h1 className="fade-in">Welcome to New Dress Collection</h1>
          <p>Your one-stop shop for the best dresses</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;