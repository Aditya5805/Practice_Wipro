// BookList.js
// Parent component that renders multiple BookCard components using props
// Manages viewMode state (Grid / List) and search filtering

import React, { useState } from 'react';
import BookCard from './BookCard';
import './BookList.css';

// Featured books data
const BOOKS_DATA = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 14.99,
    genre: 'Fiction',
    rating: 4.5,
    cover: '📚',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 12.99,
    genre: 'Sci-Fi',
    rating: 5,
    cover: '🌌',
  },
  {
    id: 3,
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    price: 13.99,
    genre: 'Mystery',
    rating: 4,
    cover: '🔍',
  },
  {
    id: 4,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    price: 16.99,
    genre: 'Fantasy',
    rating: 5,
    cover: '⚔️',
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 15.49,
    genre: 'History',
    rating: 4.5,
    cover: '🌍',
  },
  {
    id: 6,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 9.99,
    genre: 'Classic',
    rating: 4,
    cover: '🌹',
  },
  {
    id: 7,
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    price: 11.99,
    genre: 'Sci-Fi',
    rating: 4.5,
    cover: '🚀',
  },
  {
    id: 8,
    title: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafón',
    price: 13.49,
    genre: 'Mystery',
    rating: 4,
    cover: '🕯️',
  },
];

/**
 * BookList Component
 * State:
 *   - viewMode: "grid" | "list" — controls layout of BookCard components
 *   - searchQuery: string — controlled component for filtering books
 */
const BookList = () => {
  // State: toggle view mode between "grid" and "list"
  const [viewMode, setViewMode] = useState('grid');

  // State: controlled component for search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on search query (title or author)
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  });

  // Handle controlled search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="book-list-section">
      {/* Section Header */}
      <div className="book-list__header">
        <div className="book-list__title-group">
          <span className="book-list__label">Featured Collection</span>
          <h2 className="book-list__title">Popular Right Now</h2>
        </div>

        {/* Controls: Search + View Toggle */}
        <div className="book-list__controls">
          {/* Controlled Search Input */}
          <div className="search-wrapper">
            <span className="search-icon">🔎</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search by title, author or genre…"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search books"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="view-toggle" role="group" aria-label="View mode">
            <button
              className={`view-toggle__btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              title="Grid view"
            >
              <GridIcon />
              <span>Grid</span>
            </button>
            <button
              className={`view-toggle__btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-pressed={viewMode === 'list'}
              title="List view"
            >
              <ListIcon />
              <span>List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="book-list__meta">
        <span className="book-list__count">
          {filteredBooks.length === 0
            ? 'No books found'
            : `${filteredBooks.length} book${filteredBooks.length !== 1 ? 's' : ''}${searchQuery ? ` for "${searchQuery}"` : ''}`}
        </span>
      </div>

      {/* Book Cards Grid/List */}
      {filteredBooks.length > 0 ? (
        <div className={`book-list__grid ${viewMode === 'list' ? 'book-list__grid--list' : 'book-list__grid--grid'}`}>
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              style={{ animationDelay: `${index * 0.06}s` }}
              className="book-list__item"
            >
              <BookCard {...book} viewMode={viewMode} />
            </div>
          ))}
        </div>
      ) : (
        <div className="book-list__empty">
          <span className="book-list__empty-icon">📭</span>
          <p>No books match your search. Try a different keyword.</p>
          <button className="book-list__empty-btn" onClick={handleClearSearch}>
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
};

// SVG Icon Components
const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="1" width="6" height="6" rx="1" />
    <rect x="9" y="1" width="6" height="6" rx="1" />
    <rect x="1" y="9" width="6" height="6" rx="1" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="2" width="14" height="3" rx="1" />
    <rect x="1" y="6.5" width="14" height="3" rx="1" />
    <rect x="1" y="11" width="14" height="3" rx="1" />
  </svg>
);

export default BookList;
