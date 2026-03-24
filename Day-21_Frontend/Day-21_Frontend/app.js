/* =============================================
   FETCH API EXPLORER — app.js
   Task 1: Fetch Employees + console.log
   Task 2: Fetch Random User + display card
============================================= */

// ─── Mock Console Panel ───────────────────────
function logToPanel(message, type = 'log') {
  const body = document.getElementById('consoleBody');
  const empty = body.querySelector('.console-empty');
  if (empty) empty.remove();

  const line = document.createElement('span');
  line.className = `console-${type}`;

  // Timestamp
  const now = new Date();
  const ts = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;

  line.textContent = `[${ts}] ${message}`;
  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

function clearConsole() {
  const body = document.getElementById('consoleBody');
  body.innerHTML = '<span class="console-empty">// Logs will appear here after fetching data...</span>';
}

// ─── Status Helper ────────────────────────────
function setStatus(elId, message, type = '') {
  const el = document.getElementById(elId);
  el.textContent = message;
  el.className = `status-bar ${type}`;
}

// ─── Task 1: Fetch Employees ──────────────────
async function fetchEmployees() {
  const btn = document.getElementById('fetchEmployeesBtn');
  btn.disabled = true;
  setStatus('empStatus', '⟳ Fetching employee data...', 'loading');
  logToPanel('Initiating GET request to dummy.restapiexample.com/api/v1/employees', 'info');

  // Native console.log as required by the task
  console.log('[Task 1] Fetching employees from API...');

  try {
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} — ${response.statusText}`);
    }

    const json = await response.json();
    const employees = json.data;

    // ── Required: log data to console ──
    console.log('[Task 1] API Response:', json);
    console.log(`[Task 1] Total Employees: ${employees.length}`);
    employees.forEach((emp, i) => {
      console.log(`  [${i + 1}] ${emp.employee_name} | Salary: $${emp.employee_salary} | Age: ${emp.employee_age}`);
    });

    // ── Log to on-page panel ──
    logToPanel(`✓ Response received — status: ${response.status} OK`, 'info');
    logToPanel(`Total employees fetched: ${employees.length}`, 'log');
    logToPanel('─────────────────────────────────────────', 'log');
    employees.slice(0, 10).forEach((emp, i) => {
      logToPanel(`[${String(i + 1).padStart(2,'0')}] ${emp.employee_name.padEnd(22,' ')} | $${String(emp.employee_salary).padStart(6,' ')} | Age: ${emp.employee_age}`, 'log');
    });
    if (employees.length > 10) {
      logToPanel(`... and ${employees.length - 10} more — see DevTools Console for full list`, 'warn');
    }

    // ── Render table ──
    renderEmployeeTable(employees);
    setStatus('empStatus', `✓ Successfully fetched ${employees.length} employees`, 'success');

  } catch (err) {
    console.error('[Task 1] Fetch Error:', err.message);
    logToPanel(`✗ Error: ${err.message}`, 'err');
    setStatus('empStatus', `✗ ${err.message}`, 'error');
  } finally {
    btn.disabled = false;
  }
}

function renderEmployeeTable(employees) {
  const tbody = document.getElementById('empTableBody');
  const wrap  = document.getElementById('empTableWrap');

  tbody.innerHTML = '';
  employees.forEach(emp => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="td-id">${emp.id}</td>
      <td>${emp.employee_name}</td>
      <td class="td-salary">$${Number(emp.employee_salary).toLocaleString()}</td>
      <td class="td-age">${emp.employee_age}</td>
    `;
    tbody.appendChild(row);
  });

  wrap.style.display = 'block';
}

// ─── Task 2: Fetch Random User ────────────────
async function fetchRandomUser() {
  const btn = document.getElementById('fetchUserBtn');
  btn.disabled = true;
  setStatus('userStatus', '⟳ Fetching random user...', 'loading');
  logToPanel('Initiating GET request to randomuser.me/api/', 'info');

  // Native console.log as required by the task
  console.log('[Task 2] Fetching random user...');

  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} — ${response.statusText}`);
    }

    const json = await response.json();
    const user = json.results[0];

    // ── Required: log data to console ──
    console.log('[Task 2] Random User API Response:', json);
    console.log('[Task 2] Name   :', `${user.name.first} ${user.name.last}`);
    console.log('[Task 2] Email  :', user.email);
    console.log('[Task 2] Picture:', user.picture.large);

    // ── Log to on-page panel ──
    logToPanel(`✓ Random user received — ${user.name.first} ${user.name.last}`, 'info');
    logToPanel(`Email   : ${user.email}`, 'log');
    logToPanel(`Country : ${user.location.country}`, 'log');
    logToPanel(`Phone   : ${user.phone}`, 'log');

    // ── Render user card ──
    renderUserCard(user);
    setStatus('userStatus', `✓ Loaded user: ${user.name.first} ${user.name.last}`, 'success');

  } catch (err) {
    console.error('[Task 2] Fetch Error:', err.message);
    logToPanel(`✗ Error: ${err.message}`, 'err');
    setStatus('userStatus', `✗ ${err.message}`, 'error');
  } finally {
    btn.disabled = false;
  }
}

function renderUserCard(user) {
  const wrap = document.getElementById('userCardWrap');

  // Populate fields
  document.getElementById('userImg').src        = user.picture.large;
  document.getElementById('userImg').alt        = `${user.name.first} ${user.name.last}`;
  document.getElementById('userName').textContent    = `${user.name.title} ${user.name.first} ${user.name.last}`;
  document.getElementById('userEmail').textContent   = user.email;
  document.getElementById('userEmail').href          = `mailto:${user.email}`;
  document.getElementById('userCountry').textContent = `📍 ${user.location.country}`;
  document.getElementById('userGender').textContent  = `${user.gender === 'male' ? '♂' : '♀'} ${capitalize(user.gender)}`;
  document.getElementById('userAge').textContent     = `🎂 Age ${user.dob.age}`;
  document.getElementById('userPhone').textContent   = `📞 ${user.phone}`;
  document.getElementById('userLocation').textContent = `${user.location.city}, ${user.location.state}`;

  // Animate in
  wrap.style.display = 'block';
  wrap.style.animation = 'none';
  wrap.offsetHeight; // reflow
  wrap.style.animation = 'fadeUp 0.45s ease both';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
