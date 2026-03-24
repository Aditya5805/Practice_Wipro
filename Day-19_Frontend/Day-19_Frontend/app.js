// =============================================
//  Spring Flowers Academy — Sprint 2 | app.js
// =============================================

const pages = {
  welcome:   'welcomePage',
  profile:   'profilePage',
  timetable: 'timetablePage',
  about:     'aboutPage',
  contact:   'contactPage'
};

/**
 * Show the selected page and hide all others.
 * Also updates the active state on navbar links.
 */
function showPage(pageName) {
  // Hide all pages
  Object.values(pages).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('d-none');
  });

  // Show target page
  const target = document.getElementById(pages[pageName]);
  if (target) {
    target.classList.remove('d-none');
    target.style.animation = 'none';
    target.offsetHeight; // reflow
    target.style.animation = 'fadeUp 0.55s ease both';
  }

  // Update active nav link
  document.querySelectorAll('.sfa-link').forEach(link => {
    link.classList.remove('active');
  });

  // Match by onclick attribute
  document.querySelectorAll('.sfa-link').forEach(link => {
    const onclickVal = link.getAttribute('onclick') || '';
    if (onclickVal.includes(`'${pageName}'`)) {
      link.classList.add('active');
    }
  });

  // Collapse mobile navbar after navigation
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse && navCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) bsCollapse.hide();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Filter timetable columns by day.
 * @param {string} day - 'all' or day abbreviation e.g. 'Mon'
 * @param {HTMLElement} btn - the clicked button element
 */
function filterDay(day, btn) {
  // Update active pill
  document.querySelectorAll('.sfa-day-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const dayCols = document.querySelectorAll('[data-day]');
  dayCols.forEach(col => {
    if (day === 'all' || col.getAttribute('data-day') === day) {
      col.style.display = '';
    } else {
      col.style.display = 'none';
    }
  });
}

// Initialize: show welcome page on load
document.addEventListener('DOMContentLoaded', () => {
  showPage('welcome');
});
