import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-page">
      <h2>Contact Us</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit" className="cta">Send Message</button>
      </form>
      <div className="office-map">
        <h3>Our Office</h3>
        <iframe
          title="Paks Estates Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.141279405518!2d-0.18696468467577115!3d5.560029995973072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMzAuMSJOIDDCsDExJzEwLjkiVw!5e0!3m2!1sen!2sgh!4v1616175925654!5m2!1sen!2sgh"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="email">
        <strong>Email:</strong> <a href="mailto:opokupapa4@gmail.com">opokupapa4@gmail.com</a>
      </div>
    </section>
  );
}