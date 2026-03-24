// ============================================
// Challenge 9: Async / Await
// File: async-await.js
// Run:  node async-await.js
// ============================================

const fs   = require("fs").promises;
const path = require("path");

const INPUT_FILE  = path.join(__dirname, "input.txt");
const OUTPUT_FILE = path.join(__dirname, "output-async.txt");

// ── BONUS: helper to simulate a slow/delayed operation ──
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main async function ──
async function copyFile() {
  console.log("========================================");
  console.log("  Challenge 9 — Async / Await Demo");
  console.log("========================================\n");

  try {
    // Step 1: Read input.txt
    console.log("⏳ Step 1: Reading input.txt...");
    const content = await fs.readFile(INPUT_FILE, "utf8");
    console.log("✅ File read successfully!\n");
    console.log("-------- Content Read --------");
    console.log(content);
    console.log("------------------------------\n");

    // BONUS: artificial delay to simulate a slow operation
    console.log("⏳ Simulating a slow operation (1 second delay)...");
    await delay(1000);
    console.log("✅ Delay complete!\n");

    // Step 2: Write to output-async.txt
    console.log("⏳ Step 2: Writing content to output-async.txt...");
    await fs.writeFile(OUTPUT_FILE, content, "utf8");
    console.log("✅ Content written successfully!\n");

    // Step 3: Verify by reading output-async.txt back
    console.log("⏳ Step 3: Verifying output-async.txt...");
    await delay(500); // small delay before verification
    const verified = await fs.readFile(OUTPUT_FILE, "utf8");
    console.log("-------- output-async.txt --------");
    console.log(verified);
    console.log("----------------------------------");

    console.log("File copied successfully!");
    console.log("\n✅  async/await syntax is cleaner than nested callbacks or .then() chains!");
    console.log("✅  try/catch handles all errors gracefully.");
    console.log(`✅  BONUS: Used 'await new Promise(res => setTimeout(res, ms))' for artificial delay.`);

  } catch (err) {
    // Graceful error handling with try/catch
    console.error("\n❌ Async/Await Error Caught in try/catch:");
    console.error("   Message :", err.message);
    console.error("   Code    :", err.code || "N/A");
    console.error("   Path    :", err.path || "N/A");
  }
}

// ── Run ──
copyFile();
