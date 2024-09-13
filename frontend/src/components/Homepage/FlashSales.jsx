import React, { useState, useEffect } from "react";
import axios from "axios";

function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);

  useEffect(() => {
    const countDownDate = new Date("2024-09-18T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    fetchFlashSaleProducts();

    return () => clearInterval(timer);
  }, []);

  const fetchFlashSaleProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/flash-sale"
      );
      setFlashSaleProducts(response.data);
    } catch (error) {
      console.error("Error fetching flash sale products:", error);
    }
  };

  return (
    <div className="flash-sales">
      <h2>Today's</h2>
      <h2>Flash Sales</h2>
      <div className="timer">
        <span>{timeLeft.days} Days</span>
        <span>{timeLeft.hours} Hours</span>
        <span>{timeLeft.minutes} Minutes</span>
        <span>{timeLeft.seconds} Seconds</span>
      </div>
      <div className="product-list">
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Original Price: ${product.price.toFixed(2)}</p>
            <p>
              Discounted Price: $
              {(product.price * (1 - product.discount)).toFixed(2)}
            </p>
            <p>Discount: {(product.discount * 100).toFixed(0)}% OFF</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <button>View All Products</button>
    </div>
  );
}

export default FlashSales;
