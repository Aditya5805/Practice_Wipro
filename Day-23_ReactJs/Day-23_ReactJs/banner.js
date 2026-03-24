// ============================================
// Challenge 2: Understanding npm
// File: banner.js
// Setup: npm install   (installs chalk + figlet)
// Run:   npm start  OR  node banner.js
// ============================================

const figlet = require("figlet");
const chalk  = require("chalk");

// Display a colorful stylized "Welcome to Node.js" banner
figlet("Welcome to\n Node.js!", {
  font: "Big",
  horizontalLayout: "default",
  verticalLayout: "default",
}, (err, data) => {
  if (err) {
    console.error(chalk.red("Error generating banner:", err.message));
    return;
  }

  // Print the banner with gradient-like coloring
  const lines = data.split("\n");
  const colors = [
    chalk.hex("#f0c060"),
    chalk.hex("#f0a040"),
    chalk.hex("#60c0f0"),
    chalk.hex("#40a0e0"),
    chalk.hex("#4ede9a"),
  ];

  console.log("\n");
  lines.forEach((line, i) => {
    const color = colors[i % colors.length];
    console.log(color(line));
  });

  console.log("\n" + chalk.bold.green("  ✅  npm is working! chalk + figlet loaded successfully."));
  console.log(chalk.cyan(`  📦  Node.js Version : ${process.version}`));
  console.log(chalk.yellow(`  📁  Running from    : ${__dirname}`));
  console.log(chalk.magenta(`  🕐  Started at      : ${new Date().toLocaleString()}`));
  console.log("\n");
});
