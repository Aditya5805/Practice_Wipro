// ============================================
// Challenge 6: Events Module
// File: events-demo.js
// Run:  node events-demo.js
// ============================================

const EventEmitter = require("events");

// ── Create a custom NotificationSystem class ──
class NotificationSystem extends EventEmitter {
  constructor() {
    super();
    this.activeSessions = {};
  }

  // Method to trigger login
  login(username) {
    const sessionId = `sess_${Date.now()}`;
    this.activeSessions[username] = sessionId;
    this.emit("userLoggedIn", { username, sessionId, time: new Date() });
  }

  // Method to trigger logout
  logout(username) {
    const sessionId = this.activeSessions[username] || "N/A";
    delete this.activeSessions[username];
    this.emit("userLoggedOut", { username, sessionId, time: new Date() });
  }
}

// ── Instantiate the system ──
const notify = new NotificationSystem();

// ── Register Event Listeners ──

// Listener: userLoggedIn
notify.on("userLoggedIn", (data) => {
  console.log(`User ${data.username} logged in.`);
  console.log(`  → Session ID : ${data.sessionId}`);
  console.log(`  → Time       : ${data.time.toLocaleTimeString()}\n`);
});

// Listener: userLoggedOut
notify.on("userLoggedOut", (data) => {
  console.log(`User ${data.username} logged out.`);
  console.log(`  → Session ID : ${data.sessionId}`);
  console.log(`  → Time       : ${data.time.toLocaleTimeString()}\n`);
});

// BONUS Listener: sessionExpired
notify.on("sessionExpired", (data) => {
  console.log(`⚠️  Session expired for user: ${data.username}`);
  console.log(`  → Session ID : ${data.sessionId}`);
  console.log(`  → Expired at : ${data.time.toLocaleTimeString()}\n`);
});

// ── Emit Events ──
console.log("========================================");
console.log("  Challenge 6 — Events Module Demo");
console.log("========================================\n");

// Simulate John logging in
notify.login("John");

// Simulate John logging out after 2 seconds
setTimeout(() => {
  notify.logout("John");
}, 2000);

// Simulate Alice logging in
setTimeout(() => {
  notify.login("Alice");
}, 1000);

// BONUS: Emit sessionExpired for Alice after 5 seconds
setTimeout(() => {
  notify.emit("sessionExpired", {
    username: "Alice",
    sessionId: notify.activeSessions["Alice"] || "sess_expired",
    time: new Date(),
  });
}, 5000);

// Final message after all events
setTimeout(() => {
  console.log("========================================");
  console.log(`Total registered event types: ${notify.eventNames().join(", ")}`);
  console.log("  Events demo complete!");
  console.log("========================================");
}, 6000);
