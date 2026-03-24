// src/components/BookList.js
// Parent component — composes BookCard + AuthorInfo
// Demonstrates:
//   • Refs (Uncontrolled Component) — searchInputRef to imperatively focus the input
//   • Controlled component — viewMode & searchQuery state
//   • Component composition — BookCard + AuthorInfo side by side

import React, { useState, useRef } from 'react';
import BookCard from './BookCard';
import AuthorInfo from './AuthorInfo';
import { BOOKS, AUTHORS } from '../data/booksData';
import './BookList.css';

/**
 * BookList — Functional Component (Parent / Composer)
 *
 * State:
 *   viewMode       — "grid" | "list"
 *   searchQuery    — controlled search value
 *   selectedAuthor — author object currently shown in AuthorInfo panel
 *
 * Refs (Uncontrolled):
 *   searchInputRef — used to imperatively focus the <input> when "Focus Search" button is clicked
 */
const BookList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  /* ── Ref for uncontrolled focus ── */
  const searchInputRef = useRef(null);

  // Focus the search input imperatively via ref
  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.select();
    }
  };

  // Handle controlled search input
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleClearSearch  = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  // Open AuthorInfo panel
  const handleAuthorClick = (authorName) => {
    const authorData = AUTHORS[authorName];
    if (authorData) setSelectedAuthor(authorData);
  };

  // Close AuthorInfo panel
  const handleCloseAuthor = () => setSelectedAuthor(null);

  // Filter books by title / author / genre
  const filteredBooks = BOOKS.filter((book) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      book.title.toLowerCase().includes(q)  ||
      book.author.toLowerCase().includes(q) ||
      book.genre.toLowerCase().includes(q)
    );
  });

  return (
    <section className="bv-booklist">
      {/* ── Toolbar ── */}
      <div className="bv-booklist__toolbar">
        <div className="bv-booklist__title-group">
          <span className="bv-booklist__eyebrow">Featured Collection</span>
          <h2 className="bv-booklist__heading">Popular Right Now</h2>
        </div>

        <div className="bv-booklist__controls">
          {/* Search wrapper — input uses ref (uncontrolled focus) + controlled value */}
          <div className="bv-search-wrapper input-group">
            <span className="input-group-text bv-search-icon">🔎</span>
            {/*
              This input is a CONTROLLED component (value + onChange),
              but the ref makes it an UNCONTROLLED target for imperative focus.
              Both patterns can coexist — ref for focus, state for value.
            */}
            <input
              ref={searchInputRef}
              type="text"
              className="form-control bv-search-input"
              placeholder="Search by title, author, or genre…"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search books"
            />
            {searchQuery && (
              <button className="btn btn-outline-secondary bv-search-clear" onClick={handleClearSearch}>
                ✕
              </button>
            )}
          </div>

          {/* Focus button — demonstrates ref usage */}
          <button
            className="btn btn-sm bv-focus-btn"
            onClick={handleFocusSearch}
            title="Focus search via ref"
          >
            🎯 Focus Search
          </button>

          {/* View toggle — Bootstrap btn-group */}
          <div className="btn-group bv-view-toggle" role="group" aria-label="View mode">
            <button
              type="button"
              className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setViewMode('grid')}
            >
              <GridIcon /> Grid
            </button>
            <button
              type="button"
              className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setViewMode('list')}
            >
              <ListIcon /> List
            </button>
          </div>
        </div>
      </div>

      {/* ── Results meta ── */}
      <div className="bv-booklist__meta">
        <small className="text-muted">
          {filteredBooks.length === 0
            ? 'No books found'
            : `${filteredBooks.length} book${filteredBooks.length !== 1 ? 's' : ''}${searchQuery ? ` matching "${searchQuery}"` : ''}`}
        </small>
        {selectedAuthor && (
          <small className="bv-booklist__author-hint">
            📖 Viewing author: <strong>{selectedAuthor.name}</strong>
          </small>
        )}
      </div>

      {/* ── Main layout: Books + Author panel (Bootstrap row/col) ── */}
      <div className="row g-0 bv-booklist__main">

        {/* Books column */}
        <div className={selectedAuthor ? 'col-12 col-lg-8' : 'col-12'}>
          {filteredBooks.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4 bv-booklist__grid'
                : 'bv-booklist__list'
            }>
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className={viewMode === 'grid' ? 'col' : 'bv-booklist__list-item'}
                >
                  {/* BookCard composed here */}
                  <BookCard
                    {...book}
                    viewMode={viewMode}
                    onAuthorClick={handleAuthorClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bv-booklist__empty text-center py-5">
              <span style={{ fontSize: '2.5rem' }}>📭</span>
              <p className="mt-3 text-muted">No books match your search.</p>
              <button className="btn btn-sm btn-outline-secondary mt-2" onClick={handleClearSearch}>
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* AuthorInfo panel column — composed alongside BookList */}
        {selectedAuthor && (
          <div className="col-12 col-lg-4 bv-booklist__author-col">
            {/* AuthorInfo class component composed here */}
            <AuthorInfo
              author={selectedAuthor}
              onClose={handleCloseAuthor}
            />
          </div>
        )}
      </div>

      {/* Hint when no author selected */}
      {!selectedAuthor && (
        <p className="bv-booklist__hint">
          💡 Click an author's name on any book card to view their full profile.
        </p>
      )}
    </section>
  );
};

/* ── Icon components ── */
const GridIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="me-1">
    <rect x="1" y="1" width="6" height="6" rx="1" />
    <rect x="9" y="1" width="6" height="6" rx="1" />
    <rect x="1" y="9" width="6" height="6" rx="1" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);

const ListIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="me-1">
    <rect x="1" y="2"   width="14" height="3" rx="1" />
    <rect x="1" y="6.5" width="14" height="3" rx="1" />
    <rect x="1" y="11"  width="14" height="3" rx="1" />
  </svg>
);

export default BookList;
