import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get(
        "http://localhost:3000/api/user/getAll"
      );
      const productsResponse = await axios.get(
        "http://localhost:3000/api/product/getAll"
      );
      const ordersResponse = await axios.get(
        "http://localhost:3000/api/order/getAll"
      );

      setUsers(usersResponse.data);
      setProducts(productsResponse.data);
      setOrders(ordersResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="users-section">
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </section>

      <section className="products-section">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </section>

      <section className="orders-section">
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Status: {order.paymentStatus}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
