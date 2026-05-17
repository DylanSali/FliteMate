/*******************************
 * FLYX APP - app.js
 * Google Sheets + UI logic
 *******************************/

// 🔗 Google Apps Script Web App URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbygvaklh4VhTetqL9kDynUC6J8YJY2NSEe8c3Kz1UXtDKMuLMh2B5FI5gXyIvPK6JjOeg/exec";

/*******************************
 * GLOBAL STATE
 *******************************/
const state = {
  testerName: "",
  currentScreen: "home",
  currentFeature: "",
  ease: 0,
  stars: 0,
  responses: []
};

/*******************************
 * INIT TESTER
 *******************************/
function startTest() {
  const name = document.getElementById("tester-name").value.trim();

  if (!name) {
    alert("Enter a name first");
    return;
  }

  state.testerName = name;

  document.querySelector(".tester-panel").innerHTML = `
    <div class="tp-title">Testing as: ${name}</div>
    <div class="tp-sub" style="margin-top:4px;">
      Explore the app — tap feedback buttons on each screen
    </div>
  `;
}

/*******************************
 * NAVIGATION
 *******************************/
function switchTab(tab) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach((t) => t.classList.remove("active"));

  document.getElementById("s-" + tab).classList.add("active");
  document.getElementById("tab-" + tab).classList.add("active");

  state.currentScreen = tab;
}

/*******************************
 * CHECKLIST
 *******************************/
function toggleItem(el) {
  const box = el.querySelector(".check-box-ui");
  box.classList.toggle("done");
  updateProgress();
}

function updateProgress() {
  const all = document.querySelectorAll("#s-checklist .check-box-ui");
  const done = document.querySelectorAll("#s-checklist .check-box-ui.done");

  const pct = Math.round((done.length / all.length) * 100);

  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent =
    done.length + " of " + all.length + " complete";
}

/*******************************
 * FILTERS
 *******************************/
function toggleFilter(el) {
  el.classList.toggle("on");
}

/*******************************
 * FEEDBACK MODAL
 *******************************/
function openFeedback(feature) {
  if (!state.testerName) {
    alert("Enter your name at the top first");
    return;
  }

  state.currentFeature = feature;
  state.ease = 0;
  state.stars = 0;

  document
    .querySelectorAll("#ease-rating .rating-btn")
    .forEach((b) => b.classList.remove("selected"));

  document.querySelectorAll(".star").forEach((s) => s.classList.remove("lit"));

  document.getElementById("fs-comment").value = "";

  const titles = {
    home: ["Home screen", "How clear and useful is the home screen?"],
    trips: ["Flight search", "How useful is the true-total-cost view?"],
    "flight-best": ["Best value flight", "Was the price breakdown clear?"],
    "flight-2": ["Cathay Pacific result", "Was this useful to compare?"],
    "flight-3": ["Budget carrier warning", "Did the hidden fees warning help?"],
    checklist: ["Travel checklist", "How helpful was the checklist?"],
    "emergency-fund": ["Emergency fund", "Would you opt into this fund?"],
    "emergency-flight": [
      "Emergency flights",
      "Would this feature give you peace of mind?"
    ]
  };

  const t = titles[feature] || ["Feedback", "How was this?"];

  document.getElementById("fs-title").textContent = t[0];
  document.getElementById("fs-sub").textContent = t[1];

  document.getElementById("feedback-overlay").style.display = "flex";
}

/*******************************
 * RATINGS
 *******************************/
function selectRating(type, val, el) {
  document
    .querySelectorAll("#ease-rating .rating-btn")
    .forEach((b) => b.classList.remove("selected"));

  el.classList.add("selected");
  state.ease = val;
}

function selectStar(n) {
  state.stars = n;

  document.querySelectorAll(".star").forEach((s, i) => {
    s.classList.toggle("lit", i < n);
  });
}

/*******************************
 * SEND TO GOOGLE SHEETS
 *******************************/
async function sendToGoogleSheet(data) {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error("Google Sheets error:", err);
  }
}

/*******************************
 * SUBMIT FEEDBACK
 *******************************/
function submitFeedback() {
  if (!state.ease || !state.stars) {
    alert("Please rate ease of use and likelihood to use");
    return;
  }

  const comment = document.getElementById("fs-comment").value.trim();

  const resp = {
    name: state.testerName,
    feature: state.currentFeature,
    ease: state.ease,
    stars: state.stars,
    comment
  };

  state.responses.push(resp);

  // ✅ SEND TO GOOGLE SHEETS
  sendToGoogleSheet(resp);

  document.getElementById("feedback-overlay").style.display = "none";

  renderResponses();
  showThanks();
}

/*******************************
 * THANK YOU MESSAGE
 *******************************/
function showThanks() {
  const el = document.createElement("div");
  el.style.cssText = `
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:var(--green);
    color:white;
    padding:16px 28px;
    border-radius:16px;
    font-weight:600;
    z-index:200;
    font-family:var(--display);
    box-shadow:0 8px 32px rgba(0,0,0,0.2);
  `;

  el.textContent = "Feedback recorded ✓";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1800);
}

/*******************************
 * RENDER RESPONSES
 *******************************/
function renderResponses() {
  const panel = document.getElementById("responses-panel");
  const list = document.getElementById("response-list");

  panel.style.display = "block";

  const n = state.responses.length;

  const avgEase =
    (state.responses.reduce((a, r) => a + r.ease, 0) / n).toFixed(1);

  const avgStars =
    (state.responses.reduce((a, r) => a + r.stars, 0) / n).toFixed(1);

  document.getElementById("resp-count").textContent =
    n + " response" + (n !== 1 ? "s" : "");

  document.getElementById("resp-num").textContent = n;
  document.getElementById("avg-ease").textContent = avgEase + "/5";
  document.getElementById("avg-stars").textContent = avgStars + "★";

  document.getElementById("summary-bar").style.display = "flex";

  list.innerHTML = "";

  [...state.responses].reverse().forEach((r) => {
    const el = document.createElement("div");
    el.className = "response-item anim";

    el.innerHTML = `
      <div class="ri-top">
        <div class="ri-name">${r.name}</div>
        <div class="ri-rating">${r.stars}★ · ease ${r.ease}/5</div>
      </div>
      ${
        r.comment
          ? `<div class="ri-comment">"${r.comment}"</div>`
          : `<div class="ri-comment" style="font-style:italic;opacity:0.5;">No comment</div>`
      }
      <span class="ri-feature">${r.feature}</span>
    `;

    list.appendChild(el);
  });
}

/*******************************
 * MODAL CLOSE
 *******************************/
document
  .getElementById("feedback-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) this.style.display = "none";
  });

/*******************************
 * INIT DEFAULTS
 *******************************/
document.getElementById("date-input").valueAsDate = new Date();
updateProgress();
