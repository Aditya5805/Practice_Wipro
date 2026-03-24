// src/data/booksData.js
// Shared data source for books and author details

export const AUTHORS = {
  'Matt Haig': {
    name: 'Matt Haig',
    nationality: 'British',
    born: '1975',
    avatar: '✍️',
    bio:
      'Matt Haig is a British author of fiction and non-fiction. He writes across genres including literary fiction, children\'s literature, and memoir. His book "Reasons to Stay Alive" became a Sunday Times number one bestseller and helped spark public conversations about mental health.',
    topBooks: [
      { title: 'The Midnight Library', year: 2020 },
      { title: 'Reasons to Stay Alive', year: 2015 },
      { title: 'How to Stop Time', year: 2017 },
    ],
  },
  'Frank Herbert': {
    name: 'Frank Herbert',
    nationality: 'American',
    born: '1920',
    avatar: '🚀',
    bio:
      'Frank Herbert was an American science fiction author best known for his Dune series. Dune is frequently cited as the world\'s best-selling science fiction novel. Herbert\'s sweeping ecological and political world-building remains a touchstone of the genre.',
    topBooks: [
      { title: 'Dune', year: 1965 },
      { title: 'Dune Messiah', year: 1969 },
      { title: 'Children of Dune', year: 1976 },
    ],
  },
  'Umberto Eco': {
    name: 'Umberto Eco',
    nationality: 'Italian',
    born: '1932',
    avatar: '🔍',
    bio:
      'Umberto Eco was an Italian medievalist, philosopher, semiotician, and novelist. His debut novel "The Name of the Rose" became an international bestseller. Known for dense, intellectually stimulating prose, he blended historical mystery with philosophical inquiry.',
    topBooks: [
      { title: 'The Name of the Rose', year: 1980 },
      { title: 'Foucault\'s Pendulum', year: 1988 },
      { title: 'Baudolino', year: 2000 },
    ],
  },
  'Brandon Sanderson': {
    name: 'Brandon Sanderson',
    nationality: 'American',
    born: '1975',
    avatar: '⚔️',
    bio:
      'Brandon Sanderson is an American author of epic fantasy and science fiction. He is known for the Cosmere fictional universe, which interconnects many of his novels. His unique "hard magic" systems and meticulous world-building have earned him a devoted global fanbase.',
    topBooks: [
      { title: 'The Way of Kings', year: 2010 },
      { title: 'Mistborn: The Final Empire', year: 2006 },
      { title: 'Words of Radiance', year: 2014 },
    ],
  },
  'Yuval Noah Harari': {
    name: 'Yuval Noah Harari',
    nationality: 'Israeli',
    born: '1976',
    avatar: '🌍',
    bio:
      'Yuval Noah Harari is an Israeli public intellectual, historian, and author. His books have sold over 45 million copies worldwide. Harari is a professor of History at the Hebrew University of Jerusalem, specializing in world history and macro-historical processes.',
    topBooks: [
      { title: 'Sapiens', year: 2011 },
      { title: 'Homo Deus', year: 2015 },
      { title: '21 Lessons for the 21st Century', year: 2018 },
    ],
  },
  'Jane Austen': {
    name: 'Jane Austen',
    nationality: 'British',
    born: '1775',
    avatar: '🌹',
    bio:
      'Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Her works of romantic fiction earned her a place as one of the most widely read writers in English literature.',
    topBooks: [
      { title: 'Pride and Prejudice', year: 1813 },
      { title: 'Sense and Sensibility', year: 1811 },
      { title: 'Emma', year: 1815 },
    ],
  },
};

export const BOOKS = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 14.99,
    genre: 'Fiction',
    rating: 4.5,
    cover: '📚',
    year: 2020,
    description: 'A dazzling novel about all the lives you could have lived.',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 12.99,
    genre: 'Sci-Fi',
    rating: 5,
    cover: '🌌',
    year: 1965,
    description: "The world's best-selling science fiction novel.",
  },
  {
    id: 3,
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    price: 13.99,
    genre: 'Mystery',
    rating: 4,
    cover: '🔍',
    year: 1980,
    description: 'A medieval murder mystery of extraordinary depth.',
  },
  {
    id: 4,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    price: 16.99,
    genre: 'Fantasy',
    rating: 5,
    cover: '⚔️',
    year: 2010,
    description: 'Epic fantasy with a richly imagined world and hard magic.',
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 15.49,
    genre: 'History',
    rating: 4.5,
    cover: '🌍',
    year: 2011,
    description: 'A brief history of humankind across 70,000 years.',
  },
  {
    id: 6,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 9.99,
    genre: 'Classic',
    rating: 4,
    cover: '🌹',
    year: 1813,
    description: "Austen's masterwork of wit, romance, and social satire.",
  },
];

export const GENRE_COLORS = {
  Fiction: { bg: '#fde8e8', text: '#b83232', border: '#f5c4c4' },
  'Sci-Fi': { bg: '#e8ecfd', text: '#2c4eb8', border: '#c4ccf5' },
  Mystery: { bg: '#f0e8fd', text: '#6b2cb8', border: '#d4c4f5' },
  Fantasy: { bg: '#e8fde8', text: '#2b8b3e', border: '#b8ecc2' },
  History: { bg: '#fdf0e8', text: '#b86a2c', border: '#f5d4b8' },
  Classic: { bg: '#fdf8e8', text: '#8b7420', border: '#f0e3a0' },
};
