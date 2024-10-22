import React from 'react';
import './App.css';

function Test() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Stamped</div>
        <nav className="nav">
          <a href="#platform">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#company">Company</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up Free</button>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <h1>Accelerate Brand Growth with Loyalty</h1>
          <div className="buttons">
            <button className="signup-free">Sign Up Free</button>
            <button className="book-demo">Book a Demo</button>
          </div>
        </section>
        <aside className="loyalty-info">
          <div className="points">
            <div className="points-earned">YOU HAVE EARNED</div>
            <div className="points-value">76 LORAM POINTS</div>
            <div className="earn-points">
              <div>50 POINTS</div>
              <div>1 POINT</div>
              <div>25 POINTS</div>
            </div>
          </div>
          <div className="order-success">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <div className="order-text">
              <div className="success-message">ORDER SUCCESS!</div>
              <div className="details">
                Give your friends a reward and claim your own when they make a purchase.
              </div>
              <a href="https://loramhome.com/a/...">https://loramhome.com/a/...</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Test;
