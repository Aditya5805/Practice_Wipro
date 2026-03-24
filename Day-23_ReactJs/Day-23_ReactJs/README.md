# Day 23 — Introduction to Node.js & Basics

Three Node.js challenges covering fundamentals, npm, and CLI applications.

---

## 📁 Project Structure

```
Day-23_ReactJs/
├── hello-node.js    ← Challenge 1: Node.js Fundamentals
├── banner.js        ← Challenge 2: npm + chalk + figlet
├── greet.js         ← Challenge 3: CLI App with process.argv + moment
├── package.json     ← npm config with scripts & dependencies
└── README.md
```

---

## ⚙️ Setup

```bash
cd Day-23_ReactJs
npm install
```

---

## 🚀 Running Each Challenge

### Challenge 1 — Node.js Fundamentals
```bash
node hello-node.js
# OR
npm run hello
```
**What it does:**
- Logs Node.js version using `process.version`
- Logs current file name (`__filename`) and directory (`__dirname`)
- Prints a welcome message every 3 seconds via `setInterval`
- **Bonus:** Auto-stops after 10 seconds using `clearInterval`

---

### Challenge 2 — npm + Stylized Banner
```bash
npm start
# OR
node banner.js
```
**What it does:**
- Generates a colorful ASCII-art "Welcome to Node.js" banner
- Uses `figlet` for ASCII text art
- Uses `chalk` for terminal colors
- Demonstrates external npm package usage

---

### Challenge 3 — CLI Greeter App
```bash
node greet.js John
# Output: Hello, John! Today is Wed Mar 25 2026, 10:45 AM
```
**What it does:**
- Accepts a name via `process.argv[2]`
- Displays greeting with current date & time
- **Bonus:** Uses `moment` npm package for formatted date/time

---

## 📋 Self-Evaluation Checklist

| Metric | Challenge | Status |
|---|---|---|
| Run Node script from terminal | 1 | ✅ |
| Used `__filename`, `__dirname` | 1 | ✅ |
| Used `setInterval` + `clearInterval` | 1 | ✅ |
| Created `package.json` correctly | 2 | ✅ |
| Installed npm dependencies | 2 | ✅ |
| Used `npm start` script | 2 | ✅ |
| Used `process.argv` | 3 | ✅ |
| Output matches expected format | 3 | ✅ |
| Used external npm package (moment) | 3 | ✅ |
