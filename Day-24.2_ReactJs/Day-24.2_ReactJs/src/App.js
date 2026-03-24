// App.js
// Root component — BookVerse Day 11
// Component composition: Navbar → Hero → BookList (contains BookCard + AuthorInfo)

import React from 'react';
import BookList from './components/BookList';
import './App.css';

/**
 * App — Root Component
 * Renders the full page layout. BookList composes BookCard and AuthorInfo inside.
 */
function App() {
  return (
    <div className="bv-app">

      {/* ── Navbar (Bootstrap navbar) ── */}
      <nav className="navbar navbar-expand-md bv-navbar sticky-top">
        <div className="container-xl">
          <a className="navbar-brand bv-navbar__brand" href="#top">
            <span className="bv-navbar__logo">📖</span>
            Book<span className="bv-navbar__accent">Verse</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-md-center gap-md-2">
              <li className="nav-item"><a className="nav-link bv-nav-link" href="#featured">Featured</a></li>
              <li className="nav-item"><a className="nav-link bv-nav-link" href="#genres">Genres</a></li>
              <li className="nav-item"><a className="nav-link bv-nav-link" href="#deals">Deals</a></li>
              <li className="nav-item ms-md-2">
                <button className="btn btn-sm bv-navbar__shelf-btn">My Shelf</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── Hero (Bootstrap jumbotron pattern) ── */}
      <header className="bv-hero" id="top">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="bv-hero__eyebrow">✦ Day 11 — Component Composition &amp; Styling</p>
              <h1 className="bv-hero__headline">
                Author Details &amp;<br />
                <em>Styled Components</em>
              </h1>
              <p className="bv-hero__sub">
                Click any author name on a book card to explore their biography, notable works, and more — powered by class components, lifecycle methods, and PropTypes validation.
              </p>
              <div className="bv-hero__badges">
                <span className="badge bv-badge">Class Components</span>
                <span className="badge bv-badge">PropTypes</span>
                <span className="badge bv-badge">Refs</span>
                <span className="badge bv-badge">Lifecycle Methods</span>
                <span className="badge bv-badge">Bootstrap</span>
                <span className="badge bv-badge">Composition</span>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end">
              <div className="bv-hero__deco" aria-hidden="true">
                {['📚','🌌','⚔️','🔍','🌍','🌹'].map((e, i) => (
                  <span key={i} className="bv-hero__deco-book" style={{ '--i': i }}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="bv-main" id="featured">
        <div className="container-xl">
          {/* BookList composes BookCard + AuthorInfo */}
          <BookList />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bv-footer">
        <div className="container-xl">
          <p className="bv-footer__text">
            © 2025 BookVerse · Day 11: Component Composition &amp; Styling · Built with React + Bootstrap
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
