// src/components/BookCard.js
// Functional component — displays a single book
// Uses PropTypes for prop validation (Day 11 requirement)

import React from 'react';
import PropTypes from 'prop-types';
import { GENRE_COLORS } from '../data/booksData';
import './BookCard.css';

/**
 * BookCard — Functional Component
 *
 * Props (all validated via PropTypes):
 *   id, title, author, price, genre, rating, cover, year, description
 *   onAuthorClick — callback when "View Author" is clicked
 *   viewMode — "grid" | "list"
 */
const BookCard = ({ id, title, author, price, genre, rating, cover, year, description, onAuthorClick, viewMode }) => {
  const colors = GENRE_COLORS[genre] || GENRE_COLORS['Fiction'];

  // Render 5 star icons based on rating value
  const renderStars = (val) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`bv-star ${i < Math.floor(val) ? 'bv-star--filled' : i < val ? 'bv-star--half' : ''}`}
      >
        ★
      </span>
    ));

  const isListMode = viewMode === 'list';

  return (
    /* Bootstrap card class + our custom overrides */
    <div
      className={`card bv-book-card ${isListMode ? 'bv-book-card--list' : 'bv-book-card--grid'}`}
      style={{ animationDelay: `${id * 0.07}s` }}
    >
      {/* Cover panel */}
      <div className="bv-book-card__cover" style={{ '--genre-bg': colors.bg }}>
        <span className="bv-book-card__emoji">{cover}</span>
        <span className="bv-book-card__year">{year}</span>
        <span
          className="bv-book-card__genre"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
        >
          {genre}
        </span>
      </div>

      {/* Content */}
      <div className="card-body bv-book-card__body">
        <h5 className="bv-book-card__title">{title}</h5>
        <p className="bv-book-card__description">{description}</p>

        <div className="bv-book-card__meta">
          <div className="bv-book-card__stars">{renderStars(rating)}</div>
          <span className="bv-book-card__rating-num">{rating}/5</span>
        </div>

        <div className="bv-book-card__footer">
          <span className="bv-book-card__price">${price.toFixed(2)}</span>
          <div className="bv-book-card__actions">
            {/* Trigger AuthorInfo panel */}
            <button
              className="btn btn-sm bv-book-card__author-btn"
              onClick={() => onAuthorClick(author)}
              title={`View ${author}'s profile`}
            >
              {author}
            </button>
            <button className="btn btn-sm btn-primary bv-book-card__cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── PropTypes Validation ── */
BookCard.propTypes = {
  id:            PropTypes.number.isRequired,
  title:         PropTypes.string.isRequired,
  author:        PropTypes.string.isRequired,
  price:         PropTypes.number.isRequired,
  genre:         PropTypes.string.isRequired,
  rating:        PropTypes.number.isRequired,
  cover:         PropTypes.string.isRequired,
  year:          PropTypes.number.isRequired,
  description:   PropTypes.string,
  onAuthorClick: PropTypes.func.isRequired,
  viewMode:      PropTypes.oneOf(['grid', 'list']),
};

BookCard.defaultProps = {
  description: 'A captivating read.',
  viewMode: 'grid',
};

export default BookCard;
