import React from "react";

const Cart = () => {
  const cartItems = [
    {
      product: "product",
      price: "price",
      Quantity: "Quantity",
      Subtotal: "Subtotal",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Cart Headers  */}

      <div>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Items */}

      {cartItems.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <span>{item.Quantity}</span>
          <span>${item.Subtotal}</span>
        </div>
      ))}

      {/* Buttons */}
      <button onClick={() => alert("Returning to shop")}>Return to Shop</button>
      <button onClick={() => alert("Cart updated")}>Update Cart</button>

      {/* Coupon Section */}

      <div>
        <input type="text" placeholder="Coupon Code" />
        <button onClick={() => alert("Coupon applied")}>Apply Coupon</button>
      </div>

      {/* Cart Totals */}
      <div>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping: Free</p>
        <h2>Total: ${total}</h2>
      </div>

      <button onClick={() => alert("Proceeding to checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
