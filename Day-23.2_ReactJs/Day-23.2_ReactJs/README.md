# Day 23 — Node.js Core Modules

Three Node.js challenges covering the `fs`, `http`, and `events` core modules.  
No npm install required — all modules are built into Node.js.

---

## 📁 Project Structure

```
Day-23_ReactJs/
├── fs-demo.js          ← Challenge 4: fs module (read/write file)
├── server.js           ← Challenge 5: http module (multi-route server)
├── events-demo.js      ← Challenge 6: events module (EventEmitter)
├── public/
│   ├── index.html      ← Served at /
│   ├── about.html      ← Served at /about
│   └── contact.html    ← Served at /contact
├── package.json
└── README.md
```

---

## 🚀 Running Each Challenge

### Challenge 4 — File System (fs) Module
```bash
node fs-demo.js
# OR
npm run fs
```
**Expected Output:**
```
Writing to file: .../feedback.txt
Data written successfully.

Reading file...
Node.js is awesome!
```
- Uses `fs.promises.writeFile` and `fs.promises.readFile` (**Bonus**: async/await, no callbacks)
- Also demonstrates `appendFile` and `stat`
- Creates `feedback.txt` in the project directory

---

### Challenge 5 — HTTP Module
```bash
node server.js
# OR
npm start
```
**Routes:**
| URL | Response |
|-----|----------|
| `http://localhost:3000/` | Home HTML page |
| `http://localhost:3000/about` | About HTML page |
| `http://localhost:3000/contact` | Contact HTML page |
| Any other URL | 404 page |

- **Bonus**: Serves static `.html` files from the `public/` folder instead of plain text
- Press `Ctrl + C` to gracefully stop the server

---

### Challenge 6 — Events Module
```bash
node events-demo.js
# OR
npm run events
```
**Expected Output:**
```
User John logged in.
  → Session ID : sess_xxxxx
  → Time       : 10:45:00 AM

User Alice logged in.
  ...
User John logged out.
  ...
⚠️  Session expired for user: Alice   ← BONUS after 5s
```
- Uses `EventEmitter` with custom `userLoggedIn` and `userLoggedOut` events
- **Bonus**: Emits `sessionExpired` event after 5 seconds using `setTimeout`
- Events carry metadata (sessionId, timestamp)

---

## 📋 Self-Evaluation Checklist

| Metric | Challenge | Status |
|---|---|---|
| File created and written successfully | 4 | ✅ |
| Read content printed on console | 4 | ✅ |
| Used `fs.promises` (async version) | 4 | ✅ |
| HTTP server created | 5 | ✅ |
| Handled multiple routes (`/`, `/about`, `/contact`) | 5 | ✅ |
| Graceful shutdown with Ctrl+C (`SIGINT`) | 5 | ✅ |
| Serves static HTML files (Bonus) | 5 | ✅ |
| Used `EventEmitter` correctly | 6 | ✅ |
| Registered event listeners | 6 | ✅ |
| Emitted events dynamically | 6 | ✅ |
| `sessionExpired` after 5 seconds (Bonus) | 6 | ✅ |
