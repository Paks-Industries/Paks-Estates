import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          &copy; {new Date().getFullYear()} Paks Estates — A Paks Industries Company
        </div>
        <div>
          <a href="mailto:opokupapa4@gmail.com">Contact</a> | 
          <a href="https://facebook.com/paksestates" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com/paksestates" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}