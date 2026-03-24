// ============================================
// Challenge 5: HTTP Module
// File: server.js
// Run:  node server.js
// Visit: http://localhost:3000
// Stop:  Ctrl + C
// ============================================

const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT      = 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

// ── Helper: serve a static HTML file (BONUS) ──
function serveHTML(res, filename, statusCode = 200) {
  const filePath = path.join(PUBLIC_DIR, filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
      return;
    }
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// ── Create HTTP Server ──
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${url}`);

  // Route handling
  switch (url) {
    case "/":
      serveHTML(res, "index.html");   // BONUS: serves static HTML
      break;

    case "/about":
      serveHTML(res, "about.html");   // BONUS: serves static HTML
      break;

    case "/contact":
      serveHTML(res, "contact.html");
      break;

    default:
      // 404 page
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`
        <html><body style="font-family:sans-serif;background:#0d0f14;color:#e8eaf2;display:flex;
          align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;">
          <h1 style="color:#ff6b6b;font-size:3rem;">404</h1>
          <p>Page <strong>${url}</strong> not found.</p>
          <a href="/" style="color:#60c0f0;">← Back to Home</a>
        </body></html>
      `);
  }
});

// ── Start Server ──
server.listen(PORT, () => {
  console.log("========================================");
  console.log("  Challenge 5 — Node.js HTTP Server");
  console.log("========================================");
  console.log(`✅  Server running at http://localhost:${PORT}`);
  console.log("   Routes available:");
  console.log(`   GET /         → Home page`);
  console.log(`   GET /about    → About page`);
  console.log(`   GET /contact  → Contact page`);
  console.log("   Press Ctrl + C to stop the server.");
  console.log("========================================\n");
});

// ── Graceful shutdown on Ctrl+C ──
process.on("SIGINT", () => {
  console.log("\n\n🛑  SIGINT received — shutting down server...");
  server.close(() => {
    console.log("✅  Server closed gracefully. Bye!\n");
    process.exit(0);
  });
});
