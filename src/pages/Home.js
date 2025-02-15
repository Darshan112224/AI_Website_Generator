import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI Website Generator</h1>
          <p className="hero-subtitle">
            Build professional websites effortlessly with AI-powered tools.
          </p>
          <Link to="/generate" className="hero-button">
            Get Started
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/ai-hero-image.jpg" alt="AI Illustration" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src="/assets/feature-icon1.jpg" alt="Icon" />
            <h3>AI-Powered</h3>
            <p>Generate high-quality websites tailored to your needs.</p>
          </div>
          <div className="feature-item">
            <img src="/assets/feature-icon2.png" alt="Icon" />
            <h3>Fast & Efficient</h3>
            <p>Get your website ready in just a few clicks.</p>
          </div>
          <div className="feature-item">
            <img src="/assets/feature-icon3.jpg" alt="Icon" />
            <h3>Customizable</h3>
            <p>Easily modify and export your website code.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 AI Website Generator. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/assets/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/assets/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://linkedln.com" target="_blank" rel="noreferrer">
            <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
