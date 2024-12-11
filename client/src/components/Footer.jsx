import React from 'react';
import './Footer.css'; // Ensure this file reflects updated styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      {/* Grid Section: Quick Links, What Users Say, Contact Us */}
      <div className="footer-grid">
        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>About CareerFit</li>
            <li>How It Works</li>
            <li>FAQs</li>
            <li>Terms & Policies</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="footer-section testimonials">
          <h3>What Users Say</h3>
          <p>“CareerFit helped me find clarity in my career goals. Highly recommended!”</p>
          <p>— Jane D.</p>
          <p>“The insights I gained were spot-on. It’s a game-changer!”</p>
          <p>— John M.</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 support@careerfit.com</p>
          <p>📍 123 Innovation Drive, <br /> San Francisco, CA, 94105.</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social-icons">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2024 CareerFit. All rights reserved.</p>
        <p>Empowering individuals to achieve their dream careers.</p>
      </div>
    </footer>
  );
}

export default Footer;
