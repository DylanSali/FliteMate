/*— FliteMate app.js v3.0 — clean product, no test UI —*/

const state = {
  lang: localStorage.getItem('fm_lang') || 'en',
  filters: { studentVerified: true, bagsIncluded: true, directOnly: false, unsoldSeats: false, flexDates: false }
};

/*— FLIGHT DATABASE —*/
const flightDB = {
  DEL: [
    { airline:"Qantas / IndiGo", via:"BNE → SIN → DEL", total:1102, base:980, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"20h 30m", stops:2, studentVerified:true, type:"best" },
    { airline:"Singapore Airlines", via:"BNE → SIN → DEL", total:1189, base:1050, bags:"Incl.", bagsIncl:true, seat:45, meal:"Incl.", duration:"21h 10m", stops:2, studentVerified:true, type:"premium" },
    { airline:"Air India + partner", via:"BNE → MEL → DEL", total:934, base:820, bags:"A$75", bagsIncl:false, seat:29, meal:"—", duration:"26h 40m", stops:2, studentVerified:false, type:"warn" },
    { airline:"Budget multi-stop", via:"BNE → KUL → DEL", total:788, base:610, bags:"A$89", bagsIncl:false, seat:0, meal:"—", duration:"31h 20m", stops:3, studentVerified:false, type:"warn" },
  ],
  BOM: [
    { airline:"Singapore Airlines", via:"BNE → SIN → BOM", total:698, base:680, bags:"Incl.", bagsIncl:true, seat:18, meal:"Incl.", duration:"23h 40m", stops:2, studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → BOM", total:742, base:700, bags:"Incl.", bagsIncl:true, seat:22, meal:"A$20", duration:"26h 10m", stops:2, studentVerified:true, type:"normal" },
    { airline:"Qatar Airways", via:"BNE → DOH → BOM", total:811, base:780, bags:"Incl.", bagsIncl:true, seat:31, meal:"Incl.", duration:"28h 55m", stops:2, studentVerified:true, type:"normal" },
    { airline:"AirAsia + IndiGo", via:"BNE → KUL → BOM", total:623, base:510, bags:"A$89", bagsIncl:false, seat:24, meal:"—", duration:"29h 05m", stops:2, studentVerified:false, type:"warn" },
    { airline:"Scoot + partner", via:"BNE → SIN → BOM", total:541, base:480, bags:"A$45", bagsIncl:false, seat:16, meal:"—", duration:"27h 30m", stops:2, studentVerified:false, type:"deal", lastMinute:true },
  ],
  HYD: [
    { airline:"Singapore Airlines", via:"BNE → SIN → HYD", total:724, base:700, bags:"Incl.", bagsIncl:true, seat:24, meal:"Incl.", duration:"24h 10m", stops:2, studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → HYD", total:768, base:720, bags:"Incl.", bagsIncl:true, seat:28, meal:"A$20", duration:"26h 40m", stops:2, studentVerified:true, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → HYD", total:589, base:480, bags:"A$89", bagsIncl:false, seat:20, meal:"—", duration:"30h 15m", stops:2, studentVerified:false, type:"warn" },
  ],
  CAN: [
    { airline:"China Southern 🎓", via:"BNE → CAN", total:589, base:520, bags:"Incl. 30kg", bagsIncl:true, seat:19, meal:"Incl.", duration:"11h 30m", stops:1, studentVerified:true, type:"best", note:"Student fare · Extended 30kg baggage" },
    { airline:"Cathay Pacific", via:"BNE → HKG → CAN", total:672, base:640, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"14h 20m", stops:2, studentVerified:true, type:"normal" },
    { airline:"Scoot", via:"BNE → SIN → CAN", total:521, base:460, bags:"A$55", bagsIncl:false, seat:16, meal:"—", duration:"16h 40m", stops:2, studentVerified:false, type:"deal", lastMinute:true },
    { airline:"China Eastern", via:"BNE → PVG → CAN", total:608, base:560, bags:"Incl.", bagsIncl:true, seat:28, meal:"Incl.", duration:"17h 10m", stops:2, studentVerified:false, type:"normal" },
  ],
  PEK: [
    { airline:"China Southern 🎓", via:"BNE → CAN → PEK", total:631, base:560, bags:"Incl. 30kg", bagsIncl:true, seat:21, meal:"Incl.", duration:"15h 50m", stops:2, studentVerified:true, type:"best", note:"Student fare · Extended 30kg baggage" },
    { airline:"Air China", via:"BNE → SIN → PEK", total:698, base:660, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"18h 30m", stops:2, studentVerified:false, type:"normal" },
    { airline:"Budget + partner", via:"BNE → KUL → PEK", total:512, base:430, bags:"A$82", bagsIncl:false, seat:0, meal:"—", duration:"24h 10m", stops:3, studentVerified:false, type:"warn" },
  ],
  PVG: [
    { airline:"China Eastern 🎓", via:"BNE → PVG", total:612, base:550, bags:"Incl. 23kg", bagsIncl:true, seat:22, meal:"Incl.", duration:"12h 40m", stops:1, studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → PVG", total:689, base:650, bags:"Incl.", bagsIncl:true, seat:39, meal:"Incl.", duration:"16h 20m", stops:2, studentVerified:true, type:"normal" },
    { airline:"Scoot + partner", via:"BNE → SIN → PVG", total:498, base:440, bags:"A$50", bagsIncl:false, seat:8, meal:"—", duration:"17h 50m", stops:2, studentVerified:false, type:"deal", lastMinute:true },
  ],
  KTM: [
    { airline:"Singapore Airlines + Buddha Air", via:"BNE → SIN → KTM", total:892, base:860, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"22h 40m", stops:2, studentVerified:true, type:"best" },
    { airline:"Qatar Airways", via:"BNE → DOH → KTM", total:941, base:900, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"26h 10m", stops:2, studentVerified:true, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → KTM", total:724, base:620, bags:"A$79", bagsIncl:false, seat:25, meal:"—", duration:"30h 20m", stops:3, studentVerified:false, type:"warn" },
  ],
  HAN: [
    { airline:"Vietnam Airlines", via:"BNE → SIN → HAN", total:632, base:600, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"14h 20m", stops:2, studentVerified:true, type:"best" },
    { airline:"Scoot + VietJet", via:"BNE → SIN → HAN", total:489, base:420, bags:"A$55", bagsIncl:false, seat:19, meal:"—", duration:"17h 10m", stops:2, studentVerified:false, type:"deal", lastMinute:true },
  ],
  SGN: [
    { airline:"Singapore Airlines", via:"BNE → SIN → SGN", total:618, base:590, bags:"Incl.", bagsIncl:true, seat:28, meal:"Incl.", duration:"12h 50m", stops:2, studentVerified:true, type:"best" },
    { airline:"Scoot", via:"BNE → SIN → SGN", total:472, base:410, bags:"A$50", bagsIncl:false, seat:12, meal:"—", duration:"14h 30m", stops:2, studentVerified:false, type:"deal", lastMinute:true },
    { airline:"AirAsia", via:"BNE → KUL → SGN", total:441, base:370, bags:"A$71", bagsIncl:false, seat:0, meal:"—", duration:"18h 40m", stops:2, studentVerified:false, type:"warn" },
  ],
  CGK: [
    { airline:"Garuda Indonesia", via:"BNE → CGK", total:598, base:560, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"8h 10m", stops:1, studentVerified:true, type:"best" },
    { airline:"Batik Air", via:"BNE → CGK", total:482, base:440, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"9h 20m", stops:1, studentVerified:false, type:"normal" },
    { airline:"AirAsia", via:"BNE → KUL → CGK", total:398, base:330, bags:"A$68", bagsIncl:false, seat:0, meal:"—", duration:"13h 40m", stops:2, studentVerified:false, type:"warn" },
  ],
  KUL: [
    { airline:"Malaysia Airlines 🎓", via:"BNE → KUL", total:442, base:400, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"7h 20m", stops:1, studentVerified:true, type:"best" },
    { airline:"AirAsia", via:"BNE → KUL", total:318, base:260, bags:"A$58", bagsIncl:false, seat:0, meal:"—", duration:"7h 40m", stops:1, studentVerified:false, type:"warn" },
  ],
  MNL: [
    { airline:"Philippine Airlines", via:"BNE → MNL", total:712, base:670, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"9h 30m", stops:1, studentVerified:true, type:"best" },
    { airline:"Cebu Pacific", via:"BNE → MNL", total:528, base:460, bags:"A$68", bagsIncl:false, seat:0, meal:"—", duration:"10h 10m", stops:1, studentVerified:false, type:"warn" },
  ],
  LHR: [
    { airline:"Qantas", via:"BNE → SIN → LHR", total:1842, base:1780, bags:"Incl.", bagsIncl:true, seat:62, meal:"Incl.", duration:"26h 20m", stops:2, studentVerified:true, type:"best" },
    { airline:"Singapore Airlines", via:"BNE → SIN → LHR", total:1921, base:1860, bags:"Incl.", bagsIncl:true, seat:61, meal:"Incl.", duration:"27h 10m", stops:2, studentVerified:true, type:"normal" },
    { airline:"Malaysia Airlines", via:"BNE → KUL → LHR", total:1612, base:1520, bags:"Incl.", bagsIncl:true, seat:52, meal:"Incl.", duration:"29h 40m", stops:2, studentVerified:false, type:"normal" },
  ],
  CDG: [
    { airline:"Singapore Airlines", via:"BNE → SIN → CDG", total:1988, base:1920, bags:"Incl.", bagsIncl:true, seat:68, meal:"Incl.", duration:"28h 10m", stops:2, studentVerified:true, type:"best" },
    { airline:"Emirates", via:"BNE → DXB → CDG", total:1872, base:1800, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"30h 20m", stops:2, studentVerified:false, type:"normal" },
  ],
  GRU: [
    { airline:"LATAM + Qatar", via:"BNE → DOH → GRU", total:2341, base:2200, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"38h 30m", stops:3, studentVerified:false, type:"best" },
    { airline:"Emirates + partner", via:"BNE → DXB → GRU", total:2189, base:2060, bags:"Incl.", bagsIncl:true, seat:69, meal:"Incl.", duration:"42h 10m", stops:3, studentVerified:false, type:"normal" },
  ],
  JNB: [
    { airline:"Singapore Airlines + SA Express", via:"BNE → SIN → JNB", total:1621, base:1540, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"30h 40m", stops:2, studentVerified:false, type:"best" },
    { airline:"Emirates", via:"BNE → DXB → JNB", total:1542, base:1470, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"32h 20m", stops:2, studentVerified:false, type:"normal" },
  ]
};

/*— NAVIGATION —*/
function switchTab(tab) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('s-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

/*— FILTERS —*/
function toggleFilter(el, key) {
  el.classList.toggle('on');
  state.filters[key] = el.classList.contains('on');
  renderFlights();
}

/*— FLIGHT RENDERING —*/
function renderFlights() {
  const dest = document.getElementById('dest-select').value;
  const container = document.getElementById('flight-results');
  const label = document.getElementById('result-label');
  if (!dest) {
    label.textContent = 'SELECT A DESTINATION TO SEE FLIGHTS';
    container.innerHTML = `<div style="text-align:center;padding:32px 20px;color:var(--muted);font-size:13px;">Choose your destination above to see all available flights with true total cost.</div>`;
    return;
  }
  let flights = flightDB[dest] || [];
  if (state.filters.studentVerified) flights = flights.filter(f => f.studentVerified);
  if (state.filters.bagsIncluded) flights = flights.filter(f => f.bagsIncl);
  if (state.filters.unsoldSeats) flights = flights.filter(f => f.lastMinute);
  flights = flights.sort((a, b) => a.total - b.total);
  if (!flights.length) {
    label.textContent = '0 RESULTS — TRY ADJUSTING FILTERS';
    container.innerHTML = `<div style="text-align:center;padding:28px 20px;color:var(--muted);font-size:13px;">No flights match your filters.<br><span style="font-size:12px;">Try turning off a filter to see more options.</span></div>`;
    return;
  }
  label.textContent = `${flights.length} RESULT${flights.length > 1 ? 'S' : ''} — BNE → ${dest} — SORTED BY TRUE TOTAL COST`;
  const colors = { best:'var(--green)', warn:'var(--amber)', deal:'#7c3aed', normal:'var(--muted)', premium:'#0891b2' };
  const ribbons = { best:'BEST VALUE', warn:'HIDDEN FEES', deal:'LAST-MINUTE DEAL', premium:'PREMIUM' };
  const ribbonColors = { best:'ribbon-green', warn:'ribbon-amber', deal:'ribbon-purple', premium:'ribbon-blue' };
  container.innerHTML = flights.map((f, i) => {
    const isBest = i === 0;
    const type = isBest && f.type !== 'warn' ? 'best' : f.type;
    const ribbon = ribbons[type] ? `<div class="ribbon ${ribbonColors[type] || 'ribbon-green'}">${ribbons[type]}</div>` : '';
    const noteHtml = f.note ? `<div style="margin-top:5px;"><span class="chip chip-blue" style="font-size:10px;">🎓 ${f.note}</span></div>` : '';
    const bagsColor = f.bagsIncl ? 'var(--green)' : 'var(--amber)';
    return `<div class="flight-card ${isBest && type !== 'warn' ? 'best' : type === 'warn' ? 'warn' : type === 'deal' ? 'deal' : ''} anim">
      ${ribbon}
      <div class="fc-top">
        <div>
          <div class="fc-airline">${f.airline}</div>
          <div class="fc-route">${f.via}</div>
          ${noteHtml}
        </div>
        <div style="text-align:right;">
          <div class="fc-total" style="color:${f.type==='warn'?'var(--amber)':isBest?'var(--green)':'var(--muted)'}">A$${f.total}</div>
          <div class="fc-note">true total</div>
        </div>
      </div>
      <div class="fc-breakdown">
        <div class="fc-item"><div class="fc-item-val">A$${f.base}</div><div class="fc-item-lbl">Base</div></div>
        <div class="fc-item"><div class="fc-item-val" style="color:${bagsColor}">${f.bags}</div><div class="fc-item-lbl">Baggage</div></div>
        <div class="fc-item"><div class="fc-item-val">${f.seat > 0 ? 'A$'+f.seat : 'Incl.'}</div><div class="fc-item-lbl">Seat</div></div>
        <div class="fc-item"><div class="fc-item-val">${f.meal}</div><div class="fc-item-lbl">Meal</div></div>
        <div class="fc-item"><div class="fc-item-val">${f.duration}</div><div class="fc-item-lbl">Journey</div></div>
      </div>
    </div>`;
  }).join('');
}

/*— CHECKLIST —*/
function toggleItem(el) {
  el.querySelector('.check-box-ui').classList.toggle('done');
  updateProgress();
}
function updateProgress() {
  const all = document.querySelectorAll('#s-checklist .check-box-ui').length;
  const done = document.querySelectorAll('#s-checklist .check-box-ui.done').length;
  document.getElementById('progress-fill').style.width = Math.round(done/all*100) + '%';
  document.getElementById('progress-label').textContent = done + ' of ' + all + ' complete';
}

/*— IMMIGRATION EXPAND —*/
function toggleQuestions(el) {
  const panel = el.nextElementSibling;
  const arrow = el.querySelector('.expand-arrow');
  const open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
  if (open) { panel.style.maxHeight = '0px'; panel.style.opacity = '0'; arrow.style.transform = 'rotate(0deg)'; }
  else { panel.style.maxHeight = panel.scrollHeight + 'px'; panel.style.opacity = '1'; arrow.style.transform = 'rotate(180deg)'; }
}

/*— AIRPORT STEPS —*/
function toggleStep(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector('.step-arrow');
  const open = body.classList.contains('open');
  document.querySelectorAll('.ag-body').forEach(b => { b.classList.remove('open'); b.style.maxHeight = '0px'; });
  document.querySelectorAll('.step-arrow').forEach(a => a.style.transform = 'rotate(0deg)');
  if (!open) { body.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; arrow.style.transform = 'rotate(180deg)'; }
}

/*— EMERGENCY STATUS —*/
function advanceStatus() {
  const steps = document.querySelectorAll('.status-step');
  const lines = document.querySelectorAll('.status-line');
  let current = 0;
  steps.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
  steps.forEach(s => s.classList.remove('active', 'done'));
  lines.forEach(l => l.classList.remove('done'));
  const next = Math.min(current + 1, steps.length - 1);
  for (let i = 0; i < next; i++) { steps[i].classList.add('done'); if (lines[i]) lines[i].classList.add('done'); }
  steps[next].classList.add('active');
  if (next === steps.length - 1) {
    document.getElementById('status-btn').style.display = 'none';
    document.getElementById('status-approved').style.display = 'block';
  }
}

/*— LANGUAGE (minimal — UI strings) —*/
const i18n = {
  en:{ greeting:'Good morning, welcome back', hero:'Where are you headed?', alertTitle:'Price drop alert', alertBody:'BNE → Guangzhou from A$521 — 2 seats left', qa1:'Find flights', qa2:'Checklist', qa3:'Airport guide', qa4:'Emergency', firsttime:'First time flying from Australia?' },
  zh:{ greeting:'早上好，欢迎回来', hero:'你要去哪里？', alertTitle:'价格下降提醒', alertBody:'BNE → 广州 仅需 A$521 — 剩余 2 个座位', qa1:'查找航班', qa2:'清单', qa3:'机场指南', qa4:'紧急支持', firsttime:'第一次从澳大利亚飞行？' },
  hi:{ greeting:'सुप्रभात, वापस स्वागत है', hero:'आप कहाँ जा रहे हैं?', alertTitle:'कीमत गिरने की सूचना', alertBody:'BNE → गुआंगझू A$521 से — केवल 2 सीटें बची हैं', qa1:'उड़ानें खोजें', qa2:'चेकलिस्ट', qa3:'हवाई अड्डा गाइड', qa4:'आपातकाल', firsttime:'पहली बार ऑस्ट्रेलिया से उड़ रहे हैं?' },
  vi:{ greeting:'Chào buổi sáng, chào mừng trở lại', hero:'Bạn đang đi đâu?', alertTitle:'Thông báo giảm giá', alertBody:'BNE → Quảng Châu từ A$521 — còn 2 ghế', qa1:'Tìm chuyến bay', qa2:'Danh sách', qa3:'Hướng dẫn sân bay', qa4:'Khẩn cấp', firsttime:'Lần đầu bay từ Úc?' },
  ne:{ greeting:'शुभ प्रभात, फिर स्वागत छ', hero:'तपाई कहाँ जाँदै हुनुहुन्छ?', alertTitle:'मूल्य घट्ने सूचना', alertBody:'BNE → गुवाङझउ A$521 बाट — 2 सिट बाँकी', qa1:'उडान खोज्नुहोस्', qa2:'सूची', qa3:'विमानस्थल गाइड', qa4:'आपतकाल', firsttime:'पहिलो पटक अस्ट्रेलियाबाट उड्दै?' },
  id:{ greeting:'Selamat pagi, selamat datang kembali', hero:'Mau kemana kamu?', alertTitle:'Penurunan harga', alertBody:'BNE → Guangzhou mulai A$521 — 2 kursi tersisa', qa1:'Cari penerbangan', qa2:'Checklist', qa3:'Panduan bandara', qa4:'Darurat', firsttime:'Pertama kali terbang dari Australia?' },
  es:{ greeting:'Buenos días, bienvenido de nuevo', hero:'¿A dónde vas?', alertTitle:'Alerta de bajada de precio', alertBody:'BNE → Guangzhou desde A$521 — quedan 2 asientos', qa1:'Buscar vuelos', qa2:'Lista', qa3:'Guía del aeropuerto', qa4:'Emergencia', firsttime:'¿Primera vez volando desde Australia?' },
  pt:{ greeting:'Bom dia, bem-vindo de volta', hero:'Para onde você vai?', alertTitle:'Alerta de queda de preço', alertBody:'BNE → Guangzhou a partir de A$521 — 2 assentos restantes', qa1:'Buscar voos', qa2:'Lista', qa3:'Guia do aeroporto', qa4:'Emergência', firsttime:'Primeira vez voando da Austrália?' }
};
function setLang(l) {
  state.lang = l;
  localStorage.setItem('fm_lang', l);
  const s = i18n[l] || i18n.en;
  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('h-greeting', s.greeting); set('h-hero', s.hero);
  set('h-alert-title', s.alertTitle); set('h-alert-body', s.alertBody);
  set('h-qa1', s.qa1); set('h-qa2', s.qa2); set('h-qa3', s.qa3); set('h-qa4', s.qa4);
  set('h-firsttime', s.firsttime);
  const sel = document.getElementById('lang-select-app');
  if(sel) sel.value = l;
}

// Init
document.getElementById('date-input').valueAsDate = new Date();
document.getElementById('dest-select').addEventListener('change', renderFlights);
updateProgress();
const initLang = localStorage.getItem('fm_lang') || 'en';
setLang(initLang);
