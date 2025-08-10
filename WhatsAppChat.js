import React from "react";
import "./WhatsAppChat.css";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/233501234567?text=Hi%20Paks%20Estates,%20I'm%20interested%20in%20properties!"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <img src="/images/whatsapp-icon.svg" alt="WhatsApp" />
    </a>
  );
}