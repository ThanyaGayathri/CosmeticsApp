// src/components/FAQPage.js
import React from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Purplle Cosmetics?",
      answer: "Purplle is a leading online beauty and cosmetics store offering a wide range of products from top beauty brands."
    },
    {
      question: "How can I place an order?",
      answer: "Simply browse through our categories, add your desired products to the cart, and proceed to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept debit/credit cards, net banking, and various wallet options."
    },
    {
      question: "Can I return products?",
      answer: "Yes, returns are accepted within 14 days of purchase for eligible products."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
