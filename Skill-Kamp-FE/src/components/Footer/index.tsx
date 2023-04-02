import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="site-map">
        <h2>happy kids</h2>
      </div>
      <div className="site-map-container">
        <div className="site-map__left">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop Collection</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="social-buttons">
          <img src="/Happy kids-Materials/Icon/Social icons/facebook-svgrepo-com.svg" alt="Facebook" />
          <img src="/Happy kids-Materials/Icon/Social icons/pinterest-svgrepo-com.svg" alt="pinterest" />
          <img src="/Happy kids-Materials/Icon/Social icons/instagram-svgrepo-com.svg" alt="ig" />
        </div>

        <div className="site-map__right">
          <ul>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Store Policy</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <h3>Join Our Mailing List</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2035 by happy kids. Powered and secured by Wix</p>
      </div>
    </footer>
  );
};

export default Footer;
