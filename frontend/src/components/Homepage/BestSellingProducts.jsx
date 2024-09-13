import React, { useState, useEffect } from "react";
import axios from "axios";

function BestSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getAll"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="best-selling-products">
      <h2>This Month</h2>
      <h2>Best Selling Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <button>View All Products</button>
    </div>
  );
}

export default BestSellingProducts;
