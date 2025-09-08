import React from 'react';
import './Footer.css';
import { FiFacebook,  FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <footer className="app__footer" id="contact">
    <div className="app__footer-container">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <div className="quick-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
      
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <div className="footer-section footer-contact">
        <h3>Contact Us</h3>
        <p>Shop 10, Mooikloof Village Centre, Pretoria, 0081</p>
        <p>
          Deon (061) 552-2806<br />
          Vicky (082) 491-9244
        </p>
        <p> bluefigmooikloof@gmail.com</p>
      </div>

      <div className="footer-section footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/people/Blue-Fig-Coffee-Caf%C3%A9/61563110291878/?_rdr" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
         
          <a href="https://www.instagram.com/bluefigmooikloof/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
        <p>Also find us on Uber Eats!</p>
      </div>
    </div>

    <p className="footer-copy">&copy; 2024 Blue Fig Coffee Café. All rights reserved.</p>
  </footer>
);

export default Footer;
