import React, { useState, useEffect } from "react";

function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

    return () => clearInterval(timer);
  }, []);

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
      <div className="product-list">{/* <ProductCard /> */}</div>
      <button>View All Products</button>
    </div>
  );
}

export default FlashSales;
