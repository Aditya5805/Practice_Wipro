// BookCard.js
// Functional component displaying book title, author, and price
// Supports both "grid" and "list" view modes via props

import React from 'react';
import './BookCard.css';

const GENRE_COLORS = {
  Fiction: '#c94c4c',
  'Sci-Fi': '#4c7ec9',
  Mystery: '#9b4cc9',
  Fantasy: '#4cc97a',
  History: '#c9844c',
  Romance: '#c94c84',
  Classic: '#c9a84c',
};

/**
 * BookCard Component
 * Props:
 *   - title (string): Book title
 *   - author (string): Author name
 *   - price (number): Book price in USD
 *   - genre (string): Book genre (used for color badge)
 *   - rating (number): Rating out of 5
 *   - cover (string): Emoji or placeholder for the cover
 *   - viewMode (string): "grid" | "list"
 */
const BookCard = ({ title, author, price, genre, rating, cover, viewMode }) => {
  const genreColor = GENRE_COLORS[genre] || '#c9a84c';

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < Math.floor(rating) ? 'filled' : i < rating ? 'half' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`book-card ${viewMode === 'list' ? 'book-card--list' : 'book-card--grid'}`}>
      {/* Book Cover */}
      <div className="book-card__cover" style={{ '--genre-color': genreColor }}>
        <span className="book-card__cover-emoji">{cover}</span>
        <div className="book-card__cover-spine" />
        <span className="book-card__genre-badge" style={{ background: genreColor }}>
          {genre}
        </span>
      </div>

      {/* Book Info */}
      <div className="book-card__info">
        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__author">by {author}</p>

        <div className="book-card__meta">
          <div className="book-card__stars">{renderStars(rating)}</div>
          <span className="book-card__rating-value">{rating}</span>
        </div>

        <div className="book-card__footer">
          <span className="book-card__price">${price.toFixed(2)}</span>
          <button className="book-card__btn" aria-label={`Add ${title} to cart`}>
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
