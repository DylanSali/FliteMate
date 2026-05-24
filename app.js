/*******************************
 * FLITEMATE — app.js v2.0
 * Final version — all features
 *******************************/

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuIBBlJp0pFt75L9vaMbpDMwUxjQWEJBpOpT7hMcROTADReVXccRfGsv-tTeirGO1n8A/exec";

const state = {
  testerName: "",
  currentScreen: "home",
  currentFeature: "",
  ease: 0,
  stars: 0,
  responses: [],
  lang: "en",
  filters: { studentVerified: true, bagsIncluded: true, homeCityRouting: false, unsoldSeats: false, flexibleDates: false }
};

/*— TRANSLATIONS —*/
const t = {
  en: {
    appName: "FliteMate",
    tagline: "Student travel companion",
    greeting: "Good morning, welcome back",
    hero: "Where are you headed?",
    journeyStatus: "YOUR JOURNEY STATUS",
    journeyRoute: "Brisbane → Home",
    alertTitle: "Price drop alert",
    alertBody: "BNE → home from A$498 — 3 seats left",
    findFlights: "Find flights", findFlightsSub: "True total cost",
    checklist: "Checklist", checklistSub: "Passport · Visa · Bags",
    airportGuide: "Airport guide", airportGuideSub: "Check-in to boarding",
    emergency: "Emergency", emergencySub: "Flights + fund",
    firstTime: "First time flying?",
    newTraveller: "New traveller guide", newTravellerSub: "Step by step — check-in to arrival",
    feedbackHome: "💬 How does this home screen feel?",
    tripsTitle: "Find your flight", tripsSub: "Real prices. No hidden fees. Home city routing.",
    resultSorted: "RESULTS — SORTED BY TRUE TOTAL COST",
    noResults: "No flights match your filters.\nTry turning off a filter above.",
    feedbackTrips: "💬 Was this useful?",
    checklistTitle: "Get ready to fly", checklistSub2: "Tap each item as you complete it",
    feedbackChecklist: "💬 Was the checklist helpful?",
    airportTitle: "Step by step.", airportSub: "Tap each stage to see what to expect.",
    feedbackAirport: "💬 Was the airport guide helpful?",
    emergencyTitle: "We've got you.", emergencySub2: "For when life doesn't wait.",
    feedbackEmergency: "💬 Would you use this feature?",
    navHome: "Home", navFlights: "Flights", navChecklist: "Checklist", navAirport: "Airport", navEmergency: "Emergency",
    filterStudent: "Student verified", filterBags: "Bags included", filterHome: "Home city routing", filterUnsold: "Unsold seats", filterFlex: "Flexible dates",
    bestValue: "BEST VALUE", hiddenFees: "HIDDEN FEES", trueTotal: "true total",
    immigrationWait: "Est. immigration wait — BNE",
    immigrationWaitVal: "~12 min departures · ~25 min arrivals",
    docsTitle: "Official immigration documents",
    docsBody: "Links to government sources — always check official pages before you travel.",
    fundTitle: "Emergency travel fund", fundSub: "University co-funded · Semester opt-in · A$25/sem",
    fundPool: "POOL THIS SEMESTER",
    fundAvail: "A$14,280 available", fundMax: "Max A$1,200 per application",
    fundDesc: "For verified family emergencies — bereavement, critical illness. Approval in 3–5 days.",
    applyFund: "Apply for emergency credit",
    flexTitle: "Flexible emergency flights", flexSub: "Last-minute availability · No change fees",
    flexDesc: "Scanning unsold seat inventory across 6+ airlines for last-minute availability.",
    statusSubmitted: "Submitted", statusReview: "Under review", statusApproved: "Approved",
    statusLabel: "Application status",
    testerPanel: "FliteMate — USER TEST v2.0",
    testerSub: "Share this link with students to collect responses",
    testerPlaceholder: "Your first name...",
    testerStart: "Start test",
    testerActive: "Explore the app — tap feedback buttons on each screen",
    fsEase: "Ease of use",
    fsLikelihood: "Likelihood to use",
    fsComment: "Any other thoughts? What would you change?",
    fsSubmit: "Submit feedback",
    fsThank: "Feedback recorded ✓",
    respTitle: "Test responses",
    avgEase: "Avg ease", avgRating: "Avg rating", responses: "Responses"
  },
  zh: {
    appName: "FliteMate",
    tagline: "学生旅行助手",
    greeting: "早上好，欢迎回来",
    hero: "你要去哪里？",
    journeyStatus: "您的旅程状态",
    journeyRoute: "布里斯班 → 家",
    alertTitle: "价格下降提醒",
    alertBody: "BNE → 回家 仅需 A$498 — 剩余 3 个座位",
    findFlights: "查找航班", findFlightsSub: "真实总费用",
    checklist: "清单", checklistSub: "护照 · 签证 · 行李",
    airportGuide: "机场指南", airportGuideSub: "从值机到登机",
    emergency: "紧急支持", emergencySub: "航班 + 基金",
    firstTime: "第一次飞行？",
    newTraveller: "新旅客指南", newTravellerSub: "从打包到抵达，逐步指导",
    feedbackHome: "💬 这个主页感觉如何？",
    tripsTitle: "查找航班", tripsSub: "真实价格。无隐藏费用。",
    resultSorted: "结果 — 按真实总费用排序",
    noResults: "没有符合筛选条件的航班。\n请尝试关闭某个筛选条件。",
    feedbackTrips: "💬 这有用吗？",
    checklistTitle: "准备好出发", checklistSub2: "完成后点击每个项目",
    feedbackChecklist: "💬 清单有帮助吗？",
    airportTitle: "步步为营。", airportSub: "点击每个阶段查看详情。",
    feedbackAirport: "💬 机场指南有帮助吗？",
    emergencyTitle: "我们支持你。", emergencySub2: "生活不等人时的支援。",
    feedbackEmergency: "💬 你会使用这个功能吗？",
    navHome: "首页", navFlights: "航班", navChecklist: "清单", navAirport: "机场", navEmergency: "紧急",
    filterStudent: "学生认证", filterBags: "含行李", filterHome: "家乡城市路线", filterUnsold: "未售座位", filterFlex: "灵活日期",
    bestValue: "最佳性价比", hiddenFees: "隐藏费用", trueTotal: "真实总价",
    immigrationWait: "布里斯班机场预计等候时间",
    immigrationWaitVal: "出境约 ~12 分钟 · 入境约 ~25 分钟",
    docsTitle: "官方移民文件",
    docsBody: "政府官方链接 — 出行前请务必查阅最新信息。",
    fundTitle: "紧急旅行基金", fundSub: "大学联合资助 · 每学期自愿参与 · A$25/学期",
    fundPool: "本学期资金池",
    fundAvail: "A$14,280 可用", fundMax: "每次申请最高 A$1,200",
    fundDesc: "适用于经核实的家庭紧急情况 — 丧亲、危重疾病。3-5天审批。",
    applyFund: "申请紧急旅行信用",
    flexTitle: "紧急灵活航班", flexSub: "最后一刻可用 · 无改签费",
    flexDesc: "实时扫描6+家航空公司未售座位，提供低价选择。",
    statusSubmitted: "已提交", statusReview: "审核中", statusApproved: "已批准",
    statusLabel: "申请状态",
    testerPanel: "FliteMate — 用户测试 v2.0",
    testerSub: "将此链接分享给学生以收集反馈",
    testerPlaceholder: "您的名字...",
    testerStart: "开始测试",
    testerActive: "探索应用 — 在每个页面点击反馈按钮",
    fsEase: "易用性",
    fsLikelihood: "使用意愿",
    fsComment: "还有其他想法？你会改变什么？",
    fsSubmit: "提交反馈",
    fsThank: "反馈已记录 ✓",
    respTitle: "测试反馈",
    avgEase: "平均易用性", avgRating: "平均评分", responses: "回复数"
  },
  hi: {
    appName: "FliteMate",
    tagline: "छात्र यात्रा साथी",
    greeting: "सुप्रभात, वापस स्वागत है",
    hero: "आप कहाँ जा रहे हैं?",
    journeyStatus: "आपकी यात्रा की स्थिति",
    journeyRoute: "ब्रिस्बेन → घर",
    alertTitle: "कीमत गिरने की सूचना",
    alertBody: "BNE → घर A$498 से — केवल 3 सीटें बची हैं",
    findFlights: "उड़ानें खोजें", findFlightsSub: "वास्तविक कुल लागत",
    checklist: "चेकलिस्ट", checklistSub: "पासपोर्ट · वीज़ा · सामान",
    airportGuide: "हवाई अड्डा गाइड", airportGuideSub: "चेक-इन से बोर्डिंग तक",
    emergency: "आपातकाल", emergencySub: "उड़ानें + फंड",
    firstTime: "पहली बार उड़ रहे हैं?",
    newTraveller: "नए यात्री गाइड", newTravellerSub: "पैकिंग से लेकर आगमन तक",
    feedbackHome: "💬 यह होम स्क्रीन कैसी लगी?",
    tripsTitle: "अपनी उड़ान खोजें", tripsSub: "वास्तविक कीमतें। कोई छिपी फीस नहीं।",
    resultSorted: "परिणाम — वास्तविक कुल लागत के अनुसार",
    noResults: "कोई उड़ान फ़िल्टर से मेल नहीं खाती।\nकोई फ़िल्टर हटाकर देखें।",
    feedbackTrips: "💬 क्या यह उपयोगी था?",
    checklistTitle: "उड़ान के लिए तैयार हों", checklistSub2: "पूरा करने पर प्रत्येक आइटम टैप करें",
    feedbackChecklist: "💬 चेकलिस्ट सहायक थी?",
    airportTitle: "कदम दर कदम।", airportSub: "प्रत्येक चरण पर टैप करें।",
    feedbackAirport: "💬 हवाई अड्डा गाइड सहायक था?",
    emergencyTitle: "हम आपके साथ हैं।", emergencySub2: "जब जिंदगी इंतज़ार नहीं करती।",
    feedbackEmergency: "💬 क्या आप इस सुविधा का उपयोग करेंगे?",
    navHome: "होम", navFlights: "उड़ानें", navChecklist: "सूची", navAirport: "हवाई अड्डा", navEmergency: "आपातकाल",
    filterStudent: "छात्र सत्यापित", filterBags: "बैग शामिल", filterHome: "गृहनगर मार्ग", filterUnsold: "अनबिकी सीटें", filterFlex: "लचीली तारीखें",
    bestValue: "सर्वोत्तम मूल्य", hiddenFees: "छिपी फीस", trueTotal: "वास्तविक कुल",
    immigrationWait: "ब्रिस्बेन हवाई अड्डे पर अनुमानित प्रतीक्षा",
    immigrationWaitVal: "प्रस्थान ~12 मिनट · आगमन ~25 मिनट",
    docsTitle: "आधिकारिक आव्रजन दस्तावेज़",
    docsBody: "सरकारी स्रोतों के लिंक — यात्रा से पहले हमेशा जांचें।",
    fundTitle: "आपातकालीन यात्रा फंड", fundSub: "विश्वविद्यालय सह-वित्त पोषित · A$25/सेमेस्टर",
    fundPool: "इस सेमेस्टर का पूल",
    fundAvail: "A$14,280 उपलब्ध", fundMax: "अधिकतम A$1,200 प्रति आवेदन",
    fundDesc: "परिवारिक आपात स्थितियों के लिए — मृत्यु, गंभीर बीमारी। 3-5 दिन में अनुमोदन।",
    applyFund: "आपातकालीन क्रेडिट के लिए आवेदन करें",
    flexTitle: "लचीली आपातकालीन उड़ानें", flexSub: "अंतिम समय उपलब्धता · कोई बदलाव शुल्क नहीं",
    flexDesc: "6+ एयरलाइनों में अनबिकी सीटें स्कैन की जा रही हैं।",
    statusSubmitted: "जमा किया", statusReview: "समीक्षाधीन", statusApproved: "अनुमोदित",
    statusLabel: "आवेदन स्थिति",
    testerPanel: "FliteMate — उपयोगकर्ता परीक्षण v2.0",
    testerSub: "प्रतिक्रिया एकत्र करने के लिए यह लिंक छात्रों के साथ साझा करें",
    testerPlaceholder: "आपका पहला नाम...",
    testerStart: "परीक्षण शुरू करें",
    testerActive: "ऐप एक्सप्लोर करें — हर स्क्रीन पर फीडबैक बटन टैप करें",
    fsEase: "उपयोग में आसानी",
    fsLikelihood: "उपयोग की संभावना",
    fsComment: "कोई अन्य विचार? आप क्या बदलेंगे?",
    fsSubmit: "प्रतिक्रिया सबमिट करें",
    fsThank: "प्रतिक्रिया दर्ज ✓",
    respTitle: "परीक्षण प्रतिक्रियाएं",
    avgEase: "औसत आसानी", avgRating: "औसत रेटिंग", responses: "प्रतिक्रियाएं"
  }
};

function tr(key) { return (t[state.lang] && t[state.lang][key]) || t.en[key] || key; }

/*— LANGUAGE —*/
function setLang(lang) {
  state.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = tr(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = tr(el.dataset.i18nPlaceholder);
  });
  // Re-render flights for filter label changes
  renderFlights();
}

/*— FLIGHT DATA —*/
const allFlights = [
  { id: "sia", airline: "Singapore Airlines", route: "BNE → SIN → home · 2 stops", total: 698, base: 680, bags: "Incl.", bagsIncluded: true, seat: 18, duration: "23h 40m", studentVerified: true, best: true, warn: false },
  { id: "cx", airline: "Cathay Pacific", route: "BNE → HKG → home · 2 stops", total: 742, base: 700, bags: "Incl.", bagsIncluded: true, seat: 42, duration: "26h 10m", studentVerified: true, best: false, warn: false },
  { id: "cz", airline: "China Southern", route: "BNE → CAN → home · 2 stops", total: 589, base: 520, bags: "Incl.", bagsIncluded: true, seat: 19, duration: "24h 50m", studentVerified: true, best: false, warn: false, studentNote: "Student fare · Extended 30kg baggage" },
  { id: "budget", airline: "Budget carrier", route: "BNE → hub → home · 2 stops", total: 623, base: 510, bags: "A$89", bagsIncluded: false, seat: 24, duration: "29h 05m", studentVerified: false, best: false, warn: true },
  { id: "qr", airline: "Qatar Airways", route: "BNE → DOH → home · 2 stops", total: 811, base: 780, bags: "Incl.", bagsIncluded: true, seat: 31, duration: "28h 55m", studentVerified: true, best: false, warn: false }
];

/*— INIT —*/
function startTest() {
  const name = document.getElementById("tester-name").value.trim();
  if (!name) { alert(tr("testerPlaceholder")); return; }
  state.testerName = name;
  document.querySelector(".tester-panel").innerHTML = `
    <div class="tp-title">Testing as: ${name}</div>
    <div class="tp-sub" style="margin-top:4px;" data-i18n="testerActive">${tr("testerActive")}</div>`;
}

/*— NAVIGATION —*/
function switchTab(tab) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
  document.getElementById("s-" + tab).classList.add("active");
  document.getElementById("tab-" + tab).classList.add("active");
  state.currentScreen = tab;
}

/*— FILTERS —*/
function toggleFilter(el) {
  el.classList.toggle("on");
  const map = {
    [tr("filterStudent")]: "studentVerified",
    [tr("filterBags")]: "bagsIncluded",
    [tr("filterHome")]: "homeCityRouting",
    [tr("filterUnsold")]: "unsoldSeats",
    [tr("filterFlex")]: "flexibleDates",
    "Student verified": "studentVerified",
    "Bags included": "bagsIncluded",
    "Home city routing": "homeCityRouting",
    "Unsold seats": "unsoldSeats",
    "Flexible dates": "flexibleDates"
  };
  const key = map[el.textContent.trim()];
  if (key) state.filters[key] = el.classList.contains("on");
  renderFlights();
}

function renderFlights() {
  const container = document.getElementById("flight-results");
  const label = document.getElementById("result-label");
  if (!container) return;

  let filtered = allFlights.filter(f => {
    if (state.filters.studentVerified && !f.studentVerified) return false;
    if (state.filters.bagsIncluded && !f.bagsIncluded) return false;
    return true;
  });
  filtered.sort((a, b) => a.total - b.total);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:32px 20px;color:var(--muted);font-size:13px;">${tr("noResults").replace('\n','<br>')}</div>`;
    if (label) label.textContent = "0 RESULTS";
    return;
  }

  if (label) label.textContent = `${filtered.length} ${tr("resultSorted")}`;

  container.innerHTML = filtered.map((f, i) => {
    const isBest = i === 0 && !f.warn;
    const bagsColor = f.bagsIncluded ? "var(--green)" : "var(--amber)";
    const noteHtml = f.studentNote ? `<div style="margin-top:6px;"><span class="chip chip-green" style="font-size:10px;">🎓 ${f.studentNote}</span></div>` : '';
    return `<div class="flight-card ${isBest ? "best" : ""} anim" onclick="openFeedback('flight-${f.id}')" data-tip="${isBest ? 'Best value — tap to rate' : 'Tap to leave feedback'}">
      ${isBest ? `<div class="best-ribbon">${tr("bestValue")}</div>` : ""}
      ${f.warn ? `<div class="warn-ribbon">${tr("hiddenFees")}</div>` : ""}
      <div class="fc-top">
        <div><div class="fc-airline">${f.airline}</div><div class="fc-route">${f.route}</div>${noteHtml}</div>
        <div class="fc-price">
          <div class="fc-total" style="color:${f.warn ? "var(--amber)" : isBest ? "var(--green)" : "var(--muted)"}">A$${f.total}</div>
          <div class="fc-note">${tr("trueTotal")}</div>
        </div>
      </div>
      <div class="fc-breakdown">
        <div class="fc-item"><div class="fc-item-val">A$${f.base}</div><div class="fc-item-lbl">Base fare</div></div>
        <div class="fc-item"><div class="fc-item-val" style="color:${bagsColor}">${f.bags}</div><div class="fc-item-lbl">Baggage</div></div>
        <div class="fc-item"><div class="fc-item-val">A$${f.seat}</div><div class="fc-item-lbl">Seat</div></div>
        <div class="fc-item"><div class="fc-item-val">${f.duration}</div><div class="fc-item-lbl">Journey</div></div>
      </div>
    </div>`;
  }).join("");
}

/*— CHECKLIST —*/
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
  document.getElementById("progress-label").textContent = done.length + " of " + all.length + " complete";
}

/*— IMMIGRATION EXPAND —*/
function toggleQuestions(el) {
  const panel = el.nextElementSibling;
  const arrow = el.querySelector(".expand-arrow");
  const isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";
  if (isOpen) {
    panel.style.maxHeight = "0px"; panel.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; panel.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  }
}

/*— AIRPORT STEPS —*/
function toggleStep(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector(".step-arrow");
  const isOpen = body.classList.contains("open");
  document.querySelectorAll(".ag-body").forEach(b => { b.classList.remove("open"); b.style.maxHeight = "0px"; });
  document.querySelectorAll(".step-arrow").forEach(a => a.style.transform = "rotate(0deg)");
  if (!isOpen) { body.classList.add("open"); body.style.maxHeight = body.scrollHeight + "px"; arrow.style.transform = "rotate(180deg)"; }
}

/*— EMERGENCY STATUS TRACKER —*/
function advanceStatus() {
  const steps = document.querySelectorAll(".status-step");
  let current = -1;
  steps.forEach((s, i) => { if (s.classList.contains("active")) current = i; });
  steps.forEach(s => s.classList.remove("active", "done"));
  const next = Math.min(current + 1, steps.length - 1);
  for (let i = 0; i < next; i++) steps[i].classList.add("done");
  steps[next].classList.add("active");
  if (next === steps.length - 1) {
    document.getElementById("status-advance-btn").style.display = "none";
    document.getElementById("status-approved-msg").style.display = "block";
  }
}

/*— FEEDBACK —*/
function openFeedback(feature) {
  if (!state.testerName) { alert("Enter your name at the top first"); return; }
  state.currentFeature = feature;
  state.ease = 0; state.stars = 0;
  document.querySelectorAll("#ease-rating .rating-btn").forEach(b => b.classList.remove("selected"));
  document.querySelectorAll(".star").forEach(s => s.classList.remove("lit"));
  document.getElementById("fs-comment").value = "";
  const titles = {
    home: ["Home screen", "How clear and useful is the home screen?"],
    trips: ["Flight search", "How useful is the true-total-cost view?"],
    "flight-sia": ["Singapore Airlines", "Was the price breakdown clear?"],
    "flight-cx": ["Cathay Pacific", "Was this useful to compare?"],
    "flight-cz": ["China Southern student fare", "Would you use this student-specific option?"],
    "flight-budget": ["Budget carrier warning", "Did the hidden fees warning help?"],
    "flight-qr": ["Qatar Airways", "Was this useful to compare?"],
    checklist: ["Travel checklist", "How helpful was the checklist?"],
    airport: ["Airport guidance", "Did the step-by-step guide reduce anxiety?"],
    "emergency-fund": ["Emergency fund", "Would you opt into this fund?"],
    "emergency-flight": ["Emergency flights", "Would this give you peace of mind?"]
  };
  const t = titles[feature] || ["Feedback", "How was this?"];
  document.getElementById("fs-title").textContent = t[0];
  document.getElementById("fs-sub").textContent = t[1];
  document.getElementById("feedback-overlay").style.display = "flex";
}

function selectRating(type, val, el) {
  document.querySelectorAll("#ease-rating .rating-btn").forEach(b => b.classList.remove("selected"));
  el.classList.add("selected"); state.ease = val;
}

function selectStar(n) {
  state.stars = n;
  document.querySelectorAll(".star").forEach((s, i) => s.classList.toggle("lit", i < n));
}

async function sendToGoogleSheet(data) {
  try { await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); }
  catch (err) { console.error("Sheets error:", err); }
}

function submitFeedback() {
  if (!state.ease || !state.stars) { alert("Please rate ease of use and likelihood to use"); return; }
  const comment = document.getElementById("fs-comment").value.trim();
  const resp = { name: state.testerName, feature: state.currentFeature, ease: state.ease, stars: state.stars, comment };
  state.responses.push(resp);
  sendToGoogleSheet(resp);
  document.getElementById("feedback-overlay").style.display = "none";
  renderResponses();
  showThanks();
}

function showThanks() {
  const el = document.createElement("div");
  el.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--green);color:white;padding:16px 28px;border-radius:16px;font-weight:600;z-index:200;font-family:var(--display);box-shadow:0 8px 32px rgba(0,0,0,0.2);`;
  el.textContent = tr("fsThank");
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

function renderResponses() {
  const panel = document.getElementById("responses-panel");
  const list = document.getElementById("response-list");
  panel.style.display = "block";
  const n = state.responses.length;
  const avgEase = (state.responses.reduce((a, r) => a + r.ease, 0) / n).toFixed(1);
  const avgStars = (state.responses.reduce((a, r) => a + r.stars, 0) / n).toFixed(1);
  document.getElementById("resp-count").textContent = n + " response" + (n !== 1 ? "s" : "");
  document.getElementById("resp-num").textContent = n;
  document.getElementById("avg-ease").textContent = avgEase + "/5";
  document.getElementById("avg-stars").textContent = avgStars + "★";
  document.getElementById("summary-bar").style.display = "flex";
  list.innerHTML = "";
  [...state.responses].reverse().forEach(r => {
    const el = document.createElement("div");
    el.className = "response-item anim";
    el.innerHTML = `<div class="ri-top"><div class="ri-name">${r.name}</div><div class="ri-rating">${r.stars}★ · ease ${r.ease}/5</div></div>${r.comment ? `<div class="ri-comment">"${r.comment}"</div>` : `<div class="ri-comment" style="font-style:italic;opacity:0.5;">No comment</div>`}<span class="ri-feature">${r.feature}</span>`;
    list.appendChild(el);
  });
}

document.getElementById("feedback-overlay").addEventListener("click", function(e) { if (e.target === this) this.style.display = "none"; });
document.getElementById("date-input").valueAsDate = new Date();
updateProgress();
renderFlights();
