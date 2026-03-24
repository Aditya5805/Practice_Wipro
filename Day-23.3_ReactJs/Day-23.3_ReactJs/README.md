# Day 23.3 — Asynchronous Programming in Node.js

Three Node.js challenges demonstrating **Callbacks**, **Promises**, and **Async/Await**.  
No `npm install` required — all modules are built into Node.js.

---

## 📁 Project Structure

```
Day-23.3_ReactJs/
├── callbacks.js       ← Challenge 7: fs + Callbacks
├── promises.js        ← Challenge 8: fs.promises + Chained .then()/.catch()
├── async-await.js     ← Challenge 9: async/await + try/catch
├── data.txt           ← Source file for Challenge 7
├── input.txt          ← Source file for Challenges 8 & 9
├── output.txt         ← Created by Challenge 8 at runtime
├── output-async.txt   ← Created by Challenge 9 at runtime
├── package.json
└── README.md
```

---

## 🚀 Running Each Challenge

### Challenge 7 — Callbacks
```bash
node callbacks.js
# OR
npm run callback
```
**Expected Output:**
```
[1] Script started — fs.readFile() called (async, non-blocking)
[2] This line runs IMMEDIATELY after the read is triggered
[3] This logs BEFORE the file read callback fires — proving async behavior

-------- File Contents --------
Hello from data.txt! ...
-------------------------------
[4] Read operation completed
✅  BONUS: Confirmation delayed by 1 second using setTimeout()
```
- Uses `fs.readFile()` with a **callback function**
- Demonstrates **non-blocking** behavior (lines 1→2→3 log before callback fires)
- **Bonus:** `setTimeout()` adds a 1-second delay before printing confirmation

---

### Challenge 8 — Promises
```bash
node promises.js
# OR
npm run promise
```
**Expected Output:**
```
✅ Step 1: File read successfully from input.txt
✅ Step 2: Content written successfully to output.txt
✅ Step 3: Verification — output.txt contents: ...
File copied successfully!
```
- Uses `fs.promises` with chained `.then()` — no callback nesting
- **Bonus:** `.catch()` handles all errors gracefully
- Creates `output.txt` as a copy of `input.txt`

---

### Challenge 9 — Async/Await
```bash
node async-await.js
# OR
npm start
```
**Expected Output:**
```
⏳ Step 1: Reading input.txt...
✅ File read successfully!
⏳ Simulating a slow operation (1 second delay)...
✅ Delay complete!
⏳ Step 2: Writing content to output-async.txt...
✅ Content written successfully!
⏳ Step 3: Verifying output-async.txt...
File copied successfully!
```
- Same file-copy operation as Challenge 8 but with **async/await** syntax
- Wrapped in **try/catch** for graceful error handling
- **Bonus:** `await new Promise(res => setTimeout(res, 1000))` simulates a slow operation
- Creates `output-async.txt` as a copy of `input.txt`

---

## 📊 Comparison: Callbacks vs Promises vs Async/Await

| Feature | Callbacks | Promises | Async/Await |
|---|---|---|---|
| Syntax | Nested functions | `.then().catch()` chain | `async/await` + `try/catch` |
| Readability | Hard to read (callback hell) | Better | Best (synchronous-looking) |
| Error Handling | `if (err)` check | `.catch()` | `try/catch` |
| Used In | Challenge 7 | Challenge 8 | Challenge 9 |

---

## 📋 Self-Evaluation Checklist

| Metric | Challenge | Status |
|---|---|---|
| Used callback structure correctly | 7 | ✅ |
| No blocking behavior observed | 7 | ✅ |
| `setTimeout()` delay bonus | 7 | ✅ |
| Used Promises correctly | 8 | ✅ |
| Handled `.then()` and `.catch()` | 8 | ✅ |
| Used `async/await` properly | 9 | ✅ |
| Wrapped logic in `try/catch` | 9 | ✅ |
| Graceful error handling | 9 | ✅ |
| Artificial delay bonus | 9 | ✅ |
