// src/pages/OrderPage.js
import React, { useState, useEffect } from "react";
import "./OrderPage.css";

const MyOrder = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("orderHistory");
    if (saved) {
      setOrderHistory(JSON.parse(saved));
    }
  }, []);

  const cancelOrder = (indexToRemove) => {
    const updatedOrders = orderHistory.filter((_, index) => index !== indexToRemove);
    setOrderHistory(updatedOrders);
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
  };

  return (
    <div className="order-page-container">
      {orderHistory.length > 0 ? (
        <div className="order-history">
          <h3 className="history-title">Order History</h3>
          <ul className="history-list">
            {orderHistory.map((order, index) => (
              <li key={index} className="history-item">
               <p><strong>Product:</strong> {order.product}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Payment:</strong> {order.payment}</p>
                <p className="history-date">{order.date}</p>
                <button
                  onClick={() => cancelOrder(index)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 16px",
                    backgroundColor: "#d81b60",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Cancel Order
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No order history available.</p>
      )}
    </div>
  );
};

export default MyOrder;
