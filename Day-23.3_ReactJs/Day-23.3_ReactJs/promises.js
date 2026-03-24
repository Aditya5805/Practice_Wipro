// ============================================
// Challenge 8: Promises
// File: promises.js
// Run:  node promises.js
// ============================================

const fs   = require("fs").promises;   // fs.promises API
const path = require("path");

const INPUT_FILE  = path.join(__dirname, "input.txt");
const OUTPUT_FILE = path.join(__dirname, "output.txt");

console.log("========================================");
console.log("  Challenge 8 — Promises Demo");
console.log("========================================\n");

// ── Chained Promises: read input.txt → write to output.txt ──
fs.readFile(INPUT_FILE, "utf8")

  .then((content) => {
    console.log("✅ Step 1: File read successfully from input.txt");
    console.log("-------- Content Read --------");
    console.log(content);
    console.log("------------------------------\n");

    // Chain: write same content to output.txt
    return fs.writeFile(OUTPUT_FILE, content, "utf8");
  })

  .then(() => {
    console.log("✅ Step 2: Content written successfully to output.txt");
    // Chain: read back output.txt for verification
    return fs.readFile(OUTPUT_FILE, "utf8");
  })

  .then((verifyContent) => {
    console.log("✅ Step 3: Verification — output.txt contents:");
    console.log("-------- output.txt --------");
    console.log(verifyContent);
    console.log("----------------------------");
    console.log("File copied successfully!");
    console.log(`\n✅  Chained Promises completed without callback nesting!`);
  })

  // BONUS: .catch() for error handling
  .catch((err) => {
    console.error("❌ Promise chain error:", err.message);
    console.error("   Code   :", err.code);
    console.error("   Path   :", err.path);
  });
