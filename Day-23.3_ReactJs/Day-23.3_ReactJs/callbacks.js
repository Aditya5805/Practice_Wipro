// ============================================
// Challenge 7: Callbacks
// File: callbacks.js
// Run:  node callbacks.js
// ============================================

const fs   = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "data.txt");

console.log("========================================");
console.log("  Challenge 7 — Callbacks Demo");
console.log("========================================\n");

// Prove non-blocking: this logs BEFORE the file read completes
console.log("[1] Script started — fs.readFile() called (async, non-blocking)");
console.log("[2] This line runs IMMEDIATELY after the read is triggered\n");

// ── Read file using callback ──
fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading file:", err.message);
    return;
  }

  // BONUS: intentional delay using setTimeout() before confirmation
  setTimeout(() => {
    console.log("-------- File Contents --------");
    console.log(data);
    console.log("-------------------------------");
    console.log("[4] Read operation completed");
    console.log(`    File: ${FILE_PATH}`);
    console.log(`    Size: ${Buffer.byteLength(data, "utf8")} bytes`);
    console.log("\n✅  BONUS: Confirmation delayed by 1 second using setTimeout()");
  }, 1000); // 1 second delay before printing confirmation
});

// This proves the callback is async (non-blocking)
console.log("[3] This logs BEFORE the file read callback fires — proving async behavior\n");
