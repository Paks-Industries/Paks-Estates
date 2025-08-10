import React from "react";
import Slider from "react-slick";
import "./Top50Carousel.css";

// Sample top properties (add up to 50)
const top50 = [
  {
    title: "Luxury Villa — Cantonments",
    price: "GHS 5,000,000",
    img: "/images/cantonments-villa.jpg",
    location: "Cantonments, Accra",
    badge: "Top Rated",
    agent: "Ama Mensah",
    amenities: ["Pool", "Smart Home", "24/7 Security", "Private Parking"],
  },
  {
    title: "Penthouse — Airport Residential",
    price: "GHS 3,800,000",
    img: "/images/airport-penthouse.jpg",
    location: "Airport Residential, Accra",
    badge: "Most Viewed",
    agent: "Kojo Asante",
    amenities: ["City Views", "Gym", "Concierge", "Secure Access"],
  },
];

export default function Top50Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    fade: true,
  };
  return (
    <section className="top50-carousel">
      <h2>Ghana’s Top 50 Properties</h2>
      <Slider {...settings}>
        {top50.map((property, i) => (
          <div className="carousel-card" key={i}>
            <img src={property.img} alt={property.title} className="carousel-image" />
            <div className="carousel-details">
              <span className="badge">{property.badge}</span>
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="price">{property.price}</p>
              <ul className="amenities">
                {property.amenities.map((a, idx) => <li key={idx}>{a}</li>)}
              </ul>
              <p className="agent">Agent: {property.agent}</p>
              <a href="#contact" className="cta">Request Viewing</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}