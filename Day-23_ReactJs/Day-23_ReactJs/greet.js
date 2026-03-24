// ============================================
// Challenge 3: Simple Node CLI Application
// File: greet.js
// Run:  node greet.js John
// ============================================

const moment = require("moment"); // BONUS: using moment for date formatting

// Read name from command-line argument (process.argv[2])
const name = process.argv[2];

if (!name) {
  console.error("❌  Usage: node greet.js <YourName>");
  console.error("    Example: node greet.js John");
  process.exit(1);
}

// BONUS: Format date/time using moment package
const formattedDate = moment().format("ddd MMM D YYYY, hh:mm A");

// Display the greeting
console.log("========================================");
console.log(`Hello, ${name}! Today is ${formattedDate}`);
console.log("========================================");

// Additional info using process.argv
console.log("\n--- Debug Info ---");
console.log("process.argv:", process.argv);
console.log(`process.argv[0] → Node executable : ${process.argv[0]}`);
console.log(`process.argv[1] → Script path     : ${process.argv[1]}`);
console.log(`process.argv[2] → Name argument   : ${process.argv[2]}`);
