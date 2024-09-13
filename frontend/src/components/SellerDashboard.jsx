import React, { useState, useEffect } from "react";
import axios from "axios";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getAll",
        { withCredentials: true }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/product/add", newProduct, {
        withCredentials: true,
      });
      fetchProducts();
      setNewProduct({ name: "", description: "", price: "", stock: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:3000/api/product/${id}`,
        updatedProduct,
        { withCredentials: true }
      );
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <form onSubmit={handleAddProduct}>
        <input
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          type="number"
        />
        <input
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Stock"
          type="number"
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Stock: {product.stock}
            <button
              onClick={() =>
                handleUpdateProduct(product.id, {
                  ...product,
                  stock: product.stock + 1,
                })
              }
            >
              Increase Stock
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
