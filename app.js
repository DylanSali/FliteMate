/*— FliteMate app.js v3.1 — expanded global destinations —*/

const state = {
  lang: localStorage.getItem('fm_lang') || 'en',
  filters: { studentVerified: true, bagsIncluded: true, directOnly: false, unsoldSeats: false, flexDates: false }
};

/*— FLIGHT DATABASE —*/
const flightDB = {
  /* ── INDIA ── */
  DEL: [
    { airline:"Qantas / IndiGo", via:"BNE → SIN → DEL", total:1102, base:980, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"20h 30m", studentVerified:true, type:"best" },
    { airline:"Singapore Airlines", via:"BNE → SIN → DEL", total:1189, base:1050, bags:"Incl.", bagsIncl:true, seat:45, meal:"Incl.", duration:"21h 10m", studentVerified:true, type:"normal" },
    { airline:"Qatar Airways", via:"BNE → DOH → DEL", total:1241, base:1180, bags:"Incl.", bagsIncl:true, seat:61, meal:"Incl.", duration:"24h 20m", studentVerified:true, type:"normal" },
    { airline:"Air India + partner", via:"BNE → MEL → DEL", total:934, base:820, bags:"A$75", bagsIncl:false, seat:29, meal:"—", duration:"26h 40m", studentVerified:false, type:"warn" },
    { airline:"Budget multi-stop", via:"BNE → KUL → DEL", total:788, base:610, bags:"A$89", bagsIncl:false, seat:0, meal:"—", duration:"31h 20m", studentVerified:false, type:"warn" },
    { airline:"Scoot + IndiGo", via:"BNE → SIN → DEL", total:841, base:760, bags:"A$55", bagsIncl:false, seat:26, meal:"—", duration:"24h 10m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  BOM: [
    { airline:"Singapore Airlines", via:"BNE → SIN → BOM", total:698, base:680, bags:"Incl.", bagsIncl:true, seat:18, meal:"Incl.", duration:"23h 40m", studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → BOM", total:742, base:700, bags:"Incl.", bagsIncl:true, seat:22, meal:"A$20", duration:"26h 10m", studentVerified:true, type:"normal" },
    { airline:"Qatar Airways", via:"BNE → DOH → BOM", total:811, base:780, bags:"Incl.", bagsIncl:true, seat:31, meal:"Incl.", duration:"28h 55m", studentVerified:true, type:"normal" },
    { airline:"AirAsia + IndiGo", via:"BNE → KUL → BOM", total:623, base:510, bags:"A$89", bagsIncl:false, seat:24, meal:"—", duration:"29h 05m", studentVerified:false, type:"warn" },
    { airline:"Scoot + partner", via:"BNE → SIN → BOM", total:541, base:480, bags:"A$45", bagsIncl:false, seat:16, meal:"—", duration:"27h 30m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  HYD: [
    { airline:"Singapore Airlines", via:"BNE → SIN → HYD", total:724, base:700, bags:"Incl.", bagsIncl:true, seat:24, meal:"Incl.", duration:"24h 10m", studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → HYD", total:768, base:720, bags:"Incl.", bagsIncl:true, seat:28, meal:"A$20", duration:"26h 40m", studentVerified:true, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → HYD", total:589, base:480, bags:"A$89", bagsIncl:false, seat:20, meal:"—", duration:"30h 15m", studentVerified:false, type:"warn" },
  ],
  MAA: [
    { airline:"Singapore Airlines", via:"BNE → SIN → MAA", total:711, base:690, bags:"Incl.", bagsIncl:true, seat:21, meal:"Incl.", duration:"22h 50m", studentVerified:true, type:"best" },
    { airline:"Malaysia Airlines", via:"BNE → KUL → MAA", total:668, base:620, bags:"Incl.", bagsIncl:true, seat:48, meal:"Incl.", duration:"24h 30m", studentVerified:false, type:"normal" },
    { airline:"AirAsia + IndiGo", via:"BNE → KUL → MAA", total:541, base:450, bags:"A$91", bagsIncl:false, seat:0, meal:"—", duration:"27h 10m", studentVerified:false, type:"warn" },
  ],
  /* ── CHINA ── */
  CAN: [
    { airline:"China Southern 🎓", via:"BNE → CAN", total:589, base:520, bags:"Incl. 30kg", bagsIncl:true, seat:19, meal:"Incl.", duration:"11h 30m", studentVerified:true, type:"best", note:"Student fare · Extended 30kg baggage" },
    { airline:"Cathay Pacific", via:"BNE → HKG → CAN", total:672, base:640, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"14h 20m", studentVerified:true, type:"normal" },
    { airline:"Scoot", via:"BNE → SIN → CAN", total:521, base:460, bags:"A$55", bagsIncl:false, seat:16, meal:"—", duration:"16h 40m", studentVerified:false, type:"deal", lastMinute:true },
    { airline:"China Eastern", via:"BNE → PVG → CAN", total:608, base:560, bags:"Incl.", bagsIncl:true, seat:28, meal:"Incl.", duration:"17h 10m", studentVerified:false, type:"normal" },
  ],
  PEK: [
    { airline:"China Southern 🎓", via:"BNE → CAN → PEK", total:631, base:560, bags:"Incl. 30kg", bagsIncl:true, seat:21, meal:"Incl.", duration:"15h 50m", studentVerified:true, type:"best", note:"Student fare · Extended 30kg baggage" },
    { airline:"Air China", via:"BNE → SIN → PEK", total:698, base:660, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"18h 30m", studentVerified:false, type:"normal" },
    { airline:"Budget + partner", via:"BNE → KUL → PEK", total:512, base:430, bags:"A$82", bagsIncl:false, seat:0, meal:"—", duration:"24h 10m", studentVerified:false, type:"warn" },
  ],
  PVG: [
    { airline:"China Eastern 🎓", via:"BNE → PVG", total:612, base:550, bags:"Incl. 23kg", bagsIncl:true, seat:22, meal:"Incl.", duration:"12h 40m", studentVerified:true, type:"best" },
    { airline:"Cathay Pacific", via:"BNE → HKG → PVG", total:689, base:650, bags:"Incl.", bagsIncl:true, seat:39, meal:"Incl.", duration:"16h 20m", studentVerified:true, type:"normal" },
    { airline:"Scoot + partner", via:"BNE → SIN → PVG", total:498, base:440, bags:"A$50", bagsIncl:false, seat:8, meal:"—", duration:"17h 50m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  CTU: [
    { airline:"China Southern", via:"BNE → CAN → CTU", total:648, base:590, bags:"Incl.", bagsIncl:true, seat:28, meal:"Incl.", duration:"17h 20m", studentVerified:false, type:"best" },
    { airline:"Sichuan Airlines", via:"BNE → SIN → CTU", total:701, base:650, bags:"Incl.", bagsIncl:true, seat:51, meal:"Incl.", duration:"19h 10m", studentVerified:false, type:"normal" },
  ],
  /* ── HONG KONG / TAIWAN ── */
  HKG: [
    { airline:"Cathay Pacific 🎓", via:"BNE → HKG", total:498, base:460, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"9h 20m", studentVerified:true, type:"best", note:"Student fare available on direct route" },
    { airline:"Hong Kong Airlines", via:"BNE → HKG", total:441, base:400, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"9h 40m", studentVerified:false, type:"normal" },
    { airline:"Jetstar", via:"BNE → HKG", total:362, base:300, bags:"A$62", bagsIncl:false, seat:0, meal:"—", duration:"9h 50m", studentVerified:false, type:"warn" },
  ],
  TPE: [
    { airline:"China Airlines 🎓", via:"BNE → TPE", total:521, base:480, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"10h 10m", studentVerified:true, type:"best" },
    { airline:"EVA Air", via:"BNE → TPE", total:548, base:510, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"10h 30m", studentVerified:true, type:"normal" },
    { airline:"Jetstar", via:"BNE → SIN → TPE", total:412, base:350, bags:"A$62", bagsIncl:false, seat:0, meal:"—", duration:"14h 20m", studentVerified:false, type:"warn" },
  ],
  /* ── JAPAN ── */
  NRT: [
    { airline:"Japan Airlines 🎓", via:"BNE → NRT", total:812, base:760, bags:"Incl.", bagsIncl:true, seat:52, meal:"Incl.", duration:"10h 40m", studentVerified:true, type:"best", note:"Student discount available" },
    { airline:"ANA", via:"BNE → NRT", total:849, base:800, bags:"Incl.", bagsIncl:true, seat:49, meal:"Incl.", duration:"10h 50m", studentVerified:true, type:"normal" },
    { airline:"Jetstar", via:"BNE → NRT", total:621, base:550, bags:"A$71", bagsIncl:false, seat:0, meal:"—", duration:"11h 10m", studentVerified:false, type:"warn" },
    { airline:"Scoot", via:"BNE → SIN → NRT", total:574, base:510, bags:"A$64", bagsIncl:false, seat:14, meal:"—", duration:"16h 30m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  KIX: [
    { airline:"Japan Airlines", via:"BNE → NRT → KIX", total:878, base:820, bags:"Incl.", bagsIncl:true, seat:58, meal:"Incl.", duration:"13h 20m", studentVerified:true, type:"best" },
    { airline:"Jetstar", via:"BNE → SIN → KIX", total:641, base:570, bags:"A$71", bagsIncl:false, seat:0, meal:"—", duration:"18h 40m", studentVerified:false, type:"warn" },
  ],
  /* ── SOUTH KOREA ── */
  ICN: [
    { airline:"Korean Air 🎓", via:"BNE → ICN", total:741, base:690, bags:"Incl.", bagsIncl:true, seat:51, meal:"Incl.", duration:"11h 20m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Asiana Airlines", via:"BNE → ICN", total:768, base:720, bags:"Incl.", bagsIncl:true, seat:48, meal:"Incl.", duration:"11h 40m", studentVerified:true, type:"normal" },
    { airline:"Jeju Air", via:"BNE → SIN → ICN", total:592, base:520, bags:"A$72", bagsIncl:false, seat:0, meal:"—", duration:"17h 10m", studentVerified:false, type:"warn" },
    { airline:"T'way Air", via:"BNE → SIN → ICN", total:548, base:490, bags:"A$58", bagsIncl:false, seat:0, meal:"—", duration:"18h 20m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  /* ── SOUTHEAST ASIA ── */
  KTM: [
    { airline:"Singapore Airlines + Buddha Air", via:"BNE → SIN → KTM", total:892, base:860, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"22h 40m", studentVerified:true, type:"best" },
    { airline:"Qatar Airways", via:"BNE → DOH → KTM", total:941, base:900, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"26h 10m", studentVerified:true, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → KTM", total:724, base:620, bags:"A$79", bagsIncl:false, seat:25, meal:"—", duration:"30h 20m", studentVerified:false, type:"warn" },
  ],
  HAN: [
    { airline:"Vietnam Airlines", via:"BNE → SIN → HAN", total:632, base:600, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"14h 20m", studentVerified:true, type:"best" },
    { airline:"Bamboo Airways", via:"BNE → SIN → HAN", total:598, base:550, bags:"Incl.", bagsIncl:true, seat:48, meal:"Incl.", duration:"15h 10m", studentVerified:false, type:"normal" },
    { airline:"Scoot + VietJet", via:"BNE → SIN → HAN", total:489, base:420, bags:"A$55", bagsIncl:false, seat:19, meal:"—", duration:"17h 10m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  SGN: [
    { airline:"Singapore Airlines", via:"BNE → SIN → SGN", total:618, base:590, bags:"Incl.", bagsIncl:true, seat:28, meal:"Incl.", duration:"12h 50m", studentVerified:true, type:"best" },
    { airline:"Scoot", via:"BNE → SIN → SGN", total:472, base:410, bags:"A$50", bagsIncl:false, seat:12, meal:"—", duration:"14h 30m", studentVerified:false, type:"deal", lastMinute:true },
    { airline:"AirAsia", via:"BNE → KUL → SGN", total:441, base:370, bags:"A$71", bagsIncl:false, seat:0, meal:"—", duration:"18h 40m", studentVerified:false, type:"warn" },
  ],
  BKK: [
    { airline:"Thai Airways 🎓", via:"BNE → BKK", total:689, base:640, bags:"Incl.", bagsIncl:true, seat:49, meal:"Incl.", duration:"9h 40m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Qantas", via:"BNE → SIN → BKK", total:721, base:680, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"12h 20m", studentVerified:true, type:"normal" },
    { airline:"AirAsia", via:"BNE → KUL → BKK", total:418, base:350, bags:"A$68", bagsIncl:false, seat:0, meal:"—", duration:"14h 30m", studentVerified:false, type:"warn" },
    { airline:"Scoot", via:"BNE → SIN → BKK", total:389, base:340, bags:"A$49", bagsIncl:false, seat:0, meal:"—", duration:"13h 10m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  SIN: [
    { airline:"Singapore Airlines 🎓", via:"BNE → SIN", total:412, base:380, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"8h 05m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Scoot", via:"BNE → SIN", total:298, base:250, bags:"A$48", bagsIncl:false, seat:0, meal:"—", duration:"8h 20m", studentVerified:false, type:"warn" },
    { airline:"Jetstar", via:"BNE → SIN", total:312, base:262, bags:"A$50", bagsIncl:false, seat:0, meal:"—", duration:"8h 15m", studentVerified:false, type:"deal", lastMinute:true },
  ],
  CGK: [
    { airline:"Garuda Indonesia", via:"BNE → CGK", total:598, base:560, bags:"Incl.", bagsIncl:true, seat:38, meal:"Incl.", duration:"8h 10m", studentVerified:true, type:"best" },
    { airline:"Batik Air", via:"BNE → CGK", total:482, base:440, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"9h 20m", studentVerified:false, type:"normal" },
    { airline:"AirAsia", via:"BNE → KUL → CGK", total:398, base:330, bags:"A$68", bagsIncl:false, seat:0, meal:"—", duration:"13h 40m", studentVerified:false, type:"warn" },
  ],
  KUL: [
    { airline:"Malaysia Airlines 🎓", via:"BNE → KUL", total:442, base:400, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"7h 20m", studentVerified:true, type:"best" },
    { airline:"AirAsia", via:"BNE → KUL", total:318, base:260, bags:"A$58", bagsIncl:false, seat:0, meal:"—", duration:"7h 40m", studentVerified:false, type:"warn" },
  ],
  MNL: [
    { airline:"Philippine Airlines", via:"BNE → MNL", total:712, base:670, bags:"Incl.", bagsIncl:true, seat:42, meal:"Incl.", duration:"9h 30m", studentVerified:true, type:"best" },
    { airline:"Cebu Pacific", via:"BNE → MNL", total:528, base:460, bags:"A$68", bagsIncl:false, seat:0, meal:"—", duration:"10h 10m", studentVerified:false, type:"warn" },
  ],
  CMB: [
    { airline:"SriLankan Airlines", via:"BNE → SIN → CMB", total:921, base:880, bags:"Incl.", bagsIncl:true, seat:41, meal:"Incl.", duration:"20h 30m", studentVerified:true, type:"best" },
    { airline:"Qatar Airways", via:"BNE → DOH → CMB", total:989, base:940, bags:"Incl.", bagsIncl:true, seat:49, meal:"Incl.", duration:"24h 10m", studentVerified:true, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → CMB", total:741, base:640, bags:"A$81", bagsIncl:false, seat:20, meal:"—", duration:"28h 40m", studentVerified:false, type:"warn" },
  ],
  DAC: [
    { airline:"Biman Bangladesh + SQ", via:"BNE → SIN → DAC", total:1041, base:980, bags:"Incl.", bagsIncl:true, seat:61, meal:"Incl.", duration:"23h 10m", studentVerified:false, type:"best" },
    { airline:"Malaysia Airlines + partner", via:"BNE → KUL → DAC", total:892, base:820, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"26h 40m", studentVerified:false, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → DAC", total:748, base:650, bags:"A$98", bagsIncl:false, seat:0, meal:"—", duration:"31h 20m", studentVerified:false, type:"warn" },
  ],
  KHI: [
    { airline:"Pakistan International + SQ", via:"BNE → SIN → KHI", total:1089, base:1020, bags:"Incl.", bagsIncl:true, seat:69, meal:"Incl.", duration:"24h 30m", studentVerified:false, type:"best" },
    { airline:"Qatar Airways", via:"BNE → DOH → KHI", total:1142, base:1080, bags:"Incl.", bagsIncl:true, seat:62, meal:"Incl.", duration:"27h 10m", studentVerified:false, type:"normal" },
    { airline:"AirAsia + partner", via:"BNE → KUL → KHI", total:841, base:740, bags:"A$101", bagsIncl:false, seat:0, meal:"—", duration:"33h 20m", studentVerified:false, type:"warn" },
  ],
  /* ── MIDDLE EAST ── */
  DXB: [
    { airline:"Emirates 🎓", via:"BNE → DXB", total:1021, base:960, bags:"Incl.", bagsIncl:true, seat:61, meal:"Incl.", duration:"14h 20m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Qantas + Emirates", via:"BNE → DXB", total:1089, base:1020, bags:"Incl.", bagsIncl:true, seat:69, meal:"Incl.", duration:"14h 40m", studentVerified:true, type:"normal" },
    { airline:"Flydubai + partner", via:"BNE → SIN → DXB", total:841, base:770, bags:"A$71", bagsIncl:false, seat:30, meal:"—", duration:"20h 10m", studentVerified:false, type:"warn" },
  ],
  RUH: [
    { airline:"Saudia + SQ", via:"BNE → SIN → RUH", total:1198, base:1120, bags:"Incl.", bagsIncl:true, seat:78, meal:"Incl.", duration:"26h 40m", studentVerified:false, type:"best" },
    { airline:"Qatar Airways", via:"BNE → DOH → RUH", total:1241, base:1170, bags:"Incl.", bagsIncl:true, seat:71, meal:"Incl.", duration:"27h 10m", studentVerified:false, type:"normal" },
  ],
  DOH: [
    { airline:"Qatar Airways 🎓", via:"BNE → DOH", total:1089, base:1020, bags:"Incl.", bagsIncl:true, seat:69, meal:"Incl.", duration:"17h 30m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Qantas + QR", via:"BNE → DOH", total:1142, base:1080, bags:"Incl.", bagsIncl:true, seat:62, meal:"Incl.", duration:"17h 50m", studentVerified:true, type:"normal" },
  ],
  /* ── EUROPE ── */
  CPH: [
    { airline:"Singapore Airlines + SAS", via:"BNE → SIN → CPH", total:2089, base:1980, bags:"Incl.", bagsIncl:true, seat:109, meal:"Incl.", duration:"28h 40m", studentVerified:true, type:"best", note:"Popular route for Scandinavian students" },
    { airline:"Qatar Airways + SAS", via:"BNE → DOH → CPH", total:1982, base:1880, bags:"Incl.", bagsIncl:true, seat:102, meal:"Incl.", duration:"30h 20m", studentVerified:true, type:"normal" },
    { airline:"Malaysia Airlines + partner", via:"BNE → KUL → CPH", total:1841, base:1750, bags:"Incl.", bagsIncl:true, seat:91, meal:"Incl.", duration:"33h 10m", studentVerified:false, type:"normal" },
    { airline:"Budget multi-stop", via:"BNE → SIN → FRA → CPH", total:1612, base:1480, bags:"A$132", bagsIncl:false, seat:0, meal:"—", duration:"42h 20m", studentVerified:false, type:"warn" },
  ],
  OSL: [
    { airline:"Singapore Airlines + Norwegian", via:"BNE → SIN → OSL", total:2142, base:2030, bags:"Incl.", bagsIncl:true, seat:112, meal:"Incl.", duration:"30h 10m", studentVerified:true, type:"best" },
    { airline:"Qatar Airways + SAS", via:"BNE → DOH → OSL", total:2021, base:1920, bags:"Incl.", bagsIncl:true, seat:101, meal:"Incl.", duration:"31h 40m", studentVerified:true, type:"normal" },
    { airline:"Budget multi-stop", via:"BNE → KUL → FRA → OSL", total:1689, base:1550, bags:"A$139", bagsIncl:false, seat:0, meal:"—", duration:"44h 10m", studentVerified:false, type:"warn" },
  ],
  LHR: [
    { airline:"Qantas", via:"BNE → SIN → LHR", total:1842, base:1780, bags:"Incl.", bagsIncl:true, seat:62, meal:"Incl.", duration:"26h 20m", studentVerified:true, type:"best" },
    { airline:"Singapore Airlines", via:"BNE → SIN → LHR", total:1921, base:1860, bags:"Incl.", bagsIncl:true, seat:61, meal:"Incl.", duration:"27h 10m", studentVerified:true, type:"normal" },
    { airline:"Malaysia Airlines", via:"BNE → KUL → LHR", total:1612, base:1520, bags:"Incl.", bagsIncl:true, seat:52, meal:"Incl.", duration:"29h 40m", studentVerified:false, type:"normal" },
    { airline:"Budget multi-stop", via:"BNE → KUL → LHR", total:1289, base:1150, bags:"A$139", bagsIncl:false, seat:0, meal:"—", duration:"38h 20m", studentVerified:false, type:"warn" },
  ],
  CDG: [
    { airline:"Singapore Airlines", via:"BNE → SIN → CDG", total:1988, base:1920, bags:"Incl.", bagsIncl:true, seat:68, meal:"Incl.", duration:"28h 10m", studentVerified:true, type:"best" },
    { airline:"Emirates", via:"BNE → DXB → CDG", total:1872, base:1800, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"30h 20m", studentVerified:false, type:"normal" },
    { airline:"Malaysia Airlines + partner", via:"BNE → KUL → CDG", total:1741, base:1660, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"32h 40m", studentVerified:false, type:"normal" },
  ],
  FRA: [
    { airline:"Singapore Airlines + Lufthansa", via:"BNE → SIN → FRA", total:1912, base:1840, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"27h 40m", studentVerified:true, type:"best" },
    { airline:"Qatar Airways + Lufthansa", via:"BNE → DOH → FRA", total:1841, base:1770, bags:"Incl.", bagsIncl:true, seat:71, meal:"Incl.", duration:"29h 10m", studentVerified:true, type:"normal" },
    { airline:"Budget multi-stop", via:"BNE → KUL → FRA", total:1498, base:1360, bags:"A$138", bagsIncl:false, seat:0, meal:"—", duration:"37h 20m", studentVerified:false, type:"warn" },
  ],
  MAD: [
    { airline:"Qatar Airways + Iberia", via:"BNE → DOH → MAD", total:1921, base:1840, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"31h 20m", studentVerified:true, type:"best" },
    { airline:"Emirates + partner", via:"BNE → DXB → MAD", total:1889, base:1810, bags:"Incl.", bagsIncl:true, seat:79, meal:"Incl.", duration:"32h 10m", studentVerified:false, type:"normal" },
  ],
  /* ── AMERICAS ── */
  GRU: [
    { airline:"LATAM + Qatar", via:"BNE → DOH → GRU", total:2341, base:2200, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"38h 30m", studentVerified:false, type:"best" },
    { airline:"Emirates + partner", via:"BNE → DXB → GRU", total:2189, base:2060, bags:"Incl.", bagsIncl:true, seat:69, meal:"Incl.", duration:"42h 10m", studentVerified:false, type:"normal" },
    { airline:"Budget multi-stop", via:"BNE → SIN → FRA → GRU", total:1921, base:1760, bags:"A$161", bagsIncl:false, seat:0, meal:"—", duration:"52h 40m", studentVerified:false, type:"warn" },
  ],
  BOG: [
    { airline:"LATAM + Qatar", via:"BNE → DOH → BOG", total:2412, base:2270, bags:"Incl.", bagsIncl:true, seat:92, meal:"Incl.", duration:"40h 20m", studentVerified:false, type:"best" },
    { airline:"Avianca + SQ", via:"BNE → SIN → BOG", total:2298, base:2160, bags:"Incl.", bagsIncl:true, seat:88, meal:"Incl.", duration:"43h 10m", studentVerified:false, type:"normal" },
  ],
  MEX: [
    { airline:"LATAM + American", via:"BNE → LAX → MEX", total:2189, base:2050, bags:"Incl.", bagsIncl:true, seat:89, meal:"Incl.", duration:"28h 40m", studentVerified:false, type:"best" },
    { airline:"Aeromexico + SQ", via:"BNE → SIN → MEX", total:2341, base:2200, bags:"Incl.", bagsIncl:true, seat:91, meal:"Incl.", duration:"36h 20m", studentVerified:false, type:"normal" },
  ],
  /* ── AFRICA ── */
  JNB: [
    { airline:"Singapore Airlines + SA Express", via:"BNE → SIN → JNB", total:1621, base:1540, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"30h 40m", studentVerified:false, type:"best" },
    { airline:"Emirates", via:"BNE → DXB → JNB", total:1542, base:1470, bags:"Incl.", bagsIncl:true, seat:72, meal:"Incl.", duration:"32h 20m", studentVerified:false, type:"normal" },
    { airline:"Qatar Airways", via:"BNE → DOH → JNB", total:1598, base:1520, bags:"Incl.", bagsIncl:true, seat:78, meal:"Incl.", duration:"31h 50m", studentVerified:false, type:"normal" },
  ],
  NBO: [
    { airline:"Emirates + Kenya Airways", via:"BNE → DXB → NBO", total:1789, base:1700, bags:"Incl.", bagsIncl:true, seat:89, meal:"Incl.", duration:"34h 20m", studentVerified:false, type:"best" },
    { airline:"Qatar Airways + KQ", via:"BNE → DOH → NBO", total:1841, base:1760, bags:"Incl.", bagsIncl:true, seat:81, meal:"Incl.", duration:"35h 10m", studentVerified:false, type:"normal" },
  ],
  /* ── PACIFIC / OTHER ── */
  AKL: [
    { airline:"Air New Zealand 🎓", via:"BNE → AKL", total:312, base:280, bags:"Incl.", bagsIncl:true, seat:32, meal:"Incl.", duration:"3h 20m", studentVerified:true, type:"best", note:"Student fare available" },
    { airline:"Jetstar", via:"BNE → AKL", total:198, base:160, bags:"A$38", bagsIncl:false, seat:0, meal:"—", duration:"3h 30m", studentVerified:false, type:"warn" },
  ],
};


/*— NAVIGATION —*/
function switchTab(tab) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('s-' + tab).classList.add('active');
  const navTab = document.getElementById('tab-' + tab);
  if (navTab) navTab.classList.add('active');
}

/*— DEST NAMES —*/
const destNames = {
  DEL:'New Delhi',BOM:'Mumbai',HYD:'Hyderabad',MAA:'Chennai',
  CAN:'Guangzhou',PEK:'Beijing',PVG:'Shanghai',CTU:'Chengdu',
  HKG:'Hong Kong',TPE:'Taipei',NRT:'Tokyo',KIX:'Osaka',ICN:'Seoul',
  KTM:'Kathmandu',CMB:'Colombo',DAC:'Dhaka',KHI:'Karachi',
  HAN:'Hanoi',SGN:'Ho Chi Minh City',BKK:'Bangkok',SIN:'Singapore',
  CGK:'Jakarta',KUL:'Kuala Lumpur',MNL:'Manila',
  DXB:'Dubai',RUH:'Riyadh',DOH:'Doha',
  CPH:'Copenhagen',OSL:'Oslo',LHR:'London',CDG:'Paris',FRA:'Frankfurt',MAD:'Madrid',
  GRU:'São Paulo',BOG:'Bogotá',MEX:'Mexico City',
  JNB:'Johannesburg',NBO:'Nairobi',AKL:'Auckland'
};

/*— DEST CHANGE —*/
function onDestChange() {
  const dest = document.getElementById('dest-select').value;
  if (dest && destNames[dest]) {
    const name = destNames[dest];
    const ft = document.getElementById('h-firsttime');
    if (ft) ft.textContent = `First time flying to ${name}?`;
    const route = document.getElementById('h-route');
    if (route) route.textContent = `Brisbane (BNE) → ${name}`;
  }
  renderFlights();
}

function goToFlight(dest) {
  const sel = document.getElementById('dest-select');
  if (sel) sel.value = dest;
  onDestChange();
  switchTab('trips');
}

/*— DEST REF TOGGLE —*/
function toggleDestRef() {
  const body = document.getElementById('dest-ref-body');
  const arrow = document.getElementById('dest-ref-arrow');
  const open = body.classList.contains('open');
  body.classList.toggle('open', !open);
  arrow.textContent = open ? '+ Show' : '− Hide';
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
    label.textContent = 'Select a destination to see flights';
    container.innerHTML = `<div style="text-align:center;padding:32px 20px;color:var(--muted);font-size:13px;">Choose your destination above to see all available flights with true total cost.</div>`;
    return;
  }
  let flights = flightDB[dest] || [];
  if (state.filters.studentVerified) flights = flights.filter(f => f.studentVerified);
  if (state.filters.bagsIncluded) flights = flights.filter(f => f.bagsIncl);
  if (state.filters.unsoldSeats) flights = flights.filter(f => f.lastMinute);
  flights = flights.sort((a, b) => a.total - b.total);

  if (!flights.length) {
    label.textContent = '0 results — try adjusting filters';
    container.innerHTML = `<div style="text-align:center;padding:28px 20px;color:var(--muted);font-size:13px;">No flights match your current filters.<br><span style="font-size:12px;">Try turning off a filter above.</span></div>`;
    return;
  }

  const destLabel = destNames[dest] || dest;
  label.textContent = `${flights.length} result${flights.length > 1 ? 's' : ''} — BNE → ${destLabel} — sorted by true total cost`;

  container.innerHTML = flights.map((f, i) => {
    const isBest = i === 0 && f.type !== 'warn';
    const type = isBest ? 'best' : f.type;
    const ribbonMap = { best:'BEST VALUE', warn:'HIDDEN FEES', deal:'LAST-MINUTE DEAL' };
    const ribbon = ribbonMap[type] ? `<div class="fc-ribbon ${type}">${ribbonMap[type]}</div>` : '';
    const note = f.note ? `<div class="fc-student-note">🎓 ${f.note}</div>` : '';
    const totalClass = type === 'warn' ? 'amber' : isBest ? 'green' : 'muted';
    const bagsClass = f.bagsIncl ? 'g' : 'a';
    return `<div class="flight-card ${type} anim">
      ${ribbon}
      <div class="fc-body">
        <div class="fc-top">
          <div>
            <div class="fc-airline">${f.airline}</div>
            <div class="fc-route">${f.via}</div>
            ${note}
          </div>
          <div style="text-align:right;">
            <div class="fc-total ${totalClass}">A$${f.total}</div>
            <div class="fc-note">true total</div>
          </div>
        </div>
        <div class="fc-breakdown">
          <div class="fc-item"><div class="fc-item-val">A$${f.base}</div><div class="fc-item-lbl">Base</div></div>
          <div class="fc-item"><div class="fc-item-val ${bagsClass}">${f.bags}</div><div class="fc-item-lbl">Bags</div></div>
          <div class="fc-item"><div class="fc-item-val">${f.seat > 0 ? 'A$'+f.seat : 'Incl.'}</div><div class="fc-item-lbl">Seat</div></div>
          <div class="fc-item"><div class="fc-item-val">${f.meal}</div><div class="fc-item-lbl">Meal</div></div>
          <div class="fc-item"><div class="fc-item-val">${f.duration}</div><div class="fc-item-lbl">Journey</div></div>
        </div>
        <button class="fc-book-btn" onclick="openCheckout(${JSON.stringify(f).replace(/"/g,'&quot;')})">
          Book this flight — A$${f.total}
        </button>
      </div>
    </div>`;
  }).join('');
}

/*— CHECKOUT —*/
function openCheckout(f) {
  document.getElementById('co-airline').textContent = f.airline;
  document.getElementById('co-route').textContent = f.via;
  document.getElementById('co-total').textContent = 'A$' + f.total;
  document.getElementById('co-total2').textContent = 'A$' + f.total;
  document.getElementById('co-btn-total').textContent = 'A$' + f.total;
  document.getElementById('co-subtitle').textContent = f.airline + ' · ' + f.via;
  document.getElementById('co-base').textContent = 'A$' + f.base;
  document.getElementById('co-bags').textContent = f.bagsIncl ? 'Included' : f.bags;
  document.getElementById('co-seat').textContent = f.seat > 0 ? 'A$' + f.seat : 'Included';
  // Hide nav during checkout
  document.querySelector('.bottom-nav').style.display = 'none';
  switchTab('checkout');
}

function confirmBooking() {
  const ref = 'FM-2026-' + Math.random().toString(36).substring(2,6).toUpperCase() + '-' + Math.floor(Math.random()*9000+1000);
  document.getElementById('confirm-ref').textContent = ref;
  document.getElementById('confirm-overlay').style.display = 'flex';
}

function postConfirm() {
  document.getElementById('confirm-overlay').style.display = 'none';
  document.querySelector('.bottom-nav').style.display = 'flex';
  switchTab('checklist');
}

// Override switchTab to restore nav when leaving checkout
const _origSwitch = switchTab;
function switchTab(tab) {
  if (tab !== 'checkout') {
    document.querySelector('.bottom-nav').style.display = 'flex';
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('s-' + tab).classList.add('active');
  const navTab = document.getElementById('tab-' + tab);
  if (navTab) navTab.classList.add('active');
}

/*— CHECKLIST — fixed checkbox toggle —*/
function toggleItem(el) {
  const box = el.querySelector('.check-box-ui');
  if (box) {
    box.classList.toggle('done');
    updateProgress();
  }
}

function updateProgress() {
  const all = document.querySelectorAll('#s-checklist .check-box-ui');
  const done = document.querySelectorAll('#s-checklist .check-box-ui.done');
  const pct = all.length > 0 ? Math.round((done.length / all.length) * 100) : 0;
  const fill = document.getElementById('progress-fill');
  const lbl = document.getElementById('progress-label');
  if (fill) fill.style.width = pct + '%';
  if (lbl) lbl.textContent = done.length + ' of ' + all.length + ' complete';
}

/*— IMMIGRATION EXPAND —*/
function toggleQuestions(el) {
  const panel = el.nextElementSibling;
  const arrow = el.querySelector('.expand-arrow');
  const open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
  if (open) {
    panel.style.maxHeight = '0px';
    panel.style.opacity = '0';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.style.opacity = '1';
    arrow.style.transform = 'rotate(90deg)';
  }
}

/*— AIRPORT STEPS —*/
function toggleStep(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector('.ag-arrow');
  const open = body.classList.contains('open');
  document.querySelectorAll('.ag-body').forEach(b => { b.classList.remove('open'); b.style.maxHeight = '0px'; });
  document.querySelectorAll('.ag-arrow').forEach(a => a.style.transform = 'rotate(0deg)');
  if (!open) {
    body.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    arrow.style.transform = 'rotate(180deg)';
  }
}

/*— EMERGENCY STATUS —*/
function advanceStatus() {
  const steps = document.querySelectorAll('.s-step');
  const lines = document.querySelectorAll('.s-line');
  let current = 0;
  steps.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
  steps.forEach(s => s.classList.remove('active', 'done'));
  lines.forEach(l => l.classList.remove('done'));
  const next = Math.min(current + 1, steps.length - 1);
  for (let i = 0; i < next; i++) {
    steps[i].classList.add('done');
    if (lines[i]) lines[i].classList.add('done');
  }
  steps[next].classList.add('active');
  if (next === steps.length - 1) {
    document.getElementById('status-btn').style.display = 'none';
    document.getElementById('status-approved').style.display = 'block';
  }
}

/*— DYNAMIC GREETING —*/
function getGreeting(lang) {
  const h = new Date().getHours();
  const map = {
    en:[  'GOOD MORNING','GOOD AFTERNOON','GOOD EVENING'],
    zh:['早上好','下午好','晚上好'],
    hi:['सुप्रभात','नमस्कार','शुभ संध्या'],
    da:['GOD MORGEN','GOD EFTERMIDDAG','GOD AFTEN'],
    no:['GOD MORGEN','GOD ETTERMIDDAG','GOD KVELD'],
    ko:['좋은 아침','좋은 오후','좋은 저녁'],
    ja:['おはようございます','こんにちは','こんばんは'],
    ar:['صباح الخير','مساء الخير','مساء النور'],
    vi:['CHÀO BUỔI SÁNG','CHÀO BUỔI CHIỀU','CHÀO BUỔI TỐI'],
    ne:['शुभ प्रभात','नमस्ते','शुभ सन्ध्या'],
    id:['SELAMAT PAGI','SELAMAT SIANG','SELAMAT MALAM'],
    es:['BUENOS DÍAS','BUENAS TARDES','BUENAS NOCHES'],
    pt:['BOM DIA','BOA TARDE','BOA NOITE'],
    fr:['BONJOUR','BON APRÈS-MIDI','BONSOIR'],
    de:['GUTEN MORGEN','GUTEN TAG','GUTEN ABEND'],
    tl:['MAGANDANG UMAGA','MAGANDANG HAPON','MAGANDANG GABI'],
    ta:['காலை வணக்கம்','மதிய வணக்கம்','மாலை வணக்கம்'],
    bn:['শুভ সকাল','শুভ দুপুর','শুভ সন্ধ্যা'],
  };
  const times = map[lang] || map.en;
  const idx = h < 12 ? 0 : h < 17 ? 1 : 2;
  return times[idx];
}

/*— LANGUAGE —*/
const i18n = {
  en:{hero:'Where are you headed?',alertTitle:'Price drop alert',alertBody:'BNE → Guangzhou from A$521 — 2 seats left',qa1:'Find flights',qa2:'Checklist',qa3:'Airport guide',qa4:'Emergency',firsttime:'First time flying from Brisbane?'},
  zh:{hero:'你要去哪里？',alertTitle:'价格下降提醒',alertBody:'BNE → 广州 仅需 A$521 — 剩余 2 个座位',qa1:'查找航班',qa2:'清单',qa3:'机场指南',qa4:'紧急支持',firsttime:'第一次从布里斯班飞行？'},
  hi:{hero:'आप कहाँ जा रहे हैं?',alertTitle:'कीमत गिरने की सूचना',alertBody:'BNE → गुआंगझू A$521 से — 2 सीटें बची',qa1:'उड़ानें',qa2:'चेकलिस्ट',qa3:'हवाई अड्डा',qa4:'आपातकाल',firsttime:'पहली बार ब्रिस्बेन से उड़ रहे हैं?'},
  da:{hero:'Hvor er du på vej hen?',alertTitle:'Prisfaldsadvarsel',alertBody:'BNE → Guangzhou fra A$521 — 2 sæder tilbage',qa1:'Find fly',qa2:'Tjekliste',qa3:'Lufthavnsvejledning',qa4:'Nødsituation',firsttime:'Flyver du for første gang fra Brisbane?'},
  no:{hero:'Hvor skal du hen?',alertTitle:'Prisvarsel',alertBody:'BNE → Guangzhou fra A$521 — 2 seter igjen',qa1:'Finn fly',qa2:'Sjekkliste',qa3:'Flyplassveiledning',qa4:'Nødsituasjon',firsttime:'Flyr du for første gang fra Brisbane?'},
  ko:{hero:'어디로 가십니까?',alertTitle:'가격 인하 알림',alertBody:'BNE → 광저우 A$521부터 — 2석 남음',qa1:'항공편 검색',qa2:'체크리스트',qa3:'공항 안내',qa4:'긴급 지원',firsttime:'브리즈번에서 처음 비행하시나요?'},
  ja:{hero:'どこへ向かいますか？',alertTitle:'価格下落アラート',alertBody:'BNE → 広州 A$521から — 残り2席',qa1:'フライト検索',qa2:'チェックリスト',qa3:'空港ガイド',qa4:'緊急サポート',firsttime:'ブリスベンから初めて飛行しますか？'},
  ar:{hero:'إلى أين أنت ذاهب؟',alertTitle:'تنبيه انخفاض السعر',alertBody:'BNE → غوانغتشو من A$521 — مقعدان متبقيان',qa1:'ابحث عن رحلات',qa2:'قائمة التحقق',qa3:'دليل المطار',qa4:'الطوارئ',firsttime:'هل تطير لأول مرة من بريزبان؟'},
  vi:{hero:'Bạn đang đi đâu?',alertTitle:'Thông báo giảm giá',alertBody:'BNE → Quảng Châu từ A$521 — còn 2 ghế',qa1:'Tìm chuyến bay',qa2:'Danh sách',qa3:'Hướng dẫn sân bay',qa4:'Khẩn cấp',firsttime:'Lần đầu bay từ Brisbane?'},
  ne:{hero:'तपाई कहाँ जाँदै हुनुहुन्छ?',alertTitle:'मूल्य घट्ने सूचना',alertBody:'BNE → गुवाङझउ A$521 बाट — 2 सिट बाँकी',qa1:'उडान खोज्नुहोस्',qa2:'सूची',qa3:'विमानस्थल गाइड',qa4:'आपतकाल',firsttime:'पहिलो पटक ब्रिस्बेनबाट उड्दै?'},
  id:{hero:'Mau kemana kamu?',alertTitle:'Penurunan harga',alertBody:'BNE → Guangzhou mulai A$521 — 2 kursi tersisa',qa1:'Cari penerbangan',qa2:'Checklist',qa3:'Panduan bandara',qa4:'Darurat',firsttime:'Pertama kali terbang dari Brisbane?'},
  es:{hero:'¿A dónde vas?',alertTitle:'Alerta de bajada de precio',alertBody:'BNE → Guangzhou desde A$521 — quedan 2 asientos',qa1:'Buscar vuelos',qa2:'Lista',qa3:'Guía del aeropuerto',qa4:'Emergencia',firsttime:'¿Primera vez volando desde Brisbane?'},
  pt:{hero:'Para onde você vai?',alertTitle:'Alerta de queda de preço',alertBody:'BNE → Guangzhou a partir de A$521 — 2 assentos',qa1:'Buscar voos',qa2:'Lista',qa3:'Guia do aeroporto',qa4:'Emergência',firsttime:'Primeira vez voando de Brisbane?'},
  fr:{hero:'Où allez-vous?',alertTitle:'Alerte baisse de prix',alertBody:'BNE → Guangzhou dès A$521 — 2 sièges restants',qa1:'Trouver des vols',qa2:'Liste de contrôle',qa3:'Guide aéroport',qa4:'Urgence',firsttime:'Premier vol depuis Brisbane?'},
  de:{hero:'Wohin geht es?',alertTitle:'Preisrückgang-Alarm',alertBody:'BNE → Guangzhou ab A$521 — noch 2 Plätze',qa1:'Flüge suchen',qa2:'Checkliste',qa3:'Flughafenführer',qa4:'Notfall',firsttime:'Erster Flug von Brisbane?'},
  tl:{hero:'Saan ka pupunta?',alertTitle:'Babala sa pagbaba ng presyo',alertBody:'BNE → Guangzhou mula A$521 — 2 upuan na lang',qa1:'Hanapin ang flight',qa2:'Checklist',qa3:'Gabay sa paliparan',qa4:'Emergency',firsttime:'Unang beses lumilipad mula Brisbane?'},
  ta:{hero:'எங்கே செல்கிறீர்கள்?',alertTitle:'விலை குறைவு எச்சரிக்கை',alertBody:'BNE → குவாங்சோ A$521 முதல் — 2 இருக்கைகள்',qa1:'விமானங்கள் தேட',qa2:'சரிபார்ப்பு பட்டியல்',qa3:'விமான நிலைய வழிகாட்டி',qa4:'அவசரநிலை',firsttime:'பிரிஸ்பேனில் இருந்து முதல் முறை?'},
  bn:{hero:'আপনি কোথায় যাচ্ছেন?',alertTitle:'মূল্য হ্রাস সতর্কতা',alertBody:'BNE → গুয়াংজু A$521 থেকে — ২টি আসন বাকি',qa1:'ফ্লাইট খুঁজুন',qa2:'চেকলিস্ট',qa3:'বিমানবন্দর গাইড',qa4:'জরুরি',firsttime:'ব্রিসবেন থেকে প্রথমবার উড়ছেন?'},
};

function setLang(l) {
  state.lang = l;
  localStorage.setItem('fm_lang', l);
  const s = i18n[l] || i18n.en;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('h-greeting', getGreeting(l));
  set('h-hero', s.hero);
  set('h-alert-title', s.alertTitle);
  set('h-alert-body', s.alertBody);
  set('h-qa1', s.qa1); set('h-qa2', s.qa2); set('h-qa3', s.qa3); set('h-qa4', s.qa4);
  const dest = document.getElementById('dest-select') ? document.getElementById('dest-select').value : '';
  const destName = dest && destNames[dest] ? destNames[dest] : null;
  set('h-firsttime', destName ? s.firsttime.replace('Brisbane', destName) : s.firsttime);
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = l;
}

/*— INIT —*/
const dateInput = document.getElementById('date-input');
if (dateInput) dateInput.valueAsDate = new Date();
const destSel = document.getElementById('dest-select');
if (destSel) destSel.addEventListener('change', onDestChange);
updateProgress();
const initLang = localStorage.getItem('fm_lang') || 'en';
setLang(initLang);

/*— FEEDBACK FORM — one-time, end of journey —*/
const FEEDBACK_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuIBBlJp0pFt75L9vaMbpDMwUxjQWEJBpOpT7hMcROTADReVXccRfGsv-tTeirGO1n8A/exec";

const fbRatings = {};
let fbEase = 0;

// Render star groups after DOM ready
document.querySelectorAll('.fb-stars').forEach(container => {
  const feature = container.dataset.feature;
  fbRatings[feature] = 0;
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'fb-star';
    star.textContent = '⭐';
    star.dataset.val = i;
    star.onclick = () => {
      fbRatings[feature] = i;
      container.querySelectorAll('.fb-star').forEach((s, idx) => s.classList.toggle('lit', idx < i));
    };
    container.appendChild(star);
  }
});

function selectEase(el) {
  fbEase = parseInt(el.dataset.val);
  document.querySelectorAll('.ease-btn').forEach(b => b.classList.toggle('selected', b === el));
}

async function submitFullFeedback() {
  const comment = document.getElementById('fb-comment').value.trim();
  const name = document.getElementById('fb-name').value.trim() || 'Anonymous';
  const btn = document.getElementById('fb-submit-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const payload = {
    name,
    feature: 'full-journey-feedback',
    ease: fbEase,
    stars: Math.round(Object.values(fbRatings).reduce((a,b) => a+b, 0) / Object.keys(fbRatings).length) || 0,
    comment: `Flights:${fbRatings.flights}★ Checklist:${fbRatings.checklist}★ Airport:${fbRatings.airport}★ Emergency:${fbRatings.emergency}★ Ease:${fbEase}/5 | ${comment}`
  };

  try {
    await fetch(FEEDBACK_SCRIPT_URL, { method:'POST', mode:'no-cors', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
  } catch(e) { console.log('Sheets:', e); }

  document.getElementById('feedback-form-wrap').style.display = 'none';
  document.getElementById('feedback-success').style.display = 'block';
}

/*— AI BOT —*/
const BOT_CONTEXT = `You are FliteMate, an AI travel assistant for international students flying home from Brisbane (BNE), Australia. You help students with:
- Flight search, true total cost breakdown, baggage allowances, student fares
- Immigration procedures at BNE: SmartGate, customs declaration, common questions officers ask
- Airport guide: check-in, baggage drop, security, boarding, layovers
- Emergency travel fund: how it works (not a loan, A$25/semester opt-in, university co-funded, A$1200 max, 3-5 day approval)
- Visa requirements for common student home countries (India, China, Nepal, Vietnam, Indonesia, Korea, Japan)
- General travel tips for long-haul flights

Keep answers concise, friendly, and specific to international students in Australia. Max 3-4 sentences per answer. If unsure, say so and suggest they check official sources.`;

const botHistory = [];

function addBotMessage(text, role) {
  const messages = document.getElementById('bot-messages');
  const div = document.createElement('div');
  div.className = `bot-msg ${role}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function showTyping() {
  const messages = document.getElementById('bot-messages');
  const div = document.createElement('div');
  div.className = 'bot-typing';
  div.id = 'bot-typing';
  div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('bot-typing');
  if (el) el.remove();
}

async function sendBotMessage(text) {
  // Hide suggestions after first message
  const suggestions = document.getElementById('bot-suggestions');
  if (suggestions) suggestions.style.display = 'none';

  addBotMessage(text, 'user');
  botHistory.push({ role: 'user', content: text });
  document.getElementById('bot-input').value = '';

  showTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: BOT_CONTEXT,
        messages: botHistory
      })
    });
    const data = await response.json();
    const reply = data.content?.[0]?.text || "I'm not sure about that — check official airline or government sources for the latest info.";
    hideTyping();
    addBotMessage(reply, 'ai');
    botHistory.push({ role: 'assistant', content: reply });
  } catch(e) {
    hideTyping();
    addBotMessage("Sorry, I'm having trouble connecting right now. Try checking the Checklist tab for immigration and airport info.", 'ai');
  }
}

function sendBotFromInput() {
  const input = document.getElementById('bot-input');
  const text = input.value.trim();
  if (!text) return;
  sendBotMessage(text);
  input.style.height = '46px';
}

// Add greeting when bot tab opens
const origSwitchTab = switchTab;
function switchTab(tab) {
  origSwitchTab(tab);
  if (tab === 'bot' && document.getElementById('bot-messages').children.length === 0) {
    setTimeout(() => {
      addBotMessage("Hi! I'm your FliteMate AI assistant. Ask me anything about your trip — flights, immigration, baggage, the emergency fund, or airport tips. 👋", 'ai');
    }, 300);
  }
}
