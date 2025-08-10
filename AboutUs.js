import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about" className="about-us">
      <h2>About Paks Estates</h2>
      <p>
        Paks Estates is a premium real estate division of Paks Industries, dedicated to connecting property buyers, sellers, and renters across Ghana and beyond. Our mission is to deliver modern, trustworthy, and client-first services, leveraging technology and local expertise.
      </p>
      <div className="team">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.png" alt="Opoku Papa" />
            <p>Opoku Papa<br /><span>Director</span></p>
          </div>
          <div className="team-member">
            <img src="/images/team2.png" alt="Ama Mensah" />
            <p>Ama Mensah<br /><span>Lead Agent</span></p>
          </div>
        </div>
      </div>
      <p className="parent-link">
        <a href="https://paksindustries.com" target="_blank" rel="noopener noreferrer">
          Learn more about our parent company, Paks Industries &rarr;
        </a>
      </p>
    </section>
  );
}