import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
        <a href="#" target="_self">happy kids</a>
      <div className="header-container">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop Collection</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Log in</a></li>
            
          </ul>
        </nav>
        <div className="cart-container">
        <img src="/Happy kids-Materials/Icon/cart-svgrepo-com.svg" alt="Cart" />

        </div>
      </div>
    </header>
  );
};

export default Header;
