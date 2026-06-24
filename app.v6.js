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

function rateQuestion({X1, X2, X3, X4, X5, X6, X7}) {
  const raw = 138 - 2.5*X1 - 2.0*X2 - 2.5*X3 - 2.5*X4
              - 2.5*(10-X5) - 2.5*X6 - 2.0*X7;
  return Math.max(1, Math.min(99, Math.round(raw)));
}

function getScoreDelta(isCorrect, rate) {
  return isCorrect ? +(30 * rate / 100) : -(10 * rate / 100);
}

function readIrtAbility() {
  try { return parseFloat(localStorage.getItem(irtAbilityKey)) || 0; } catch { return 0; }
}

function writeIrtAbility(v) {
  const capped = Math.max(0, Math.min(10000, v));
  try { localStorage.setItem(irtAbilityKey, String(Math.round(capped * 1000) / 1000)); } catch {}
}

function _tierSVG(path, fill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="vertical-align:middle" aria-hidden="true"><g fill="${fill}">${path}</g></svg>`;
}
function getTier(score) {
  const s = Math.max(0, Math.min(10000, score));
  if (s >= 10000) return { name: '서성한메이저',     icon: _tierSVG('<polygon points="1,12 1,5 4,7 8,1 12,7 15,5 15,12"/>', '#FFD700') };
  if (s >= 9000)  return { name: '서성한',           icon: _tierSVG('<polygon points="8,1 15,8 8,15 1,8"/>', '#AF52DE') };
  if (s >= 8000)  return { name: '서성한하위',       icon: _tierSVG('<polygon points="8,2 14,10 8,14 2,10"/>', '#BF5AF2') };
  if (s >= 6000)  return { name: '중경외시 메이저',  icon: _tierSVG('<circle cx="8" cy="8" r="7"/>', '#FF9500') };
  if (s >= 5000)  return { name: '중경외시 하위',    icon: _tierSVG('<circle cx="8" cy="8" r="7"/>', '#8E8E93') };
  if (s >= 3500)  return { name: '건동홍',           icon: _tierSVG('<circle cx="8" cy="8" r="7"/>', '#CD7F32') };
  if (s >= 2500)  return { name: '국숭세단',         icon: _tierSVG('<rect x="2" y="2" width="12" height="12" rx="1"/>', '#34C759') };
  if (s >= 1600)  return { name: '인가경',           icon: _tierSVG('<rect x="2" y="2" width="12" height="12" rx="1"/>', '#007AFF') };
  return { name: '정붕이', icon: _tierSVG('<circle cx="8" cy="12" r="2"/><path d="M8,11 Q8,2 14,2 Q10,5 8,11"/>', '#30D158') };
}

function getTierForRanking(correct, total) {
  const accuracy = Math.min(1, total > 0 ? correct / total : 0);
  const volumeFactor = Math.min(1, total / 2000);
  const estAbility = accuracy * 10000 * volumeFactor;
  return getTier(estAbility);
}

function updateTierDisplay() {
  const el = document.getElementById('authTier');
  if (!el) return;
  const ability = readIrtAbility();
  const tier = getTier(ability);
  el.innerHTML = `${tier.icon} ${tier.name}`;
  el.title = `IRT Ability: ${ability.toFixed(1)}`;
}
let supabaseClient = null;
let supabaseSdkPromise = null;

if (window.__V502_EXT__) {
  const ext = window.__V502_EXT__;
  if (ext.categories) categories.push(...ext.categories);
  if (ext.wordMeanings) Object.assign(wordMeanings, ext.wordMeanings);
  if (ext.categorySummaries) Object.assign(categorySummaries, ext.categorySummaries);
  if (ext.confusionNotes) {
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
(function dedupeCategories() {
  const seen = new Set();
  for (let i = 0; i < categories.length; i++) {
    const id = categories[i].id;
    if (seen.has(id)) { categories.splice(i, 1); i--; }
    else seen.add(id);
  }
})();

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
  startQuizBtn: document.querySelector("#startQuizBtn"),
  startPanelTitle: document.querySelector("#startPanelTitle"),
  startPanelHint: document.querySelector("#startPanelHint"),
  logicModeBtn: document.querySelector("#logicModeBtn"),
  synonymDrillBtn: document.querySelector("#synonymDrillBtn"),
  myinfoBtn: document.querySelector("#myinfoBtn"),
  boardPanel: document.querySelector("#boardPanel"),
  boardContent: document.querySelector("#boardContent"),
  myinfoPanel: document.querySelector("#myinfoPanel"),
  myinfoContent: document.querySelector("#myinfoContent"),
  myinfoCloseBtn: document.querySelector("#myinfoCloseBtn"),
  dashboardPanel: document.querySelector("#dashboardPanel"),
  wordlist2Btn: document.querySelector("#wordlist2Btn"),
  wordlist2Panel: document.querySelector("#wordlist2Panel"),
  wordlist2Content: document.querySelector("#wordlist2Content"),
  wordbook3Btn: document.querySelector("#wordbook3Btn"),
  wordbook3Panel: document.querySelector("#wordbook3Panel"),
  wordbook3Content: document.querySelector("#wordbook3Content"),
  logicPanel: document.querySelector("#logicPanel"),
  logicProgressBar: document.querySelector("#logicProgressBar"),
  logicQuestionText: document.querySelector("#logicQuestionText"),
  logicOptions: document.querySelector("#logicOptions"),
  logicFeedback: document.querySelector("#logicFeedback"),
  logicSubmitBtn: document.querySelector("#logicSubmitBtn"),
  logicNextBtn: document.querySelector("#logicNextBtn"),
  logicJumpBtn: document.querySelector("#logicJumpBtn"),
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

  const setCatIds = new Set(sourceCategories.map(c => c.id));
  const distractorBank = allWords(categories).filter(e => !setCatIds.has(e.categoryId));

  const used = new Set();
  const questions = [];

  const pools = shuffle(viable.map(cat => {
    const mastered = state.playerName ? getCompletedPromptWords(cat.id) : new Set();
    return { cat, pool: shuffle(cat.words.filter(w => !mastered.has(w))) };
  }));

  let progress = true;
  while (questions.length < TARGET && progress) {
    progress = false;
    for (const { cat, pool } of pools) {
      if (questions.length >= TARGET) break;
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
  if (state.playerName) {
    saveSynonymResult(question.categoryId, question.prompt, correct);
    if (!correct) {
      const wrongSelections = selected.filter(w => !question.answer.includes(w));
      wrongSelections.forEach(w => {
        saveSynonymResult(question.categoryId, w, false);
      });
    }
    saveSynonymRankResult(question.categoryId, question.prompt, correct);
    try { persistSynonymRanking(); } catch {}
    const rate = (question.difficulty && typeof question.difficulty === 'object')
      ? rateQuestion(question.difficulty) : 50; // default 50% if no per-question rating
    const ability = readIrtAbility() + getScoreDelta(correct, rate);
    writeIrtAbility(ability);
    updateTierDisplay();
  }
  try { saveQuizProgress(); } catch {}
  if (noExplainMode) {
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

function onStartQuizClick() {
  openSet(state.activeSetId);
}

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

  const cloudResult = await cloudCheckCred(name, pw);

  if (cloudResult === 'WRONG_PW') {
    els.authError.textContent = "비밀번호가 일치하지 않습니다.";
    els.authError.hidden = false;
    return;
  }

  if (cloudResult !== 'OK') {
    const store = readPasswordStore();
    const key = name.toLowerCase();
    if (!store[key]) {
      if (cloudResult === null) {
        els.authError.textContent = "서버 연결에 실패했습니다. 인터넷 연결을 확인하고 다시 시도해주세요.";
      } else {
        els.authError.textContent = "등록되지 않은 닉네임입니다. '계정등록'을 먼저 해주세요.";
      }
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
    // cloud auth failed but local password matched — still try to pull latest cloud data
    if (cloudResult === null && hasPublicConfig()) {
      try {
        const client = await getSupabaseClient();
        if (client) {
          const { data } = await client.from(getLeaderboardTable())
            .select('payload')
            .eq('nickname', key).eq('quiz_set', 'USERDATA')
            .order('created_at', { ascending: false }).limit(1).maybeSingle();
          if (data && data.payload) { cloudPullUserData(data.payload, name); }
        }
      } catch(e) { console.warn('cloud pull on local-login fallback failed', e); }
    }
  }

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

  const cloudCheck = await cloudCheckCred(name, '');
  if (cloudCheck === 'WRONG_PW' || cloudCheck === 'OK') {
    els.authError.textContent = "이미 등록된 닉네임입니다. '로그인'을 해주세요.";
    els.authError.hidden = false;
    return;
  }

  store[key] = { password: btoa(pw), displayName: name };
  localStorage.setItem(passwordStoreKey, JSON.stringify(store));
  state.playerName = name;
  const syncOk = await cloudSyncAll();
  if (!syncOk) {
    els.authError.textContent = '클라우드 동기화에 실패했습니다. 인터넷 연결 확인 후 다시 로그인해주세요. (다른 기기에서 로그인이 안 될 수 있습니다)';
    els.authError.hidden = false;
  }
  saveSession(name);
  renderAuthUI();
  updateSidebarCompletion();
  els.authNicknameInput.value = "";
  els.authPasswordInput.value = "";
  checkAndShowResume();
  pushAllScoresToSupabase();
}

function checkAndShowResume() {
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
  const greeting = document.getElementById('dashGreeting');
  if (greeting) greeting.textContent = 'V502 학습 대시보드';
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

function cumulativeLeaderboard(entries, setId = null) {
  const JUNK_SETS = new Set(["USERDATA", "CRED", "SYNC"]);
  const best = new Map();
  const filtered = (setId ? entries.filter((e) => e.setId === setId || (!e.setId && setId === "001-010")) : entries)
    .filter(e => !!e.name);

  for (const entry of filtered) {
    const rawSet = String(entry.setId || "001-010");
    if (JUNK_SETS.has(rawSet)) continue;
    const cumPrefix = rawSet.startsWith("LOGIC") ? "LOGIC"
      : rawSet.startsWith("WORDCHECK") ? "WORDCHECK"
      : rawSet.startsWith("SYNONYM") ? "SYNONYM" : null;
    const key = `${entry.name.toLowerCase()}|${cumPrefix || rawSet}`;
    const existing = best.get(key);
    let better;
    if (!existing) {
      better = true;
    } else if (cumPrefix) {
      better = entry.total > existing.total ||
               (entry.total === existing.total && entry.correct > existing.correct);
    } else {
      better = entry.accuracy > existing.accuracy ||
               (entry.accuracy === existing.accuracy && entry.correct > existing.correct);
    }
    if (better) best.set(key, entry);
  }

  const hasSynonymBucket = new Set();
  for (const entry of best.values()) {
    if (String(entry.setId || "").startsWith("SYNONYM")) hasSynonymBucket.add(entry.name.toLowerCase());
  }

  const aggregated = new Map();
  for (const entry of best.values()) {
    const nameKey = entry.name.toLowerCase();
    const rawSet = String(entry.setId || "001-010");
    const isCumBucket = rawSet.startsWith("LOGIC") || rawSet.startsWith("WORDCHECK") || rawSet.startsWith("SYNONYM");
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
    .sort((a, b) => b.correct - a.correct || b.accuracy - a.accuracy);
}

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
  if (!state.playerName || !hasPublicConfig()) return true;
  const client = await getSupabaseClient(); if (!client) return false;
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

  const table = getLeaderboardTable();
  const row = { nickname: nk, quiz_set: 'USERDATA', correct_count: 1, total_count: 1, accuracy: 1, payload };

  let ok = false;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      // Try upsert first (requires unique constraint on nickname+quiz_set)
      // Falls back to select+insert/update if constraint doesn't exist
      const { error: upsertErr } = await client.from(table).upsert(row, { onConflict: 'nickname,quiz_set', ignoreDuplicates: false });
      if (!upsertErr) { ok = true; break; }
      // Fallback: manual select-then-insert/update
      const { data: existing } = await client.from(table).select('id').eq('nickname', nk).eq('quiz_set', 'USERDATA');
      if (existing && existing.length > 0) {
        await client.from(table).update(row).eq('nickname', nk).eq('quiz_set', 'USERDATA');
      } else {
        await client.from(table).insert(row);
      }
      ok = true;
      break;
    } catch(e) {
      if (attempt === 2) console.warn('cloudSyncAll failed after 3 attempts', e);
      else await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
    }
  }

  if (!ok) {
    if (els.authError) {
      els.authError.textContent = '클라우드 동기화에 실패했습니다. 인터넷 연결을 확인해주세요.';
      els.authError.hidden = false;
    }
  }
  return ok;
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
    let obj;
    try { obj = JSON.parse(data.payload); } catch(parseErr) {
      console.warn('cloudCheckCred payload parse error', parseErr);
      return 'NOT_FOUND';
    }
    if (obj.pw !== password) return 'WRONG_PW';
    cloudPullUserData(data.payload, nickname);
    return 'OK';
  } catch(e) { console.warn('cloudCheckCred query failed', e); return null; }
}

function cloudPullUserData(payload, nickname) {
  try {
    const obj = typeof payload === 'string' ? JSON.parse(payload) : payload;
    const nk = (nickname || state.playerName || '').toLowerCase();
    if (!nk) return;
    const prevName = state.playerName;
    state.playerName = nickname || prevName;
    if (obj.word_knowledge) { const s = readWordKnowledge(); s[nk] = JSON.parse(obj.word_knowledge); writeWordKnowledge(s); }
    if (obj.synonym_progress) { const s = readSynonymProgress(); s[nk] = JSON.parse(obj.synonym_progress); localStorage.setItem(synonymProgressKey, JSON.stringify(s)); }
    if (obj.wordcheck_progress) { const s = JSON.parse(localStorage.getItem('v502-wordcheck-progress')||'{}'); s[nk] = JSON.parse(obj.wordcheck_progress); localStorage.setItem('v502-wordcheck-progress', JSON.stringify(s)); }
    if (obj.quiz_progress) { const s = JSON.parse(localStorage.getItem(quizProgressKey)||'{}'); s[nk] = JSON.parse(obj.quiz_progress); localStorage.setItem(quizProgressKey, JSON.stringify(s)); }
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

  const { data: existingRows } = await client
    .from(getLeaderboardTable())
    .select("id,accuracy")
    .eq("nickname", entry.name)
    .eq("quiz_set", entry.setId);

  const hasExisting = existingRows && existingRows.length > 0;

  if (hasExisting) {
    if (isCumulative) {
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
    const bestExisting = existingRows.reduce((a, b) => a.accuracy > b.accuracy ? a : b);
    if (entry.accuracy <= bestExisting.accuracy) {
      return bestExisting.id;
    }
    // DELETE blocked by RLS — update all existing rows for this set instead
    for (const row of existingRows) {
      await client.from(getLeaderboardTable())
        .update({
          correct_count: entry.correct,
          total_count: entry.total,
          accuracy: entry.accuracy,
        })
        .eq("id", row.id);
    }
    return existingRows[0].id;
  }

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

const _cumRemoteTimers = {};
const _cumRemoteLatest = {};
function scheduleCumulativeRemoteWrite(quizSet, name, correct, total, accuracy) {
  if (!hasPublicConfig() || !name) return;
  const key = quizSet + '|' + name.toLowerCase();
  _cumRemoteLatest[key] = { name, correct, total, accuracy };
  if (_cumRemoteTimers[key]) return;
  _cumRemoteTimers[key] = setTimeout(() => {
    _cumRemoteTimers[key] = null;
    const v = _cumRemoteLatest[key];
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

  if (state.playerName) {
    upsertLocalScore(entry);
    updateSidebarCompletion();
  }
  if (state.playerName && hasPublicConfig()) {
    savePublicScore(entry).catch((e) => { console.warn('completeQuiz savePublicScore failed', e); });
  }

  els.quizPanel.hidden = true;
  els.resultPanel.hidden = false;
  const tier = getTier(readIrtAbility());
  els.resultTitle.textContent = `${displayName}'s Result`;
  els.resultSummary.innerHTML = `${entry.correct}/${entry.total} correct — ${accuracy}% accuracy — ${tier.icon} ${tier.name}`;

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

  renderPublicResult(displayName, accuracy, entry.correct, entry.total);
}

function reviewQuestion(index) {
  state.questionIndex = index;
  state.currentSelection = new Set();
  els.resultPanel.hidden = true;
  els.quizPanel.hidden = false;
  renderQuestion();
  els.submitBtn.disabled = true;
  els.submitTopBtn.disabled = true;
  els.options.querySelectorAll('.option').forEach(b => b.disabled = true);
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
    els.submitBtn.disabled = true;
    els.submitTopBtn.disabled = true;
  };
  els.nextTopBtn.onclick = els.nextBtn.onclick;
}

function renderPublicResult(displayName, accuracy, correct, total) {
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
              <small>${item.accuracy}%</small>
            </li>
          `).join("")}
        </ol>
      `;
    }).catch(() => {
      els.leaderboard.innerHTML = `<p class="ranking-note">Public ranking sync failed.</p>`;
    });
  });
}

function switchMode(mode) {
  els.startPanel.hidden = true;
  els.quizPanel.hidden = true;
  els.resultPanel.hidden = true;
  els.rankingPanel.hidden = true;
  els.wordlistPanel.hidden = true;
  els.logicPanel.hidden = true;
  els.boardPanel.hidden = true;
  els.myinfoPanel.hidden = true;
  els.dashboardPanel.hidden = true;
  els.wordlist2Panel.hidden = true;
  els.wordbook3Panel.hidden = true;
  els.wordcheckPanel.hidden = true;
  els.grammar201Panel.hidden = true;
  els.examPanel.hidden = true;
  logicState.active = false;
  els.shuffleBtn.disabled = true;
  els.resetBtn.disabled = true;
  const isSynonym = (mode === 'quiz' || mode === 'start');
  const toolbar = document.querySelector('.workspace > .toolbar');
  const progress = document.querySelector('.workspace > .progress');
  if (toolbar) toolbar.style.display = isSynonym ? '' : 'none';
  if (progress) progress.style.display = isSynonym ? '' : 'none';
  const appbar = document.querySelector('.workspace > .appbar');
  if (appbar) appbar.style.display = (mode === 'dashboard') ? 'none' : 'flex';
  const catWrapper = document.querySelector('.cat-nav-wrapper');
  if (catWrapper) catWrapper.style.display = (mode === 'quiz' || mode === 'start') ? '' : 'none';
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

async function flushCumulativeWrites() {
  const keys = Object.keys(_cumRemoteTimers);
  const promises = [];
  for (const key of keys) {
    clearTimeout(_cumRemoteTimers[key]);
    _cumRemoteTimers[key] = null;
    const v = _cumRemoteLatest[key];
    if (!v) continue;
    const quizSet = key.split('|')[0];
    promises.push(
      getSupabaseClient()
        .then((client) => client && writeCumulativeRow(client, quizSet, v.name, v.correct, v.total, v.accuracy))
        .catch((e) => { console.warn('flushCumulativeWrites failed', e); })
    );
  }
  await Promise.all(promises);
}

async function showRanking() {
  switchMode('ranking');
  els.rankingPanel.hidden = false;
  flushCloudSync();
  await flushCumulativeWrites();
  await pushAllScoresToSupabase();

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
      const registered = new Map();
      for (const row of data) {
        if (row.setId === 'USERDATA') registered.set(row.name.toLowerCase(), row.name);
      }
      const cumulative = cumulativeLeaderboard(data, null);
      for (const [nk, displayName] of registered) {
        if (!cumulative.find(c => c.name.toLowerCase() === nk)) {
          cumulative.push({ name: displayName, correct: 0, total: 0, accuracy: 0 });
        }
      }
      cumulative.sort((a, b) => b.correct - a.correct || b.accuracy - a.accuracy);
      const totalPlayers = cumulative.length;
      if (!cumulative.length) {
        els.rankingContent.innerHTML = "<p style='color:var(--muted);font-style:italic'>no scores yet</p>";
        return;
      }
      els.rankingSummary.innerHTML = `<span style="font-size:11px;letter-spacing:0.1em;opacity:0.5">${totalPlayers} PLAYERS</span>` +
        (state.playerName ? (() => { const t = getTier(readIrtAbility()); return ` <span style="font-size:12px;font-weight:700;color:var(--accent)">내 등급: ${t.icon} ${t.name}</span>`; })() : '');

      const colors = ['#FF6B35','#FFD449','#06D6A0','#118AB2','#EF476F','#073B4C','#8338EC','#FF006E'];
      const top3 = cumulative.slice(0, 3);
      const rest = cumulative.slice(3, 50);

      let html = '';
      html += '<div class="rank-podium">';
      top3.forEach((item, idx) => {
        const medals = ['🥇','🥈','🥉'];
        const tier = getTierForRanking(item.correct, item.total);
        const sizes = ['130%','115%','105%'];
        const color = colors[idx];
        html += `<div class="rank-podium-card" style="background:${color}">
          <div class="rank-podium-medal">${medals[idx]}</div>
          <div class="rank-podium-rank">#${idx+1}</div>
          <div class="rank-podium-name">${escapeHtml(item.name)}</div>
          <div class="rank-podium-tier">${tier.icon} ${tier.name}</div>
          <div class="rank-podium-score">${item.correct}<small>점</small></div>
        </div>`;
      });
      html += '</div>';

      if (rest.length) {
        html += '<div class="rank-list">';
        const topScore = rest.length ? Math.max(...rest.map(r => r.correct), 1) : 1;
        rest.forEach((item, idx) => {
          const rank = idx + 4;
          const tier = getTierForRanking(item.correct, item.total);
          const barW = Math.min(100, (item.correct / topScore) * 100);
          const highlight = item.name.toLowerCase() === (state.playerName || '').toLowerCase() ? ' highlight' : '';
          html += `<div class="rank-row${highlight}">
            <span class="rank-row-num">${rank}</span>
            <div class="rank-row-body">
              <div class="rank-row-name">${escapeHtml(item.name)} <span class="rank-row-tier">${tier.icon} ${tier.name}</span></div>
              <div class="rank-row-bar"><div class="rank-row-bar-fill" style="width:${barW}%;background:${colors[rank % colors.length]}"></div></div>
            </div>
            <span class="rank-row-score">${item.correct}<small>점</small></span>
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

function showWordlist() {
  switchMode('wordlist');
  els.wordlistPanel.hidden = false;
  els.wordlistTitle.innerHTML = `
    <span class="wl-title-main">전체 단어 일람 (${categories.length}개 범주)</span>
    <span class="wl-jump-controls">
      ${state.playerName ? `<button class="wl-jump-btn wl-hideknown-btn${wlHideKnown ? ' wl-hideknown-on' : ''}" type="button" title="아는 단어(✓) 숨기기">${wlHideKnown ? '✓ 아는 단어 숨김' : '아는 단어 안보기'}</button>` : ''}
      <button class="wl-jump-btn" type="button" data-jump-target="199" title="범주 199번으로 이동">범주200</button>
      <button class="wl-jump-btn" type="button" data-jump-target="399" title="범주 399번으로 이동">범주400</button>
    </span>
  `;
  els.wordlistTitle.querySelectorAll('.wl-jump-btn[data-jump-target]').forEach((button) => {
    button.addEventListener('click', () => jumpToCategory(button.dataset.jumpTarget));
  });
  const hideBtn = els.wordlistTitle.querySelector('.wl-hideknown-btn');
  if (hideBtn) hideBtn.addEventListener('click', () => { wlHideKnown = !wlHideKnown; showWordlist(); });
  const hideKnown = wlHideKnown && state.playerName;
  let html = '<div class="wordlist-scroll">';
  // 20-category chunks
  const CAT_CHUNK = 20;
  const catChunks = [];
  for (let i = 0; i < categories.length; i += CAT_CHUNK) {
    catChunks.push(categories.slice(i, i + CAT_CHUNK));
  }
  catChunks.forEach((chunk, chunkIdx) => {
    var firstId = chunk[0].id;
    var lastId = chunk[chunk.length - 1].id;
    html += '<details class="wb3-section"' + (chunkIdx === 0 ? ' open' : '') + '>';
    html += '<summary class="wb3-summary">범주 ' + firstId + '~' + lastId + ' <small>(' + chunk.length + '개 범주)</small></summary>';
    chunk.forEach(cat => {
    const summary = categorySummaries[cat.id] || '';
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
    html += `<h4 class="wl-cat-header" onclick="event.stopPropagation();toggleCatFold('${escapeHtml(cat.id)}')" style="cursor:pointer">`;
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
  html += '</details>';
  });
  html += '</div>';
  els.wordlistContent.innerHTML = html;
}

function toggleCatFold(catId) {
  var words = document.getElementById('wl-words-' + catId);
  if (!words) return;
  words.hidden = !words.hidden;
  var cat = words.closest('.wordlist-cat');
  var indicator = cat ? cat.querySelector('.wl-fold-indicator') : null;
  if (indicator) indicator.textContent = words.hidden ? '\u25B8' : '\u25BC';
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
  // 300-word chunks
  const CHUNK = 300;
  const chunks = [];
  for (let i = 0; i < visible.length; i += CHUNK) {
    chunks.push({ start: i, end: Math.min(i + CHUNK - 1, visible.length - 1), items: visible.slice(i, i + CHUNK) });
  }
  function renderWL2Entries(items) {
    let h = '<div class="wordlist2-entries">';
    items.forEach((item) => {
      const hasEx = item.ex && item.ex.length > 20;
      const w = item.w || '';
      const m = item.m || '';
      const known = state.playerName && isWordKnown(w);
      h += '<div class="wl2-entry">';
      h += '<span class="wl2-word' + (known ? ' wl-known' : '') + (state.playerName ? ' wl-clickable' : '') + '"';
      if (state.playerName) {
        h += ' onclick="handleWordToggle(\'' + escapeHtml(w) + '\', this)" title="클릭하여 안다/모른다 표시"';
      }
      h += '>';
      if (known) h += '<span class="wl-check">✓</span>';
      h += escapeHtml(w) + '</span>';
      if (m) h += '<span class="wl2-meaning">' + escapeHtml(m) + '</span>';
      if (hasEx) h += '<div class="wl2-example">' + escapeHtml(item.ex) + '</div>';
      h += '</div>';
    });
    h += '</div>';
    return h;
  }
  chunks.forEach((chunk, idx) => {
    html += '<details class="wb3-section"' + (idx === 0 ? ' open' : '') + '>';
    html += '<summary class="wb3-summary">[' + (chunk.start + 1) + '~' + (chunk.end + 1) + '번] <small>(' + chunk.items.length + '개)</small></summary>';
    html += renderWL2Entries(chunk.items);
    html += '</details>';
  });
  html += '</div></div>';
  els.wordlist2Content.innerHTML = html;

  const hideBtn = document.getElementById('wl2HideBtn');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => { wlHideKnown = !wlHideKnown; showWordlist2(); });
  }
}

let wb3HideKnown = false;

function showWordbook3() {
  switchMode('wordlist');
  els.wordbook3Panel.hidden = false;
  const words = window.__V502_WORDBOOK3__ || [];
  const hideKnown = wb3HideKnown && state.playerName;
  const visible = hideKnown ? words.filter(item => !isWordKnown(item.w || '')) : words;
  const hiddenCount = words.length - visible.length;

  let totalCountDisplay = words.length;
  let html = '<div class="wordlist-scroll"><div class="wordlist-cat">';
  html += '<h4><span class="wl-cat-num">WB3</span> 단어장3 — ' + visible.length + ' / ' + totalCountDisplay + ' 단어';
  if (hiddenCount > 0) html += ' <small style="color:var(--muted);font-weight:400">(' + hiddenCount + '개 숨김)</small>';
  html += '</h4>';
  html += '<div style="margin-bottom:8px;display:flex;gap:6px;flex-wrap:wrap">';
  if (state.playerName) {
    html += '<button class="wl-jump-btn wl-hideknown-btn' + (wb3HideKnown ? ' wl-hideknown-on' : '') + '" type="button" id="wb3HideBtn" title="외운 단어(✓) 숨기기">' + (wb3HideKnown ? '✓ 외운 단어 숨김' : '외운 단어 안보기') + '</button>';
  }
  html += '</div>';

  // 500-word chunks, all collapsed by default
  const CHUNK = 500;
  const totalChunks = Math.ceil(words.length / CHUNK);
  const sections = [];
  for (let c = 0; c < totalChunks; c++) {
    sections.push({ start: c * CHUNK, end: Math.min((c + 1) * CHUNK - 1, words.length - 1), items: [] });
  }

  visible.forEach((item) => {
    const originalIdx = words.indexOf(item);
    const chunkIdx = Math.floor(originalIdx / CHUNK);
    if (chunkIdx < sections.length) sections[chunkIdx].items.push(item);
  });

  function renderEntries(items) {
    let h = '<div class="wordlist2-entries">';
    items.forEach((item) => {
      const w = item.w || '';
      const m = item.m || '';
      const p = item.p || '';
      const pos = item.pos || '';
      const known = state.playerName && isWordKnown(w);
      h += '<div class="wl2-entry">';
      h += '<span class="wl2-word' + (known ? ' wl-known' : '') + (state.playerName ? ' wl-clickable' : '') + '"';
      if (state.playerName) {
        h += ' onclick="handleWordToggle(\'' + escapeHtml(w) + '\', this)" title="클릭하여 안다/모른다 표시"';
      }
      h += '>';
      if (known) h += '<span class="wl-check">✓</span>';
      h += escapeHtml(w) + '</span>';
      if (pos) h += '<span class="wl2-pos">' + escapeHtml(pos) + '</span>';
      if (m) h += '<span class="wl2-meaning" style="margin-left:4px">' + escapeHtml(m) + '</span>';
      h += '</div>';
    });
    h += '</div>';
    return h;
  }

  sections.forEach((sec, idx) => {
    if (sec.items.length === 0) return;
    var label = sec.start + '~' + sec.end + '번 단어';
    html += '<details class="wb3-section"' + (idx === 0 ? ' open' : '') + '>';
    html += '<summary class="wb3-summary">[' + label + '] <small>(' + sec.items.length + '개)</small></summary>';
    html += renderEntries(sec.items);
    html += '</details>';
  });

  html += '</div></div>';
  els.wordbook3Content.innerHTML = html;

  const hideBtn = document.getElementById('wb3HideBtn');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => { wb3HideKnown = !wb3HideKnown; showWordbook3(); });
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

  if (pwd) {
    setPasswordForNickname(name, pwd);
  }

  els.playerNameLabel.textContent = name;
  els.startPanel.hidden = true;
  startQuiz();
}

function openBoard() {
  switchMode('board');
  renderBoard();
}
function renderBoard() {
  let html = '<div style="max-width:900px">';
  html += '<h3>게시판</h3>';
  html += '<p style="color:var(--muted)">게시판 기능은 준비 중입니다.</p>';
  html += '</div>';
  els.boardPanel.innerHTML = html;
  els.boardPanel.hidden = false;
}
els.boardPanel.addEventListener("click", function(e) {
  if (e.target === this) { this.hidden = true; }
});

els.authLoginBtn.addEventListener("click", handleLogin);
els.authRegisterBtn.addEventListener("click", handleRegister);
els.authLogoutBtn.addEventListener("click", handleLogout);
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
els.wordbook3Btn.addEventListener("click", showWordbook3);
els.wordbook3Panel.addEventListener("click", function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});
els.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategorySet(button.dataset.setId));
  const smallEl = button.querySelector("small");
  if (smallEl) smallEl.textContent = "30";
});

function updateSidebarCompletion() {
  if (!state.playerName) return;
  const nk = state.playerName.toLowerCase();
  const entries = readLeaderboard().filter(e => e.name.toLowerCase() === nk);
  const completed = new Map();
  for (const e of entries) {
    const existing = completed.get(e.setId);
    if (!existing || e.accuracy > existing.accuracy) {
      completed.set(e.setId, e);
    }
  }
  const synRes = readSynonymResult();
  const userSyn = synRes[nk] || { correct: [], wrong: [] };
  const answeredIds = new Set([...(userSyn.correct || []), ...(userSyn.wrong || [])]);

  els.categoryButtons.forEach((button) => {
    const setId = button.dataset.setId;
    const entry = completed.get(setId);
    const smallEl = button.querySelector("small");
    if (!smallEl) return;
    if (entry) {
      smallEl.textContent = `✓ ${entry.accuracy}%`;
      button.style.borderColor = "rgba(20,108,108,0.5)";
    } else {
      const setCats = categorySets[setId] ? categorySets[setId].ids : [];
      let setTotal = 0, setAnswered = 0;
      setCats.forEach(catId => {
        const cat = categories.find(c => c.id === catId);
        if (cat) {
          setTotal += cat.words.length;
          cat.words.forEach(w => {
            if (answeredIds.has(catId + '|' + w)) setAnswered++;
          });
        }
      });
      if (setAnswered > 0) {
        smallEl.textContent = `${setAnswered}/${setTotal}`;
      } else {
        smallEl.textContent = setTotal;
      }
      button.style.borderColor = "";
    }
  });
}

const savedSession = getSession();
if (savedSession && savedSession.name) {
  const store = readPasswordStore();
  const key = savedSession.name.toLowerCase();
  if (store[key]) {
    const stored = store[key];
    state.playerName = (typeof stored === 'object' && stored.displayName) ? stored.displayName : savedSession.name;
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

window.addEventListener("beforeunload", () => { saveQuizProgress(); flushCloudSync(); });
window.addEventListener("pagehide", () => { saveQuizProgress(); flushCloudSync(); });
window.addEventListener("pagehide", () => saveQuizProgress());

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
  const scoredKey = key + "_scored";
  const scored = readLogicScore()[scoredKey] || {};
  if (scored[qid]) return; // already counted
  scored[qid] = true;
  scores[scoredKey] = scored;
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

function persistLogicRanking() {
  if (!state.playerName) return;
  const correct = getLogicCompleted().size;
  const wrong = getLogicWrong().size;
  const total = correct + wrong;
  if (total === 0) return;
  const accuracy = Math.round((correct / total) * 100);

  const nameKey = state.playerName.toLowerCase();
  const entries = readLeaderboard().filter(
    (e) => !(e.name.toLowerCase() === nameKey && String(e.setId || "").startsWith("LOGIC")),
  );
  entries.push({
    name: state.playerName,
    correct,                              // raw correct count (not weighted)
    total,                                // questions attempted
    accuracy,
    setId: "LOGIC", setLabel: "Logic Quiz", completedAt: new Date().toISOString(),
  });
  writeLeaderboard(entries);

  scheduleCumulativeRemoteWrite("LOGIC", state.playerName, correct, total, accuracy);
}

function shuffleLogicQuestions() {
  const raw = (window.__V502_LOGIC__ && window.__V502_LOGIC__.questions) || [];
  const completed = getLogicCompleted();
  const wrong = getLogicWrong();
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
  let questionHtml = escapeHtml(q.question);
  if (q.type === 'synonym') {
    const match = q.question.match(/'([^']+)' is closest in meaning/);
    if (match) {
      const escaped = escapeHtml(match[1]);
      const regex = new RegExp('\\b' + escaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      questionHtml = questionHtml.replace(regex, '<u>$&</u>');
    }
  }
  els.logicQuestionText.innerHTML = `<strong>Q${logicState.currentIndex + 1}.</strong>${rateTag} ${questionHtml}`;
  els.logicOptions.innerHTML = "";

  els.logicSubmitBtn.style.display = noExplainMode ? 'none' : '';
  els.logicNextBtn.style.display = '';
  els.logicJumpBtn.style.display = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.innerHTML = `<span>${String.fromCharCode(65 + i)}. ${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => {
      if (logicState.answered) return;
      logicState.selectedOption = opt;
      if (noExplainMode) {
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
  { const logicRate = (window.__V502_LOGIC_DIFFICULTY__ && window.__V502_LOGIC_DIFFICULTY__.get) ? window.__V502_LOGIC_DIFFICULTY__.get(q.id) : 50; const ability = readIrtAbility() + getScoreDelta(correct, logicRate); writeIrtAbility(ability); updateTierDisplay(); }

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

  clickedBtn.style.background = correct ? '#e8f5e9' : '#fce4ec';
  els.logicOptions.querySelectorAll(".option").forEach(b => {
    const optText = b.querySelector("span")?.textContent?.replace(/^[A-D]\. /, "");
    if (optText === q.answer) b.classList.add("correct");
    else if (optText === opt && !correct) b.classList.add("wrong");
    b.disabled = true;
  });

  els.logicFeedback.hidden = false;
  els.logicFeedback.className = `feedback ${correct ? "ok" : "no"}`;
  els.logicFeedback.innerHTML = `
    <strong>${correct ? "✅ Correct!" : "❌ Incorrect."}</strong>
    <p style="margin-top:8px">${escapeHtml(q.explanation).replace(/\n/g, '<br>')}</p>
  `;

  setBtnDisabled(els.logicNextBtn, logicState.currentIndex >= logicState.questions.length - 1);
  els.logicNextBtn.textContent = logicState.currentIndex >= logicState.questions.length - 1 ? "Finish" : "Next";
  els.logicNextBtn.style.display = '';

  setTimeout(() => {
    toast.style.transform = 'translate(-50%,-50%) scale(0.3)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 600);
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
  persistLogicRanking();
  { const logicRate = (window.__V502_LOGIC_DIFFICULTY__ && window.__V502_LOGIC_DIFFICULTY__.get) ? window.__V502_LOGIC_DIFFICULTY__.get(q.id) : 50; const ability = readIrtAbility() + getScoreDelta(correct, logicRate); writeIrtAbility(ability); updateTierDisplay(); }

  els.logicFeedback.hidden = false;
  els.logicFeedback.className = `feedback ${correct ? "ok" : "no"}`;
  els.logicFeedback.innerHTML = `
    <strong>${correct ? "✅ Correct!" : "❌ Incorrect."}</strong>
    <p style="margin-top:8px">${escapeHtml(q.explanation).replace(/\n/g, '<br>')}</p>
  `;

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
  const logicTier = getTier(readIrtAbility());
  els.resultTitle.textContent = "Logic Quiz Result";
  els.resultSummary.innerHTML = `이번 세션 ${logicState.correctCount}/${logicState.questions.length} (${sessionPct}%) · 누적 ${cumCorrect}/${cumTotal} (${cumPct}%) · 가중점수 ${ws.score.toFixed(2)} · 남은 ${remaining}문제<br><small>${logicTier.icon} ${logicTier.name}</small>`;
}

els.logicModeBtn.addEventListener("click", () => {
  startLogicQuiz();
});

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
  const noExBtn = document.getElementById('dashNoExplainBtn');
  if (noExBtn) {
    noExBtn.style.display = loggedIn ? '' : 'none';
    noExBtn.textContent = noExplainMode ? '⚡ 해설ON' : '⚡ 해설OFF';
  }
  syncNoExplainButtons();
  updateNoExplainIndicator();

  const greeting = document.getElementById('dashGreeting');
  if (greeting) greeting.textContent = loggedIn ? `${state.playerName}님의 학습 대시보드` : 'V502 학습 대시보드';

  let html = '<div class="dash">';

  if (loggedIn) {
    const logicMastered = getLogicCompleted().size;
    const cum = cumulativeLeaderboard(readLeaderboard(), null)
      .find((e) => e.name.toLowerCase() === state.playerName.toLowerCase());
    const score = cum ? cum.correct : 0;
    html += `<div class="dash-stats dash-stats-xl">`;
    html += `<div class="dash-stat" onclick="showRanking()" style="cursor:pointer" title="통합랭킹 보기"><span class="dash-stat-num">${score}</span><span class="dash-stat-label">통합 점수</span></div>`;
    html += `<div class="dash-stat" onclick="showWordlist()" style="cursor:pointer" title="단어일람보기"><span class="dash-stat-icon">📋</span><span class="dash-stat-label">단어일람</span></div>`;
    html += `<div class="dash-stat" onclick="showWordlist2()" style="cursor:pointer" title="단어일람보기2"><span class="dash-stat-icon">🗂️</span><span class="dash-stat-label">단어일람2</span></div>`;
	    html += `<div class="dash-stat" onclick="showWordbook3()" style="cursor:pointer" title="단어장3"><span class="dash-stat-icon">📗</span><span class="dash-stat-label">단어장3</span></div>`;
    html += `</div>`;
  }

  html += '<p class="dash-section-label">학습</p>';
  html += '<div class="dash-grid">';
  html += dashCard({ icon: '📝', title: '단어문제', desc: '동의어 짝 맞추기', accent: 'teal', onclick: "openSynonymPanel()" });
  html += dashCard({ icon: '🧩', title: '논리문제', desc: '문맥 속 어휘 추론', accent: 'indigo', onclick: "startLogicQuiz()" });
  html += dashCard({ icon: '📘', title: '201 단어퀴즈', desc: '4지선다 어휘 체크', accent: 'blue', onclick: "showWordcheck201()" });
  html += dashCard({ icon: '📝', title: '문법 201', desc: '442개 문법 문제', accent: 'plum', onclick: "showGrammar201()" });
  html += dashCard({ icon: '📄', title: '기출문제', desc: '2011-2026 성균관대 + 가천대', accent: 'slate', onclick: "showExam()" });
  html += dashCard({ icon: '✅', title: '단어확인문제', desc: '전체 어휘 확인', accent: 'green', onclick: "showWordcheck()" });
  html += '</div>';

  if (!loggedIn) {
    html += '<p class="dash-section-label">계정</p>';
    html += '<div class="dash-grid">';
    html += dashCard({ icon: '🔒', title: '로그인 필요', desc: '내정보 / 랭킹 이용 잠금', accent: 'slate', onclick: "document.getElementById('authNicknameInput').focus()" });
    html += dashCard({ icon: '📋', title: '단어일람보기', desc: '전체 단어 사전', accent: 'slate', onclick: "showWordlist()" });
    html += dashCard({ icon: '🗂️', title: '단어일람보기2', desc: 'MVP2 + V401 추가 단어', accent: 'slate', onclick: "showWordlist2()" });
	    html += dashCard({ icon: '📗', title: '단어장3', desc: 'Vocabulary Book 3 단어', accent: 'slate', onclick: "showWordbook3()" });
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
  let html = '<div style="max-width:800px">';
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

  let html = '<div style="max-width:800px">';
  html += '<h3 style="margin-bottom:12px">📊 내 리뷰</h3>';
  html += `<div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">`;
  html += `<div style="padding:16px;background:#f0f8f0;border-radius:8px;text-align:center"><strong style="font-size:24px">${completed}</strong><br><small>단어 마스터</small><br><small style="color:var(--muted)">/ ${totalSyn} (${pct}%)</small></div>`;
  html += `<div style="padding:16px;background:#f0f0f8;border-radius:8px;text-align:center"><strong style="font-size:24px">${logicMastered}</strong><br><small>논리 마스터</small><br><small style="color:var(--muted)">/ ${logicTotal}</small></div>`;
  html += `<div style="padding:16px;background:#e8f0e8;border-radius:8px;text-align:center"><strong style="font-size:24px">${wcProgress.correct}/${wcProgress.total}</strong><br><small>단어확인</small><br><small style="color:var(--muted)">${wcProgress.total > 0 ? Math.round(wcProgress.correct/wcProgress.total*100) + '%' : 'No data'}</small></div>`;
  html += `<div style="padding:16px;background:#fff8f0;border-radius:8px;text-align:center"><strong style="font-size:24px">${totalCorrect}점</strong><br><small>통합 점수</small><br><small style="color:var(--muted)">${totalQuestions > 0 ? Math.round((totalCorrect/totalQuestions)*100) + '%' : 'No data'} · ${totalQuestions}문제 풂</small></div>`;
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
  let html = '<div style="max-width:800px">';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">';
  html += `<button onclick="renderMyInfoTab('review')" style="flex:1;min-width:80px;min-height:36px;padding:2px 4px;border:1px solid var(--line);border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${tab==='review'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📊 내 리뷰</button>`;
  html += `<button onclick="renderMyInfoTab('wrong')" style="flex:1;min-width:80px;min-height:36px;padding:2px 4px;border:1px solid var(--line);border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${tab==='wrong'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📕 오답노트</button>`;
  html += `<button onclick="renderMyInfoTab('logic')" style="flex:1;min-width:80px;min-height:36px;padding:2px 4px;border:1px solid var(--line);border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${tab==='logic'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">🧩 논리오답</button>`;
  html += `<button onclick="renderMyInfoTab('grammar')" style="flex:1;min-width:80px;min-height:36px;padding:2px 4px;border:1px solid var(--line);border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${tab==='grammar'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📝 문법오답</button>`;
  html += `<button onclick="renderMyInfoTab('exam')" style="flex:1;min-width:80px;min-height:36px;padding:2px 4px;border:1px solid var(--line);border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${tab==='exam'?'background:var(--ink);color:#fff':'background:transparent;color:var(--ink)'}">📋 기출오답</button>`;
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
    html += `<div style="padding:16px;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:2px;text-align:center;cursor:pointer" onclick="showRanking()" title="통합랭킹 보기"><strong style="font-size:24px">${totalCorrect}점</strong><br><small>통합 점수 ▸</small><br><small style="color:var(--muted)">${totalQuestions > 0 ? Math.round((totalCorrect/totalQuestions)*100) + '%' : 'No data'} · ${totalQuestions}문제 풂</small></div>`;
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
        let reviewQuestionHtml = escapeHtml(q.question);
        if (q.type === 'synonym') {
          const m = q.question.match(/'([^']+)' is closest in meaning/);
          if (m) {
            const esc = escapeHtml(m[1]);
            const re = new RegExp('\\b' + esc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
            reviewQuestionHtml = reviewQuestionHtml.replace(re, '<u>$&</u>');
          }
        }
        html += `<p style="font-weight:700;margin:0 0 8px">Q${i+1}. ${reviewQuestionHtml}</p>`;
        if (q.options && q.options.length) {
          html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">`;
          q.options.forEach(opt => {
            const isCorrect = opt === q.answer;
            html += `<span style="display:block;padding:6px 10px;border-radius:6px;font-size:13px;font-weight:600;${isCorrect ? 'background:#d4edda;color:#155724;border:1px solid #8fc7a8' : 'background:#f0f0f0;color:#666;border:1px solid #ddd'}">${isCorrect ? '✓ ' : ''}${escapeHtml(opt)}</span>`;
          });
          html += `</div>`;
        }
        html += `<p style="font-size:12px;color:var(--muted);margin:0">💡 ${escapeHtml(q.explanation).replace(/\n/g, '<br>')}</p>`;
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
  } else if (tab === 'exam') {
    const p = readExamProgress();
    const key = state.playerName ? state.playerName.toLowerCase() : "_guest";
    const userData = p[key] || {};
    let totalWrong = 0;
    const examKeys = Object.keys(EXAM_REGISTRY);
    for (let i = 0; i < examKeys.length; i++) {
      const entry = userData[examKeys[i]];
      if (entry && entry.wrong && entry.wrong.length > 0) totalWrong += entry.wrong.length;
    }
    if (totalWrong === 0) {
      html += '<p style="color:var(--muted)">틀린 기출문제가 없습니다!</p>';
    } else {
      html += '<p style="margin-bottom:12px;color:var(--muted)">총 <b>' + totalWrong + '</b>개의 틀린 문제</p>';
      for (let i = 0; i < examKeys.length; i++) {
        const examKey = examKeys[i];
        const entry = userData[examKey];
        if (!entry || !entry.wrong || entry.wrong.length === 0) continue;
        const examInfo = EXAM_REGISTRY[examKey];
        const questions = examInfo ? examInfo.data() : [];
        html += '<h4 style="margin:16px 0 8px;padding:8px 12px;background:#fff0f0;border-left:3px solid #c62828;border-radius:2px">' + escapeHtml(examInfo ? examInfo.title : examKey) + ' — ' + entry.wrong.length + '문제</h4>';
        for (let j = 0; j < entry.wrong.length; j++) {
          const idx = entry.wrong[j];
          const q = questions[idx];
          if (!q) continue;
          html += '<div style="margin-bottom:12px;padding:12px;background:#fff8f0;border-radius:8px;border:1px solid #f0d8c0">';
          html += '<p style="font-weight:700;margin:0 0 8px;color:var(--accent)">#' + (idx + 1) + '</p>';
          if (q.p && q.p.length > 30) {
            html += '<div style="margin:0 0 10px;padding:8px 10px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;font-size:13px;line-height:1.6">' + escapeHtml(q.p).replace(/「([^」]+)」/g, '<u>$1</u>') + '</div>';
          }
          var qHtml = q.q
            .replace(/'([^']+)'/g, "'\uE000$1\uE001'")
            .replace(/「([^」]+)」/g, '\uE000$1\uE001')
            .replace(/(_{2,})/g, '\uE002$1\uE003');
          qHtml = escapeHtml(qHtml)
            .replace(/\uE000/g, '<u>').replace(/\uE001/g, '</u>')
            .replace(/\uE002/g, '<u>').replace(/\uE003/g, '</u>');
          html += '<p style="font-weight:600;margin:0 0 8px">' + qHtml + '</p>';
          if (q.c && q.c.length > 0) {
            html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">';
            for (let k = 0; k < q.c.length; k++) {
              var letter = q.c[k][0], text = q.c[k][1];
              var isCorrect = letter === q.a;
              html += '<span style="display:block;padding:6px 10px;border-radius:6px;font-size:13px;font-weight:600;' + (isCorrect ? 'background:#d4edda;color:#155724;border:1px solid #8fc7a8' : 'background:#f0f0f0;color:#666;border:1px solid #ddd') + '">' + (isCorrect ? '✓ ' : '') + '(' + escapeHtml(letter) + ') ' + escapeHtml(text) + '</span>';
            }
            html += '</div>';
          }
          html += '<p style="margin:0;font-size:12px;color:var(--muted)"><strong>정답:</strong> (' + escapeHtml(q.a) + ')</p>';
          if (q.k) {
            html += '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;font-size:12px;line-height:1.6">' + q.k + '</div>';
          } else if (q.explanation) {
            html += '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-radius:6px;font-size:12px;line-height:1.6;color:var(--muted)">📝 ' + escapeHtml(q.explanation).replace(/\n/g, '<br>') + '</div>';
          }
          html += '</div>';
        }
      }
    }
  }

  html += '</div>';
  els.myinfoContent.innerHTML = html;
}

let wordcheckQuestions = [
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

function wordcheckRemaining(all) {
  if (!state.playerName) return [...all];
  const done = getWordcheckCorrect();
  const remaining = all.filter((q) => !done.has(q.i));
  return remaining.length ? remaining : [...all];
}

function showWordcheck() {
  lastWordcheckLauncher = showWordcheck;
  startWordcheck(wordcheckRemaining([
    ...(window.__V502_WC_V401__ || [])
  ]));
}

function showWordcheck201() {
  lastWordcheckLauncher = showWordcheck201;
  startWordcheck(wordcheckRemaining(window.__V502_WC_V201__ || []), { shuffle: false });
}

function renderWordcheckQuestion() {
  if (wcState.index >= wordcheckQuestions.length) {
    finishWordcheck();
    return;
  }
  // Update jump bar — disable out-of-range, highlight nearest
  const jumpBtns = document.querySelectorAll('.wc-jump-btn');
  let bestDist = Infinity, bestBtn = null;
  jumpBtns.forEach(function(btn) {
    var t = parseInt(btn.dataset.target, 10);
    var outOfRange = t > wordcheckQuestions.length;
    btn.disabled = outOfRange;
    btn.style.opacity = outOfRange ? '0.35' : '';
    btn.style.background = '';
    btn.style.color = '';
    var dist = Math.abs(wcState.index + 1 - t);
    if (!outOfRange && dist < bestDist) { bestDist = dist; bestBtn = btn; }
  });
  if (bestBtn) {
    bestBtn.style.background = 'var(--accent)';
    bestBtn.style.color = '#fff';
  }
  const q = wordcheckQuestions[wcState.index];
  const prog = document.getElementById('wordcheckProgress');
  prog.textContent = `${wcState.index + 1} / ${wordcheckQuestions.length} | ✅ ${wcState.correct} | ❌ ${wcState.index - wcState.correct}`;

  const qEl = document.getElementById('wordcheckQuestion');
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

  submitBtn.onclick = () => {
    if (selectedLetter) submitWordcheckAnswer(selectedLetter);
  };

  submitBtn.style.display = 'none';
  document.getElementById('wordcheckNext').style.display = 'none';
  document.getElementById('wordcheckFeedback').style.display = 'none';
}

function wordcheckCorrectLetter(q) {
  const a = String(q.a).trim();
  if (q.c.some(([l]) => l === a)) return a;
  const n = parseInt(a, 10);
  if (!isNaN(n) && q.c[n - 1]) return q.c[n - 1][0];
  return a;
}

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
  scheduleCloudSync();
}

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

const synonymResultKey = 'v502-synonym-result';
function readSynonymResult() {
  try { return JSON.parse(localStorage.getItem(synonymResultKey)) || {}; }
  catch { return {}; }
}
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
  updateSidebarCompletion();
}

function submitWordcheckAnswer(letter) {
  const q = wordcheckQuestions[wcState.index];
  const answerLetter = wordcheckCorrectLetter(q);
  const correct = letter === answerLetter;
  if (correct) wcState.correct++;
  wcState.answers.push({ id: q.i, correct });
  saveWordcheckResult(q.i, correct);
  try { persistWordcheckRanking(); } catch {}
  { const ability = readIrtAbility() + getScoreDelta(correct, 50); writeIrtAbility(ability); updateTierDisplay(); }

  if (noExplainMode) {
    const buttons = document.querySelectorAll('#wordcheckChoices button');
    buttons.forEach(b => b.disabled = true);

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

    const clickedBtn = [...buttons].find(b => b.textContent.startsWith(`(${letter})`));
    if (clickedBtn) {
      clickedBtn.style.background = correct ? '#e8f5e9' : '#fce4ec';
      if (!correct) {
        const correctBtn = [...buttons].find(b => b.textContent.startsWith(`(${answerLetter})`));
        if (correctBtn) correctBtn.style.background = '#e8f5e9';
      }
    }

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
  const wcTier = getTier(readIrtAbility());
  document.getElementById('wordcheckScore').innerHTML = `
    🎯 Score: <strong>${wcState.correct}</strong> / ${wcState.total}
    <br><small>${pct}% correct</small>
    <br><small>${wcTier.icon} ${wcTier.name}</small>
  `;

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
  scheduleCloudSync();
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

document.getElementById('wcJumpBar').addEventListener('click', (e) => {
  if (!e.target.classList.contains('wc-jump-btn')) return;
  if (wcState.completed) return;
  const target = Math.min(parseInt(e.target.dataset.target, 10) - 1, wordcheckQuestions.length - 1);
  if (target < 0 || target === wcState.index) return;
  wcState.index = target;
  renderWordcheckQuestion();
});

document.getElementById('wordcheckRetry').addEventListener('click', () => lastWordcheckLauncher());

els.wordcheckBtn.addEventListener('click', showWordcheck);
const wc201Btn = document.getElementById('wordcheck201Btn');
if (wc201Btn) wc201Btn.addEventListener('click', showWordcheck201);
els.wordcheckPanel.addEventListener('click', function(e) {
  if (e.target === this) { this.hidden = true; els.startPanel.hidden = false; }
});

let grammarState = { index: 0, correct: 0, total: 0 };

function renderGrammarCategoryNav() {
  const jumps = [];
  for (let i = 0; i < 12; i++) jumps.push(i * 40);
  let html = '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px">';
  html += '<span style="font-size:12px;color:var(--muted);margin-right:4px;line-height:24px">카테고리:</span>';
  jumps.forEach(function(idx) {
    const isCurrent = grammarState.index >= idx && grammarState.index < idx + 40;
    html += '<button onclick="grammarState.index=' + idx + ';renderGrammarQuestion()" style="min-height:24px;padding:2px 7px;border:1px solid var(--line);border-radius:2px;font-size:11px;cursor:pointer;' + (isCurrent ? 'background:var(--ink);color:#fff;font-weight:700' : 'background:var(--panel);color:var(--ink)') + '">' + (idx + 1) + '번</button>';
  });
  html += '</div>';
  return html;
}

function showGrammar201() {
  switchMode('grammar');
  els.grammar201Panel.hidden = false;
  const allItems = window.__V502_GRAMMAR__ || [];
  const key = state.playerName ? state.playerName.toLowerCase() : '_guest';
  const prog = readGrammarProgress();
  const correctSet = new Set((prog[key] && prog[key].correct) || []);
  const wrongSet = new Set((prog[key] && prog[key].wrong) || []);
  // Filter: skip already-correct questions; show wrong + unanswered
  const items = allItems.filter(q => !correctSet.has(q.i));
  if (items.length === 0) {
    els.grammar201Content.innerHTML = '<div style="text-align:center;padding:40px"><h3>문법 201 완료</h3><p>모든 문제를 맞췄습니다!</p><p><small>🎉</small></p><button onclick="showGrammar201()" class="text-btn" style="min-height:40px;margin-top:12px">다시 보기</button></div>';
    return;
  }
  grammarState = { index: 0, correct: 0, total: items.length, items: items };
  renderGrammarQuestion();
}

function renderGrammarQuestion() {
  const items = grammarState.items || window.__V502_GRAMMAR__ || [];
  if (grammarState.index >= items.length) {
    finishGrammarQuiz();
    return;
  }
  const q = items[grammarState.index];
  let html = renderGrammarCategoryNav();
  html += `<div style="max-width:900px">`;
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
  } else {
    html += `<button onclick="grammarState.index++; if(grammarState.index>=grammarState.total)finishGrammarQuiz();else renderGrammarQuestion();" style="min-height:36px;padding:0 16px;border:1px solid var(--line);border-radius:2px;background:var(--panel);cursor:pointer;font:inherit">다음 ▸</button>`;
  }
  html += '</div>';
  els.grammar201Content.innerHTML = html;
}

function submitGrammarAnswer(letter) {
  const items = grammarState.items || window.__V502_GRAMMAR__ || [];
  const q = items[grammarState.index];
  const correct = letter === q.a;
  if (correct) {
    grammarState.correct++;
    saveGrammarCorrect(q.i);
  } else {
    saveGrammarWrong(q.i);
  }
  { const ability = readIrtAbility() + getScoreDelta(correct, 50); writeIrtAbility(ability); updateTierDisplay(); }
  let html = renderGrammarCategoryNav();
  html += `<div style="max-width:900px">`;
  html += `<p style="font-size:12px;color:var(--muted);margin:0 0 8px">${grammarState.index + 1} / ${items.length} | ✅ ${grammarState.correct} | ❌ ${grammarState.index - grammarState.correct}</p>`;
  html += `<p style="font-size:13px;color:var(--accent);font-weight:600;margin:0 0 4px">${escapeHtml(q.i)}. ${escapeHtml(q.t)}</p>`;
  html += `<p style="font-size:15px;line-height:1.7;margin:0 0 16px">${escapeHtml(q.q)}</p>`;
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
  const gTier = getTier(readIrtAbility());
  els.grammar201Content.innerHTML = `<div style="text-align:center;padding:40px"><h3>문법 201 완료</h3><p>${grammarState.correct}/${grammarState.total} 정답 (${pct}%)</p><p><small>${gTier.icon} ${gTier.name}</small></p><button onclick="showGrammar201()" class="text-btn" style="min-height:40px;margin-top:12px">다시 보기</button></div>`;
}

els.grammar201Btn.addEventListener('click', showGrammar201);

let examTab = 'gachon2012';

function showExam() {
  switchMode('exam');
  els.examPanel.hidden = false;
  renderExamTab();
}

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
  skku2026mock:   { title: '2026 대비 예상문제',    data: function(){return window.__V502_EXAM_SKKU2026MOCK__||[]} },
  jininsa2027_1:  { title: '진인사대천명 2027-1',     data: function(){return window.__V502_EXAM_JININSA_2027_1__||[]}, category: '정갤문제' }
};

function renderExamTab() {
  var html = '<div style="max-width:900px">';
  if (examTab === 'skku2011') {
    html += '<div style="margin-bottom:16px;padding:12px 16px;background:#f8f9fc;border-radius:4px;border:1px solid var(--line)">';
    html += '<p style="margin:0 0 4px;font-size:12px;color:var(--muted)">성균관대학교</p>';
    html += '<p style="margin:0;font-size:14px;font-weight:700;color:var(--accent)">2011학년도 일반·학사편입 [오전 A형] 90분 · 50문항</p>';
    html += '</div>';
  }
  if (examTab === 'jininsa2027_1') {
    html += '<div style="margin-bottom:16px;padding:12px 16px;background:#f8f9fc;border-radius:4px;border:1px solid var(--line)">';
    html += '<p style="margin:0 0 4px;font-size:12px;color:var(--muted)">정병권 갤러리 · 盡人事待天命</p>';
    html += '<p style="margin:0;font-size:14px;font-weight:700;color:var(--accent)">2027 대비 제1회 진인사대천명 편입영어 모의고사 | 40문항 60분</p>';
    html += '</div>';
  }
  html += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px">';
  var keys = Object.keys(EXAM_REGISTRY);
  var lastCategory = '';
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var sel = examTab === key;
    var entry = EXAM_REGISTRY[key];
    var count = entry.data().length;
    if (entry.category && entry.category !== lastCategory) {
      lastCategory = entry.category;
      html += `<span style="width:100%;margin-top:4px;font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px">▸ ${escapeHtml(entry.category)}</span>`;
    }
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
    if (q.section) {
      html += `<div style="margin:-8px 0 16px 0;padding:4px 10px;background:var(--accent);color:#fff;border-radius:4px;font-size:11px;font-weight:700;letter-spacing:0.5px">${escapeHtml(q.section)}</div>`;
    }
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
        fbHtml += '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-radius:6px;font-size:12px;line-height:1.6;color:var(--muted)">📝 ' + escapeHtml(q.explanation).replace(/\n/g, '<br>') + '</div>';
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
  { const ability = readIrtAbility() + getScoreDelta(correct, 50); writeIrtAbility(ability); updateTierDisplay(); }

  var fb = document.getElementById('examFeedback' + idx);
  if (fb) {
    var head = correct
      ? '<span style="color:#2e7d32;font-weight:700">✅ 정답!</span>'
      : '<span style="color:#c62828;font-weight:700">❌ 오답 — 정답은 (' + q.a + ')</span>';
    var exp = '';
    if (q.k) {
      exp = '<div style="margin-top:8px;padding:10px 12px;background:#f8f9fc;border-left:3px solid var(--accent);border-radius:4px;line-height:1.7">' + q.k + '</div>';
    } else if (q.explanation) {
      exp = '<div style="margin-top:6px;padding:8px 10px;background:#f8f9fc;border-radius:6px;font-size:12px;line-height:1.6;color:var(--muted)">📝 ' + escapeHtml(q.explanation).replace(/\n/g, '<br>') + '</div>';
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
els.logicJumpBtn.addEventListener("click", function() {
  if (!logicState.active || !logicState.questions.length) return;
  var target = Math.min(199, logicState.questions.length - 1);
  if (target === logicState.currentIndex) return;
  logicState.currentIndex = target;
  renderLogicQuestion();
});

(function relocateFromSidebar() {
  const dashHeader = document.getElementById('dashHeader');
  const authSec = document.getElementById('authSection');
  if (dashHeader && authSec) dashHeader.appendChild(authSec); // login / 내정보 inside the hero
  const catNav = document.getElementById('categoryNav');
  const quizPanel = document.getElementById('quizPanel');
  if (catNav && quizPanel && quizPanel.parentNode) {
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

showDashboard();
