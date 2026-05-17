const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

const state = {
  testerName: '',
  currentScreen: 'home',
  currentFeature: '',
  ease: 0,
  stars: 0,
  responses: []
};

function startTest() {
  const name = document.getElementById('tester-name').value.trim();
  if (!name) return alert('Enter a name first');

  state.testerName = name;

  document.querySelector('.tester-panel').innerHTML = `
    <div class="tp-title">Testing as: ${name}</div>
    <div class="tp-sub">Collecting responses → Google Sheets</div>
  `;
}

function switchTab(tab) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  document.getElementById('s-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');

  state.currentScreen = tab;
}

function toggleFilter(el) {
  el.classList.toggle('on');
}

function toggleItem(el) {
  const box = el.querySelector('.check-box-ui');
  box.classList.toggle('done');
  updateProgress();
}

function updateProgress() {
  const all = document.querySelectorAll('#s-checklist .check-box-ui');
  const done = document.querySelectorAll('#s-checklist .check-box-ui.done');

  const pct = Math.round((done.length / all.length) * 100);

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent =
    done.length + ' of ' + all.length + ' complete';
}

function openFeedback(feature) {
  if (!state.testerName) return alert('Enter your name first');

  state.currentFeature = feature;
  state.ease = 0;
  state.stars = 0;

  document.querySelectorAll('#ease-rating .rating-btn')
    .forEach(b => b.classList.remove('selected'));

  document.querySelectorAll('.star')
    .forEach(s => s.classList.remove('lit'));

  document.getElementById('fs-comment').value = '';

  document.getElementById('feedback-overlay').style.display = 'flex';
}

function selectRating(type, val, el) {
  document.querySelectorAll('#ease-rating .rating-btn')
    .forEach(b => b.classList.remove('selected'));

  el.classList.add('selected');
  state.ease = val;
}

function selectStar(n) {
  state.stars = n;
  document.querySelectorAll('.star')
    .forEach((s, i) => s.classList.toggle('lit', i < n));
}

function submitFeedback() {
  if (!state.ease || !state.stars)
    return alert('Please complete ratings');

  const comment = document.getElementById('fs-comment').value.trim();

  const resp = {
    name: state.testerName,
    feature: state.currentFeature,
    ease: state.ease,
    stars: state.stars,
    comment
  };

  // 🔥 SEND TO GOOGLE SHEETS (DATABASE)
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(resp),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.json())
  .then(data => console.log("Saved:", data))
  .catch(err => console.error("Error:", err));

  state.responses.push(resp);
  renderResponses();
  showThanks();

  document.getElementById('feedback-overlay').style.display = 'none';
}

function showThanks() {
  const el = document.createElement('div');
  el.textContent = "Saved to database ✓";
  el.style.cssText = `
    position:fixed;top:50%;left:50%;
    transform:translate(-50%,-50%);
    background:#2d6a4f;color:white;
    padding:14px 24px;border-radius:14px;
    font-weight:600;z-index:999;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function renderResponses() {
  const list = document.getElementById('response-list');
  const panel = document.getElementById('responses-panel');

  panel.style.display = 'block';
  list.innerHTML = '';

  state.responses.slice().reverse().forEach(r => {
    const el = document.createElement('div');
    el.className = 'response-item';

    el.innerHTML = `
      <div class="ri-top">
        <div class="ri-name">${r.name}</div>
        <div class="ri-rating">${r.stars}★ · ease ${r.ease}/5</div>
      </div>
      <div class="ri-comment">${r.comment || "No comment"}</div>
      <span class="ri-feature">${r.feature}</span>
    `;

    list.appendChild(el);
  });
}
