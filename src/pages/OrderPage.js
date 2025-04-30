import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderPage.css";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedTotal = sessionStorage.getItem("cart_total");
  const total = storedTotal ? parseFloat(storedTotal) : null;

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [success, setSuccess] = useState(false);

  // Redirect if total is not available (i.e., not coming from cart)
  if (!total) {
    navigate("/");
    return null;
  }

  const handlePay = () => {
    if (!address || !payment) {
      alert("Please enter address and select payment mode.");
      return;
    }

    setSuccess(true);
    // Optionally clear form
    setAddress("");
    setPayment("");

    // After successful payment, navigate to CategoryList
    setTimeout(() => {
      navigate("/categorylist");
    }, 2000); // Delay navigation to show success message for 2 seconds
  };

  return (
    <div className="order-page-container">
      <div className="order-form">
        <h2 className="order-title">Checkout</h2>

        <div className="input-group">
          <label className="label">Shipping Address:</label>
          <textarea
            className="input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label className="label">Payment Method:</label>
          <select
            className="input"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <h3>Total Amount: ₹{total}</h3>

        <div className="button-group">
          <button
            className="buy-button"
            onClick={handlePay}
            disabled={!address || !payment}
          >
            Pay
          </button>
        </div>

        {success && (
          <div className="success-message">
            <h4>Payment Successful!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
