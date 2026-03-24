<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Spring Flowers School</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <!-- HEADER / LOGO -->
  <header class="header">
    <div class="logo-area">
      <div class="logo-icon">🌸</div>
      <div class="logo-text">
        <span class="school-name">Spring Flowers</span>
        <span class="school-sub">Academy</span>
      </div>
    </div>
    <nav class="navbar">
      <a href="#" class="nav-link active">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link" id="profileBtn" onclick="showProfile()">Student Profile</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>
  </header>

  <!-- WELCOME PAGE -->
  <section class="welcome-section" id="welcomePage">
    <div class="welcome-overlay"></div>
    <div class="welcome-content">
      <p class="welcome-tag">Welcome to</p>
      <h1 class="welcome-title">Spring Flowers<br/><span>Academy</span></h1>
      <p class="welcome-desc">Nurturing young minds, blooming futures. A place where every student grows with knowledge, creativity, and care.</p>
      <button class="btn-primary" onclick="showProfile()">View Student Profile</button>
    </div>
    <div class="flower-decor">🌸</div>
    <div class="flower-decor2">🌼</div>
  </section>

  <!-- STUDENT PROFILE PAGE -->
  <section class="profile-section hidden" id="profilePage">
    <div class="profile-card">
      <div class="profile-left">
        <div class="student-image-wrapper">
          <div class="student-image">
            <span class="student-avatar">👩‍🎓</span>
          </div>
          <div class="status-badge">Active</div>
        </div>
        <h3 class="student-name">Priya Sharma</h3>
        <p class="student-class">Class X — Section A</p>
        <div class="tags">
          <span class="tag">Science</span>
          <span class="tag">Maths</span>
          <span class="tag">Arts</span>
        </div>
      </div>
      <div class="profile-right">
        <h2 class="profile-heading">Student Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Student ID</span>
            <span class="info-value">SFA-2024-1087</span>
          </div>
          <div class="info-item">
            <span class="info-label">Full Name</span>
            <span class="info-value">Priya Sharma</span>
          </div>
          <div class="info-item">
            <span class="info-label">Date of Birth</span>
            <span class="info-value">12 March 2009</span>
          </div>
          <div class="info-item">
            <span class="info-label">Gender</span>
            <span class="info-value">Female</span>
          </div>
          <div class="info-item">
            <span class="info-label">Class</span>
            <span class="info-value">Class X — Section A</span>
          </div>
          <div class="info-item">
            <span class="info-label">Roll Number</span>
            <span class="info-value">23</span>
          </div>
          <div class="info-item">
            <span class="info-label">Parent / Guardian</span>
            <span class="info-value">Ramesh Sharma</span>
          </div>
          <div class="info-item">
            <span class="info-label">Contact</span>
            <span class="info-value">+91 98765 43210</span>
          </div>
          <div class="info-item">
            <span class="info-label">Address</span>
            <span class="info-value">45, Green Park Colony, New Delhi</span>
          </div>
          <div class="info-item">
            <span class="info-label">Admission Year</span>
            <span class="info-value">2018</span>
          </div>
        </div>
        <button class="btn-back" onclick="showWelcome()">← Back to Home</button>
      </div>
    </div>
  </section>

  <script src="app.js"></script>
</body>
</html>
