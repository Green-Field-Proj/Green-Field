import React from "react";

function FlashSales() {
  return (
    <div className="flash-sales">
      <h2>Today's</h2>
      <h2>Flash Sales</h2>
      <div className="timer">
        <span>Days</span>
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
      <div className="product-list">{/* <ProductCard /> */}</div>
      <button>View All Products</button>
    </div>
  );
}

export default FlashSales;
