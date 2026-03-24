// ============================================
// Challenge 1: Node.js Fundamentals
// File: hello-node.js
// Run: node hello-node.js
// ============================================

// 1. Log Node.js version
console.log("========================================");
console.log("  Node.js Fundamentals — Challenge 1");
console.log("========================================");
console.log(`Node.js Version  : ${process.version}`);

// 2. Log current file name and directory
console.log(`File Name        : ${__filename}`);
console.log(`Directory        : ${__dirname}`);
console.log("========================================\n");

// 3. Welcome message every 3 seconds using setInterval
let count = 0;

const interval = setInterval(() => {
  count++;
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] 👋 Welcome to Node.js! (Message #${count})`);
}, 3000);

// BONUS: Stop after 10 seconds using clearInterval
setTimeout(() => {
  clearInterval(interval);
  console.log("\n✅ Timer stopped after 10 seconds. Total messages printed:", count);
  console.log("   clearInterval() was used to stop the setInterval timer.");
}, 10000);
