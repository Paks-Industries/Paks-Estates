import React from "react";
import "./ParallaxHero.css";

export default function ParallaxHero() {
  return (
    <section className="parallax-hero">
      <div className="parallax-bg"></div>
      <div className="hero-content">
        <h1>Discover Ghana’s Finest Homes</h1>
        <p>Luxury, trust, and technology—Paks Estates brings the best to you.</p>
        <a className="cta" href="#listings">Browse Top 50 Properties</a>
      </div>
    </section>
  );
}