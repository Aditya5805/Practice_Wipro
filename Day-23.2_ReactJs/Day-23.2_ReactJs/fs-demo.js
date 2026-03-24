// ============================================
// Challenge 4: File System (fs) Module
// File: fs-demo.js
// Run:  node fs-demo.js
// ============================================

// BONUS: Using fs.promises instead of callbacks
const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "feedback.txt");
const userInput = "Node.js is awesome!";

async function writeThenRead() {
  console.log("========================================");
  console.log("  Challenge 4 — fs Module Demo");
  console.log("========================================\n");

  try {
    // ── Step 1: Write to file ──
    console.log(`Writing to file: ${FILE_PATH}`);
    await fs.writeFile(FILE_PATH, userInput, "utf8");
    console.log("Data written successfully.\n");

    // ── Step 2: Read back the file ──
    console.log("Reading file...");
    const content = await fs.readFile(FILE_PATH, "utf8");
    console.log(content);

    // ── Extra: Append more content ──
    await fs.appendFile(FILE_PATH, "\nNode.js core modules are powerful!", "utf8");
    console.log("\n[Appended extra line to file]");

    console.log("\nReading updated file...");
    const updatedContent = await fs.readFile(FILE_PATH, "utf8");
    console.log(updatedContent);

    // ── File stats ──
    const stats = await fs.stat(FILE_PATH);
    console.log(`\nFile size   : ${stats.size} bytes`);
    console.log(`Last modified: ${stats.mtime.toLocaleString()}`);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

writeThenRead();
