# BookVerse — Day 24.2 React Challenge

**Day 11: Component Composition & Styling**  
*BookVerse: Author Details and Styling the Components*

---

## ✅ Acceptance Criteria Checklist

| Requirement | Implementation | Status |
|---|---|---|
| `AuthorInfo` **class component** — bio + top 3 books | `src/components/AuthorInfo.js` | ✅ |
| **Refs (Uncontrolled Component)** — focus search on button click | `searchInputRef` in `BookList.js`, "🎯 Focus Search" button | ✅ |
| **PropTypes** validation in `BookCard` | `BookCard.propTypes` — all props validated | ✅ |
| **Lifecycle methods** — `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | `AuthorInfo.js` — logs to console | ✅ |
| **Bootstrap** for layout (cards, grid) | `bootstrap@5.3.0` via npm + CDN in `index.html` | ✅ |
| **Composable components** — `BookCard` + `AuthorInfo` + `BookList` combined | `BookList` renders both; `App` composes everything | ✅ |

---

## 🗂️ Project Structure

```
Day-24.2_ReactJs/
├── public/
│   └── index.html              # Bootstrap 5 CDN link
├── src/
│   ├── data/
│   │   └── booksData.js        # Shared books + authors data
│   ├── components/
│   │   ├── BookCard.js         # Functional component + PropTypes
│   │   ├── BookCard.css
│   │   ├── AuthorInfo.js       # CLASS component + lifecycle methods
│   │   ├── AuthorInfo.css
│   │   ├── BookList.js         # Composer: refs, state, composes BookCard + AuthorInfo
│   │   └── BookList.css
│   ├── App.js                  # Root: Navbar, Hero, BookList
│   ├── App.css
│   ├── index.js                # Bootstrap CSS imported here
│   └── index.css               # Global styles + CSS variables
└── package.json
```

---

## 🔑 Technical Concepts Demonstrated

### 1. Class Component (`AuthorInfo`)
```jsx
class AuthorInfo extends Component {
  componentDidMount()      // logs author load
  componentDidUpdate()     // logs author change
  componentWillUnmount()   // logs cleanup
  render()                 // displays bio + top 3 books
}
```

### 2. Refs — Uncontrolled Component Focus
```jsx
const searchInputRef = useRef(null);

// Button click → imperatively focus input
const handleFocusSearch = () => {
  searchInputRef.current.focus();
  searchInputRef.current.select();
};

<input ref={searchInputRef} value={searchQuery} onChange={...} />
<button onClick={handleFocusSearch}>🎯 Focus Search</button>
```

### 3. PropTypes Validation
```jsx
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
```

### 4. Component Composition
```jsx
// BookList composes BookCard + AuthorInfo side by side
<div className="row">
  <div className="col-lg-8">
    {filteredBooks.map(book => <BookCard {...book} onAuthorClick={handleAuthorClick} />)}
  </div>
  {selectedAuthor && (
    <div className="col-lg-4">
      <AuthorInfo author={selectedAuthor} onClose={handleCloseAuthor} />
    </div>
  )}
</div>
```

### 5. Bootstrap Integration
- `bootstrap@5.3.0` installed via npm
- Bootstrap classes: `navbar`, `container-xl`, `row`, `col-*`, `btn`, `btn-group`, `badge`, `input-group`, `card`, `card-body`
- CDN script also included in `public/index.html`

---

## 🚀 Getting Started

```bash
# Install dependencies (includes react, prop-types, bootstrap)
npm install

# Start development server
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

---

## 🎨 Features

- Warm antiquarian library aesthetic — cream, amber, leather tones
- Cormorant Garamond display font + Outfit body font
- Click any author button on a book card → AuthorInfo panel slides in (class component)
- "🎯 Focus Search" button demonstrates `useRef` for imperative DOM focus
- Open browser console to see lifecycle method logs
- Grid and List view modes with Bootstrap grid
- Real-time search filter (controlled component)
- Responsive layout — author panel moves below on mobile

---

*Built for Great Learning — React Day 11: Component Composition & Styling*
