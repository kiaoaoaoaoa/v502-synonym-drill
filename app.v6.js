const categories = [
  {
    id: "001",
    words: ["abound", "bristle", "crawl", "pullulate", "rife", "suffice", "swarm", "teem"],
  },
  {
    id: "002",
    words: ["demystify", "edify", "enlighten", "illuminate", "inculcate", "rectify"],
  },
  {
    id: "003",
    words: ["affiliate", "associate", "join"],
  },
  {
    id: "004",
    words: ["affect", "fake", "feign", "make believe to do", "pretend", "profess", "simulate"],
  },
  {
    id: "005",
    words: ["alchemy", "astrology", "charlatan", "mountebank", "quack", "counterfeit", "forgery", "nostrum", "sophism", "sophistry", "casuistry", "sham"],
  },
  {
    id: "006",
    words: ["apocryphal", "artificial", "bogus", "colorable", "counterfeit", "deceptive", "factitious", "fallacious", "fictitious", "fraudulent", "mala fide", "mendacious", "mimic", "ostensible", "phoney", "phony", "shoddy", "snide", "specious", "spoof", "spurious", "supposititious", "unauthentic"],
  },
  {
    id: "007",
    words: ["draconian", "exacting", "harsh", "stark", "stern", "astringent", "austere"],
  },
  {
    id: "008",
    words: ["compact", "compendious", "curt", "laconic", "pithy", "sententious", "spartan", "terse", "succinct"],
  },
  {
    id: "009",
    words: ["conservator", "custodian", "jailer", "jailor", "proctor", "ranger", "supervisor", "surveillant", "turnkey"],
  },
  {
    id: "010",
    words: ["dulcet", "luscious", "mellifluous", "mellow"],
  },
  {
    id: "011",
    words: ["conceal", "eclipse", "ensconce", "hide", "obscure", "occult", "secrete", "sequester", "snug", "submerge", "bury", "earth", "inhume", "inter"],
  },
  {
    id: "012",
    words: ["dais", "pedestal", "podium", "pulpit", "rostrum"],
  },
  {
    id: "013",
    words: ["coerce", "compel", "exact", "extort", "force", "impel", "impose", "obtrude"],
  },
  {
    id: "014",
    words: ["compulsory", "de rigueur", "forcible", "forcing"],
  },
  {
    id: "015",
    words: ["arrogate", "bereave", "depredate", "deprive", "despoil", "divest", "exact", "exploit", "extort", "flay", "fleece", "foray", "loot", "milk", "pillage", "plunder", "raid", "ransack", "ravage", "rifle", "seize", "spoliate", "sweat", "usurp", "wrest"],
  },
  {
    id: "016",
    words: ["clone", "ilk", "kind", "sort"],
  },
  {
    id: "017",
    words: ["colossal", "enormous", "gargantuan", "grandiose", "huge", "immense", "monolithic", "monstrous", "monumental", "palatial", "prodigious", "redoubtable", "stupendous", "sublime", "tremendous", "vast"],
  },
  {
    id: "018",
    words: ["arrogance", "assumption", "brazenness", "contumacy", "chutzpa(h)", "contumely", "effrontery", "gall", "haughtiness", "hubris", "impudence", "insolence", "presumption", "rudeness", "smartness", "superciliousness"],
  },
  {
    id: "019",
    words: ["arrogant", "bloated", "bumptious", "cavalier", "contumacious", "contumelious", "domineering", "fastuous", "flippant", "haughty", "imperious", "impertinent", "impudent", "insolent", "overweening", "pert", "precipitate", "presumptuous", "sassy"],
  },
  {
    id: "020",
    words: ["magnate", "mogul", "potentate", "tycoon"],
  },
];

const wordMeanings = {
  abound: "풍부하다",
  bristle: "꽉 차 있다",
  crawl: "바글바글하다",
  pullulate: "싹이 트다; 우글거리다",
  rife: "만연한",
  suffice: "충분하다",
  swarm: "가득하다",
  teem: "충만하다",
  demystify: "이해하기 쉽게 해주다",
  edify: "의식을 고양시키다",
  enlighten: "설명하여 계몽하다",
  illuminate: "분명히 설명하다",
  inculcate: "사상을 심어주다",
  rectify: "시정하다",
  affiliate: "제휴하다; 가입하다",
  associate: "사람들과 어울리다",
  join: "가입하다",
  affect: "가장하다; 영향을 주다",
  fake: "가장하다; 가짜의",
  feign: "감정, 질병 등을 가장하다",
  "make believe to do": "-인 척 하다",
  pretend: "-인 척 하다",
  profess: "공언하다; -인 척 하다",
  simulate: "-처럼 보이게 만들다",
  alchemy: "연금술, 가짜 화학",
  astrology: "점성술, 가짜 천문학",
  charlatan: "협잡꾼; 돌팔이 의사",
  mountebank: "사기꾼; 돌팔이 의사",
  quack: "돌팔이 의사",
  counterfeit: "위조품; 위조의; 위조하다",
  forgery: "위조",
  nostrum: "가짜 약",
  sophism: "궤변, 가짜 추론",
  sophistry: "가짜 논증",
  casuistry: "가짜 논리",
  sham: "협잡꾼; 가짜",
  apocryphal: "출처가 불분명한",
  artificial: "인위적인; 거짓된",
  bogus: "위조의",
  colorable: "겉치레의; 그럴듯한",
  deceptive: "기만적인",
  factitious: "진짜처럼 보이도록 꾸며낸",
  fallacious: "잘못된",
  fictitious: "허구의",
  fraudulent: "사기를 치는",
  "mala fide": "가짜의, 속이는",
  mendacious: "가짜의, 속이는",
  mimic: "모방하다",
  ostensible: "표면적으로는",
  phoney: "사기꾼",
  phony: "사기꾼",
  shoddy: "조잡한; 모조품",
  snide: "가짜의; 은근히 헐뜯는",
  specious: "허울만 그럴듯한",
  spoof: "도용하다",
  spurious: "거짓된",
  supposititious: "거짓의",
  unauthentic: "출처 불명의",
  astringent: "수렴하는; 신랄한",
  austere: "금욕적인, 엄격한",
  draconian: "매우 엄격한",
  exacting: "힘든",
  harsh: "가혹한",
  stark: "삭막한",
  stern: "단호한",
  compact: "조밀한",
  compendious: "요약하는",
  curt: "퉁명스러운",
  laconic: "간결한",
  pithy: "요점의",
  sententious: "훈계조의",
  spartan: "검소하고 엄격한",
  terse: "간결한",
  succinct: "간단명료한",
  conservator: "박물관 관리자",
  custodian: "수위, 관리인",
  jailer: "간수",
  jailor: "간수",
  proctor: "기숙사 등의 감독관",
  ranger: "산림 경비원",
  supervisor: "감독관, 관리자",
  surveillant: "감시자",
  turnkey: "간수",
  dulcet: "감미로운",
  luscious: "달콤한",
  mellifluous: "감미로운",
  mellow: "부드럽고 풍부한",
  conceal: "숨기다",
  eclipse: "빛을 가리다; 일식, 월식",
  ensconce: "몸을 편히 앉히다; 숨기다",
  hide: "가리다",
  obscure: "모호한; 감추다",
  occult: "초자연적인; 은폐하다",
  secrete: "비밀로 하다",
  sequester: "격리시키다",
  snug: "아늑한; 비밀의, 은밀한",
  submerge: "잠기다; 깊숙이 감추다",
  bury: "매장하다; 감추다",
  earth: "묻다; 감추다",
  inhume: "매장하다; 감추다",
  inter: "매장하다; 감추다",
  dais: "강단, 연단",
  pedestal: "기둥의 받침대",
  podium: "지휘대, 연단",
  pulpit: "설교단",
  rostrum: "강단",
  coerce: "강압하다",
  compel: "강요하다",
  exact: "강요하다; 요구하여 받아내다",
  extort: "갈취하다; 억지로 받아내다",
  force: "강요하다",
  impel: "강요하다",
  impose: "강요하다; 부과하다",
  obtrude: "끼어들다; 강요하다",
  usurp: "왕좌나 권좌 등을 빼앗다",
  compulsory: "강제적인; 의무적인",
  "de rigueur": "예의상 필요한",
  forcible: "힘에 의한, 강제적인",
  forcing: "강제하는",
  imperative: "반드시 해야 하는",
  imposing: "강요하는",
  incumbent: "의무의 일부로 필요한",
  mandatory: "의무적인",
  obligatory: "의무적인",
  stipulated: "규정한",
  arrogate: "횡탈하다; 사취하다",
  bereave: "가족, 친지와 사별하게 하다",
  depredate: "강탈하다; 약탈하다",
  deprive: "빼앗다",
  despoil: "빼앗다",
  divest: "빼앗다; 분사하다",
  exploit: "부당하게 이용하다; 착취하다",
  flay: "가죽을 벗기다; 돈을 뜯어내다",
  fleece: "털을 깎다; 바가지를 씌우다",
  foray: "약탈하다; 침략하다",
  loot: "약탈하다",
  milk: "부정한 방법으로 돈 등을 뽑아내다",
  pillage: "약탈하다",
  plunder: "강탈하다",
  raid: "습격하다; 약탈하다",
  ransack: "샅샅이 뒤지다",
  ravage: "황폐하게 만들다",
  rifle: "샅샅이 뒤지다",
  seize: "장악하다, 점령하다",
  spoliate: "약탈하다",
  sweat: "등골을 뽑다",
  wrest: "억지로 빼앗다",
  clone: "복제",
  ilk: "동일한 종류",
  kind: "종류",
  sort: "부류, 유형",
  colossal: "거대한, 웅장한",
  enormous: "막대한",
  gargantuan: "엄청난",
  grandiose: "과장된, 거창한",
  huge: "막대한",
  immense: "어마어마한",
  monolithic: "하나의 암석으로 된; 거대한",
  monstrous: "무시무시하게 큰",
  monumental: "기념비적인; 거대한",
  palatial: "대궐 같은; 으리으리한",
  prodigious: "엄청난",
  redoubtable: "가공할 만한, 무시무시한",
  stupendous: "엄청나게 큰",
  sublime: "감탄할 만큼 숭고한",
  tremendous: "엄청난",
  vast: "방대한",
  arrogance: "오만",
  assumption: "자만",
  brazenness: "낯 두꺼움",
  contumacy: "불복종, 완고함",
  chutzpah: "대담함, 뻔뻔함",
  contumely: "오만불손",
  effrontery: "뻔뻔스러움",
  gall: "철면피",
  haughtiness: "건방짐",
  hubris: "자만심",
  impudence: "뻔뻔스러움",
  insolence: "무례함",
  presumption: "주제넘음",
  rudeness: "버릇없음",
  smartness: "건방짐",
  superciliousness: "거만함",
  arrogant: "오만한",
  bloated: "거만한",
  bumptious: "잘난 체하는",
  cavalier: "거만한",
  contumacious: "고집 센, 완고한",
  contumelious: "오만불손한",
  domineering: "지배하려 하는",
  fastuous: "오만한",
  flippant: "경솔한",
  haughty: "거만한",
  imperious: "고압적인",
  impertinent: "무례한",
  impudent: "버릇없는",
  insolent: "버릇없는",
  overweening: "자만에 찬",
  pert: "당돌한",
  precipitate: "경솔한; 재촉하다",
  presumptuous: "주제넘은",
  sassy: "건방진",
  saucy: "건방진",
  smart: "잘난 체하는, 건방진; 분개하다",
  supercilious: "거만한",
  forward: "너무 스스럼없는; 건방진",
  obtrusive: "보기 싫게 눈에 띄는",
  protrusive: "주제넘게 나서는",
  perky: "의기양양한; 건방진",
  drawl: "거만하게 걷다; 느릿느릿 말하다",
  mince: "거만하게 걷다",
  strut: "뽐내며 걷다",
  swagger: "활보하다; 으스대다",
  pontificate: "거들먹거리며 말하다",
  swell: "부풀려 말하다",
  pose: "억지로 꾸며서 행동하다",
  posture: "억지로 꾸며서 행동하다",
  simper: "억지로 꾸며서 미소 짓다",
  magnate: "거물",
  mogul: "중요 인물",
  potentate: "강한 지배자",
  tycoon: "거물",
};

const categorySummaries = {
  "001":"가득 차다, 많이 있다",
  "002":"가르치다, 교화하다",
  "003":"가입하다",
  "004":"가장하다, -인 척하다",
  "005":"가짜",
  "006":"가짜의, 거짓의",
  "007":"가혹한, 엄격한",
  "008":"간결한",
  "009":"감독자",
  "010":"(맛, 소리, 냄새 따위가) 감미로운, 듣기 좋은",
  "011":"감추다",
  "012":"강단, 연단",
  "013":"강요하다, 강제하다",
  "014":"강제의, 의무적인",
  "015":"강탈하다, 억지로 빼앗다, 약탈하다",
  "016":"같은 종류",
  "017":"거대한, 웅장한, 엄청난",
  "018":"거만, 건방짐, 무례한",
  "019":"거만한, 건방진, 무례한",
  "020":"거물, 실력자",
};

const confusionNotes = {
  affect: "일상적으로는 '영향을 주다'가 먼저 떠오르지만, 여기서는 '가장하다'라는 뜻이 핵심입니다.",
  fake: "'가장하다', '가짜의', '가짜 물건' 쪽 의미가 모두 있어 pretend 계열과 false 계열 사이에서 특히 헷갈리기 쉽습니다.",
  profess: "'공언하다'뿐 아니라 '-인 척하다'라는 뜻으로도 쓰입니다.",
  counterfeit: "명사로는 '위조품', 형용사로는 '위조의'라서 fake thing 계열과 false 계열을 오가며 헷갈릴 수 있습니다.",
  sham: "사람이나 물건이 모두 '가짜'라는 뜻으로 쓰일 수 있어 charlatan, counterfeit와 함께 봐두면 좋습니다.",
  sophism: "겉보기에는 논리 같지만 실제로는 잘못된 추론입니다. 사람이나 물건이 아니라 '논리' 쪽 가짜입니다.",
  sophistry: "그럴듯한 말로 속이는 논증 방식입니다. sophism보다 말솜씨와 논증술의 느낌이 강합니다.",
  casuistry: "교묘한 궤변이나 억지 논리를 뜻합니다. moral reasoning처럼 보이지만 설득을 위해 비트는 느낌입니다.",
  mimic: "기본뜻은 '모방하다'지만, 진짜처럼 흉내 내는 성격 때문에 false 계열에서 출제됩니다.",
  ostensible: "겉으로 내세운, 표면상의 의미입니다. 실제와 다를 수 있다는 뉘앙스를 잡아야 합니다.",
  phoney: "phony의 변형 철자입니다. 사람이나 것이 진짜가 아니라는 뜻으로 봅니다.",
  phony: "phoney와 같은 말입니다. '가짜의' 또는 '가짜인 사람' 쪽으로 쓰입니다.",
  shoddy: "단순히 false라기보다 조잡하게 만든 모조품, 싸구려 느낌이 있습니다.",
  specious: "겉으로는 그럴듯하지만 실제로는 틀린 주장이나 설명에 씁니다.",
  spurious: "출처, 근거, 진위가 의심스러운 '가짜의'라는 뜻입니다.",
  exacting: "'정확한'이 아니라 요구가 까다롭고 힘든 상태를 말합니다.",
  stark: "가혹하고 삭막한 느낌입니다. bare, plain의 뜻도 있어 문맥에 따라 헷갈릴 수 있습니다.",
  stern: "사람의 표정, 태도, 규율이 단호하고 엄격한 느낌입니다.",
  curt: "짧지만 약간 무례하거나 퉁명스러운 느낌이 있어 단순한 concise와 다릅니다.",
  sententious: "짧고 교훈적이지만, 때로는 설교조라는 부정적 느낌도 있습니다.",
  spartan: "간결함뿐 아니라 검소하고 엄격한 생활방식의 느낌도 함께 있습니다.",
  custodian: "건물이나 물건을 맡아 관리하는 사람입니다. jailer처럼 사람을 감시하는 의미는 약합니다.",
  jailer: "감옥에서 죄수를 지키는 간수입니다. supervisor보다 좁고 강한 감시 의미입니다.",
  jailor: "jailer의 다른 철자입니다.",
  proctor: "시험 감독관처럼 규칙 준수를 감시하는 사람입니다.",
  turnkey: "감옥 열쇠를 맡은 간수라는 오래된 표현입니다.",
  dulcet: "소리, 말투, 음악이 달콤하고 듣기 좋은 느낌입니다.",
  luscious: "맛, 향, 감각이 풍부하고 달콤한 쪽에 자주 씁니다.",
  mellifluous: "말소리나 음악이 꿀처럼 부드럽게 흐르는 느낌입니다.",
  mellow: "소리, 맛, 성격이 부드럽고 무르익은 느낌입니다.",
  obscure: "형용사로는 '모호한', 동사로는 '가리다/감추다'라서 품사를 보고 판단해야 합니다.",
  occult: "초자연적인 뜻도 있지만 여기서는 '숨겨진, 은폐된' 느낌이 핵심입니다.",
  secrete: "'분비하다' 뜻도 있지만 이 묶음에서는 '비밀로 하다, 감추다'로 봅니다.",
  exact: "범주 013에서는 '강요하다', 범주 015에서는 '요구하여 받아내다'에 가깝습니다. 두 범주에 걸쳐 나오므로 문맥을 봐야 합니다.",
  extort: "'강요하다'와 '갈취하다'가 모두 가능해서 범주 013/015 사이에서 헷갈리기 쉽습니다.",
  usurp: "권리나 지위를 빼앗는 말이라 강요보다는 '탈취' 쪽 느낌이 강합니다.",
  incumbent: "직책을 가진 사람이라는 뜻도 있지만, 여기서는 '의무상 필요한'이라는 형용사 뜻입니다.",
  imposing: "'인상적인' 뜻도 있지만, 여기서는 '강요하는' 의미로 묶였습니다.",
  fleece: "원래는 양털을 깎는 말이지만, 사람에게 쓰면 바가지를 씌우거나 돈을 뜯어내는 뜻입니다.",
  milk: "우유와 관련된 뜻이 먼저 떠오르지만, 여기서는 돈이나 이익을 뽑아내는 비유적 의미입니다.",
  rifle: "명사 '소총'이 아니라 동사로는 샅샅이 뒤지거나 약탈하는 뜻입니다.",
  monolithic: "말 그대로는 하나의 돌로 된 것이지만, 크고 단단한 거대함을 떠올리면 됩니다.",
  redoubtable: "존경스럽다기보다 상대하기 두려울 만큼 강하고 만만치 않은 느낌입니다.",
  assumption: "일반적인 '가정' 뜻도 있지만, 이 범주에서는 '자만'의 의미입니다.",
  gall: "담즙이라는 뜻도 있지만, 사람 태도에서는 뻔뻔함이나 철면피를 뜻합니다.",
  smart: "'똑똑한'이 아니라 여기서는 건방진 태도의 의미로 쓰입니다.",
  forward: "방향 부사로 익숙하지만, 사람에게 쓰면 너무 스스럼없고 건방진 태도를 말할 수 있습니다.",
  drawl: "느릿느릿 말하다는 뜻이 강하지만, 자료에서는 거만하게 행동하는 묶음에 들어갑니다.",
  pontificate: "권위자인 척 거들먹거리며 말하는 느낌입니다.",
  mogul: "스키장의 혹이라는 뜻도 있지만, 인물에는 거물이나 실력자를 뜻합니다.",
  potentate: "권력을 가진 지배자나 실력자를 뜻해 tycoon보다 권력감이 강합니다.",
};

const leaderboardKey = "v502-synonym-drill-leaderboard";
const passwordStoreKey = "v502-synonym-drill-passwords";
const wordKnowledgeKey = "v502-synonym-drill-word-knowledge";
const quizProgressKey = "v502-synonym-drill-quiz-progress";
const irtAbilityKey = "v502-irt-ability";            // IRT-based cumulative ability score

// IRT 난이도 평가 — 7-factor regression formula (2026-06-23: 수능영어 1등급 baseline)
function rateQuestion({X1, X2, X3, X4, X5, X6, X7}) {
  const raw = 138 - 2.5*X1 - 2.0*X2 - 2.5*X3 - 2.5*X4
              - 2.5*(10-X5) - 2.5*X6 - 2.0*X7;
  return Math.max(1, Math.min(99, Math.round(raw)));
}

function getScoreDelta(isCorrect, rate) {
  return isCorrect ? +(15 * rate / 100) : -(10 * rate / 100);
}

function readIrtAbility() {
  try { return parseFloat(localStorage.getItem(irtAbilityKey)) || 0; } catch { return 0; }
}

function writeIrtAbility(v) {
  const capped = Math.max(0, Math.min(10000, v));
  try { localStorage.setItem(irtAbilityKey, String(Math.round(capped * 1000) / 1000)); } catch {}
}

// Tier thresholds scaled to 0–10000
function getTier(score) {
  const s = Math.max(0, Math.min(10000, score));
  if (s >= 10000) return { name: '서성한메이저',     icon: '👑' };
  if (s >= 9000)  return { name: '서성한',           icon: '💠' };
  if (s >= 8000)  return { name: '서성한하위',       icon: '💎' };
  if (s >= 6000)  return { name: '중경외시 메이저',  icon: '🥇' };
  if (s >= 5000)  return { name: '중경외시 하위',    icon: '🥈' };
  if (s >= 3500)  return { name: '건동홍',           icon: '🥉' };
  if (s >= 2500)  return { name: '국숭세단',         icon: '📗' };
  if (s >= 1600)  return { name: '인가경',           icon: '📘' };
  return { name: '정붕이', icon: '🌱' };
}

// Estimate IRT ability from public stats (correct/total) — assumes rate≈50
function getTierForRanking(correct, total) {
  const estAbility = correct * 7.5 - (total - correct) * 5;
  return getTier(estAbility);
}

function updateTierDisplay() {
  const el = document.getElementById('authTier');
  if (!el) return;
  const ability = readIrtAbility();
  const tier = getTier(ability);
  el.textContent = `${tier.icon} ${tier.name}`;
  el.title = `IRT Ability: ${ability.toFixed(1)}`;
}
let supabaseClient = null;
let supabaseSdkPromise = null;

// Merge categories 21-30+ if loaded
if (window.__V502_EXT__) {
  const ext = window.__V502_EXT__;
  if (ext.categories) categories.push(...ext.categories);
  if (ext.wordMeanings) Object.assign(wordMeanings, ext.wordMeanings);
  if (ext.categorySummaries) Object.assign(categorySummaries, ext.categorySummaries);
  if (ext.confusionNotes) {
    // Only add notes for words not already covered (preserve hand-written notes)
    for (const [k, v] of Object.entries(ext.confusionNotes)) {
      if (!confusionNotes[k]) confusionNotes[k] = v;
    }
  }
  if (ext.examples) {
    window.examples = window.examples || {};
    Object.assign(window.examples, ext.examples);
  }
  if (ext.koreanUsage) {
    window.koreanUsage = window.koreanUsage || {};
    Object.assign(window.koreanUsage, ext.koreanUsage);
  }
}
// Some category ranges are defined in more than one data file (e.g. 291-300
// appear in both categories-251-300.js and categories-291-620.js). Drop any
// duplicate category ids, keeping the first, so a set never quizzes the same
// category twice.
(function dedupeCategories() {
  const seen = new Set();
  for (let i = 0; i < categories.length; i++) {
    const id = categories[i].id;
    if (seen.has(id)) { categories.splice(i, 1); i--; }
    else seen.add(id);
  }
})();

// Override with Korean titles from TOC
if (window.__V502_TOC__) {
  Object.assign(categorySummaries, window.__V502_TOC__);
}

const categorySets = {
  "001-010": {
    label: "Categories 001-010",
    ids: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"],
  },
  "011-020": {
    label: "Categories 011-020",
    ids: ["011", "012", "013", "014", "015", "016", "017", "018", "019", "020"],
  },
  "021-030": {
    label: "Categories 021-030",
    ids: ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030"],
  },
  "031-040": {
    label: "Categories 031-040",
    ids: ["031", "032", "033", "034", "035", "036", "037", "038", "039", "040"],
  },
  "041-050": {
    label: "Categories 041-050",
    ids: ["041", "042", "043", "044", "045", "046", "047", "048", "049", "050"],
  },
  "051-060": {
    label: "Categories 051-060",
    ids: ["051", "052", "053", "054", "055", "056", "057", "058", "059", "060"],
  },
  "061-070": {
    label: "Categories 061-070",
    ids: ["061", "062", "063", "064", "065", "066", "067", "068", "069", "070"],
  },
  "071-080": {
    label: "Categories 071-080",
    ids: ["071", "072", "073", "074", "075", "076", "077", "078", "079", "080"],
  },
  "081-090": {
    label: "Categories 081-090",
    ids: ["081", "082", "083", "084", "085", "086", "087", "088", "089", "090"],
  },
  "091-100": {
    label: "Categories 091-100",
    ids: ["091", "092", "093", "094", "095", "096", "097", "098", "099", "100"],
  },
  "101-110": {
    label: "Categories 101-110",
    ids: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110"],
  },
  "111-120":{label:"Categories 111-120",ids:["111","112","113","114","115","116","117","118","119","120"]},
  "121-130":{label:"Categories 121-130",ids:["121","122","123","124","125","126","127","128","129","130"]},
  "131-140":{label:"Categories 131-140",ids:["131","132","133","134","135","136","137","138","139","140"]},
  "141-150":{label:"Categories 141-150",ids:["141","142","143","144","145","146","147","148","149","150"]},
  "151-160":{label:"Categories 151-160",ids:["151","152","153","154","155","156","157","158","159","160"]},
  "161-170":{label:"Categories 161-170",ids:["161","162","163","164","165","166","167","168","169","170"]},
  "171-180":{label:"Categories 171-180",ids:["171","172","173","174","175","176","177","178","179","180"]},
  "181-190":{label:"Categories 181-190",ids:["181","182","183","184","185","186","187","188","189","190"]},
  "191-200":{label:"Categories 191-200",ids:["191","192","193","194","195","196","197","198","199","200"]},
  "201-210":{label:"Categories 201-210",ids:["201","202","203","204","205","206","207","208","209","210"]},
  "211-220":{label:"Categories 211-220",ids:["211","212","213","214","215","216","217","218","219","220"]},
  "221-230":{label:"Categories 221-230",ids:["221","222","223","224","225","226","227","228","229","230"]},
  "231-240":{label:"Categories 231-240",ids:["231","232","233","234","235","236","237","238","239","240"]},
  "241-250":{label:"Categories 241-250",ids:["241","242","243","244","245","246","247","248","249","250"]},
  "251-260":{label:"Categories 251-260",ids:["251","252","253","254","255","256","257","258","259","260"]},
  "261-270":{label:"Categories 261-270",ids:["261","262","263","264","265","266","267","268","269","270"]},
  "271-280":{label:"Categories 271-280",ids:["271","272","273","274","275","276","277","278","279","280"]},
  "281-290":{label:"Categories 281-290",ids:["281","282","283","284","285","286","287","288","289","290"]},
  "291-300":{label:"Categories 291-300",ids:["291","292","293","294","295","296","297","298","299","300"]},
  "301-310":{label:"Categories 301-310",ids:["301","302","303","304","305","306","307","308","309","310"]},
  "311-320":{label:"Categories 311-320",ids:["311","312","313","314","315","316","317","318","319","320"]},
  "321-330":{label:"Categories 321-330",ids:["321","322","323","324","325","326","327","328","329","330"]},
  "331-340":{label:"Categories 331-340",ids:["331","332","333","334","335","336","337","338","339","340"]},
  "341-350":{label:"Categories 341-350",ids:["341","342","343","344","345","346","347","348","349","350"]},
  "351-360":{label:"Categories 351-360",ids:["351","352","353","354","355","356","357","358","359","360"]},
  "361-370":{label:"Categories 361-370",ids:["361","362","363","364","365","366","367","368","369","370"]},
  "371-380":{label:"Categories 371-380",ids:["371","372","373","374","375","376","377","378","379","380"]},
  "381-390":{label:"Categories 381-390",ids:["381","382","383","384","385","386","387","388","389","390"]},
  "391-400":{label:"Categories 391-400",ids:["391","392","393","394","395","396","397","398","399","400"]},
  "401-410":{label:"Categories 401-410",ids:["401","402","403","404","405","406","407","408","409","410"]},
  "411-420":{label:"Categories 411-420",ids:["411","412","413","414","415","416","417","418","419","420"]},
  "421-430":{label:"Categories 421-430",ids:["421","422","423","424","425","426","427","428","429","430"]},
  "431-440":{label:"Categories 431-440",ids:["431","432","433","434","435","436","437","438","439","440"]},
  "441-450":{label:"Categories 441-450",ids:["441","442","443","444","445","446","447","448","449","450"]},
  "451-460":{label:"Categories 451-460",ids:["451","452","453","454","455","456","457","458","459","460"]},
  "461-470":{label:"Categories 461-470",ids:["461","462","463","464","465","466","467","468","469","470"]},
  "471-480":{label:"Categories 471-480",ids:["471","472","473","474","475","476","477","478","479","480"]},
  "481-490":{label:"Categories 481-490",ids:["481","482","483","484","485","486","487","488","489","490"]},
  "491-500":{label:"Categories 491-500",ids:["491","492","493","494","495","496","497","498","499","500"]},
  "501-510":{label:"Categories 501-510",ids:["501","502","503","504","505","506","507","508","509","510"]},
  "511-520":{label:"Categories 511-520",ids:["511","512","513","514","515","516","517","518","519","520"]},
  "521-530":{label:"Categories 521-530",ids:["521","522","523","524","525","526","527","528","529","530"]},
  "531-540":{label:"Categories 531-540",ids:["531","532","533","534","535","536","537","538","539","540"]},
  "541-550":{label:"Categories 541-550",ids:["541","542","543","544","545","546","547","548","549","550"]},
  "551-560":{label:"Categories 551-560",ids:["551","552","553","554","555","556","557","558","559","560"]},
  "561-570":{label:"Categories 561-570",ids:["561","562","563","564","565","566","567","568","569","570"]},
  "571-580":{label:"Categories 571-580",ids:["571","572","573","574","575","576","577","578","579","580"]},
  "581-590":{label:"Categories 581-590",ids:["581","582","583","584","585","586","587","588","589","590"]},
  "591-600":{label:"Categories 591-600",ids:["591","592","593","594","595","596","597","598","599","600"]},
  "601-610":{label:"Categories 601-610",ids:["601","602","603","604","605","606","607","608","609","610"]},
  "611-620":{label:"Categories 611-620",ids:["611","612","613","614","615","616","617","618","619","620"]},
};

const state = {
  activeSetId: "001-010",
  questionIndex: 0,
  questions: [],
  setQuestions: [],
  answers: new Map(),
  currentSelection: new Set(),
  playerName: "",
  playerPassword: "",
  totalAttempts: 0,
  correctAttempts: 0,
  streak: 0,
  completed: false,
};

const els = {
  startPanel: document.querySelector("#startPanel"),
  quizPanel: document.querySelector("#quizPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  nameForm: document.querySelector("#nameForm"),
  nicknameInput: document.querySelector("#nicknameInput"),
  passwordInput: document.querySelector("#passwordInput"),
  passwordRow: document.querySelector("#passwordRow"),
  passwordHint: document.querySelector("#passwordHint"),
  playerNameLabel: document.querySelector("#playerNameLabel"),
  activeSetLabel: document.querySelector("#activeSetLabel"),
  activeSetMeta: document.querySelector("#activeSetMeta"),
  categoryButtons: document.querySelectorAll(".cat-set-btn"),
  categoryLabel: document.querySelector("#categoryLabel"),
  categoryTitle: document.querySelector("#categoryTitle"),
  meaningPrompt: document.querySelector("#meaningPrompt"),
  questionIndex: document.querySelector("#questionIndex"),
  questionTotal: document.querySelector("#questionTotal"),
  options: document.querySelector("#options"),
  feedback: document.querySelector("#feedback"),
  postFeedbackActions: document.querySelector("#postFeedbackActions"),
  prevBtn: document.querySelector("#prevBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  prevTopBtn: document.querySelector("#prevTopBtn"),
  submitTopBtn: document.querySelector("#submitTopBtn"),
  nextTopBtn: document.querySelector("#nextTopBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  progressBar: document.querySelector("#progressBar"),
  answeredCount: document.querySelector("#answeredCount"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  leaderboard: document.querySelector("#leaderboard"),
  restartBtn: document.querySelector("#restartBtn"),
  rankingBtn: document.querySelector("#rankingBtn"),
  rankingPanel: document.querySelector("#rankingPanel"),
  rankingCloseBtn: document.querySelector("#rankingCloseBtn"),
  rankingTitle: document.querySelector("#rankingTitle"),
  wordlistBtn: document.querySelector("#wordlistBtn"),
  wordlistPanel: document.querySelector("#wordlistPanel"),
  wordlistTitle: document.querySelector("#wordlistTitle"),
  wordlistContent: document.querySelector("#wordlistContent"),
  rankingSummary: document.querySelector("#rankingSummary"),
  rankingContent: document.querySelector("#rankingContent"),
  // Auth
  authSection: document.querySelector("#authSection"),
  authLoggedOut: document.querySelector("#authLoggedOut"),
  authLoggedIn: document.querySelector("#authLoggedIn"),
  authNicknameInput: document.querySelector("#authNicknameInput"),
  authPasswordInput: document.querySelector("#authPasswordInput"),
  authError: document.querySelector("#authError"),
  authLoginBtn: document.querySelector("#authLoginBtn"),
  authRegisterBtn: document.querySelector("#authRegisterBtn"),
  authPlayerName: document.querySelector("#authPlayerName"),
  authLogoutBtn: document.querySelector("#authLogoutBtn"),
  // New start panel
  startQuizBtn: document.querySelector("#startQuizBtn"),
  startPanelTitle: document.querySelector("#startPanelTitle"),
  startPanelHint: document.querySelector("#startPanelHint"),
  // Logic Quiz
  logicModeBtn: document.querySelector("#logicModeBtn"),
  synonymDrillBtn: document.querySelector("#synonymDrillBtn"),
  myinfoBtn: document.querySelector("#myinfoBtn"),
  myinfoPanel: document.querySelector("#myinfoPanel"),
  myinfoContent: document.querySelector("#myinfoContent"),
  myinfoCloseBtn: document.querySelector("#myinfoCloseBtn"),
  dashboardPanel: document.querySelector("#dashboardPanel"),
  wordlist2Btn: document.querySelector("#wordlist2Btn"),
  wordlist2Panel: document.querySelector("#wordlist2Panel"),
  wordlist2Content: document.querySelector("#wordlist2Content"),
  logicPanel: document.querySelector("#logicPanel"),
  logicProgressBar: document.querySelector("#logicProgressBar"),
  logicQuestionText: document.querySelector("#logicQuestionText"),
  logicOptions: document.querySelector("#logicOptions"),
  logicFeedback: document.querySelector("#logicFeedback"),
  logicSubmitBtn: document.querySelector("#logicSubmitBtn"),
  logicNextBtn: document.querySelector("#logicNextBtn"),
  logicCounter: document.querySelector("#logicCounter"),
  quizModeLabel: document.querySelector("#quizModeLabel"),
  wordcheckBtn: document.querySelector("#wordcheckBtn"),
  wordcheckPanel: document.querySelector("#wordcheckPanel"),
  grammar201Btn: document.querySelector("#grammar201Btn"),
  grammar201Panel: document.querySelector("#grammar201Panel"),
  grammar201Content: document.querySelector("#grammar201Content"),
  examBtn: document.querySelector("#examBtn"),
  examPanel: document.querySelector("#examPanel"),
  examContent: document.querySelector("#examContent"),
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getActiveSet() {
  return categorySets[state.activeSetId] || categorySets["001-010"];
}

function getNextSetId(currentSetId) {
  const m = String(currentSetId || '').match(/^(\d+)-(\d+)$/);
  if (!m) return null;
  const start = parseInt(m[1], 10);
  const end = parseInt(m[2], 10);
  const step = end - start + 1;
  const nextStart = start + step;
  const nextEnd = end + step;
  const nextId = `${String(nextStart).padStart(3, '0')}-${String(nextEnd).padStart(3, '0')}`;
  return categorySets[nextId] ? nextId : null;
}

function getActiveCategories() {
  const activeIds = new Set(getActiveSet().ids);
  return categories.filter((category) => activeIds.has(category.id));
}

function allWords(sourceCategories = categories) {
  return sourceCategories.flatMap((category) =>
    category.words.map((word) => ({
      word,
      categoryId: category.id,
    })),
  );
}

function buildQuestions() {
  const sourceCategories = getActiveCategories();
  const TARGET = 30;
  const viable = sourceCategories.filter(c => c.words.length >= 3);

  // Distractors come from words OUTSIDE this set, so they never compete with
  // the set's prompt/answer words and never repeat a word the user is studying.
  const setCatIds = new Set(sourceCategories.map(c => c.id));
  const distractorBank = allWords(categories).filter(e => !setCatIds.has(e.categoryId));

  // No word may appear in more than one question across the whole set — not as a
  // prompt, an answer, or a distractor. Each question consumes its words from
  // this `used` set, so the same word is never shown twice.
  const used = new Set();
  const questions = [];

  // Per category: shuffled pool of still-eligible words (mastered ones excluded)
  const pools = shuffle(viable.map(cat => {
    const mastered = state.playerName ? getCompletedPromptWords(cat.id) : new Set();
    return { cat, pool: shuffle(cat.words.filter(w => !mastered.has(w))) };
  }));

  let progress = true;
  while (questions.length < TARGET && progress) {
    progress = false;
    for (const { cat, pool } of pools) {
      if (questions.length >= TARGET) break;
      // words from this category not yet used anywhere — need prompt + 2 answers
      const avail = pool.filter(w => !used.has(w));
      if (avail.length < 3) continue;
      const prompt = avail[0];
      const answer = [avail[1], avail[2]];

      const distractors = [];
      for (const item of shuffle(distractorBank)) {
        const w = item.word;
        if (used.has(w) || w === prompt || answer.includes(w) || distractors.includes(w)) continue;
        distractors.push(w);
        if (distractors.length === 4) break;
      }
      if (distractors.length < 4) continue;

      [prompt, ...answer, ...distractors].forEach(w => used.add(w));
      questions.push({
        id: `${cat.id}-${prompt}`,
        categoryId: cat.id,
        prompt,
        answer,
        options: shuffle([...answer, ...distractors]),
      });
      progress = true;
    }
  }

  return shuffle(questions);
}

function renderQuestion() {
  if (!state.questions.length) return;
  const question = state.questions[state.questionIndex];
  if (!question) return;
  const saved = state.answers.get(question.id);
  const activeSelection = saved ? new Set(saved.selected) : state.currentSelection;

  const activeSet = getActiveSet();
  els.quizModeLabel.textContent = activeSet.label;
  els.meaningPrompt.textContent = question.prompt;
  els.questionIndex.textContent = String(state.questionIndex + 1);
  els.questionTotal.textContent = `/ ${state.questions.length}`;
  els.prevBtn.disabled = state.questionIndex === 0;
  els.submitBtn.disabled = Boolean(saved) || state.currentSelection.size !== 2;
  els.nextBtn.disabled = !saved;
  els.nextBtn.textContent = state.questionIndex === state.questions.length - 1 ? "Finish" : "Next";
  // Sync top buttons
  els.prevTopBtn.disabled = els.prevBtn.disabled;
  els.submitTopBtn.disabled = els.submitBtn.disabled;
  els.nextTopBtn.disabled = els.nextBtn.disabled;
  els.nextTopBtn.textContent = els.nextBtn.textContent;

  els.options.innerHTML = "";
  question.options.forEach((word) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.innerHTML = `<strong>${word}</strong>`;
    button.disabled = Boolean(saved);
    button.setAttribute("aria-pressed", String(activeSelection.has(word)));

    if (activeSelection.has(word)) button.classList.add("selected");
    if (saved && question.answer.includes(word)) button.classList.add("correct");
    if (saved?.selected.includes(word) && !question.answer.includes(word)) button.classList.add("wrong");

    button.addEventListener("click", () => toggleSelection(word));
    els.options.append(button);
  });

  if (saved) {
    if (noExplainMode) {
      // 해설OFF: no explanation/feedback (submit auto-advances past answered questions)
      els.feedback.hidden = true;
      els.feedback.className = "feedback";
      els.feedback.textContent = "";
      els.postFeedbackActions.hidden = true;
    } else {
      showFeedback(saved.correct, question);
      els.postFeedbackActions.hidden = false;
    }
  } else {
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
    els.postFeedbackActions.hidden = noExplainMode;
  }

  renderProgress();
  renderStats();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function getCategory(word, preferredId = "") {
  return categories.find((category) => category.id === preferredId && category.words.includes(word)) ||
    categories.find((category) => category.words.includes(word));
}

function getSynonymList(word, limit = 5, categoryId = "") {
  const category = getCategory(word, categoryId);
  if (!category) return [];
  return category.words.filter((item) => item !== word).slice(0, limit);
}

function renderSynonyms(word, categoryId = "") {
  const synonyms = getSynonymList(word, 5, categoryId);
  return synonyms.length ? synonyms.join(" / ") : "No same-category words listed.";
}

function getWordCategory(word) {
  for (const cat of categories) {
    if (cat.words.includes(word)) return cat.id;
  }
  return null;
}

function explainOption(word, question) {
  const selected = state.answers.get(question.id)?.selected.includes(word);
  const isAnswer = question.answer.includes(word);
  const meaning = wordMeanings[word] || "";
  const note = confusionNotes[word] || "";
  const example = (window.examples && window.examples[word]) ? window.examples[word] : "";
  const wordCat = getWordCategory(word);
  const wordCatSummary = wordCat ? (categorySummaries[wordCat] || "") : "";

  let infoBlock = "";
  if (meaning) {
    infoBlock += `<p><strong>Meaning:</strong> ${escapeHtml(meaning)}</p>`;
  }
  if (wordCatSummary) {
    infoBlock += `<p class="explain-cat"><strong>Category:</strong> ${escapeHtml(wordCatSummary)}</p>`;
  }
  if (note) {
    infoBlock += `<p class="explain-note"><strong>Definition:</strong> ${escapeHtml(note)}</p>`;
  }
  if (example) {
    infoBlock += `<p class="explain-example"><strong>📖 Example:</strong> ${escapeHtml(example)}</p>`;
  }

  const statusLabel = isAnswer ? "CORRECT" : selected ? "YOUR PICK ✗" : "WRONG";
  const statusClass = isAnswer ? "status-correct" : selected ? "status-wrong-selected" : "status-wrong";

  return `
    <li class="${selected ? "chosen" : ""}">
      <div class="explain-term">
        <b>${escapeHtml(word)}</b>
        <span class="${statusClass}">${statusLabel}</span>
      </div>
      <div class="explain-copy">${infoBlock}</div>
    </li>
  `;
}

function showFeedback(correct, question) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${correct ? "ok" : "no"}`;
  const optionRows = question.options.map((word) => explainOption(word, question)).join("");
  const promptMeaning = wordMeanings[question.prompt] || "";
  const promptNote = confusionNotes[question.prompt] || "";
  const promptExample = (window.examples && window.examples[question.prompt]) ? window.examples[question.prompt] : "";

  els.feedback.innerHTML = `
    <div class="feedback-header">
      <strong>${correct ? "✅ Correct!" : "❌ Incorrect."}</strong>
    </div>
    <div class="feedback-prompt">
      <p><b>Prompt: ${escapeHtml(question.prompt)}</b> ${promptMeaning ? `— ${escapeHtml(promptMeaning)}` : ""}</p>
      ${promptNote ? `<p class="explain-note"><strong>Definition:</strong> ${escapeHtml(promptNote)}</p>` : ""}
      ${promptExample ? `<p class="explain-example"><strong>📖 예문:</strong> ${escapeHtml(promptExample)}</p>` : ""}
      <p><strong>Correct pair:</strong> ${escapeHtml(question.answer.join(" / "))}</p>
    </div>
    <p class="explain-section-label collapsed" onclick="this.classList.toggle('collapsed');this.nextElementSibling.classList.toggle('hidden')">📋 Option Analysis ▾</p>
    <ul class="explain-list detailed hidden">${optionRows}</ul>
  `;
}

function toggleSelection(word) {
  const question = state.questions[state.questionIndex];
  if (state.answers.has(question.id)) return;

  if (state.currentSelection.has(word)) {
    state.currentSelection.delete(word);
  } else if (state.currentSelection.size < 2) {
    state.currentSelection.add(word);
  }

  // 해설OFF: as soon as two are picked, submit and jump straight to the next question
  if (noExplainMode && state.currentSelection.size === 2) {
    submitAnswer();
    return;
  }

  renderQuestion();
}

function submitAnswer() {
  const question = state.questions[state.questionIndex];
  if (state.answers.has(question.id) || state.currentSelection.size !== 2) return;

  const selected = [...state.currentSelection];
  const correct = question.answer.every((word) => state.currentSelection.has(word));

  state.answers.set(question.id, { selected, correct });
  state.totalAttempts += 1;
  state.correctAttempts += correct ? 1 : 0;
  state.streak = correct ? state.streak + 1 : 0;
  state.currentSelection = new Set();
  // Track synonym progress for logged-in users
  if (state.playerName) {
    saveSynonymResult(question.categoryId, question.prompt, correct);
    // If wrong, also mark the wrong choices
    if (!correct) {
      const wrongSelections = selected.filter(w => !question.answer.includes(w));
      wrongSelections.forEach(w => {
        saveSynonymResult(question.categoryId, w, false);
      });
    }
    // Reflect this answer in the unified ranking right away (real-time 단어문제 score)
    saveSynonymRankResult(question.categoryId, question.prompt, correct);
    try { persistSynonymRanking(); } catch {}
    // IRT ability score tracking
    const rate = (question.difficulty && typeof question.difficulty === 'object')
      ? rateQuestion(question.difficulty) : 50; // default 50% if no per-question rating
    const ability = readIrtAbility() + getScoreDelta(correct, rate);
    writeIrtAbility(ability);
    updateTierDisplay();
  }
  try { saveQuizProgress(); } catch {}
  if (noExplainMode) {
    // 해설OFF: flash correct/wrong on the buttons, then advance after a brief pause
    renderQuestion(); // shows correct/wrong colors on the current options
    disableOptions();
    const delay = state.questionIndex >= state.questions.length - 1 ? 800 : 600;
    setTimeout(() => {
      if (state.questionIndex >= state.questions.length - 1) {
        completeQuiz();
      } else {
        state.questionIndex++;
        renderQuestion();
      }
    }, delay);
  } else {
    renderQuestion();
  }
}

function disableOptions() {
  els.options.querySelectorAll(".option").forEach(b => { b.disabled = true; });
}

function renderProgress() {
  const total = (state.setQuestions && state.setQuestions.length) || state.questions.length;
  const pct = total ? Math.round((state.answers.size / total) * 100) : 0;
  els.progressBar.style.width = `${pct}%`;
}

function renderStats() {
  els.answeredCount.textContent = String(state.totalAttempts);
  els.accuracy.textContent = state.totalAttempts
    ? `${Math.round((state.correctAttempts / state.totalAttempts) * 100)}%`
    : "0%";
  els.streak.textContent = String(state.streak);
}

function readLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  } catch {
    return [];
  }
}

function writeLeaderboard(entries) {
  try { localStorage.setItem(leaderboardKey, JSON.stringify(entries)); } catch {}
}

const sessionKey = "v502-synonym-drill-session";

function readPasswordStore() {
  try {
    return JSON.parse(localStorage.getItem(passwordStoreKey)) || {};
  } catch {
    return {};
  }
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(sessionKey)) || null;
  } catch {
    return null;
  }
}

function saveSession(name) {
  localStorage.setItem(sessionKey, JSON.stringify({ name, loggedAt: Date.now() }));
}

function clearSession() {
  localStorage.removeItem(sessionKey);
}

/* ---- Quiz progress save/resume (per category set, auto-resume) ---- */
function saveQuizProgress() {
  if (!state.playerName || state.completed || state.answers.size === 0) return;
  const userKey = state.playerName.toLowerCase();
  const data = {
    activeSetId: state.activeSetId,
    totalAttempts: state.totalAttempts,
    correctAttempts: state.correctAttempts,
    streak: state.streak,
    completed: state.completed,
    questions: state.setQuestions,                 // full question set for this category
    answers: Array.from(state.answers.entries()),  // every answer given so far in this set
    savedAt: Date.now(),
  };
  const store = readQuizProgressStore();
  if (!store[userKey] || Array.isArray(store[userKey].questions)) store[userKey] = {};
  store[userKey][state.activeSetId] = data;        // keyed per category set
  try { localStorage.setItem(quizProgressKey, JSON.stringify(store)); } catch {}
}

function readQuizProgressStore() {
  try { return JSON.parse(localStorage.getItem(quizProgressKey)) || {}; }
  catch { return {}; }
}

function getSavedProgress(setId = state.activeSetId) {
  if (!state.playerName) return null;
  const bucket = readQuizProgressStore()[state.playerName.toLowerCase()];
  if (!bucket) return null;
  // Legacy single-progress format: only valid for its own set
  if (Array.isArray(bucket.questions)) return bucket.activeSetId === setId ? bucket : null;
  return bucket[setId] || null;
}

function clearSavedProgress(setId = state.activeSetId) {
  if (!state.playerName) return;
  const store = readQuizProgressStore();
  const userKey = state.playerName.toLowerCase();
  const bucket = store[userKey];
  if (!bucket) return;
  if (Array.isArray(bucket.questions)) delete store[userKey]; // legacy
  else delete bucket[setId];
  localStorage.setItem(quizProgressKey, JSON.stringify(store));
}

// Build runtime state from a full question set + prior answers. The working
// list (state.questions) holds only the still-unanswered questions, so answered
// ones never reappear; cumulative stats are preserved for accuracy.
function loadSetSession(fullQuestions, answersEntries, stats) {
  state.setQuestions = fullQuestions;
  state.answers = new Map(answersEntries || []);
  const remaining = fullQuestions.filter((q) => !state.answers.has(q.id));
  state.questions = remaining.length ? remaining : [...fullQuestions];
  state.totalAttempts = stats.totalAttempts || 0;
  state.correctAttempts = stats.correctAttempts || 0;
  state.streak = stats.streak || 0;
  state.completed = false;
  state.questionIndex = 0;
  state.currentSelection = new Set();
}

function resumeQuiz(progress) {
  state.activeSetId = progress.activeSetId;
  switchMode("quiz");
  loadSetSession(progress.questions, progress.answers, progress);
  els.quizPanel.hidden = false;
  els.shuffleBtn.disabled = false;
  els.resetBtn.disabled = false;
  updateSetDisplay();
  renderQuestion();
}

// Enter a category set: auto-resume its saved progress, otherwise start fresh.
function openSet(setId) {
  if (!categorySets[setId]) return;
  state.activeSetId = setId;
  updateSetDisplay();
  const progress = getSavedProgress(setId);
  if (state.playerName && progress && Array.isArray(progress.answers) && progress.answers.length > 0 && !progress.completed) {
    resumeQuiz(progress);
  } else {
    startQuiz();
  }
}

// The Start button on the start panel just enters the active category set,
// which auto-resumes that set's saved progress (no prompt).
function onStartQuizClick() {
  openSet(state.activeSetId);
}

// Opening the synonym panel immediately starts the quiz with current set,
// and shows the category nav so the user can switch sets.
function openSynonymPanel() {
  openSet(state.activeSetId);
}

function renderAuthUI() {
  if (state.playerName) {
    els.authLoggedOut.hidden = true;
    els.authLoggedIn.hidden = false;
    els.authPlayerName.textContent = state.playerName;
    els.myinfoBtn.hidden = false;
    els.startPanelTitle.textContent = `Welcome, ${state.playerName}`;
    els.startPanelHint.textContent = "Select a category set and start your quiz.";
    updateTierDisplay();
  } else {
    els.authLoggedOut.hidden = false;
    els.authLoggedIn.hidden = true;
    els.myinfoBtn.hidden = true;
    els.startPanelTitle.textContent = "Login to save progress";
    els.startPanelHint.textContent = "Login from the sidebar to track scores and known words.";
  }
}

async function handleLogin() {
  const name = els.authNicknameInput.value.trim();
  const pw = els.authPasswordInput.value.trim();
  els.authError.hidden = true;

  if (!name || name.length < 1) {
    els.authError.textContent = "닉네임을 입력하세요.";
    els.authError.hidden = false;
    return;
  }
  if (!pw || pw.length < 4) {
    els.authError.textContent = "비밀번호는 4자 이상이어야 합니다.";
    els.authError.hidden = false;
    return;
  }

  // Always pull latest cloud data first — cloud is source of truth
  const cloudResult = await cloudCheckCred(name, pw);

  if (cloudResult === 'WRONG_PW') {
    els.authError.textContent = "비밀번호가 일치하지 않습니다.";
    els.authError.hidden = false;
    return;
  }

  if (cloudResult !== 'OK') {
    // Cloud not available — fall back to local password store
    const store = readPasswordStore();
    const key = name.toLowerCase();
    if (!store[key]) {
      els.authError.textContent = "등록되지 않은 닉네임입니다. '계정등록'을 먼저 해주세요.";
      els.authError.hidden = false;
      return;
    }
    const stored = store[key];
    const storedPw = typeof stored === 'string' ? stored : stored.password;
    if (typeof stored === 'string' ? stored !== pw : storedPw !== btoa(pw)) {
      els.authError.textContent = "비밀번호가 일치하지 않습니다.";
      els.authError.hidden = false;
      return;
    }
  }

  // Update local password store
  const store = readPasswordStore();
  store[name.toLowerCase()] = { password: btoa(pw), displayName: name };
  localStorage.setItem(passwordStoreKey, JSON.stringify(store));

  state.playerName = name;
  saveSession(name);
  renderAuthUI();
  updateSidebarCompletion();
  els.authNicknameInput.value = "";
  els.authPasswordInput.value = "";
  checkAndShowResume();
  await cloudPullScores();
  // Cancel any pending debounced sync to avoid double writes
  if (_cloudSyncTimer) { clearTimeout(_cloudSyncTimer); _cloudSyncTimer = null; }
  await cloudSyncAll();
  pushAllScoresToSupabase();
}

async function handleRegister() {
  const name = els.authNicknameInput.value.trim();
  const pw = els.authPasswordInput.value.trim();
  els.authError.hidden = true;

  if (!name || name.length < 1) {
    els.authError.textContent = "닉네임을 입력하세요.";
    els.authError.hidden = false;
    return;
  }
  if (!pw || pw.length < 4) {
    els.authError.textContent = "비밀번호는 4자 이상이어야 합니다.";
    els.authError.hidden = false;
    return;
  }

  const store = readPasswordStore();
  const key = name.toLowerCase();
  if (store[key]) {
    els.authError.textContent = "이미 등록된 닉네임입니다. '로그인'을 해주세요.";
    els.authError.hidden = false;
    return;
  }

  // Also check cloud for case-insensitive duplicate
  const cloudCheck = await cloudCheckCred(name, '');
  if (cloudCheck === 'WRONG_PW' || cloudCheck === 'OK') {
    els.authError.textContent = "이미 등록된 닉네임입니다. '로그인'을 해주세요.";
    els.authError.hidden = false;
    return;
  }

  store[key] = { password: btoa(pw), displayName: name };
  localStorage.setItem(passwordStoreKey, JSON.stringify(store));
  state.playerName = name;
  saveSession(name);
  renderAuthUI();
  updateSidebarCompletion();
  els.authNicknameInput.value = "";
  els.authPasswordInput.value = "";
  checkAndShowResume();
  await cloudSyncAll();
  pushAllScoresToSupabase();
}

function checkAndShowResume() {
  // No-op: resume now happens automatically when a category set is opened,
  // per set, without a prompt. Kept as a stub for existing call sites.
}

function handleLogout() {
  state.playerName = null;
  state.answers.clear();
  clearSession();
  renderAuthUI();
  els.quizPanel.hidden = true;
  els.resultPanel.hidden = true;
  els.rankingPanel.hidden = true;
  els.startPanel.hidden = false;
  // Reset dashboard greeting
  const greeting = document.getElementById('dashGreeting');
  if (greeting) greeting.textContent = 'V502 학습 대시보드';
  // Hide noExplainMode button
  const noExBtn = document.getElementById('dashNoExplainBtn');
  if (noExBtn) noExBtn.style.display = 'none';
  updateNoExplainIndicator();
}

function readWordKnowledge() {
  try {
    return JSON.parse(localStorage.getItem(wordKnowledgeKey)) || {};
  } catch {
    return {};
  }
}

function writeWordKnowledge(store) {
  localStorage.setItem(wordKnowledgeKey, JSON.stringify(store));
}

function isWordKnown(word) {
  if (!state.playerName) return false;
  const store = readWordKnowledge();
  const userWords = store[state.playerName.toLowerCase()] || [];
  return userWords.includes(word);
}

/* ---- Synonym quiz progress tracking ---- */
function readSynonymProgress() {
  try { return JSON.parse(localStorage.getItem(synonymProgressKey)) || {}; }
  catch { return {}; }
}
function getSynonymUserKey() {
  return state.playerName ? state.playerName.toLowerCase() : "_guest";
}
function isSynonymCompleted(categoryId, word) {
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  return p[key] && p[key][categoryId] && p[key][categoryId].includes(word);
}
function isSynonymWrong(categoryId, word) {
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  return p[key] && p[key].wrong && p[key].wrong[categoryId] && p[key].wrong[categoryId].includes(word);
}
function saveSynonymResult(categoryId, word, correct) {
  if (!state.playerName) return;
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  if (!p[key]) p[key] = {};
  if (correct) {
    if (!p[key][categoryId]) p[key][categoryId] = [];
    if (!p[key][categoryId].includes(word)) p[key][categoryId].push(word);
  } else {
    if (!p[key].wrong) p[key].wrong = {};
    if (!p[key].wrong[categoryId]) p[key].wrong[categoryId] = [];
    if (!p[key].wrong[categoryId].includes(word)) p[key].wrong[categoryId].push(word);
  }
  try { localStorage.setItem(synonymProgressKey, JSON.stringify(p)); } catch {}
  scheduleCloudSync();
}
function getCompletedPromptWords(categoryId) {
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  return new Set((p[key] && p[key][categoryId]) || []);
}

function toggleWordKnown(word) {
  if (!state.playerName) return false;
  const store = readWordKnowledge();
  const key = state.playerName.toLowerCase();
  if (!store[key]) store[key] = [];
  const idx = store[key].indexOf(word);
  if (idx >= 0) {
    store[key].splice(idx, 1);
  } else {
    store[key].push(word);
  }
  writeWordKnowledge(store);
  scheduleCloudSync();
  return idx < 0; // true if now known
}

function writePasswordStore(store) {
  localStorage.setItem(passwordStoreKey, JSON.stringify(store));
}

function setPasswordForNickname(nickname, password) {
  const store = readPasswordStore();
  // Simple hash for basic protection
  store[nickname.toLowerCase()] = btoa(password);
  writePasswordStore(store);
}

function checkPassword(nickname, password) {
  const store = readPasswordStore();
  const stored = store[nickname.toLowerCase()];
  if (!stored) return true; // No password set yet — first-time user
  return stored === btoa(password);
}

function hasPassword(nickname) {
  return Boolean(readPasswordStore()[nickname.toLowerCase()]);
}

function currentSetLeaderboard(entries = readLeaderboard()) {
  return entries.filter((item) => item.setId === state.activeSetId || (!item.setId && state.activeSetId === "001-010"));
}

function sortedLeaderboard(entries) {
  return [...entries].sort((a, b) =>
    b.accuracy - a.accuracy ||
    b.correct - a.correct ||
    new Date(a.completedAt) - new Date(b.completedAt),
  );
}

/* Cumulative leaderboard: best attempt per (nickname, setId), summed across sets */
function cumulativeLeaderboard(entries, setId = null) {
  // Non-score buckets used for cloud backup / auth — never count toward ranking.
  const JUNK_SETS = new Set(["USERDATA", "CRED", "SYNC"]);
  const best = new Map();
  const filtered = (setId ? entries.filter((e) => e.setId === setId || (!e.setId && setId === "001-010")) : entries)
    .filter(e => !!e.name);

  for (const entry of filtered) {
    const rawSet = String(entry.setId || "001-010");
    if (JUNK_SETS.has(rawSet)) continue;
    // Logic, wordcheck and synonym rows are cumulative single rows — collapse
    // each into one bucket per user and keep the largest (latest) total.
    const cumPrefix = rawSet.startsWith("LOGIC") ? "LOGIC"
      : rawSet.startsWith("WORDCHECK") ? "WORDCHECK"
      : rawSet.startsWith("SYNONYM") ? "SYNONYM" : null;
    const key = `${entry.name.toLowerCase()}|${cumPrefix || rawSet}`;
    const existing = best.get(key);
    let better;
    if (!existing) {
      better = true;
    } else if (cumPrefix) {
      // The cumulative row has the most questions attempted — pick the largest
      better = entry.total > existing.total ||
               (entry.total === existing.total && entry.correct > existing.correct);
    } else {
      better = entry.accuracy > existing.accuracy ||
               (entry.accuracy === existing.accuracy && entry.correct > existing.correct);
    }
    if (better) best.set(key, entry);
  }

  // Users who now have a cumulative SYNONYM bucket: ignore their legacy per-set
  // synonym rows so the old per-set model and the new cumulative one don't
  // double-count. Users without a SYNONYM bucket keep their per-set scores.
  const hasSynonymBucket = new Set();
  for (const entry of best.values()) {
    if (String(entry.setId || "").startsWith("SYNONYM")) hasSynonymBucket.add(entry.name.toLowerCase());
  }

  // Aggregate by nickname across sets
  const aggregated = new Map();
  for (const entry of best.values()) {
    const nameKey = entry.name.toLowerCase();
    const rawSet = String(entry.setId || "001-010");
    const isCumBucket = rawSet.startsWith("LOGIC") || rawSet.startsWith("WORDCHECK") || rawSet.startsWith("SYNONYM");
    // In the unified view, drop legacy per-set synonym rows once the user has a
    // cumulative SYNONYM bucket (prevents double counting).
    if (setId === null && !isCumBucket && hasSynonymBucket.has(nameKey)) continue;
    if (!aggregated.has(nameKey)) {
      aggregated.set(nameKey, { name: entry.name, correct: 0, total: 0 });
    }
    const agg = aggregated.get(nameKey);
    agg.correct += entry.correct;
    agg.total += entry.total;
  }

  return [...aggregated.values()]
    .map((a) => ({ ...a, accuracy: a.total ? Math.round((a.correct / a.total) * 100) : 0 }))
    // Rank by total correct answers (score); tie-break by accuracy
    .sort((a, b) => b.correct - a.correct || b.accuracy - a.accuracy);
}

/* Upsert: replace existing entry for same (name, setId) if new is better */
function upsertLocalScore(entry) {
  const entries = readLeaderboard();
  const idx = entries.findIndex(
    (e) => e.name.toLowerCase() === entry.name.toLowerCase() && (e.setId || "001-010") === (entry.setId || "001-010"),
  );
  if (idx >= 0) {
    if (entry.accuracy > entries[idx].accuracy || (entry.accuracy === entries[idx].accuracy && entry.correct > entries[idx].correct)) {
      entries[idx] = entry;
    }
  } else {
    entries.push(entry);
  }
  writeLeaderboard(entries);
  return entries;
}

function getDbConfig() {
  return window.V502_DB || {};
}

function hasPublicConfig() {
  const config = getDbConfig();
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function loadSupabaseSdk() {
  if (window.supabase) return Promise.resolve(window.supabase);
  if (supabaseSdkPromise) return supabaseSdkPromise;

  supabaseSdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    script.onload = () => resolve(window.supabase);
    script.onerror = () => reject(new Error("Supabase script failed to load."));
    document.head.append(script);
  });

  return supabaseSdkPromise;
}

async function getSupabaseClient() {
  if (!hasPublicConfig()) return null;
  await loadSupabaseSdk();
  if (!supabaseClient) {
    const config = getDbConfig();
    supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  }
  return supabaseClient;
}

function getLeaderboardTable() {
  return getDbConfig().tableName || "leaderboard_scores";
}

/* ── Supabase cloud sync (full data, payload column) ── */

async function pushAllScoresToSupabase() {
  if (!state.playerName || !hasPublicConfig()) return;
  var entries = readLeaderboard().filter(function(e) { return e.name.toLowerCase() === state.playerName.toLowerCase(); });
  for (var i = 0; i < entries.length; i++) {
    try { await savePublicScore(entries[i]); } catch(e) { console.warn('pushAllScoresToSupabase failed', e); }
  }
}

async function cloudPullScores() {
  if (!state.playerName || !hasPublicConfig()) return;
  const client = await getSupabaseClient(); if (!client) return;
  try {
    const nk = state.playerName.toLowerCase();
    const { data } = await client.from(getLeaderboardTable())
      .select('nickname,quiz_set,correct_count,total_count,accuracy')
      .eq('nickname', nk)
      .neq('quiz_set', 'USERDATA')
      .order('created_at', { ascending: false });
    if (!data || !data.length) return;
    const entries = readLeaderboard();
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      var setId = row.quiz_set;
      var existingIdx = entries.findIndex(function(e) {
        return e.name.toLowerCase() === nk && String(e.setId || '') === setId;
      });
      var entry = {
        name: row.nickname,
        setId: setId,
        correct: row.correct_count,
        total: row.total_count,
        accuracy: row.accuracy,
        completedAt: new Date().toISOString()
      };
      if (existingIdx >= 0) {
        if (entry.accuracy > (entries[existingIdx].accuracy || 0)) {
          entries[existingIdx] = entry;
        }
      } else {
        entries.push(entry);
      }
    }
    writeLeaderboard(entries);
  } catch(e) { console.warn('cloudPullScores failed', e); }
}

/* Debounced cloudSyncAll — coalesces per-action calls into a single write.
   100 ms — imperceptible delay, fires near-instantly after last action. */
let _cloudSyncTimer = null;
function scheduleCloudSync() {
  if (_cloudSyncTimer) {
    clearTimeout(_cloudSyncTimer);
    _cloudSyncTimer = null;
  }
  _cloudSyncTimer = setTimeout(() => {
    _cloudSyncTimer = null;
    cloudSyncAll().catch((e) => { console.warn('scheduleCloudSync failed', e); });
  }, 100);
}
function flushCloudSync() {
  if (!_cloudSyncTimer) return;
  clearTimeout(_cloudSyncTimer);
  _cloudSyncTimer = null;
  cloudSyncAll().catch((e) => { console.warn('flushCloudSync failed', e); });
}

async function cloudSyncAll() {
  if (!state.playerName || !hasPublicConfig()) return;
  const client = await getSupabaseClient(); if (!client) return;
  const nk = state.playerName.toLowerCase();

  const pwStore = readPasswordStore();
  const pw = pwStore[nk] ? (typeof pwStore[nk]==='string' ? pwStore[nk] : atob(pwStore[nk].password)) : '';

  const wordKnowledge = JSON.stringify((readWordKnowledge()||{})[nk]||[]);
  const synProgress = JSON.stringify((readSynonymProgress()||{})[nk]||{});
  const wcProg = JSON.stringify(getWordcheckProgress());
  let quizProg = '{}';
  try { quizProg = JSON.stringify(JSON.parse(localStorage.getItem(quizProgressKey)||'{}')[nk]||{}); } catch {}
  const logicDone = JSON.stringify([...getLogicCompleted()]);
  const logicWrong = JSON.stringify([...getLogicWrong()]);
  const grammarData = JSON.stringify((readGrammarProgress()||{})[nk]||{correct:[],wrong:[]});
  const synonymResult = JSON.stringify((readSynonymResult()||{})[nk]||{correct:[],wrong:[]});
  const wordcheckResult = JSON.stringify((readWordcheckResult()||{})[nk]||{correct:[],wrong:[]});
  const logicScore = JSON.stringify((readLogicScore()||{})[nk]||{score:0,questions:0});
  const irtAbility = JSON.stringify(readIrtAbility());
  const examData = JSON.stringify((readExamProgress()||{})[nk]||{});

  const payload = JSON.stringify({
    pw,
    displayName: state.playerName,
    word_knowledge: wordKnowledge,
    synonym_progress: synProgress,
    synonym_result: synonymResult,
    wordcheck_progress: wcProg,
    wordcheck_result: wordcheckResult,
    quiz_progress: quizProg,
    logic_completed: logicDone,
    logic_wrong: logicWrong,
    logic_score: logicScore,
    grammar_progress: grammarData,
    exam_progress: examData,
    irt_ability: irtAbility,
    updated_at: new Date().toISOString()
  });

  try {
    const table = getLeaderboardTable();
    // Try upsert first (single atomic operation — needs UNIQUE constraint)
    await client.from(table).upsert({
      nickname: nk, quiz_set: 'USERDATA',
      correct_count: 1, total_count: 1, accuracy: 1, payload
    }, { onConflict: 'nickname,quiz_set' });
  } catch(_upsertErr) {
    // Fallback: DELETE old rows then INSERT with retry (works without UNIQUE constraint)
    const table = getLeaderboardTable();
    try { await client.from(table).delete().eq('nickname', nk).eq('quiz_set', 'USERDATA'); } catch(e) { console.warn('cloudSyncAll delete failed', e); }
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await client.from(table).insert({
          nickname: nk, quiz_set: 'USERDATA',
          correct_count: 1, total_count: 1, accuracy: 1, payload
        });
        return;
      } catch(insertErr) {
        if (attempt === 2) console.warn('cloudSyncAll insert failed after 3 attempts', insertErr);
      }
    }
  }
}

async function cloudCheckCred(nickname, password) {
  if (!hasPublicConfig()) return null;
  const client = await getSupabaseClient(); if (!client) return null;
  try {
    const nkLower = nickname.toLowerCase();
    const { data } = await client.from(getLeaderboardTable())
      .select('payload')
      .eq('nickname', nkLower).eq('quiz_set', 'USERDATA')
      .order('created_at', { ascending: false }).limit(1).maybeSingle();
    if (!data || !data.payload) return 'NOT_FOUND';
    const obj = JSON.parse(data.payload);
    if (obj.pw !== password) return 'WRONG_PW';
    // Restore all data
    cloudPullUserData(data.payload, nickname);
    return 'OK';
  } catch(e) { console.warn('cloudCheckCred failed', e); return null; }
}

function cloudPullUserData(payload, nickname) {
  try {
    const obj = typeof payload === 'string' ? JSON.parse(payload) : payload;
    const nk = (nickname || state.playerName || '').toLowerCase();
    if (!nk) return;
    // Temporarily set playerName so saveLogic* functions use the right key
    const prevName = state.playerName;
    state.playerName = nickname || prevName;
    if (obj.word_knowledge) { const s = readWordKnowledge(); s[nk] = JSON.parse(obj.word_knowledge); writeWordKnowledge(s); }
    if (obj.synonym_progress) { const s = readSynonymProgress(); s[nk] = JSON.parse(obj.synonym_progress); localStorage.setItem(synonymProgressKey, JSON.stringify(s)); }
    if (obj.wordcheck_progress) { const s = JSON.parse(localStorage.getItem('v502-wordcheck-progress')||'{}'); s[nk] = JSON.parse(obj.wordcheck_progress); localStorage.setItem('v502-wordcheck-progress', JSON.stringify(s)); }
    if (obj.quiz_progress) { const s = JSON.parse(localStorage.getItem(quizProgressKey)||'{}'); s[nk] = JSON.parse(obj.quiz_progress); localStorage.setItem(quizProgressKey, JSON.stringify(s)); }
    // Write logic data directly to avoid triggering cloudSyncAll cascade
    if (obj.logic_completed || obj.logic_wrong) {
      const lp = readLogicProgress();
      lp[nk] = { correct: obj.logic_completed ? JSON.parse(obj.logic_completed) : [], wrong: obj.logic_wrong ? JSON.parse(obj.logic_wrong) : [] };
      try { localStorage.setItem(logicProgressKey, JSON.stringify(lp)); } catch {}
    }
    if (obj.grammar_progress) {
      const gp = readGrammarProgress();
      gp[nk] = JSON.parse(obj.grammar_progress);
      try { localStorage.setItem(grammarProgressKey, JSON.stringify(gp)); } catch {}
    }
    if (obj.exam_progress) {
      const ep = readExamProgress();
      ep[nk] = JSON.parse(obj.exam_progress);
      try { localStorage.setItem(examProgressKey, JSON.stringify(ep)); } catch {}
    }
    if (obj.synonym_result) {
      const sr = readSynonymResult();
      sr[nk] = JSON.parse(obj.synonym_result);
      try { localStorage.setItem(synonymResultKey, JSON.stringify(sr)); } catch {}
    }
    if (obj.wordcheck_result) {
      const wr = readWordcheckResult();
      wr[nk] = JSON.parse(obj.wordcheck_result);
      try { localStorage.setItem(wordcheckResultKey, JSON.stringify(wr)); } catch {}
    }
    if (obj.logic_score) {
      const ls = readLogicScore();
      ls[nk] = JSON.parse(obj.logic_score);
      try { localStorage.setItem(logicScoreKey, JSON.stringify(ls)); } catch {}
    }
    if (obj.irt_ability) {
      try { localStorage.setItem(irtAbilityKey, String(JSON.parse(obj.irt_ability))); } catch {}
    }
    state.playerName = prevName;
  } catch(e) { console.warn('cloudPullUserData failed', e); }
	}

function normalizePublicScore(row) {
  return {
    id: row.id,
    name: row.nickname,
    setId: row.quiz_set,
    correct: row.correct_count,
    total: row.total_count,
    accuracy: row.accuracy,
    completedAt: row.created_at,
  };
}

async function savePublicScore(entry) {
  const client = await getSupabaseClient();
  if (!client) return null;

  const isCumulative = entry.setId === 'LOGIC' || entry.setId === 'WORDCHECK' || entry.setId === 'SYNONYM';

  // Check if any rows already exist for this (nickname, quiz_set)
  const { data: existingRows } = await client
    .from(getLeaderboardTable())
    .select("id,accuracy")
    .eq("nickname", entry.name)
    .eq("quiz_set", entry.setId);

  const hasExisting = existingRows && existingRows.length > 0;

  if (hasExisting) {
    if (isCumulative) {
      // Update ALL matching rows — cumulative scores grow over time
      const { error } = await client
        .from(getLeaderboardTable())
        .update({
          correct_count: entry.correct,
          total_count: entry.total,
          accuracy: entry.accuracy,
        })
        .eq("nickname", entry.name)
        .eq("quiz_set", entry.setId);
      if (error) throw error;
      return existingRows[0].id;
    }
    // Non-cumulative: only update if new score is better
    const bestExisting = existingRows.reduce((a, b) => a.accuracy > b.accuracy ? a : b);
    if (entry.accuracy <= bestExisting.accuracy) {
      return bestExisting.id;
    }
    // Delete old rows, insert new best score
    await client.from(getLeaderboardTable())
      .delete()
      .eq("nickname", entry.name)
      .eq("quiz_set", entry.setId);
  }

  // Insert new score
  const { data, error } = await client
    .from(getLeaderboardTable())
    .insert({
      nickname: entry.name,
      quiz_set: entry.setId,
      correct_count: entry.correct,
      total_count: entry.total,
      accuracy: entry.accuracy,
    })
    .select("id")
    .single();

  if (error) throw error;
  return data?.id || null;
}

/* Debounced, race-free remote writer for cumulative buckets (LOGIC / WORDCHECK /
   SYNONYM). Rapid per-question calls coalesce into a single write of the latest
   value, so we never race SELECT-then-INSERT into duplicate or stale rows. */
const _cumRemoteTimers = {};
const _cumRemoteLatest = {};
function scheduleCumulativeRemoteWrite(quizSet, name, correct, total, accuracy) {
  if (!hasPublicConfig() || !name) return;
  _cumRemoteLatest[quizSet] = { name, correct, total, accuracy };
  if (_cumRemoteTimers[quizSet]) return; // a write is already pending; it will use the latest value
  _cumRemoteTimers[quizSet] = setTimeout(() => {
    _cumRemoteTimers[quizSet] = null;
    const v = _cumRemoteLatest[quizSet];
    if (!v) return;
    getSupabaseClient()
      .then((client) => client && writeCumulativeRow(client, quizSet, v.name, v.correct, v.total, v.accuracy))
.catch((e) => { console.warn('cumulativeRemoteWrite failed', e); });
  }, 700);
}

async function writeCumulativeRow(client, quizSet, name, correct, total, accuracy) {
  const table = getLeaderboardTable();
  const { data: existing } = await client
    .from(table).select('id').eq('nickname', name).eq('quiz_set', quizSet);
  if (existing && existing.length) {
    // Keep every duplicate row in sync so whichever the leaderboard picks is current.
    return client.from(table)
      .update({ correct_count: correct, total_count: total, accuracy })
      .eq('nickname', name).eq('quiz_set', quizSet);
  }
  return client.from(table)
    .insert({ nickname: name, quiz_set: quizSet, correct_count: correct, total_count: total, accuracy });
}

async function readPublicLeaderboard() {
  const client = await getSupabaseClient();
  if (!client) return [];

  const { data, error } = await client
    .from(getLeaderboardTable())
    .select("id,nickname,quiz_set,correct_count,total_count,accuracy,created_at")
    .order("accuracy", { ascending: false })
    .order("correct_count", { ascending: false })
    .order("created_at", { ascending: true })
    .limit(2000);

  if (error) throw error;
  return data.map(normalizePublicScore);
}

async function completeQuiz() {
  const setTotal = (state.setQuestions && state.setQuestions.length) || state.questions.length;
  if (state.completed || state.answers.size < setTotal) return;
  state.completed = true;
  // The whole set is done — switch the active list to the full set for review
  if (state.setQuestions) state.questions = state.setQuestions;
  clearSavedProgress(state.activeSetId);

  const accuracy = Math.round((state.correctAttempts / setTotal) * 100);
  const displayName = state.playerName || "Guest";
  const entry = {
    name: displayName,
    correct: state.correctAttempts,
    total: setTotal,
    accuracy,
    setId: state.activeSetId,
    setLabel: getActiveSet().label,
    completedAt: new Date().toISOString(),
  };

  // Save locally for sidebar completion tracking
  if (state.playerName) {
    upsertLocalScore(entry);
    updateSidebarCompletion();
  }
  // Save public score if logged in
  if (state.playerName && hasPublicConfig()) {
    savePublicScore(entry).catch((e) => { console.warn('completeQuiz savePublicScore failed', e); });
  }

  els.quizPanel.hidden = true;
  els.resultPanel.hidden = false;
  const tier = getTier(readIrtAbility());
  els.resultTitle.textContent = `${displayName}'s Result`;
  els.resultSummary.textContent = `${entry.correct}/${entry.total} correct — ${accuracy}% accuracy — ${tier.icon} ${tier.name}`;

  // Show question-by-question review
  let reviewHTML = '<div style="max-height:50vh;overflow-y:auto;margin:16px 0">';
  reviewHTML += '<h4 style="margin-bottom:8px">📋 문제별 리뷰</h4>';
  (state.setQuestions || state.questions).forEach((q, i) => {
    const saved = state.answers.get(q.id);
    const isCorrect = saved?.correct;
    const selected = saved?.selected || [];
    reviewHTML += `<div style="margin-bottom:6px;padding:8px 10px;border-radius:6px;font-size:13px;background:${isCorrect?'#ecf8f1':'#fff1ec'};border-left:3px solid ${isCorrect?'#8fc7a8':'#dda08c'}">`;
    reviewHTML += `<a href="#" onclick="reviewQuestion(${i});return false" style="font-weight:700;color:var(--ink);text-decoration:none">Q${i+1}.</a> `;
    reviewHTML += `<span style="color:var(--muted)">${escapeHtml(q.prompt)} — ${wordMeanings[q.prompt]||''}</span>`;
    reviewHTML += `<span style="float:right;font-weight:700;color:${isCorrect?'var(--ok)':'var(--warn)'}">${isCorrect?'✅':'❌'}</span>`;
    reviewHTML += `<br><small>선택: ${selected.map(w=>`${escapeHtml(w)}(${wordMeanings[w]||'?'})`).join(', ')}</small>`;
    if (!isCorrect) {
      reviewHTML += `<br><small style="color:var(--ok)">정답: ${q.answer.map(w=>`${escapeHtml(w)}(${wordMeanings[w]||'?'})`).join(', ')}</small>`;
    }
    reviewHTML += `</div>`;
  });
  reviewHTML += '</div>';

  // NEXT button to go to the next category set
  const nextSetId = getNextSetId(state.activeSetId);
  if (nextSetId) {
    const nextLabel = categorySets[nextSetId] ? categorySets[nextSetId].label : nextSetId;
    reviewHTML += `<div style="text-align:center;margin-top:16px">`;
    reviewHTML += `<button class="text-btn" style="min-height:48px;min-width:220px;font-size:16px;font-weight:700;background:var(--ink);color:#fff;border-color:var(--ink)" onclick="els.resultPanel.hidden=true;openSet('${nextSetId}');startQuiz()">NEXT ▸ ${escapeHtml(nextLabel)}</button>`;
    reviewHTML += `</div>`;
  }

  els.leaderboard.innerHTML = reviewHTML;

  if (!state.playerName) {
    els.resultSummary.textContent += " · Login to save your scores!";
    return;
  }

  // Show public ranking
  renderPublicResult(displayName, accuracy, entry.correct, entry.total);
}

function reviewQuestion(index) {
  // Navigate to the question in review mode (read-only)
  state.questionIndex = index;
  state.currentSelection = new Set();
  els.resultPanel.hidden = true;
  els.quizPanel.hidden = false;
  renderQuestion();
  // Disable interaction
  els.submitBtn.disabled = true;
  els.submitTopBtn.disabled = true;
  els.options.querySelectorAll('.option').forEach(b => b.disabled = true);
  // Add a "back to results" button
  els.nextBtn.textContent = "Back to Results";
  els.nextBtn.disabled = false;
  els.nextTopBtn.textContent = "Back to Results";
  els.nextTopBtn.disabled = false;
  const origNextHandler = els.nextBtn.onclick;
  els.nextBtn.onclick = () => {
    els.quizPanel.hidden = true;
    els.resultPanel.hidden = false;
    els.nextBtn.textContent = "Next";
    els.nextTopBtn.textContent = "Next";
    // Reset buttons
    els.submitBtn.disabled = true;
    els.submitTopBtn.disabled = true;
  };
  els.nextTopBtn.onclick = els.nextBtn.onclick;
}

/* ---- Public ranking only ---- */
function renderPublicResult(displayName, accuracy, correct, total) {
  // Append public ranking below existing content (don't overwrite review)
  const existingHTML = els.leaderboard.innerHTML;
  els.leaderboard.innerHTML = existingHTML + `<p class="ranking-note" style="margin-top:12px">Loading public ranking…</p>`;

  getSupabaseClient().then((client) => {
    if (!client) {
      els.leaderboard.innerHTML = existingHTML + `<p class="ranking-note">Public ranking not connected.</p>`;
      return;
    }
    readPublicLeaderboard().then((data) => {
      const cumulative = cumulativeLeaderboard(data, null);
      const rank = cumulative.findIndex(e => e.name.toLowerCase() === displayName.toLowerCase()) + 1;
      els.resultSummary.textContent = `${correct}/${total} — ${accuracy}% — Public Rank #${rank || cumulative.length + 1}`;
      els.leaderboard.innerHTML = existingHTML + `
        <h4>🌐 Public Ranking</h4>
        <p class="ranking-note">Best per set · All 62 sets</p>
        <ol>
          ${cumulative.slice(0, 20).map((item, idx) => `
            <li>
              <span>${idx + 1}. ${escapeHtml(item.name)}</span>
              <b>${item.correct}점</b>
              <small>${item.accuracy}% · ${item.correct}/${item.total}</small>
            </li>
          `).join("")}
        </ol>
      `;
    }).catch(() => {
      els.leaderboard.innerHTML = `<p class="ranking-note">Public ranking sync failed.</p>`;
    });
  });
}

/* ---- Mode switching: only one panel active at a time ---- */
function switchMode(mode) {
  els.startPanel.hidden = true;
  els.quizPanel.hidden = true;
  els.resultPanel.hidden = true;
  els.rankingPanel.hidden = true;
  els.wordlistPanel.hidden = true;
  els.logicPanel.hidden = true;
  els.myinfoPanel.hidden = true;
  els.dashboardPanel.hidden = true;
  els.wordlist2Panel.hidden = true;
  els.wordcheckPanel.hidden = true;
  els.grammar201Panel.hidden = true;
  els.examPanel.hidden = true;
  logicState.active = false;
  els.shuffleBtn.disabled = true;
  els.resetBtn.disabled = true;
  // The synonym-quiz toolbar/progress bar only make sense in quiz/start modes
  const isSynonym = (mode === 'quiz' || mode === 'start');
  const toolbar = document.querySelector('.workspace > .toolbar');
  const progress = document.querySelector('.workspace > .progress');
  if (toolbar) toolbar.style.display = isSynonym ? '' : 'none';
  if (progress) progress.style.display = isSynonym ? '' : 'none';
  // The brand bar is the home button — redundant on the dashboard itself
  const appbar = document.querySelector('.workspace > .appbar');
  if (appbar) appbar.style.display = (mode === 'dashboard') ? 'none' : 'flex';
  // Hide category nav wrapper except for quiz/start modes
  const catWrapper = document.querySelector('.cat-nav-wrapper');
  if (catWrapper) catWrapper.style.display = (mode === 'quiz' || mode === 'start') ? '' : 'none';
  // Update current set display
  if (mode === 'logic') {
    els.activeSetLabel.textContent = "논리문제";
    els.activeSetMeta.textContent = `${getLogicTotal()} questions`;
    els.quizModeLabel.textContent = '논리';
  } else if (mode === 'quiz') {
    els.quizModeLabel.textContent = state.activeSetId || '';
  } else if (mode === 'wordlist') {
    els.activeSetLabel.textContent = "단어일람보기";
    els.activeSetMeta.textContent = "620 categories";
  } else if (mode === 'ranking') {
    els.activeSetLabel.textContent = "통합랭킹";
    els.activeSetMeta.textContent = "All sets";
  } else if (mode === 'myinfo') {
    els.activeSetLabel.textContent = "내정보";
    els.activeSetMeta.textContent = "틀린 문제";
  }
  updateNoExplainIndicator();
}

function showRanking() {
  switchMode('ranking');
  els.rankingPanel.hidden = false;
  flushCloudSync();
  pushAllScoresToSupabase();

  els.rankingTitle.textContent = "RANKING";
  els.rankingSummary.textContent = "loading...";
  els.rankingContent.innerHTML = "";

  if (!hasPublicConfig()) {
    els.rankingContent.innerHTML = "<p style='color:var(--muted);font-style:italic'>ranking offline — configure db-config.js</p>";
    return;
  }

  getSupabaseClient().then((client) => {
    if (!client) {
      els.rankingContent.innerHTML = "<p style='color:var(--muted)'>cannot connect</p>";
      return;
    }
    readPublicLeaderboard().then((data) => {
      const cumulative = cumulativeLeaderboard(data, null);
      const totalPlayers = cumulative.length;
      if (!cumulative.length) {
        els.rankingContent.innerHTML = "<p style='color:var(--muted);font-style:italic'>no scores yet</p>";
        return;
      }
      els.rankingSummary.innerHTML = `<span style="font-size:11px;letter-spacing:0.1em;opacity:0.5">${totalPlayers} PLAYERS</span>` +
        (state.playerName ? (() => { const t = getTier(readIrtAbility()); return ` <span style="font-size:12px;font-weight:700;color:var(--accent)">내 등급: ${t.icon} ${t.name}</span>`; })() : '');

      const colors = ['#FF6B35','#FFD449','#06D6A0','#118AB2','#EF476F','#073B4C','#8338EC','#FF006E'];
      const top3 = cumulative.slice(0, 3);
      const rest = cumulative.slice(3, 30);

      let html = '';
      // Top 3 — hero blocks
      html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:32px">';
      top3.forEach((item, idx) => {
        const medals = ['🥇','🥈','🥉'];
        const tier = getTierForRanking(item.correct, item.total);
        const sizes = ['160%','130%','110%'];
        const color = colors[idx];
        html += `<div style="background:${color};border-radius:2px;padding:20px 14px;text-align:center;color:#fff;position:relative;overflow:hidden">
          <div style="font-size:${sizes[idx]};font-weight:900;line-height:1;opacity:0.25;position:absolute;top:4px;right:8px">${medals[idx]}</div>
          <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;opacity:0.7;margin-bottom:4px">#${idx+1}</div>
          <div style="font-size:16px;font-weight:800;margin-bottom:2px;word-break:break-all">${escapeHtml(item.name)}</div>
          <div style="font-size:11px;opacity:0.85;margin-bottom:6px">${tier.icon} ${tier.name}</div>
          <div style="font-size:28px;font-weight:900;line-height:1">${item.correct}<span style="font-size:14px;font-weight:400">점</span></div>
          <div style="font-size:11px;opacity:0.7">${item.accuracy}% · ${item.correct}/${item.total}</div>
        </div>`;
      });
      html += '</div>';

      // Rest — brutalist list
      if (rest.length) {
        html += '<div style="display:grid;gap:6px">';
        rest.forEach((item, idx) => {
          const rank = idx + 4;
          const tier = getTierForRanking(item.correct, item.total);
          const barW = Math.min(100, item.accuracy);
          html += `<div style="display:grid;grid-template-columns:28px 1fr 55px 55px;align-items:center;gap:10px;padding:8px 12px;background:#fff;border-radius:10px;border:1px solid #eee">
            <span style="font-size:12px;font-weight:700;color:var(--muted);text-align:right">${rank}</span>
            <div style="min-width:0">
              <div style="font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(item.name)} <span style="font-size:11px;opacity:0.6">${tier.icon} ${tier.name}</span></div>
              <div style="height:4px;border-radius:2px;background:#f0f0f0;margin-top:4px"><div style="height:100%;width:${barW}%;border-radius:2px;background:${colors[rank % colors.length]}"></div></div>
            </div>
            <span style="font-size:18px;font-weight:800;text-align:right">${item.correct}<span style="font-size:10px;font-weight:400;color:var(--muted)">점</span></span>
            <span style="font-size:11px;color:var(--muted);text-align:right">${item.accuracy}%</span>
          </div>`;
        });
        html += '</div>';
      }

      els.rankingContent.innerHTML = html;
    }).catch(() => {
      els.rankingContent.innerHTML = "<p style='color:var(--muted)'>failed to load</p>";
    });
  });
}

function getActiveSetCount() {
  return Object.keys(categorySets).length;
}

let wlHideKnown = false;
let wlCollapseMid = true;
let wlCollapseHigh = true;

function showWordlist() {
  switchMode('wordlist');
  els.wordlistPanel.hidden = false;
  els.wordlistTitle.innerHTML = `
    <span class="wl-title-main">전체 단어 일람 (${categories.length}개 범주)</span>
    <span class="wl-jump-controls">
      ${state.playerName ? `<button class="wl-jump-btn wl-hideknown-btn${wlHideKnown ? ' wl-hideknown-on' : ''}" type="button" title="아는 단어(✓) 숨기기">${wlHideKnown ? '✓ 아는 단어 숨김' : '아는 단어 안보기'}</button>` : ''}
      <button class="wl-jump-btn" type="button" data-jump-target="200" title="범주 200번으로 이동">범주200</button>
      <button class="wl-jump-btn" type="button" data-jump-target="400" title="범주 400번으로 이동">범주400</button>
    </span>
  `;
  els.wordlistTitle.querySelectorAll('.wl-jump-btn[data-jump-target]').forEach((button) => {
    button.addEventListener('click', () => jumpToCategory(button.dataset.jumpTarget));
  });
  const hideBtn = els.wordlistTitle.querySelector('.wl-hideknown-btn');
  if (hideBtn) hideBtn.addEventListener('click', () => { wlHideKnown = !wlHideKnown; showWordlist(); });
  const hideKnown = wlHideKnown && state.playerName;
  let html = '<div class="wordlist-scroll">';
  // Split into three ranges for independent toggles
  const catsLow  = categories.filter(c => parseInt(c.id) < 200);
  const catsMid  = categories.filter(c => parseInt(c.id) >= 200 && parseInt(c.id) < 400);
  const catsHigh = categories.filter(c => parseInt(c.id) >= 400);
  [...catsLow, null, ...catsMid, null, ...catsHigh].forEach(cat => {
    // null sentinel = boundary between ranges
    if (cat === null) {
      const nextIsMid = html.indexOf('wl-mid-cats') === -1 && html.indexOf('wl-high-cats') === -1;
      if (nextIsMid) {
        // Collapsed bar sits outside the hidden div so it's always clickable
        html += `<div id="wl-mid-collapsed"${wlCollapseMid ? '' : ' hidden'} style="text-align:center;padding:8px;margin:12px 0;background:#fff3cd;border-radius:6px;font-size:12px;color:#856404"><button type="button" class="wl-jump-btn" style="font-size:12px;padding:4px 16px" onclick="wlCollapseMid=false;showWordlist()">범주 200~399 펴기 ▸</button></div>`;
        html += `<div id="wl-mid-cats"${wlCollapseMid ? ' hidden' : ''}>`;
        html += `<div style="text-align:center;padding:8px;margin:12px 0;background:#fff3cd;border-radius:6px;font-size:12px;color:#856404">범주 200~399 — <button type="button" class="wl-jump-btn" style="font-size:11px;padding:2px 8px" onclick="document.getElementById('wl-mid-cats').hidden=true;wlCollapseMid=true;document.getElementById('wl-mid-collapsed').hidden=false;">접기</button></div>`;
      } else {
        html += '</div>'; // close wl-mid-cats
        // Collapsed bar for 400-620 sits outside the hidden div
        html += `<div id="wl-high-collapsed"${wlCollapseHigh ? '' : ' hidden'} style="text-align:center;padding:8px;margin:12px 0;background:#fff3cd;border-radius:6px;font-size:12px;color:#856404"><button type="button" class="wl-jump-btn" style="font-size:12px;padding:4px 16px" onclick="wlCollapseHigh=false;showWordlist()">범주 400~620 펴기 ▸</button></div>`;
        html += `<div id="wl-high-cats"${wlCollapseHigh ? ' hidden' : ''}>`;
        html += `<div style="text-align:center;padding:8px;margin:12px 0;background:#fff3cd;border-radius:6px;font-size:12px;color:#856404">범주 400~620 — <button type="button" class="wl-jump-btn" style="font-size:11px;padding:2px 8px" onclick="document.getElementById('wl-high-cats').hidden=true;wlCollapseHigh=true;document.getElementById('wl-high-collapsed').hidden=false;">접기</button></div>`;
      }
      return;
    }
    const summary = categorySummaries[cat.id] || '';
    // When hiding known words, drop checked (✓) words; if the whole category is
    // known, skip it entirely — name included — so only unknown words remain.
    const catWords = hideKnown ? cat.words.filter(w => !isWordKnown(w)) : cat.words;
    if (catWords.length === 0) return;
    const hasCollocations = catWords.some(w => {
      const n = confusionNotes[w] || '';
      if (!n || n.length < 8) return false;
      return n.includes('의') || (n.includes('(') && n.length > 10) || n.length > 25 || n.includes(';');
    });
    const hasExamples = catWords.some(w => {
      return window.examples && window.examples[w] && window.examples[w].length > 20;
    });
    const hasKoreanUsage = catWords.some(w => {
      return window.koreanUsage && window.koreanUsage[w];
    });

    html += `<div class="wordlist-cat" data-cat-id="${escapeHtml(cat.id)}">`;
    html += `<div class="wl-cat-header-row">`;
    html += `<h4 class="wl-cat-header" onclick="toggleCatFold('${escapeHtml(cat.id)}')" style="cursor:pointer">`;
    html += `<span class="wl-cat-num">${escapeHtml(cat.id)}</span> ${escapeHtml(summary)}`;
    html += `<span class="wl-fold-indicator">▼</span>`;
    html += `</h4>`;
    if (hasCollocations) {
      html += `<button class="wl-diff-btn" type="button" onclick="event.stopPropagation();toggleCatDetail('${escapeHtml(cat.id)}')">차이</button>`;
    }
    if (hasKoreanUsage) {
      html += `<button class="wl-usage-btn" type="button" onclick="event.stopPropagation();toggleCatKoreanUsage('${escapeHtml(cat.id)}')">📖 용례</button>`;
    }
    if (hasExamples) {
      html += `<button class="wl-example-btn" type="button" onclick="event.stopPropagation();toggleCatExample('${escapeHtml(cat.id)}')">예문</button>`;
    }
    html += `</div>`;

    html += `<div class="wordlist-words" id="wl-words-${escapeHtml(cat.id)}">`;
    catWords.forEach((w) => {
      const m = wordMeanings[w] || '';
      const known = state.playerName && isWordKnown(w);
      const wrong = state.playerName && isSynonymWrong(cat.id, w);
      const wrongClass = wrong ? ' wl-wrong' : '';
      const knownClass = (known && !wrong) ? ' wl-known' : '';
      html += `<span class="wl-word${knownClass}${wrongClass}${state.playerName ? ' wl-clickable' : ''}"`;
      if (state.playerName) {
        html += ` onclick="handleWordToggle('${escapeHtml(w)}', this)" title="클릭하여 안다/모른다 표시"`;
      }
      html += `>${escapeHtml(w)}`;
      if (known) html += `<span class="wl-check">✓</span>`;
      if (wrong) html += `<span class="wl-wrong-mark" style="color:#c62828;font-weight:800;margin-left:2px">✗</span>`;
      if (m) html += `<span class="wl-meaning">${escapeHtml(m)}</span>`;
      html += `</span>`;
    });
    html += `</div>`;
    // Collocation detail (hidden)
    if (hasCollocations) {
      html += `<div class="wl-detail" id="wl-detail-${escapeHtml(cat.id)}" hidden>`;
      html += `<ul class="wl-detail-list">`;
      catWords.forEach((w) => {
        const note = confusionNotes[w] || '';
        const hasColl = note && note.length >= 8 && (note.includes('의') || (note.includes('(') && note.length > 10) || note.length > 25 || note.includes(';'));
        if (hasColl) {
          html += `<li><strong class="wl-detail-word">${escapeHtml(w)}</strong>`;
          html += `<span class="wl-detail-note"> → ${escapeHtml(note)}</span></li>`;
        }
      });
      html += `</ul></div>`;
    }
    // Korean usage detail (hidden)
    if (hasKoreanUsage) {
      html += `<div class="wl-detail wl-detail-usage" id="wl-usage-${escapeHtml(cat.id)}" hidden>`;
      html += `<ul class="wl-detail-list">`;
      catWords.forEach((w) => {
        const usage = (window.koreanUsage && window.koreanUsage[w]) ? window.koreanUsage[w] : '';
        if (usage) {
          html += `<li><strong class="wl-detail-word">${escapeHtml(w)}</strong>`;
          html += `<p class="wl-usage">📝 ${escapeHtml(usage)}</p></li>`;
        }
      });
      html += `</ul></div>`;
    }
    // Example sentences detail (hidden)
    if (hasExamples) {
      html += `<div class="wl-detail wl-detail-examples" id="wl-example-${escapeHtml(cat.id)}" hidden>`;
      html += `<ul class="wl-detail-list">`;
      catWords.forEach((w) => {
        const example = (window.examples && window.examples[w]) ? window.examples[w] : '';
        if (example && example.length > 20) {
          html += `<li><strong class="wl-detail-word">${escapeHtml(w)}</strong>`;
          html += `<p class="wl-example">📖 ${escapeHtml(example)}</p></li>`;
        }
      });
      html += `</ul></div>`;
    }
    html += `</div>`;
  });
  html += '</div>'; // close wl-high-cats (wl-mid-cats closed by second null sentinel)
  html += '</div>';
  els.wordlistContent.innerHTML = html;
}

function toggleCatFold(catId) {
  const words = document.getElementById(`wl-words-${catId}`);
  const header = document.querySelector(`.wordlist-cat[data-cat-id="${catId}"] .wl-fold-indicator`);
  if (words) {
    words.hidden = !words.hidden;
    if (header) header.textContent = words.hidden ? '▸' : '▼';
  }
}

function toggleCatKoreanUsage(catId) {
  const detail = document.getElementById(`wl-usage-${catId}`);
  if (detail) {
    detail.hidden = !detail.hidden;
  }
}

function handleWordToggle(word, element) {
  const becameKnown = toggleWordKnown(word);
  if (becameKnown) {
    element.classList.add('wl-known');
    // Add checkmark if not present
    if (!element.querySelector('.wl-check')) {
      const check = document.createElement('span');
      check.className = 'wl-check';
      check.textContent = '✓';
      element.insertBefore(check, element.firstChild);
    }
  } else {
    element.classList.remove('wl-known');
    const check = element.querySelector('.wl-check');
    if (check) check.remove();
  }
}

function showWordlist2() {
  switchMode('wordlist');
  els.wordlist2Panel.hidden = false;
  const extraWords = window.__V502_EXTRA__ || [];
  const hideKnown = wlHideKnown && state.playerName;
  const visible = hideKnown ? extraWords.filter(item => !isWordKnown(item.w || '')) : extraWords;
  const hiddenCount = extraWords.length - visible.length;

  let html = '<div class="wordlist-scroll"><div class="wordlist-cat">';
  html += '<h4><span class="wl-cat-num">EXTRA</span> MVP2 + V401 (V502 미포함) — ' + visible.length + ' words';
  if (hiddenCount > 0) html += ' <small style="color:var(--muted);font-weight:400">(' + hiddenCount + ' hidden)</small>';
  html += '</h4>';
  html += '<div style="margin-bottom:8px">';
  if (state.playerName) {
    html += '<button class="wl-jump-btn wl-hideknown-btn' + (wlHideKnown ? ' wl-hideknown-on' : '') + '" type="button" id="wl2HideBtn" title="아는 단어(✓) 숨기기">' + (wlHideKnown ? '✓ 아는 단어 숨김' : '아는 단어 안보기') + '</button>';
  }
  html += '</div>';
  html += '<div class="wordlist2-entries">';
  visible.forEach((item, idx) => {
    const hasEx = item.ex && item.ex.length > 20;
    const w = item.w || '';
    const m = item.m || '';
    const known = state.playerName && isWordKnown(w);
    html += '<div class="wl2-entry">';
    html += '<span class="wl2-word' + (known ? ' wl-known' : '') + (state.playerName ? ' wl-clickable' : '') + '"';
    if (state.playerName) {
      html += ' onclick="handleWordToggle(\'' + escapeHtml(w) + '\', this)" title="클릭하여 안다/모른다 표시"';
    }
    html += '>';
    if (known) html += '<span class="wl-check">✓</span>';
    html += escapeHtml(w) + '</span>';
    if (m) html += '<span class="wl2-meaning">' + escapeHtml(m) + '</span>';
    if (hasEx) html += '<div class="wl2-example">' + escapeHtml(item.ex) + '</div>';
    html += '</div>';
  });
  html += '</div></div></div>';
  els.wordlist2Content.innerHTML = html;

  // Attach hide button listener after DOM is set
  const hideBtn = document.getElementById('wl2HideBtn');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => { wlHideKnown = !wlHideKnown; showWordlist2(); });
  }
}

function jumpToCategory(targetId) {
  const targetEl = document.querySelector(`.wordlist-cat[data-cat-id="${targetId}"]`);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => window.scrollBy({ top: -20, behavior: 'smooth' }), 180);
  }
}

function toggleCatDetail(catId) {
  const detail = document.getElementById(`wl-detail-${catId}`);
  if (detail) detail.hidden = !detail.hidden;
}

function toggleCatExample(catId) {
  const detail = document.getElementById(`wl-example-${catId}`);
  if (detail) {
    detail.hidden = !detail.hidden;
  }
}

function hideRanking() {
  switchMode('start');
  els.startPanel.hidden = false;
  els.shuffleBtn.disabled = false;
  els.resetBtn.disabled = false;
}

function startQuiz() {
  switchMode('quiz');
  clearSavedProgress(state.activeSetId);
  loadSetSession(buildQuestions(), [], { totalAttempts: 0, correctAttempts: 0, streak: 0 });
  els.quizPanel.hidden = false;
  els.shuffleBtn.disabled = false;
  els.resetBtn.disabled = false;
  syncNoExplainButtons();
  updateSetDisplay();
  if (state.questions.length === 0) {
    els.feedback.hidden = false;
    els.feedback.className = "feedback ok";
    els.feedback.innerHTML = "<strong>이 카테고리의 모든 단어를 마스터했습니다! 🎉</strong><p>다른 카테고리를 선택해 주세요.</p>";
    els.submitBtn.disabled = true;
    els.nextBtn.disabled = true;
    els.postFeedbackActions.hidden = true;
    return;
  }
  renderQuestion();
}

function updateSetDisplay() {
  const activeSet = getActiveSet();
  els.activeSetLabel.textContent = activeSet.label;
  els.activeSetMeta.textContent = "30 questions";
  els.questionTotal.textContent = "/ 30";
  els.categoryButtons.forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.setId === state.activeSetId));
  });
}

function selectCategorySet(setId) {
  if (!categorySets[setId]) return;
  // Re-selecting the active set is allowed so it resumes that set's progress
  if (state.playerName) {
    openSet(setId);
  } else {
    state.activeSetId = setId;
    updateSetDisplay();
  }
}

function nextQuestion() {
  if (state.questionIndex < state.questions.length - 1) {
    state.questionIndex += 1;
    state.currentSelection = new Set();
    renderQuestion();
    return;
  }

  completeQuiz();
}

function prevQuestion() {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    state.currentSelection = new Set();
    renderQuestion();
  }
}

function resetAll() {
  if (!state.playerName) return;
  startQuiz();
}

function startWithName(event) {
  event.preventDefault();
  const name = els.nicknameInput.value.trim();
  if (!name) return;

  const pwd = els.passwordInput.value.trim();

  // If nickname already has a password, it must match
  if (hasPassword(name)) {
    if (!pwd) {
      els.passwordHint.textContent = "This nickname is claimed. Enter your password.";
      els.passwordRow.hidden = false;
      els.passwordInput.focus();
      return;
    }
    if (!checkPassword(name, pwd)) {
      els.passwordHint.textContent = "Wrong password. Try again.";
      els.passwordInput.value = "";
      els.passwordInput.focus();
      return;
    }
  }

  state.playerName = name;
  state.playerPassword = pwd;

  // Set password for new nicknames
  if (pwd) {
    setPasswordForNickname(name, pwd);
  }

  els.playerNameLabel.textContent = name;
  els.startPanel.hidden = true;
  startQuiz();
}

// Auth event listeners
els.authLoginBtn.addEventListener("click", handleLogin);
els.authRegisterBtn.addEventListener("click", handleRegister);
els.authLogoutBtn.addEventListener("click", handleLogout);
// Enter key to login
els.authNicknameInput.addEventListener("keydown", (e) => { if (e.key === 'Enter') els.authPasswordInput.focus(); });
els.authPasswordInput.addEventListener("keydown", (e) => { if (e.key === 'Enter') handleLogin(); });
els.startQuizBtn.addEventListener("click", onStartQuizClick);

els.prevBtn.addEventListener("click", prevQuestion);
els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", nextQuestion);
els.prevTopBtn.addEventListener("click", prevQuestion);
els.submitTopBtn.addEventListener("click", submitAnswer);
els.nextTopBtn.addEventListener("click", nextQuestion);
if (els.shuffleBtn) els.shuffleBtn.addEventListener("click", resetAll);
if (els.resetBtn) els.resetBtn.addEventListener("click", resetAll);
els.restartBtn.addEventListener("click", resetAll);
els.rankingBtn.addEventListener("click", showRanking);
if (els.rankingCloseBtn) els.rankingCloseBtn.addEventListener("click", hideRanking);
els.wordlistBtn.addEventListener("click", showWordlist);
els.wordlist2Btn.addEventListener("click", showWordlist2);
els.wordlist2Panel.addEventListener("click", function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});
els.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategorySet(button.dataset.setId));
  const smallEl = button.querySelector("small");
  if (smallEl) smallEl.textContent = "30";
});

function updateSidebarCompletion() {
  if (!state.playerName) return;
  const entries = readLeaderboard().filter(e => e.name.toLowerCase() === state.playerName.toLowerCase());
  const completed = new Map();
  for (const e of entries) {
    const existing = completed.get(e.setId);
    if (!existing || e.accuracy > existing.accuracy) {
      completed.set(e.setId, e);
    }
  }
  els.categoryButtons.forEach((button) => {
    const setId = button.dataset.setId;
    const entry = completed.get(setId);
    const smallEl = button.querySelector("small");
    if (!smallEl) return;
    if (entry) {
      smallEl.textContent = `✓ ${entry.accuracy}%`;
      button.style.borderColor = "rgba(20,108,108,0.5)";
    } else {
      smallEl.textContent = "30";
      button.style.borderColor = "";
    }
  });
}

// Restore session on page load
const savedSession = getSession();
if (savedSession && savedSession.name) {
  const store = readPasswordStore();
  const key = savedSession.name.toLowerCase();
  if (store[key]) {
    const stored = store[key];
    state.playerName = (typeof stored === 'object' && stored.displayName) ? stored.displayName : savedSession.name;
    // Pull latest cloud data + scores, then push local state
    const pw = typeof stored === 'string' ? stored : atob(stored.password);
    cloudCheckCred(state.playerName, pw).then(() => {
      return cloudPullScores();
    }).then(() => {
      cloudSyncAll();
      pushAllScoresToSupabase();
    }).catch((e) => { console.warn('session restore sync failed', e); });
    setTimeout(() => {
      updateSidebarCompletion();
      checkAndShowResume();
    }, 100);
  }
}

els.quizPanel.hidden = true;
renderAuthUI();
updateSetDisplay();

// Save quiz progress on tab close / navigation away
window.addEventListener("beforeunload", () => { saveQuizProgress(); flushCloudSync(); });
window.addEventListener("pagehide", () => { saveQuizProgress(); flushCloudSync(); });
window.addEventListener("pagehide", () => saveQuizProgress());

/* ======== Logic Quiz ======== */
const logicProgressKey = "v502-logic-progress";
const logicScoreKey = "v502-logic-score"; // weighted cumulative score
const synonymProgressKey = "v502-synonym-progress";
let logicState = {
  questions: [],
  currentIndex: 0,
  selectedOption: null,
  answered: false,
  correctCount: 0,
  active: false,
};

function readLogicProgress() {
  try { return JSON.parse(localStorage.getItem(logicProgressKey)) || {}; }
  catch { return {}; }
}
function saveLogicCorrect(qid) {
  const p = readLogicProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = { correct: [], wrong: [] };
  if (!p[key].correct.includes(qid)) p[key].correct.push(qid);
  // Keep correct/wrong disjoint so cumulative total never double-counts a question
  p[key].wrong = (p[key].wrong || []).filter((id) => id !== qid);
  try { localStorage.setItem(logicProgressKey, JSON.stringify(p)); } catch {}
  addWeightedScore(qid, true);
  scheduleCloudSync();
}
function saveLogicWrong(qid) {
  const p = readLogicProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = { correct: [], wrong: [] };
  if (!p[key].wrong.includes(qid) && !p[key].correct.includes(qid)) p[key].wrong.push(qid);
  try { localStorage.setItem(logicProgressKey, JSON.stringify(p)); } catch {}
  addWeightedScore(qid, false);
  scheduleCloudSync();
}

/* Grammar progress persistence */
const grammarProgressKey = "v502-grammar-progress";
function readGrammarProgress() {
  try { return JSON.parse(localStorage.getItem(grammarProgressKey)) || {}; }
  catch { return {}; }
}
function saveGrammarCorrect(qid) {
  const p = readGrammarProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = { correct: [], wrong: [] };
  if (!p[key].correct.includes(qid)) p[key].correct.push(qid);
  p[key].wrong = (p[key].wrong || []).filter(id => id !== qid);
  try { localStorage.setItem(grammarProgressKey, JSON.stringify(p)); } catch {}
  scheduleCloudSync();
}
function saveGrammarWrong(qid) {
  const p = readGrammarProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = { correct: [], wrong: [] };
  if (!p[key].wrong.includes(qid) && !p[key].correct.includes(qid)) p[key].wrong.push(qid);
  try { localStorage.setItem(grammarProgressKey, JSON.stringify(p)); } catch {}
  scheduleCloudSync();
}
function getGrammarWrong() {
  const p = readGrammarProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  return new Set((p[key] && p[key].wrong) || []);
}

/* Exam progress persistence */
const examProgressKey = "v502-exam-progress";
function readExamProgress() {
  try { return JSON.parse(localStorage.getItem(examProgressKey)) || {}; }
  catch { return {}; }
}
function saveExamCorrect(tab, idx) {
  const p = readExamProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = {};
  if (!p[key][tab]) p[key][tab] = { correct: [], wrong: [] };
  if (!p[key][tab].correct.includes(idx)) p[key][tab].correct.push(idx);
  p[key][tab].wrong = (p[key][tab].wrong || []).filter(function(id) { return id !== idx; });
  try { localStorage.setItem(examProgressKey, JSON.stringify(p)); } catch {}
  scheduleCloudSync();
}
function saveExamWrong(tab, idx) {
  const p = readExamProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  if (!p[key]) p[key] = {};
  if (!p[key][tab]) p[key][tab] = { correct: [], wrong: [] };
  if (!p[key][tab].wrong.includes(idx) && !p[key][tab].correct.includes(idx)) p[key][tab].wrong.push(idx);
  try { localStorage.setItem(examProgressKey, JSON.stringify(p)); } catch {}
  scheduleCloudSync();
}
function getExamProgress(tab) {
  const p = readExamProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  const entry = (p[key] && p[key][tab]) || { correct: [], wrong: [] };
  return { correct: new Set(entry.correct), wrong: new Set(entry.wrong) };
}

/* Weighted scoring using the 7-factor regression seed */
function readLogicScore() {
  try { return JSON.parse(localStorage.getItem(logicScoreKey)) || {}; }
  catch { return {}; }
}
function writeLogicScore(data) {
  try { localStorage.setItem(logicScoreKey, JSON.stringify(data)); } catch {}
}
function addWeightedScore(qid, isCorrect) {
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  const scores = readLogicScore();
  if (!scores[key]) scores[key] = { score: 0, questions: 0 };
  // Prevent double-counting: only add if this specific qid hasn't been scored yet
  const scoredKey = key + "_scored";
  const scored = readLogicScore()[scoredKey] || {};
  if (scored[qid]) return; // already counted
  scored[qid] = true;
  scores[scoredKey] = scored;
  // Get difficulty-weighted delta
  const diff = window.__V502_LOGIC_DIFFICULTY__;
  const delta = diff && diff.getScoreDelta ? diff.getScoreDelta(isCorrect, qid) : (isCorrect ? 1.5 : -1);
  scores[key].score = +(scores[key].score + parseFloat(delta)).toFixed(4);
  scores[key].questions++;
  writeLogicScore(scores);
}
function getLogicWeightedScore() {
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  const scores = readLogicScore();
  return scores[key] || { score: 0, questions: 0 };
}
function getLogicCompleted() {
  const p = readLogicProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  return new Set((p[key] && p[key].correct) || []);
}
function getLogicWrong() {
  const p = readLogicProgress();
  const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
  return new Set((p[key] && p[key].wrong) || []);
}
function getLogicTotal() {
  return (window.__V502_LOGIC__ && window.__V502_LOGIC__.questions || []).length;
}

/* Push the player's *cumulative* logic stats to the ranking using WEIGHTED SCORES.
   Each answer contributes a difficulty-adjusted delta, not just +1/-0. */
function persistLogicRanking() {
  if (!state.playerName) return;
  const ws = getLogicWeightedScore();
  if (ws.questions === 0) return;
  // Scale weighted score to a display-friendly range (~0-100 for readability)
  // Raw weighted score per question: ~0.01 to ~1.5.  Scale up ×40 → 0.4 to 60 range.
  const displayScore = Math.max(0, Math.round(ws.score * 40 * 100) / 100);
  const accuracy = Math.round((getLogicCompleted().size / (getLogicCompleted().size + getLogicWrong().size || 1)) * 100);

  // Local: replace any prior logic entries with a single cumulative weighted one
  const nameKey = state.playerName.toLowerCase();
  const entries = readLeaderboard().filter(
    (e) => !(e.name.toLowerCase() === nameKey && String(e.setId || "").startsWith("LOGIC")),
  );
  entries.push({
    name: state.playerName,
    correct: displayScore,              // weighted score (scaled)
    total: ws.questions,                // questions attempted
    accuracy,
    setId: "LOGIC", setLabel: "Logic Quiz (weighted)", completedAt: new Date().toISOString(),
  });
  writeLeaderboard(entries);

  // Public: coalesced, race-free write of the single (nickname, LOGIC) cumulative row
  scheduleCumulativeRemoteWrite("LOGIC", state.playerName, displayScore, ws.questions, accuracy);
}

function shuffleLogicQuestions() {
  const raw = (window.__V502_LOGIC__ && window.__V502_LOGIC__.questions) || [];
  const completed = getLogicCompleted();
  const wrong = getLogicWrong();
  // Exclude every question already answered (correct OR wrong) so none repeats
  const remaining = raw.filter(q => !completed.has(q.id) && !wrong.has(q.id));
  logicState.questions = [...remaining].sort(() => Math.random() - 0.5);
}

function startLogicQuiz() {
  switchMode('logic');
  shuffleLogicQuestions();
  logicState.currentIndex = 0;
  logicState.correctCount = 0;
  logicState.active = true;
  els.logicPanel.hidden = false;
  syncNoExplainButtons();
  if (logicState.questions.length === 0) {
    // Every question already answered — nothing left to show
    showLogicAllDone();
    return;
  }
  renderLogicQuestion();
}

function showLogicAllDone() {
  logicState.active = false;
  const correct = getLogicCompleted().size;
  const wrong = getLogicWrong().size;
  const total = correct + wrong;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const ws = getLogicWeightedScore();
  els.logicPanel.hidden = true;
  els.resultPanel.hidden = false;
  els.resultTitle.textContent = "Logic Quiz Result";
  els.resultSummary.textContent = `모든 문제 완료! ${correct}/${total} 정답 (${pct}%) · 난이도 가중 점수: ${ws.score.toFixed(2)} (${ws.questions}문제)`;
}

function setBtnDisabled(btn, isDisabled) {
  // Avoid toggling the native `disabled` attribute: iOS Safari can fail to
  // re-register taps on a button re-enabled this way until the next reflow.
  if (isDisabled) btn.setAttribute("aria-disabled", "true");
  else btn.removeAttribute("aria-disabled");
}

function renderLogicQuestion() {
  const q = logicState.questions[logicState.currentIndex];
  if (!q) return;
  logicState.selectedOption = null;
  logicState.answered = false;
  const diff = window.__V502_LOGIC_DIFFICULTY__ ? window.__V502_LOGIC_DIFFICULTY__.get(q.id) : null;
  const rateTag = diff != null ? ` <span style="font-size:12px;font-weight:600;color:${diff >= 70 ? '#34c759' : diff >= 40 ? '#d4a017' : '#e11d48'}">(예상정답률 ${diff}%)</span>` : '';
  els.logicQuestionText.innerHTML = `<strong>Q${logicState.currentIndex + 1}.</strong>${rateTag} ${escapeHtml(q.question)}`;
  els.logicOptions.innerHTML = "";

  // Hide submit/next in noExplainMode
  els.logicSubmitBtn.style.display = noExplainMode ? 'none' : '';
  els.logicNextBtn.style.display = noExplainMode ? 'none' : '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.innerHTML = `<span>${String.fromCharCode(65 + i)}. ${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => {
      if (logicState.answered) return;
      logicState.selectedOption = opt;
      if (noExplainMode) {
        // Immediate submit + flash + auto-advance
        logicSubmitNoExplain(opt, btn, q);
      } else {
        els.logicOptions.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        setBtnDisabled(els.logicSubmitBtn, false);
      }
    });
    els.logicOptions.appendChild(btn);
  });
  setBtnDisabled(els.logicSubmitBtn, true);
  setBtnDisabled(els.logicNextBtn, true);
  els.logicFeedback.hidden = true;
  els.logicFeedback.className = "feedback";
  els.logicCounter.textContent = `${logicState.currentIndex + 1}/${logicState.questions.length}`;
  els.quizModeLabel.textContent = '논리';
}

function logicSubmitNoExplain(opt, clickedBtn, q) {
  logicState.answered = true;
  const correct = opt === q.answer;
  if (correct) {
    logicState.correctCount++;
    saveLogicCorrect(q.id);
  } else {
    saveLogicWrong(q.id);
  }
  persistLogicRanking();

  // Dramatic overlay toast
  const toast = document.createElement('div');
  const bg = correct ? '#34c759' : '#ff3b30';
  toast.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.3);
    width:140px;height:140px;border-radius:70px;
    background:${bg};color:#fff;
    display:flex;align-items:center;justify-content:center;
    font-size:64px;font-weight:900;
    z-index:9999;pointer-events:none;
    box-shadow:0 20px 60px ${bg}44;
    transition:transform 0.25s cubic-bezier(0.175,0.885,0.32,1.275);
  `;
  toast.textContent = correct ? '✓' : '✗';
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.transform = 'translate(-50%,-50%) scale(1)'; });

  // Tint clicked button + highlight correct
  clickedBtn.style.background = correct ? '#e8f5e9' : '#fce4ec';
  if (!correct) {
    els.logicOptions.querySelectorAll(".option").forEach(b => {
      const optText = b.querySelector("span")?.textContent?.replace(/^[A-D]\. /, "");
      if (optText === q.answer) b.style.background = '#e8f5e9';
      b.disabled = true;
    });
  }

  setTimeout(() => {
    toast.style.transform = 'translate(-50%,-50%) scale(0.3)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
    logicState.currentIndex++;
    if (logicState.currentIndex >= logicState.questions.length) {
      finishLogicQuiz();
    } else {
      renderLogicQuestion();
    }
  }, 400);
}

function submitLogicAnswer() {
  if (logicState.answered || !logicState.selectedOption) return;
  logicState.answered = true;
  const q = logicState.questions[logicState.currentIndex];
  const correct = logicState.selectedOption === q.answer;
  if (correct) {
    logicState.correctCount++;
    saveLogicCorrect(q.id);
  } else {
    saveLogicWrong(q.id);
  }
  // Reflect this answer in the unified ranking right away
  persistLogicRanking();

  els.logicFeedback.hidden = false;
  els.logicFeedback.className = `feedback ${correct ? "ok" : "no"}`;
  els.logicFeedback.innerHTML = `
    <strong>${correct ? "✅ Correct!" : "❌ Incorrect."}</strong>
    <p style="margin-top:8px">${escapeHtml(q.explanation)}</p>
  `;

  // Highlight correct/wrong options
  els.logicOptions.querySelectorAll(".option").forEach(btn => {
    const optText = btn.querySelector("span")?.textContent?.replace(/^[A-D]\. /, "");
    if (optText === q.answer) btn.classList.add("correct");
    else if (optText === logicState.selectedOption && !correct) btn.classList.add("wrong");
    btn.disabled = true;
  });

  setBtnDisabled(els.logicSubmitBtn, true);
  setBtnDisabled(els.logicNextBtn, logicState.currentIndex >= logicState.questions.length - 1);
  els.logicNextBtn.textContent = logicState.currentIndex >= logicState.questions.length - 1 ? "Finish" : "Next";
}

function nextLogicQuestion() {
  if (logicState.currentIndex < logicState.questions.length - 1) {
    logicState.currentIndex++;
    renderLogicQuestion();
  } else {
    finishLogicQuiz();
  }
}

function finishLogicQuiz() {
  logicState.active = false;
  persistLogicRanking();
  const sessionPct = logicState.questions.length
    ? Math.round((logicState.correctCount / logicState.questions.length) * 100)
    : 0;
  const cumCorrect = getLogicCompleted().size;
  const cumTotal = cumCorrect + getLogicWrong().size;
  const cumPct = cumTotal ? Math.round((cumCorrect / cumTotal) * 100) : 0;
  const remaining = getLogicTotal() - cumTotal;
  const ws = getLogicWeightedScore();
  els.logicPanel.hidden = true;
  els.resultPanel.hidden = false;
  els.resultTitle.textContent = "Logic Quiz Result";
  els.resultSummary.textContent = `이번 세션 ${logicState.correctCount}/${logicState.questions.length} (${sessionPct}%) · 누적 ${cumCorrect}/${cumTotal} (${cumPct}%) · 가중점수 ${ws.score.toFixed(2)} · 남은 ${remaining}문제`;
}

// Logic mode toggle
els.logicModeBtn.addEventListener("click", () => {
  startLogicQuiz();
});

// Category nav HIDDEN by default - click 단어문제 to show
// Toggle handled by inline onclick in index.html — no addEventListener needed

/* ---- Dashboard ---- */
function dashCard({ icon, title, desc, accent, onclick, badge }) {
  return `<button class="dash-card" data-accent="${accent}" onclick="${onclick}">
    <span class="dash-card-icon">${icon}</span>
    <span class="dash-card-body">
      <span class="dash-card-title">${escapeHtml(title)}${badge ? `<span class="dash-card-badge">${escapeHtml(badge)}</span>` : ''}</span>
      <span class="dash-card-desc">${escapeHtml(desc)}</span>
    </span>
  </button>`;
}

let noExplainMode = localStorage.getItem('v502-noexplain') === '1';

function updateNoExplainIndicator() {
  const el = document.getElementById('noExplainIndicator');
  if (!el) return;
  el.textContent = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  el.classList.toggle('on', noExplainMode);
}

function syncNoExplainButtons() {
  const label = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  document.querySelectorAll('.quiz-noexplain-btn').forEach(b => {
    b.textContent = label;
    b.classList.toggle('on', noExplainMode);
  });
}

function syncNoExplainButtons() {
  const label = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  document.querySelectorAll('.quiz-noexplain-btn').forEach(b => {
    b.textContent = label;
    b.classList.toggle('on', noExplainMode);
  });
}

function toggleNoExplainMode() {
  noExplainMode = !noExplainMode;
  localStorage.setItem('v502-noexplain', noExplainMode ? '1' : '0');
  const label = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  const btn = document.getElementById('dashNoExplainBtn');
  if (btn) btn.textContent = label;
  syncNoExplainButtons();
  updateNoExplainIndicator();
  // Re-render active quiz so explanation visibility updates immediately
  if (!els.quizPanel.hidden) {
    renderQuestion();
  } else if (!els.logicPanel.hidden && logicState.active) {
    renderLogicQuestion();
  } else if (!els.wordcheckPanel.hidden && wcState.index < wordcheckQuestions.length) {
    renderWordcheckQuestion();
  }
}

function showDashboard() {
  switchMode('dashboard');
  els.dashboardPanel.hidden = false;
  const loggedIn = !!state.playerName;
  if (loggedIn) updateTierDisplay();

  if (loggedIn) flushCloudSync();

  // Pull latest cloud data in background, then refresh dashboard (once)
  if (loggedIn && !state._dashSyncing) {
    const store = readPasswordStore();
    const stored = store[state.playerName.toLowerCase()];
    if (stored) {
      state._dashSyncing = true;
      const pw = typeof stored === 'string' ? stored : atob(stored.password);
      cloudCheckCred(state.playerName, pw).then(() => {
        return cloudPullScores();
      }).then(() => {
        cloudSyncAll();
        pushAllScoresToSupabase();
        state._dashSyncing = false;
        if (!els.dashboardPanel.hidden) {
          setTimeout(() => showDashboard(), 50); // break call-stack recursion
        }
      }).catch((e) => { console.warn('dashboard sync failed', e); state._dashSyncing = false; });
    }
  }
  // Update 해설 button visibility and state
  const noExBtn = document.getElementById('dashNoExplainBtn');
  if (noExBtn) {
    noExBtn.style.display = loggedIn ? '' : 'none';
    noExBtn.textContent = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  }
  syncNoExplainButtons();
  updateNoExplainIndicator();

  // Greeting lives in the stable hero header (which also holds the login /
  // 내정보 box), so it isn't wiped when the cards below re-render.
  const greeting = document.getElementById('dashGreeting');
  if (greeting) greeting.textContent = loggedIn ? `${state.playerName}님의 학습 대시보드` : 'V502 학습 대시보드';

  let html = '<div class="dash">';

  // ---- Progress stats (logged-in) ----
  if (loggedIn) {
    const knownCount = getWordKnowledgeCount();
    const logicMastered = getLogicCompleted().size;
    const cum = cumulativeLeaderboard(readLeaderboard(), null)
      .find((e) => e.name.toLowerCase() === state.playerName.toLowerCase());
    const score = cum ? cum.correct : 0;
    const tier = getTier(readIrtAbility());
    html += `<div class="dash-stats dash-stats-xl">`;
    html += `<div class="dash-stat" onclick="showWordlist()" style="cursor:pointer" title="단어일람보기"><span class="dash-stat-num">${knownCount}</span><span class="dash-stat-label">📋 외운 단어</span></div>`;
    html += `<div class="dash-stat" onclick="startLogicQuiz()" style="cursor:pointer" title="논리문제"><span class="dash-stat-num">${logicMastered}<small>/${getLogicTotal()}</small></span><span class="dash-stat-label">🧩 논리 마스터</span></div>`;
    html += `<div class="dash-stat" onclick="showRanking()" style="cursor:pointer" title="통합랭킹 보기"><span class="dash-stat-num">${score}</span><span class="dash-stat-label">🏆 통합 점수</span></div>`;
    html += `<div class="dash-stat" style="cursor:default"><span class="dash-stat-num" style="font-size:18px">${tier.icon}</span><span class="dash-stat-label">${tier.name}</span></div>`;
    html += `<div class="dash-stat" onclick="showWordlist()" style="cursor:pointer" title="단어일람보기"><span class="dash-stat-icon">📋</span><span class="dash-stat-label">단어일람</span></div>`;
    html += `<div class="dash-stat" onclick="showWordlist2()" style="cursor:pointer" title="단어일람보기2"><span class="dash-stat-icon">🗂️</span><span class="dash-stat-label">단어일람2</span></div>`;
    html += `</div>`;
  }

  // ---- Study cards ----
  html += '<p class="dash-section-label">학습</p>';
  html += '<div class="dash-grid">';
  html += dashCard({ icon: '📝', title: '단어문제', desc: '동의어 짝 맞추기', accent: 'teal', onclick: "openSynonymPanel()" });
  html += dashCard({ icon: '🧩', title: '논리문제', desc: '문맥 속 어휘 추론', accent: 'indigo', onclick: "startLogicQuiz()" });
  html += dashCard({ icon: '📘', title: '201 단어퀴즈', desc: '4지선다 어휘 체크', accent: 'blue', onclick: "showWordcheck201()" });
  html += dashCard({ icon: '📝', title: '문법 201', desc: '442개 문법 문제', accent: 'plum', onclick: "showGrammar201()" });
  html += dashCard({ icon: '📄', title: '기출문제', desc: '2011-2026 성균관대 + 가천대', accent: 'slate', onclick: "showExam()" });
  html += dashCard({ icon: '✅', title: '단어확인문제', desc: '전체 어휘 확인', accent: 'green', onclick: "showWordcheck()" });
  html += '</div>';

  // ---- Review & info cards (logged-out only) ----
  if (!loggedIn) {
    html += '<p class="dash-section-label">계정</p>';
    html += '<div class="dash-grid">';
    html += dashCard({ icon: '🔒', title: '로그인 필요', desc: '내정보 / 랭킹 이용 잠금', accent: 'slate', onclick: "document.getElementById('authNicknameInput').focus()" });
    html += dashCard({ icon: '📋', title: '단어일람보기', desc: '전체 단어 사전', accent: 'slate', onclick: "showWordlist()" });
    html += dashCard({ icon: '🗂️', title: '단어일람보기2', desc: 'MVP2 + V401 추가 단어', accent: 'slate', onclick: "showWordlist2()" });
    html += '</div>';
  }

  html += '</div>';
  document.getElementById('dashboardContent').innerHTML = html;
}

function getSynonymWrongCount() {
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  if (!p[key] || !p[key].wrong) return 0;
  let count = 0;
  for (const catId in p[key].wrong) count += p[key].wrong[catId].length;
  return count;
}

function getCompletedPromptWordsCount() {
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  if (!p[key]) return 0;
  let count = 0;
  for (const catId in p[key]) {
    if (catId === 'wrong') continue;
    count += p[key][catId].length;
  }
  return count;
}

function getWordKnowledgeCount() {
  if (!state.playerName) return 0;
  const store = readWordKnowledge();
  const words = store[state.playerName.toLowerCase()] || [];
  return words.length;
}

function showWrongNotes() {
  switchMode('myinfo');
  els.myinfoPanel.hidden = false;
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  const wrong = (p[key] && p[key].wrong) || {};

  let totalWrong = 0;
  let html = '<div style="max-width:600px">';
  html += '<h3 style="margin-bottom:12px">📕 오답노트</h3>';

  for (const catId in wrong) {
    const words = wrong[catId];
    if (words.length === 0) continue;
    totalWrong += words.length;
    const title = categorySummaries[catId] || `Category ${catId}`;
    html += `<div style="margin-bottom:8px;padding:10px;background:#fff8f0;border-radius:6px;border:1px solid #f0d8c0">`;
    html += `<strong style="font-size:13px">${escapeHtml(catId)} — ${escapeHtml(title)}</strong><br>`;
    html += `<span style="font-size:12px;color:var(--muted)">`;
    words.forEach(w => {
      const m = wordMeanings[w] || '';
      html += `${escapeHtml(w)}${m ? ` (${escapeHtml(m)})` : ''}, `;
    });
    html += `</span></div>`;
  }

  if (totalWrong === 0) {
    html += '<p style="color:var(--muted)">틀린 단어가 없습니다! 🎉</p>';
  }
  html += '</div>';
  els.myinfoContent.innerHTML = html;
}

function showMyReview() {
  switchMode('myinfo');
  els.myinfoPanel.hidden = false;
  const completed = getCompletedPromptWordsCount();
  const totalSyn = 3980;
  const pct = Math.round((completed / totalSyn) * 100);

  // Logic progress
  const logicMastered = getLogicCompleted().size;
  const logicTotal = getLogicTotal();

  // Ranking
  const entries = readLeaderboard().filter(e => state.playerName && e.name.toLowerCase() === state.playerName.toLowerCase());
  const best = new Map();
  for (const e of entries) {
    const key = `${e.setId}`;
    const existing = best.get(key);
    if (!existing || e.accuracy > existing.accuracy) best.set(key, e);
  }
  const wcProgress = getWordcheckProgress();
  let totalCorrect = 0, totalQuestions = 0;
  for (const e of best.values()) { totalCorrect += e.correct; totalQuestions += e.total; }

  let html = '<div style="max-width:600px">';
  html += '<h3 style="margin-bottom:12px">📊 내 리뷰</h3>';
  html += `<div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">`;
  html += `<div style="padding:16px;background:#f0f8f0;border-radius:8px;text-align:center"><strong style="font-size:24px">${completed}</strong><br><small>단어 마스터</small><br><small style="color:var(--muted)">/ ${totalSyn} (${pct}%)</small></div>`;
  html += `<div style="padding:16px;background:#f0f0f8;border-radius:8px;text-align:center"><strong style="font-size:24px">${logicMastered}</strong><br><small>논리 마스터</small><br><small style="color:var(--muted)">/ ${logicTotal}</small></div>`;
  html += `<div style="padding:16px;background:#e8f0e8;border-radius:8px;text-align:center"><strong style="font-size:24px">${wcProgress.correct}/${wcProgress.total}</strong><br><small>단어확인</small><br><small style="color:var(--muted)">${wcProgress.total > 0 ? Math.round(wcProgress.correct/wcProgress.total*100) + '%' : 'No data'}</small></div>`;
  html += `<div style="padding:16px;background:#fff8f0;border-radius:8px;text-align:center"><strong style="font-size:24px">${totalCorrect}/${totalQuestions}</strong><br><small>통합랭킹 점수</small><br><small style="color:var(--muted)">${totalQuestions > 0 ? Math.round((totalCorrect/totalQuestions)*100) + '%' : 'No data'}</small></div>`;
  html += '</div>';

  // List of memorized (mastered) words, grouped by category
  const p = readSynonymProgress();
  const key = getSynonymUserKey();
  const mastered = p[key] || {};
  const catIds = Object.keys(mastered).filter((c) => c !== 'wrong' && mastered[c] && mastered[c].length).sort();
  html += '<h4 style="margin:18px 0 8px">📖 외운 단어</h4>';
  if (catIds.length === 0) {
    html += '<p style="color:var(--muted)">아직 외운 단어가 없습니다. 단어문제를 풀어보세요!</p>';
  } else {
    for (const catId of catIds) {
      const title = categorySummaries[catId] || `Category ${catId}`;
      html += `<div style="margin-bottom:8px;padding:10px;background:#f0f8f0;border-radius:6px;border:1px solid #cfe6cf">`;
      html += `<strong style="font-size:13px">${escapeHtml(catId)} — ${escapeHtml(title)}</strong><br>`;
      html += `<span style="font-size:12px;color:var(--muted)">`;
      html += mastered[catId].map((w) => {
        const m = wordMeanings[w] || '';
        return `${escapeHtml(w)}${m ? ` (${escapeHtml(m)})` : ''}`;
      }).join(', ');
      html += `</span></div>`;
    }
  }
  html += '</div>';
  els.myinfoContent.innerHTML = html;
}

els.myinfoBtn.addEventListener("click", showMyInfo);
els.myinfoCloseBtn.addEventListener("click", () => {
  els.myinfoPanel.hidden = true;
  els.startPanel.hidden = false;
});

function showMyInfo() {
  switchMode('myinfo');
  els.myinfoPanel.hidden = false;
  renderMyInfoTab('review');
}

function renderMyInfoTab(tab) {
  let html = '<div style="max-width:600px">';
  html += '<div style="display:flex;gap:8px;margin-bottom:16px">';
  html += `<button onclick="renderMyInfoTab('review')" style="flex:1;min-height:36px;border:1px solid var(--line);border-radius:2px;font-size:13px;font-weight:600;cursor:pointer;${tab==='review'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📊 내 리뷰</button>`;
  html += `<button onclick="renderMyInfoTab('wrong')" style="flex:1;min-height:36px;border:1px solid var(--line);border-radius:2px;font-size:13px;font-weight:600;cursor:pointer;${tab==='wrong'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📕 오답노트</button>`;
  html += `<button onclick="renderMyInfoTab('logic')" style="flex:1;min-height:36px;border:1px solid var(--line);border-radius:2px;font-size:13px;font-weight:600;cursor:pointer;${tab==='logic'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">🧩 논리오답</button>`;
  html += `<button onclick="renderMyInfoTab('grammar')" style="flex:1;min-height:36px;border:1px solid var(--line);border-radius:2px;font-size:13px;font-weight:600;cursor:pointer;${tab==='grammar'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📝 문법오답</button>`;
  html += '</div>';

  if (tab === 'review') {
    const completed = getCompletedPromptWordsCount();
    const totalSyn = 3980;
    const pct = Math.round((completed / totalSyn) * 100);
    const logicMastered = getLogicCompleted().size;
    const logicTotal = getLogicTotal();
    const entries = readLeaderboard().filter(e => state.playerName && e.name.toLowerCase() === state.playerName.toLowerCase());
    const best = new Map();
    for (const e of entries) {
      const key = `${e.setId}`;
      const existing = best.get(key);
      if (!existing || e.accuracy > existing.accuracy) best.set(key, e);
    }
    const wcProgress = getWordcheckProgress();
    let totalCorrect = 0, totalQuestions = 0;
    for (const e of best.values()) { totalCorrect += e.correct; totalQuestions += e.total; }

    html += `<div style="display:grid;gap:8px;grid-template-columns:1fr 1fr">`;
    html += `<div style="padding:16px;border:1px solid var(--line);border-left:3px solid var(--ok);border-radius:2px;text-align:center"><strong style="font-size:24px">${completed}</strong><br><small>단어 마스터</small><br><small style="color:var(--muted)">/ ${totalSyn} (${pct}%)</small></div>`;
    html += `<div style="padding:16px;border:1px solid var(--line);border-left:3px solid #4f46e5;border-radius:2px;text-align:center"><strong style="font-size:24px">${logicMastered}</strong><br><small>논리 마스터</small><br><small style="color:var(--muted)">/ ${logicTotal}</small></div>`;
    html += `<div style="padding:16px;border:1px solid var(--line);border-left:3px solid var(--ink);border-radius:2px;text-align:center"><strong style="font-size:24px">${wcProgress.correct}/${wcProgress.total}</strong><br><small>단어확인</small><br><small style="color:var(--muted)">${wcProgress.total > 0 ? Math.round(wcProgress.correct/wcProgress.total*100) + '%' : 'No data'}</small></div>`;
    html += `<div style="padding:16px;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:2px;text-align:center;cursor:pointer" onclick="showRanking()" title="통합랭킹 보기"><strong style="font-size:24px">${totalCorrect}/${totalQuestions}</strong><br><small>통합랭킹 점수 ▸</small><br><small style="color:var(--muted)">${totalQuestions > 0 ? Math.round((totalCorrect/totalQuestions)*100) + '%' : 'No data'}</small></div>`;
    html += '</div>';

    const p = readSynonymProgress();
    const key = getSynonymUserKey();
    const mastered = p[key] || {};
    const catIds = Object.keys(mastered).filter((c) => c !== 'wrong' && mastered[c] && mastered[c].length).sort();
    html += '<h4 style="margin:18px 0 8px">📖 외운 단어</h4>';
    if (catIds.length === 0) {
      html += '<p style="color:var(--muted)">아직 외운 단어가 없습니다. 단어문제를 풀어보세요!</p>';
    } else {
      for (const catId of catIds) {
        const title = categorySummaries[catId] || `Category ${catId}`;
        html += `<div style="margin-bottom:8px;padding:10px;background:#f0f8f0;border-radius:6px;border:1px solid #cfe6cf">`;
        html += `<strong style="font-size:13px">${escapeHtml(catId)} — ${escapeHtml(title)}</strong><br>`;
        html += `<span style="font-size:12px;color:var(--muted)">${mastered[catId].map(w => { const m = wordMeanings[w]||''; return escapeHtml(w)+(m?' ('+escapeHtml(m)+')':''); }).join(', ')}</span></div>`;
      }
    }
  } else if (tab === 'wrong') {
    const p = readSynonymProgress();
    const key = getSynonymUserKey();
    const wrong = (p[key] && p[key].wrong) || {};
    let totalWrong = 0;
    for (const catId in wrong) {
      const words = wrong[catId];
      if (words.length === 0) continue;
      totalWrong += words.length;
      const title = categorySummaries[catId] || `Category ${catId}`;
      html += `<div style="margin-bottom:8px;padding:10px;background:#fff8f0;border-radius:6px;border:1px solid #f0d8c0">`;
      html += `<strong style="font-size:13px">${escapeHtml(catId)} — ${escapeHtml(title)}</strong><br>`;
      html += `<span style="font-size:12px;color:var(--muted)">${words.map(w => { const m = wordMeanings[w]||''; return escapeHtml(w)+(m?' ('+escapeHtml(m)+')':''); }).join(', ')}</span></div>`;
    }
    if (totalWrong === 0) {
      html += '<p style="color:var(--muted)">틀린 단어가 없습니다! 🎉</p>';
    }
  } else if (tab === 'logic') {
    const allQuestions = (window.__V502_LOGIC__ && window.__V502_LOGIC__.questions) || [];
    const wrongSet = getLogicWrong();
    const wrongQuestions = allQuestions.filter(q => wrongSet.has(q.id));
    if (wrongQuestions.length === 0) {
      html += '<p style="color:var(--muted)">틀린 논리문제가 없습니다! 🎉</p>';
    } else {
      html += `<p style="margin-bottom:12px;color:var(--muted)">총 <b>${wrongQuestions.length}</b>개의 틀린 문제</p>`;
      wrongQuestions.forEach((q, i) => {
        html += `<div style="margin-bottom:12px;padding:12px;background:#fff8f0;border-radius:8px;border:1px solid #f0d8c0">`;
        html += `<p style="font-weight:700;margin:0 0 8px">Q${i+1}. ${escapeHtml(q.question)}</p>`;
        if (q.options && q.options.length) {
          html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">`;
          q.options.forEach(opt => {
            const isCorrect = opt === q.answer;
            html += `<span style="display:block;padding:6px 10px;border-radius:6px;font-size:13px;font-weight:600;${isCorrect ? 'background:#d4edda;color:#155724;border:1px solid #8fc7a8' : 'background:#f0f0f0;color:#666;border:1px solid #ddd'}">${isCorrect ? '✓ ' : ''}${escapeHtml(opt)}</span>`;
          });
          html += `</div>`;
        }
        html += `<p style="font-size:12px;color:var(--muted);margin:0">💡 ${escapeHtml(q.explanation)}</p>`;
        html += `</div>`;
      });
    }
  } else if (tab === 'grammar') {
    const allQuestions = window.__V502_GRAMMAR__ || [];
    const wrongSet = getGrammarWrong();
    const wrongQuestions = allQuestions.filter(q => wrongSet.has(q.i));
    if (wrongQuestions.length === 0) {
      html += '<p style="color:var(--muted)">틀린 문법문제가 없습니다! 🎉</p>';
    } else {
      html += `<p style="margin-bottom:12px;color:var(--muted)">총 <b>${wrongQuestions.length}</b>개의 틀린 문제</p>`;
      wrongQuestions.forEach((q, idx) => {
        html += `<div style="margin-bottom:12px;padding:12px;background:#fff8f0;border-radius:8px;border:1px solid #f0d8c0">`;
        html += `<p style="font-weight:700;margin:0 0 4px">#${q.i} <span style="font-size:12px;color:var(--muted)">${escapeHtml(q.t)}</span></p>`;
        html += `<p style="margin:0 0 8px;font-size:14px">${escapeHtml(q.q)}</p>`;
        if (q.c && q.c.length) {
          html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">`;
          q.c.forEach(([letter, text]) => {
            const isCorrect = letter === q.a;
            html += `<span style="display:block;padding:6px 10px;border-radius:6px;font-size:13px;font-weight:600;${isCorrect ? 'background:#d4edda;color:#155724;border:1px solid #8fc7a8' : 'background:#f0f0f0;color:#666;border:1px solid #ddd'}">${isCorrect ? '✓ ' : ''}(${letter}) ${escapeHtml(text)}</span>`;
          });
          html += `</div>`;
        }
        html += `<p style="margin:0;font-size:12px;color:var(--muted)"><strong>정답:</strong> (${escapeHtml(q.a)})</p>`;
        html += `<p style="margin:4px 0 0;font-size:12px;color:var(--ok)">💡 ${escapeHtml(q.exp)}</p>`;
        html += `</div>`;
      });
    }
  }

  html += '</div>';
  els.myinfoContent.innerHTML = html;
}

/* ── Word Check Quiz ── */
let wordcheckQuestions = [
  ...(window.__V502_WC_V101__ || []),
  ...(window.__V502_WC_V201__ || []),
  ...(window.__V502_WC_V401__ || [])
];
let wcState = { index: 0, answers: [], correct: 0, total: 0, completed: false };
let lastWordcheckLauncher = showWordcheck;

function startWordcheck(questions, { shuffle = true } = {}) {
  switchMode('wordcheck');
  els.wordcheckPanel.hidden = false;
  syncNoExplainButtons();
  wordcheckQuestions = questions;
  wcState = { index: 0, answers: [], correct: 0, total: wordcheckQuestions.length, completed: false };
  if (shuffle) wordcheckQuestions.sort(() => Math.random() - 0.5);
  document.getElementById('wordcheckResult').style.display = 'none';
  document.getElementById('wordcheckQuiz').style.display = 'block';
  document.getElementById('wordcheckFeedback').style.display = 'none';
  renderWordcheckQuestion();
}

// Drop questions the logged-in user has already answered correctly so they
// only study what they don't yet know. Falls back to the full set if every
// question is already correct (so the quiz never opens empty).
function wordcheckRemaining(all) {
  if (!state.playerName) return [...all];
  const done = getWordcheckCorrect();
  const remaining = all.filter((q) => !done.has(q.i));
  return remaining.length ? remaining : [...all];
}

function showWordcheck() {
  lastWordcheckLauncher = showWordcheck;
  startWordcheck(wordcheckRemaining([
    ...(window.__V502_WC_V101__ || []),
    ...(window.__V502_WC_V201__ || []),
    ...(window.__V502_WC_V401__ || [])
  ]));
}

// [201 단어퀴즈] — V201 set only (200 문제), presented in order
function showWordcheck201() {
  lastWordcheckLauncher = showWordcheck201;
  startWordcheck(wordcheckRemaining(window.__V502_WC_V201__ || []), { shuffle: false });
}

function renderWordcheckQuestion() {
  if (wcState.index >= wordcheckQuestions.length) {
    finishWordcheck();
    return;
  }
  const q = wordcheckQuestions[wcState.index];
  const prog = document.getElementById('wordcheckProgress');
  prog.textContent = `${wcState.index + 1} / ${wordcheckQuestions.length} | ✅ ${wcState.correct} | ❌ ${wcState.index - wcState.correct}`;

  const qEl = document.getElementById('wordcheckQuestion');
  // Underline quoted words (target vocabulary)
  qEl.innerHTML = (() => {
    const raw = q.q
      .replace(/'([^']+)'/g, "'\uE000$1\uE001'")
      .replace(/(_{2,})/g, '\uE002$1\uE003');
    return escapeHtml(raw)
      .replace(/\uE000/g, '<u>').replace(/\uE001/g, '</u>')
      .replace(/\uE002/g, '<u>').replace(/\uE003/g, '</u>');
  })();

  const choicesEl = document.getElementById('wordcheckChoices');
  choicesEl.innerHTML = '';
  const submitBtn = document.getElementById('wordcheckSubmit');
  let selectedLetter = null;

  function clearSelection() {
    selectedLetter = null;
    choicesEl.querySelectorAll('button').forEach(b => {
      b.style.background = 'var(--panel)';
      b.style.borderColor = 'var(--line)';
    });
  }

  q.c.forEach(([letter, text]) => {
    const btn = document.createElement('button');
    btn.textContent = `(${letter}) ${text}`;
    btn.style.cssText = 'min-height:40px;padding:8px 14px;border:1px solid var(--line);border-radius:2px;background:var(--panel);text-align:left;font:inherit;font-size:14px;cursor:pointer';
    btn.onclick = () => {
      if (selectedLetter === letter) {
        // Deselect on second click
        clearSelection();
        submitBtn.style.display = 'none';
        return;
      }
      clearSelection();
      selectedLetter = letter;
      btn.style.background = 'var(--accent-light, #e3f2fd)';
      btn.style.borderColor = 'var(--accent, #1a73e8)';
      if (noExplainMode) { submitWordcheckAnswer(letter); }
      else { submitBtn.style.display = 'inline-block'; }
    };
    choicesEl.appendChild(btn);
  });

  // 해설ON: wire Submit button to confirm selection (해설OFF auto-submits on click)
  submitBtn.onclick = () => {
    if (selectedLetter) submitWordcheckAnswer(selectedLetter);
  };

  submitBtn.style.display = 'none';
  document.getElementById('wordcheckNext').style.display = 'none';
  document.getElementById('wordcheckFeedback').style.display = 'none';
}

// q.a may be a choice letter ("B") or a 1-based index ("2"); some data files
// (e.g. the rebuilt v201) store the index. Resolve to the actual choice letter.
function wordcheckCorrectLetter(q) {
  const a = String(q.a).trim();
  if (q.c.some(([l]) => l === a)) return a;
  const n = parseInt(a, 10);
  if (!isNaN(n) && q.c[n - 1]) return q.c[n - 1][0];
  return a;
}

/* ── Per-question wordcheck tracking + cumulative ranking ── */
const wordcheckResultKey = 'v502-wordcheck-result';
function readWordcheckResult() {
  try { return JSON.parse(localStorage.getItem(wordcheckResultKey)) || {}; }
  catch { return {}; }
}
function getWordcheckCorrect() {
  const r = readWordcheckResult();
  const k = state.playerName ? state.playerName.toLowerCase() : '_guest';
  return new Set((r[k] && r[k].correct) || []);
}
function getWordcheckWrong() {
  const r = readWordcheckResult();
  const k = state.playerName ? state.playerName.toLowerCase() : '_guest';
  return new Set((r[k] && r[k].wrong) || []);
}
function saveWordcheckResult(qid, correct) {
  if (!state.playerName) return;
  const r = readWordcheckResult();
  const k = state.playerName.toLowerCase();
  if (!r[k]) r[k] = { correct: [], wrong: [] };
  if (correct) {
    if (!r[k].correct.includes(qid)) r[k].correct.push(qid);
    r[k].wrong = (r[k].wrong || []).filter((id) => id !== qid);
  } else if (!r[k].correct.includes(qid) && !(r[k].wrong || []).includes(qid)) {
    (r[k].wrong = r[k].wrong || []).push(qid);
  }
  try { localStorage.setItem(wordcheckResultKey, JSON.stringify(r)); } catch {}
}

// Push the player's cumulative wordcheck score to the ranking right after each
// answer: correct answers raise the numerator, every answer raises the total.
function persistWordcheckRanking() {
  if (!state.playerName) return;
  const correct = getWordcheckCorrect().size;
  const total = correct + getWordcheckWrong().size;
  if (total === 0) return;
  const accuracy = Math.round((correct / total) * 100);
  const nameKey = state.playerName.toLowerCase();
  const entries = readLeaderboard().filter(
    (e) => !(e.name.toLowerCase() === nameKey && String(e.setId || '').startsWith('WORDCHECK')),
  );
  entries.push({
    name: state.playerName, correct, total, accuracy,
    setId: 'WORDCHECK', setLabel: 'Word Check', completedAt: new Date().toISOString(),
  });
  writeLeaderboard(entries);
  scheduleCumulativeRemoteWrite('WORDCHECK', state.playerName, correct, total, accuracy);
}

/* ── Per-question 단어문제(synonym) tracking + cumulative ranking ──
   Mirrors the wordcheck model so synonym answers reflect in the ranking
   immediately, rather than only when a whole 30-question set is completed.
   A dedicated result log (keyed by categoryId|prompt) keeps the count exact. */
const synonymResultKey = 'v502-synonym-result';
function readSynonymResult() {
  try { return JSON.parse(localStorage.getItem(synonymResultKey)) || {}; }
  catch { return {}; }
}
// Seed a user's result log from their existing drill history the first time,
// so returning players keep their accumulated score the moment they answer.
function ensureSynonymSeed(k) {
  const r = readSynonymResult();
  if (r[k]) return r;
  const prog = (readSynonymProgress() || {})[k] || {};
  const correct = [];
  const wrong = [];
  for (const cat in prog) {
    if (cat === 'wrong') continue;
    (prog[cat] || []).forEach((w) => correct.push(cat + '|' + w));
  }
  // Also seed wrong entries from progress (saved per-category under .wrong)
  const wrongByCat = prog.wrong || {};
  for (const cat in wrongByCat) {
    (wrongByCat[cat] || []).forEach((w) => wrong.push(cat + '|' + w));
  }
  r[k] = { correct, wrong };
  try { localStorage.setItem(synonymResultKey, JSON.stringify(r)); } catch {}
  return r;
}
function synonymResultUserKey() {
  return state.playerName ? state.playerName.toLowerCase() : '_guest';
}
function getSynonymCorrectCount() {
  const k = synonymResultUserKey();
  const r = ensureSynonymSeed(k);
  return new Set((r[k] && r[k].correct) || []).size;
}
function getSynonymTotalCount() {
  const k = synonymResultUserKey();
  const r = ensureSynonymSeed(k);
  const c = new Set((r[k] && r[k].correct) || []).size;
  const w = new Set((r[k] && r[k].wrong) || []).size;
  return c + w;
}
function saveSynonymRankResult(categoryId, prompt, correct) {
  if (!state.playerName) return;
  const id = categoryId + '|' + prompt;
  const k = state.playerName.toLowerCase();
  const r = ensureSynonymSeed(k);
  if (!r[k]) r[k] = { correct: [], wrong: [] };
  if (correct) {
    if (!r[k].correct.includes(id)) r[k].correct.push(id);
    r[k].wrong = (r[k].wrong || []).filter((x) => x !== id);
  } else if (!r[k].correct.includes(id) && !(r[k].wrong || []).includes(id)) {
    (r[k].wrong = r[k].wrong || []).push(id);
  }
  try { localStorage.setItem(synonymResultKey, JSON.stringify(r)); } catch {}
}

// Push the player's cumulative 단어문제 score to the ranking after each answer.
function persistSynonymRanking() {
  if (!state.playerName) return;
  const correct = getSynonymCorrectCount();
  const total = getSynonymTotalCount();
  if (total === 0) return;
  const accuracy = Math.round((correct / total) * 100);
  const nameKey = state.playerName.toLowerCase();
  const entries = readLeaderboard().filter(
    (e) => !(e.name.toLowerCase() === nameKey && String(e.setId || '') === 'SYNONYM'),
  );
  entries.push({
    name: state.playerName, correct, total, accuracy,
    setId: 'SYNONYM', setLabel: '단어문제', completedAt: new Date().toISOString(),
  });
  writeLeaderboard(entries);
  scheduleCumulativeRemoteWrite('SYNONYM', state.playerName, correct, total, accuracy);
}

function submitWordcheckAnswer(letter) {
  const q = wordcheckQuestions[wcState.index];
  const answerLetter = wordcheckCorrectLetter(q);
  const correct = letter === answerLetter;
  if (correct) wcState.correct++;
  wcState.answers.push({ id: q.i, correct });
  saveWordcheckResult(q.i, correct);
  try { persistWordcheckRanking(); } catch {}

  if (noExplainMode) {
    const buttons = document.querySelectorAll('#wordcheckChoices button');
    buttons.forEach(b => b.disabled = true);

    // Dramatic overlay toast
    const toast = document.createElement('div');
    const isDark = document.querySelector('.sidebar') && getComputedStyle(document.querySelector('.sidebar')).backgroundColor.includes('32');
    const bg = correct ? '#34c759' : '#ff3b30';
    toast.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.3);
      width:140px;height:140px;border-radius:70px;
      background:${bg};color:#fff;
      display:flex;align-items:center;justify-content:center;
      font-size:64px;font-weight:900;
      z-index:9999;pointer-events:none;
      box-shadow:0 20px 60px ${bg}44;
      transition:transform 0.25s cubic-bezier(0.175,0.885,0.32,1.275);
    `;
    toast.textContent = correct ? '✓' : '✗';
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translate(-50%,-50%) scale(1)'; });

    // Also briefly tint the clicked button
    const clickedBtn = [...buttons].find(b => b.textContent.startsWith(`(${letter})`));
    if (clickedBtn) {
      clickedBtn.style.background = correct ? '#e8f5e9' : '#fce4ec';
      if (!correct) {
        const correctBtn = [...buttons].find(b => b.textContent.startsWith(`(${answerLetter})`));
        if (correctBtn) correctBtn.style.background = '#e8f5e9';
      }
    }

    // Show text feedback so 해설OFF also tells the answer result
    const fb = document.getElementById('wordcheckFeedback');
    fb.style.display = 'block';
    fb.style.background = correct ? '#e8f5e9' : '#fce4ec';
    fb.style.borderColor = correct ? '#a5d6a7' : '#ef9a9a';
    fb.innerHTML = correct
      ? '<strong style="color:#2e7d32">✅ Correct!</strong>'
      : `<strong style="color:#c62828">❌ Wrong — answer is (${answerLetter})</strong>`;

    setTimeout(() => {
      toast.style.transform = 'translate(-50%,-50%) scale(0.3)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 200);
      wcState.index++;
      if (wcState.index >= wordcheckQuestions.length) {
        finishWordcheck();
      } else {
        renderWordcheckQuestion();
      }
    }, 400);
    return;
  }

  // Highlight feedback
  const fb = document.getElementById('wordcheckFeedback');
  fb.style.display = 'block';
  fb.style.background = correct ? '#e8f5e9' : '#fce4ec';
  fb.style.borderColor = correct ? '#a5d6a7' : '#ef9a9a';

  let expHTML = correct
    ? `<strong style="color:#2e7d32">✅ Correct!</strong>`
    : `<strong style="color:#c62828">❌ Wrong — answer is (${answerLetter})</strong>`;

  if (q.k) {
    expHTML += `<p style="margin:8px 0 4px;font-size:13px">📝 ${q.k}</p>`;
  }

  expHTML += '<div style="margin-top:8px;font-size:13px">';
  q.c.forEach(([l, t]) => {
    if (l === answerLetter) {
      expHTML += `<div style="color:#2e7d32;padding:2px 0">✓ (${l}) ${t}</div>`;
    } else if (l === letter && !correct) {
      expHTML += `<div style="color:#c62828;padding:2px 0">✗ (${l}) ${t}</div>`;
    } else {
      expHTML += `<div style="color:#999;padding:2px 0">  (${l}) ${t}</div>`;
    }
  });
  expHTML += '</div>';

  fb.innerHTML = expHTML;

  document.querySelectorAll('#wordcheckChoices button').forEach(b => b.disabled = true);
  document.getElementById('wordcheckNext').style.display = 'inline-block';
}

function finishWordcheck() {
  wcState.completed = true;
  document.getElementById('wordcheckQuiz').style.display = 'none';
  document.getElementById('wordcheckFeedback').style.display = 'none';
  const result = document.getElementById('wordcheckResult');
  result.style.display = 'block';
  const pct = Math.round(wcState.correct / wcState.total * 100);
  document.getElementById('wordcheckScore').innerHTML = `
    🎯 Score: <strong>${wcState.correct}</strong> / ${wcState.total}
    <br><small>${pct}% correct</small>
  `;

  // Ranking is updated per question; ensure it's current and refresh the sidebar
  if (state.playerName) {
    persistWordcheckRanking();
    saveWordcheckProgress();
    updateSidebarCompletion();
  }
}

function saveWordcheckProgress() {
  if (!state.playerName) return;
  const key = 'v502-wordcheck-progress';
  let store = {};
  try { store = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
  const nameKey = state.playerName.toLowerCase();
  store[nameKey] = {
    correct: wcState.correct,
    total: wcState.total,
    date: new Date().toISOString()
  };
  localStorage.setItem(key, JSON.stringify(store));
}

function getWordcheckProgress() {
  if (!state.playerName) return { correct: 0, total: 0 };
  const key = 'v502-wordcheck-progress';
  try {
    const store = JSON.parse(localStorage.getItem(key)) || {};
    return store[state.playerName.toLowerCase()] || { correct: 0, total: 0 };
  } catch { return { correct: 0, total: 0 }; }
}

document.getElementById('wordcheckNext').addEventListener('click', () => {
  wcState.index++;
  renderWordcheckQuestion();
});

document.getElementById('wordcheckRetry').addEventListener('click', () => lastWordcheckLauncher());

els.wordcheckBtn.addEventListener('click', showWordcheck);
const wc201Btn = document.getElementById('wordcheck201Btn');
if (wc201Btn) wc201Btn.addEventListener('click', showWordcheck201);
els.wordcheckPanel.addEventListener('click', function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});

/* ── Grammar 201 ── */
let grammarState = { index: 0, correct: 0, total: 0 };

function showGrammar201() {
  switchMode('grammar');
  els.grammar201Panel.hidden = false;
  const items = window.__V502_GRAMMAR__ || [];
  grammarState = { index: 0, correct: 0, total: items.length };
  renderGrammarQuestion();
}

function renderGrammarQuestion() {
  const items = window.__V502_GRAMMAR__ || [];
  if (grammarState.index >= items.length) {
    finishGrammarQuiz();
    return;
  }
  const q = items[grammarState.index];
  let html = `<div style="max-width:700px">`;
  html += `<p style="font-size:12px;color:var(--muted);margin:0 0 8px">${grammarState.index + 1} / ${items.length} | ✅ ${grammarState.correct} | ❌ ${grammarState.index - grammarState.correct}</p>`;
  html += `<p style="font-size:13px;color:var(--accent);font-weight:600;margin:0 0 4px">${escapeHtml(q.i)}. ${escapeHtml(q.t)}</p>`;
  var qHtml = q.q
    .replace(/'([^']+)'/g, "'\uE000$1\uE001'")
    .replace(/「([^」]+)」/g, '\uE000$1\uE001')
    .replace(/(_{2,})/g, '\uE002$1\uE003');
  qHtml = escapeHtml(qHtml)
    .replace(/\uE000/g, '<u>').replace(/\uE001/g, '</u>')
    .replace(/\uE002/g, '<u>').replace(/\uE003/g, '</u>');
  html += `<p style="font-size:15px;line-height:1.7;margin:0 0 16px">${qHtml}</p>`;

  if (q.c && q.c.length >= 2) {
    html += '<div style="display:grid;gap:8px;margin-bottom:16px">';
    q.c.forEach(([letter, text]) => {
      html += `<button onclick="submitGrammarAnswer('${escapeHtml(letter)}')" style="min-height:40px;padding:8px 14px;border:1px solid var(--line);border-radius:2px;background:var(--panel);text-align:left;font:inherit;font-size:14px;cursor:pointer">(${escapeHtml(letter)}) ${escapeHtml(text)}</button>`;
    });
    html += '</div>';
    // After answering, auto-advance so no need for a separate "next" button
  } else {
    // No-choice informational item — just a next button
    html += `<button onclick="grammarState.index++; if(grammarState.index>=grammarState.total)finishGrammarQuiz();else renderGrammarQuestion();" style="min-height:36px;padding:0 16px;border:1px solid var(--line);border-radius:2px;background:var(--panel);cursor:pointer;font:inherit">다음 ▸</button>`;
  }
  html += '</div>';
  els.grammar201Content.innerHTML = html;
}

function submitGrammarAnswer(letter) {
  const items = window.__V502_GRAMMAR__ || [];
  const q = items[grammarState.index];
  const correct = letter === q.a;
  if (correct) {
    grammarState.correct++;
    saveGrammarCorrect(q.i);
  } else {
    saveGrammarWrong(q.i);
  }
  // Show feedback in-place, then let user advance
  let html = `<div style="max-width:700px">`;
  html += `<p style="font-size:12px;color:var(--muted);margin:0 0 8px">${grammarState.index + 1} / ${items.length} | ✅ ${grammarState.correct} | ❌ ${grammarState.index - grammarState.correct}</p>`;
  html += `<p style="font-size:13px;color:var(--accent);font-weight:600;margin:0 0 4px">${escapeHtml(q.i)}. ${escapeHtml(q.t)}</p>`;
  html += `<p style="font-size:15px;line-height:1.7;margin:0 0 16px">${escapeHtml(q.q)}</p>`;
  // Highlight choices
  html += '<div style="display:grid;gap:8px;margin-bottom:12px">';
  q.c.forEach(([l, text]) => {
    const isSelected = l === letter;
    const isCorrect = l === q.a;
    let bg = 'var(--panel)';
    if (isSelected && correct) bg = '#d4edda';
    else if (isSelected && !correct) bg = '#f8d7da';
    else if (isCorrect) bg = '#d4edda';
    html += `<span style="display:block;padding:8px 14px;border-radius:2px;font-size:14px;border:1px solid var(--line);background:${bg}">${isSelected ? (correct ? '✅ ' : '❌ ') : (isCorrect ? '✅ ' : '   ')}(${escapeHtml(l)}) ${escapeHtml(text)}</span>`;
  });
  html += '</div>';
  html += `<p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${correct ? 'var(--ok)' : 'var(--warn)'}">${correct ? '✅ Correct!' : '❌ Incorrect'}</p>`;
  html += `<p style="margin:0 0 16px;font-size:13px;color:var(--muted)">💡 ${escapeHtml(q.exp)}</p>`;
  html += `<button onclick="grammarState.index++; if(grammarState.index>=grammarState.total)finishGrammarQuiz();else renderGrammarQuestion();" style="min-height:36px;padding:0 16px;border:1px solid var(--line);border-radius:2px;background:var(--panel);cursor:pointer;font:inherit">다음 ▸</button>`;
  html += '</div>';
  els.grammar201Content.innerHTML = html;
}

function finishGrammarQuiz() {
  const pct = Math.round(grammarState.correct / grammarState.total * 100);
  els.grammar201Content.innerHTML = `<div style="text-align:center;padding:40px"><h3>문법 201 완료</h3><p>${grammarState.correct}/${grammarState.total} 정답 (${pct}%)</p><button onclick="showGrammar201()" class="text-btn" style="min-height:40px;margin-top:12px">다시 보기</button></div>`;
}

els.grammar201Btn.addEventListener('click', showGrammar201);

/* ── 기출문제 ── */
let examTab = 'gachon2012';

function showExam() {
  switchMode('exam');
  els.examPanel.hidden = false;
  renderExamTab();
}

/* ── Exam Registry ── */
var EXAM_REGISTRY = {
  gachon2012:     { title: '2012 가천대',          data: function(){return window.__V502_EXAM_GACHON2012__||[]} },
  skku2011:       { title: '2011 성균관대 오전',    data: function(){return window.__V502_EXAM_SKKU2011__||[]} },
  skku2011pm:     { title: '2011 성균관대 오후',    data: function(){return window.__V502_EXAM_SKKU2011PM__||[]} },
  skku2012am:     { title: '2012 성균관대 오전',    data: function(){return window.__V502_EXAM_SKKU2012AM__||[]} },
  skku2012pm:     { title: '2012 성균관대 오후',    data: function(){return window.__V502_EXAM_SKKU2012PM__||[]} },
  skku2013am:     { title: '2013 성균관대 오전',    data: function(){return window.__V502_EXAM_SKKU2013AM__||[]} },
  skku2013pm:     { title: '2013 성균관대 오후',    data: function(){return window.__V502_EXAM_SKKU2013PM__||[]} },
  skku2014:       { title: '2014 성균관대',         data: function(){return window.__V502_EXAM_SKKU2014__||[]} },
  skku2015:       { title: '2015 성균관대',         data: function(){return window.__V502_EXAM_SKKU2015__||[]} },
  skku2016:       { title: '2016 성균관대',         data: function(){return window.__V502_EXAM_SKKU2016__||[]} },
  skku2017:       { title: '2017 성균관대',         data: function(){return window.__V502_EXAM_SKKU2017__||[]} },
  skku2018:       { title: '2018 성균관대',         data: function(){return window.__V502_EXAM_SKKU2018__||[]} },
  skku2019:       { title: '2019 성균관대 인문',    data: function(){return window.__V502_EXAM_SKKU2019__||[]} },
  skku2021:       { title: '2021 성균관대',         data: function(){return window.__V502_EXAM_SKKU2021__||[]} },
  skku2022:       { title: '2022 성균관대',         data: function(){return window.__V502_EXAM_SKKU2022__||[]} },
  skku2023:       { title: '2023 성균관대',         data: function(){return window.__V502_EXAM_SKKU2023__||[]} },
  skku2024:       { title: '2024 성균관대',         data: function(){return window.__V502_EXAM_SKKU2024__||[]} },
  skku2025:       { title: '2025 성균관대 인문',    data: function(){return window.__V502_EXAM_SKKU2025__||[]} },
  skku2026mock:   { title: '2026 대비 예상문제',    data: function(){return window.__V502_EXAM_SKKU2026MOCK__||[]} }
};

function renderExamTab() {
  var html = '<div style="max-width:700px">';
  html += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px">';
  var keys = Object.keys(EXAM_REGISTRY);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var sel = examTab === key;
    var entry = EXAM_REGISTRY[key];
    var count = entry.data().length;
    html += `<button onclick="examTab='${key}';renderExamTab()" style="min-height:32px;padding:3px 8px;border:1px solid var(--line);border-radius:2px;font-size:11px;font-weight:600;cursor:pointer;${sel?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">${entry.title} (${count})</button>`;
  }
  html += '</div>';

  var questions = EXAM_REGISTRY[examTab] ? EXAM_REGISTRY[examTab].data() : [];
  var prog = getExamProgress(examTab);
  var doneCount = prog.correct.size + prog.wrong.size;
  if (doneCount > 0) {
    html += `<div style="margin-bottom:12px;font-size:12px;color:var(--muted)">📋 진행상황: ✅ ${prog.correct.size} / ❌ ${prog.wrong.size} / ⬜ ${questions.length - doneCount} 문제 남음</div>`;
  }
  questions.forEach((q, i) => {
    var isCorrect = prog.correct.has(i);
    var isWrong = prog.wrong.has(i);
    var isDone = isCorrect || isWrong;
    html += `<div style="margin-bottom:16px;padding:16px;border-radius:2px;border:1px solid var(--line);${isCorrect?'background:#f1f8e9':isWrong?'background:#fff3f0':''}" id="examQ${i}">`;
    html += `<p style="font-weight:700;margin:0 0 8px;color:var(--accent)">${i+1}.` + (isCorrect ? ' ✅' : isWrong ? ' ❌' : '') + `</p>`;
    if (q.p && q.p.length > 30) {
      var pHtml = escapeHtml(q.p).replace(/「([^」]+)」/g, '<u>$1</u>');
      html += `<div style="margin:0 0 12px;padding:10px 14px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;font-size:14px;line-height:1.7">${pHtml}</div>`;
    }
    var qHtml = q.q
      .replace(/'([^']+)'/g, "'\uE000$1\uE001'")
      .replace(/「([^」]+)」/g, '\uE000$1\uE001')
      .replace(/(_{2,})/g, '\uE002$1\uE003');
    qHtml = escapeHtml(qHtml)
      .replace(/\uE000/g, '<u>').replace(/\uE001/g, '</u>')
      .replace(/\uE002/g, '<u>').replace(/\uE003/g, '</u>');
    html += `<p style="font-weight:600;margin:0 0 10px">${qHtml}</p>`;
    if (q.c && q.c.length > 0) {
      html += '<div style="display:grid;gap:4px">';
      q.c.forEach(([letter, text]) => {
        var btnStyle = 'font-size:14px;padding:4px 8px;border:1px solid var(--line);border-radius:2px;text-align:left;font:inherit;';
        if (isDone) {
          btnStyle += 'cursor:default;';
          btnStyle += letter === q.a ? 'background:#e8f5e9;' : 'background:transparent;';
        } else {
          btnStyle += 'cursor:pointer;background:transparent;';
        }
        html += `<button onclick="checkExamAnswer('${examTab}',${i},'${escapeHtml(letter)}',this)" style="${btnStyle}"${isDone?' disabled':''}>(${escapeHtml(letter)}) ${escapeHtml(text)}</button>`;
      });
      html += '</div>';
    }
    var fbHtml = '';
    if (isDone && q.a) {
      if (isCorrect) {
        fbHtml = '<span style="color:#2e7d32;font-weight:700">✅ 정답! (' + q.a + ')</span>';
      } else {
        fbHtml = '<span style="color:#c62828;font-weight:700">❌ 오답 — 정답은 (' + q.a + ')</span>';
      }
      if (q.k) {
        fbHtml += '<div style="margin-top:8px;padding:10px 12px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;line-height:1.7">' + q.k + '</div>';
      } else if (q.explanation) {
        fbHtml += '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-radius:6px;font-size:12px;line-height:1.6;color:var(--muted)">📝 ' + escapeHtml(q.explanation) + '</div>';
      }
    }
    html += `<div id="examFeedback${i}" style="margin-top:6px;font-size:13px;min-height:20px">${fbHtml}</div>`;
    html += '</div>';
  });
  html += '</div>';
  els.examContent.innerHTML = html;
}
function checkExamAnswer(tab, idx, letter, btn) {
  var questions = EXAM_REGISTRY[tab] ? EXAM_REGISTRY[tab].data() : [];
  var q = questions[idx];
  if (!q || !q.a) return;

  var correct = letter === q.a;
  if (correct) saveExamCorrect(tab, idx);
  else saveExamWrong(tab, idx);

  var fb = document.getElementById('examFeedback' + idx);
  if (fb) {
    var head = correct
      ? '<span style="color:#2e7d32;font-weight:700">✅ 정답!</span>'
      : '<span style="color:#c62828;font-weight:700">❌ 오답 — 정답은 (' + q.a + ')</span>';
    var exp = '';
    if (q.k) {
      exp = '<div style="margin-top:8px;padding:10px 12px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;line-height:1.7">' + q.k + '</div>';
    } else if (q.explanation) {
      exp = '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-radius:6px;font-size:12px;line-height:1.6;color:var(--muted)">📝 ' + escapeHtml(q.explanation) + '</div>';
    }
    fb.innerHTML = head + exp;
  }

  var btns = document.querySelectorAll('#examQ' + idx + ' button');
  btns.forEach(function(b) {
    b.disabled = true;
    var bLetter = b.textContent.trim().charAt(1);
    if (bLetter === q.a) b.style.background = '#e8f5e9';
    else if (bLetter === letter && !correct) b.style.background = '#fce4ec';
  });
}

els.examBtn.addEventListener('click', showExam);
els.examPanel.addEventListener('click', function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});
els.grammar201Panel.addEventListener('click', function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});

els.logicSubmitBtn.addEventListener("click", submitLogicAnswer);
els.logicNextBtn.addEventListener("click", nextLogicQuestion);

// Sidebar is removed — relocate its still-needed pieces (with their event
// listeners intact, since we move the live DOM nodes) into the workspace:
//  • the login / 내정보 section goes to the top of the dashboard
//  • the category picker goes above the start panel
(function relocateFromSidebar() {
  const dashHeader = document.getElementById('dashHeader');
  const authSec = document.getElementById('authSection');
  if (dashHeader && authSec) dashHeader.appendChild(authSec); // login / 내정보 inside the hero
  const catNav = document.getElementById('categoryNav');
  const quizPanel = document.getElementById('quizPanel');
  if (catNav && quizPanel && quizPanel.parentNode) {
    // Wrap category nav in a collapsible bottom section
    const wrapper = document.createElement('div');
    wrapper.className = 'cat-nav-wrapper';
    const toggle = document.createElement('button');
    toggle.className = 'cat-nav-toggle';
    toggle.type = 'button';
    toggle.textContent = '카테고리 선택 ▾';
    toggle.setAttribute('aria-expanded', 'false');
    const body = document.createElement('div');
    body.className = 'cat-nav-body';
    catNav.parentNode.insertBefore(wrapper, catNav);
    wrapper.appendChild(toggle);
    wrapper.appendChild(body);
    body.appendChild(catNav);
    catNav.removeAttribute('hidden'); // was hidden in sidebar, now controlled by .cat-nav-body.open
    toggle.addEventListener('click', function() {
      const open = body.classList.toggle('open');
      toggle.classList.toggle('expanded', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '카테고리 접기 ▾' : '카테고리 선택 ▾';
    });
    quizPanel.parentNode.insertBefore(wrapper, quizPanel.nextElementSibling);
  }
})();

// Land on the dashboard by default — the single, unified navigation hub.
// Runs last so logicState and all handlers are initialized first.
showDashboard();
// v20260623syncfix
