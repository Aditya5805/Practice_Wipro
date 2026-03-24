# BookVerse — Day 24 React Challenge

**Day 1: React Basics & Component Fundamentals**

## 📖 Overview

BookVerse is a React application that demonstrates core React fundamentals through a featured books home page.

---

## ✅ Acceptance Criteria Checklist

| Requirement | Status |
|---|---|
| Initialize React app using create-react-app | ✅ |
| `BookCard` functional component with title, author, price | ✅ |
| `BookList` parent component renders multiple `BookCard` via props | ✅ |
| State to toggle between "Grid" and "List" view modes | ✅ |
| Button click events to switch layout | ✅ |
| Controlled search input that filters displayed books | ✅ |

---

## 🗂️ Project Structure

```
src/
├── index.js                  # React entry point
├── index.css                 # Global CSS variables & animations
├── App.js                    # Root component (Navbar, Hero, Main, Footer)
├── App.css                   # App-level layout styles
└── components/
    ├── BookCard.js           # Functional component: displays one book
    ├── BookCard.css
    ├── BookList.js           # Parent component: manages state + renders cards
    └── BookList.css
```

---

## 🔑 Technical Concepts Demonstrated

### Functional Components & Props
- `BookCard` receives `title`, `author`, `price`, `genre`, `rating`, `cover`, `viewMode` as props
- `BookList` passes all book data as props to each `BookCard`

### State Management (useState)
- `viewMode` state: `"grid"` | `"list"` — toggles the layout
- `searchQuery` state: controlled input value for real-time filtering

### Event Handling
- Grid/List toggle buttons call `setViewMode('grid')` or `setViewMode('list')`
- Clear button resets the search query

### Controlled Components
- Search `<input>` has its `value` bound to `searchQuery` state
- `onChange` handler updates state on every keystroke → triggers re-render → filters books

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
```

App will be available at [http://localhost:3000](http://localhost:3000)

---

## 🎨 Features

- Dark editorial theme with Playfair Display serif typography
- Genre-colored badges and book spine accent
- Grid view: card layout with 4 columns
- List view: horizontal compact layout
- Real-time search filtering by title, author, or genre
- Animated card transitions with staggered entry
- Responsive design for mobile screens

---

*Built for Great Learning — React Fundamentals Coding Challenge*
