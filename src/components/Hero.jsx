import React from "react";

const Hero = () => {
  return (
    <header className="main-header">
      <div className="hero-image">
        <img
          src="/images/grid.png"
          alt="Grid of images"
          height={200}
          width={400}
        />
      </div>
      <section className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </header>
  );
};

export default Hero;
