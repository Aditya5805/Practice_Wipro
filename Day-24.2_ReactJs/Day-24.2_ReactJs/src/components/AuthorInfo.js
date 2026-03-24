// src/components/AuthorInfo.js
// CLASS COMPONENT — displays author bio and top 3 books
// Demonstrates: class components, lifecycle methods (componentDidMount,
//               componentDidUpdate, componentWillUnmount), PropTypes

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AuthorInfo.css';

/**
 * AuthorInfo — Class Component
 *
 * Lifecycle methods demonstrated:
 *   componentDidMount   → logs "Author panel loaded" + author name
 *   componentDidUpdate  → logs when author changes
 *   componentWillUnmount→ logs cleanup
 *
 * Props:
 *   author (object) — { name, nationality, born, avatar, bio, topBooks }
 *   onClose (func)  — called when the panel is dismissed
 */
class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,   // controls entrance animation
      activeBook: null,   // tracks which top-book is hovered/highlighted
    };
  }

  /* ── Lifecycle: componentDidMount ── */
  componentDidMount() {
    // Simulate data loading log (Day 11 requirement)
    console.log(`[AuthorInfo] componentDidMount — Loading author data for: ${this.props.author?.name}`);

    // Trigger entrance animation after mount
    setTimeout(() => this.setState({ isVisible: true }), 30);
  }

  /* ── Lifecycle: componentDidUpdate ── */
  componentDidUpdate(prevProps) {
    if (prevProps.author?.name !== this.props.author?.name) {
      console.log(
        `[AuthorInfo] componentDidUpdate — Author changed from "${prevProps.author?.name}" to "${this.props.author?.name}"`
      );
      // Reset animation when author switches
      this.setState({ isVisible: false, activeBook: null }, () => {
        setTimeout(() => this.setState({ isVisible: true }), 30);
      });
    }
  }

  /* ── Lifecycle: componentWillUnmount ── */
  componentWillUnmount() {
    console.log(`[AuthorInfo] componentWillUnmount — Cleaning up panel for: ${this.props.author?.name}`);
  }

  handleBookHover = (bookTitle) => {
    this.setState({ activeBook: bookTitle });
  };

  handleBookLeave = () => {
    this.setState({ activeBook: null });
  };

  render() {
    const { author, onClose } = this.props;
    const { isVisible, activeBook } = this.state;

    if (!author) return null;

    return (
      <div className={`bv-author-panel ${isVisible ? 'bv-author-panel--visible' : ''}`} role="complementary" aria-label="Author Information">

        {/* Panel Header */}
        <div className="bv-author-panel__header">
          <span className="bv-author-panel__label">Author Profile</span>
          <button
            className="bv-author-panel__close"
            onClick={onClose}
            aria-label="Close author panel"
          >
            ✕
          </button>
        </div>

        {/* Author Identity */}
        <div className="bv-author-panel__identity">
          <div className="bv-author-panel__avatar" aria-hidden="true">
            {author.avatar}
          </div>
          <div className="bv-author-panel__id-text">
            <h3 className="bv-author-panel__name">{author.name}</h3>
            <p className="bv-author-panel__meta">
              {author.nationality} · b. {author.born}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="bv-author-panel__divider" />

        {/* Bio */}
        <div className="bv-author-panel__bio-section">
          <h6 className="bv-author-panel__section-title">Biography</h6>
          <p className="bv-author-panel__bio">{author.bio}</p>
        </div>

        {/* Top 3 Books */}
        <div className="bv-author-panel__books-section">
          <h6 className="bv-author-panel__section-title">Notable Works</h6>
          <ol className="bv-author-panel__books-list">
            {author.topBooks.map((book, idx) => (
              <li
                key={idx}
                className={`bv-author-panel__book-item ${activeBook === book.title ? 'bv-author-panel__book-item--active' : ''}`}
                onMouseEnter={() => this.handleBookHover(book.title)}
                onMouseLeave={this.handleBookLeave}
              >
                <span className="bv-author-panel__book-num">{idx + 1}</span>
                <span className="bv-author-panel__book-title">{book.title}</span>
                <span className="bv-author-panel__book-year">{book.year}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Bootstrap badge row */}
        <div className="bv-author-panel__tags mt-3">
          <span className="badge me-1" style={{ background: 'var(--parchment)', color: 'var(--text-body)', border: '1px solid var(--border)' }}>
            {author.nationality}
          </span>
          <span className="badge me-1" style={{ background: 'var(--parchment)', color: 'var(--text-body)', border: '1px solid var(--border)' }}>
            b. {author.born}
          </span>
          <span className="badge" style={{ background: 'var(--leather)', color: '#fff' }}>
            {author.topBooks.length} Notable Works
          </span>
        </div>
      </div>
    );
  }
}

/* ── PropTypes ── */
AuthorInfo.propTypes = {
  author: PropTypes.shape({
    name:        PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    born:        PropTypes.string.isRequired,
    avatar:      PropTypes.string.isRequired,
    bio:         PropTypes.string.isRequired,
    topBooks:    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year:  PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

AuthorInfo.defaultProps = {
  author: null,
};

export default AuthorInfo;
