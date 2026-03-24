// App.js
// Root component for BookVerse application
// Day 24 - React Basics & Component Fundamentals

import React from 'react';
import BookList from './components/BookList';
import './App.css';

/**
 * App Component
 * Entry point that renders the BookVerse header and the BookList section
 */
function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__brand">
            <span className="navbar__logo">📖</span>
            <span className="navbar__name">
              Book<span className="navbar__name-accent">Verse</span>
            </span>
          </div>
          <ul className="navbar__links">
            <li><a href="#featured">Featured</a></li>
            <li><a href="#genres">Genres</a></li>
            <li><a href="#deals">Deals</a></li>
          </ul>
          <button className="navbar__cta">My Shelf</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">✦ Welcome to BookVerse</p>
            <h1 className="hero__headline">
              Every Story<br />
              <em>Finds Its Reader.</em>
            </h1>
            <p className="hero__sub">
              Curated books across every genre — from timeless classics to modern bestsellers.
              Discover your next adventure.
            </p>
          </div>
          <div className="hero__decoration" aria-hidden="true">
            <div className="hero__book-stack">
              {['📚', '🌌', '⚔️', '🔍'].map((emoji, i) => (
                <span key={i} className="hero__stacked-book" style={{ '--i': i }}>
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content" id="featured">
        <div className="container">
          <BookList />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer__text">
            © 2025 BookVerse · Built with React · Day 24 Challenge
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
