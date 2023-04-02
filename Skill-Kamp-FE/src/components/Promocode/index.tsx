import React, { useState, useEffect } from "react";
import "./style.scss";

const PromoCodeBar: React.FC = () => {
  const [discountMessage, setDiscountMessage] = useState("10% OFF your first order with code HAPPY123");
  const [backgroundColor, setBackgroundColor] = useState("#282828");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (discountMessage === "Get 10% Off Use Coupon Code HAPPY123") {
        setDiscountMessage("Free Shipping Over $50");
        setBackgroundColor("#282828");
      } else {
        setDiscountMessage("Get 10% Off Use Coupon Code HAPPY123");
        setBackgroundColor("#282828");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [discountMessage]);

  return (
    <nav className="promo-code-bar" style={{ backgroundColor: backgroundColor }}>
      <span className="promo-code-bar__message">{discountMessage}</span>
    </nav>
  );
};

export default PromoCodeBar;
