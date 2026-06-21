const categories = [
  {
    id: "001",
    words: [
      "abound",
      "bristle",
      "crawl",
      "pullulate",
      "rife",
      "suffice",
      "swarm",
      "teem",
    ],
  },
  {
    id: "002",
    words: [
      "demystify",
      "edify",
      "enlighten",
      "illuminate",
      "inculcate",
      "rectify",
    ],
  },
  {
    id: "003",
    words: ["affiliate", "associate", "join"],
  },
  {
    id: "004",
    words: [
      "affect",
      "fake",
      "feign",
      "make believe to do",
      "pretend",
      "profess",
      "simulate",
    ],
  },
  {
    id: "005",
    words: [
      "alchemy",
      "astrology",
      "charlatan",
      "mountebank",
      "quack",
      "counterfeit",
      "forgery",
      "nostrum",
      "sophism",
      "sophistry",
      "casuistry",
      "sham",
    ],
  },
  {
    id: "006",
    words: [
      "apocryphal",
      "artificial",
      "bogus",
      "colorable",
      "counterfeit",
      "deceptive",
      "factitious",
      "fallacious",
      "fictitious",
      "fraudulent",
      "mala fide",
      "mendacious",
      "mimic",
      "ostensible",
      "phoney",
      "phony",
      "shoddy",
      "snide",
      "specious",
      "spoof",
      "spurious",
      "supposititious",
      "unauthentic",
    ],
  },
  {
    id: "007",
    words: [
      "astringent",
      "austere",
      "draconian",
      "exacting",
      "harsh",
      "stark",
      "stern",
    ],
  },
  {
    id: "008",
    words: [
      "compact",
      "compendious",
      "curt",
      "laconic",
      "pithy",
      "sententious",
      "spartan",
      "terse",
      "succinct",
    ],
  },
  {
    id: "009",
    words: [
      "conservator",
      "custodian",
      "jailer",
      "jailor",
      "proctor",
      "ranger",
      "supervisor",
      "surveillant",
      "turnkey",
    ],
  },
  {
    id: "010",
    words: ["dulcet", "luscious", "mellifluous", "mellow"],
  },
  {
    id: "011",
    words: [
      "conceal",
      "eclipse",
      "ensconce",
      "hide",
      "obscure",
      "occult",
      "secrete",
      "sequester",
      "snug",
      "submerge",
      "bury",
      "earth",
      "inhume",
      "inter",
    ],
  },
  {
    id: "012",
    words: ["dais", "pedestal", "podium", "pulpit", "rostrum"],
  },
  {
    id: "013",
    words: ["coerce", "compel", "exact", "extort", "force", "impel", "impose", "obtrude", "usurp"],
  },
  {
    id: "014",
    words: [
      "compulsory",
      "de rigueur",
      "forcible",
      "forcing",
      "imperative",
      "imposing",
      "incumbent",
      "mandatory",
      "obligatory",
      "stipulated",
    ],
  },
  {
    id: "015",
    words: [
      "arrogate",
      "bereave",
      "depredate",
      "deprive",
      "despoil",
      "divest",
      "exact",
      "exploit",
      "extort",
      "flay",
      "fleece",
      "foray",
      "loot",
      "milk",
      "pillage",
      "plunder",
      "raid",
      "ransack",
      "ravage",
      "rifle",
      "seize",
      "spoliate",
      "sweat",
      "usurp",
      "wrest",
    ],
  },
  {
    id: "016",
    words: ["clone", "ilk", "kind", "sort"],
  },
  {
    id: "017",
    words: [
      "colossal",
      "enormous",
      "gargantuan",
      "grandiose",
      "huge",
      "immense",
      "monolithic",
      "monstrous",
      "monumental",
      "palatial",
      "prodigious",
      "redoubtable",
      "stupendous",
      "sublime",
      "tremendous",
      "vast",
    ],
  },
  {
    id: "018",
    words: [
      "arrogance",
      "assumption",
      "brazenness",
      "contumacy",
      "chutzpah",
      "contumely",
      "effrontery",
      "gall",
      "haughtiness",
      "hubris",
      "impudence",
      "insolence",
      "presumption",
      "rudeness",
      "smartness",
      "superciliousness",
    ],
  },
  {
    id: "019",
    words: [
      "arrogant",
      "bloated",
      "bumptious",
      "cavalier",
      "contumacious",
      "contumelious",
      "domineering",
      "fastuous",
      "flippant",
      "haughty",
      "imperious",
      "impertinent",
      "impudent",
      "insolent",
      "overweening",
      "pert",
      "precipitate",
      "presumptuous",
      "sassy",
      "saucy",
      "smart",
      "supercilious",
      "forward",
      "obtrusive",
      "protrusive",
      "perky",
      "drawl",
      "mince",
      "strut",
      "swagger",
      "pontificate",
      "swell",
      "pose",
      "posture",
      "simper",
    ],
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
  "001": "fullness / abundance",
  "002": "teach / clarify",
  "003": "join / connect",
  "004": "pretend / put on",
  "005": "fake thing / fraud / false reasoning",
  "006": "false / not genuine",
  "007": "severe / strict",
  "008": "brief / compressed",
  "009": "keeper / supervisor",
  "010": "sweet / smooth",
  "011": "hide / conceal",
  "012": "platform / lectern",
  "013": "compel / force",
  "014": "mandatory / required",
  "015": "seize / plunder",
  "016": "same kind / type",
  "017": "huge / immense",
  "018": "arrogance / insolence",
  "019": "arrogant / rude",
  "020": "powerful person",
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
let supabaseClient = null;
let supabaseSdkPromise = null;

const categorySets = {
  "001-010": {
    label: "Categories 001-010",
    ids: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"],
  },
  "011-020": {
    label: "Categories 011-020",
    ids: ["011", "012", "013", "014", "015", "016", "017", "018", "019", "020"],
  },
};

const state = {
  activeSetId: "001-010",
  questionIndex: 0,
  questions: [],
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
  categoryButtons: document.querySelectorAll(".category-btn"),
  categoryLabel: document.querySelector("#categoryLabel"),
  categoryTitle: document.querySelector("#categoryTitle"),
  meaningPrompt: document.querySelector("#meaningPrompt"),
  questionIndex: document.querySelector("#questionIndex"),
  questionTotal: document.querySelector("#questionTotal"),
  options: document.querySelector("#options"),
  feedback: document.querySelector("#feedback"),
  prevBtn: document.querySelector("#prevBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
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
  rankingSummary: document.querySelector("#rankingSummary"),
  rankingContent: document.querySelector("#rankingContent"),
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
  const bank = allWords(sourceCategories);
  return shuffle(
    sourceCategories.flatMap((category) => {
      const words = shuffle(category.words);
      const currentWords = new Set(category.words);
      return [0, 1].map((round) => {
        const prompt = words[round % words.length];
        const answer = [words[(round + 1) % words.length], words[(round + 2) % words.length]];
        const distractors = [];

        for (const item of shuffle(bank.filter((entry) => entry.categoryId !== category.id))) {
          if (
            item.word === prompt ||
            answer.includes(item.word) ||
            currentWords.has(item.word) ||
            distractors.includes(item.word)
          ) continue;
          distractors.push(item.word);
          if (distractors.length === 4) break;
        }

        return {
          id: `${category.id}-${round + 1}`,
          categoryId: category.id,
          prompt,
          answer,
          options: shuffle([...answer, ...distractors]),
        };
      });
    }),
  );
}

function renderQuestion() {
  const question = state.questions[state.questionIndex];
  const saved = state.answers.get(question.id);
  const activeSelection = saved ? new Set(saved.selected) : state.currentSelection;

  const activeSet = getActiveSet();
  els.categoryLabel.textContent = activeSet.label;
  els.categoryTitle.textContent = "Synonym Pair Challenge";
  els.meaningPrompt.textContent = question.prompt;
  els.questionIndex.textContent = String(state.questionIndex + 1);
  els.questionTotal.textContent = `/ ${state.questions.length}`;
  els.prevBtn.disabled = state.questionIndex === 0;
  els.submitBtn.disabled = Boolean(saved) || state.currentSelection.size !== 2;
  els.nextBtn.disabled = !saved;
  els.nextBtn.textContent = state.questionIndex === state.questions.length - 1 ? "Finish" : "Next";

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
    showFeedback(saved.correct, question);
  } else {
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
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

function explainOption(word, question) {
  const selected = state.answers.get(question.id)?.selected.includes(word);
  const isAnswer = question.answer.includes(word);
  const category = getCategory(word, isAnswer ? question.categoryId : "");
  const categoryId = category?.id || "?";
  const group = categorySummaries[categoryId] || `Category ${categoryId}`;
  const promptGroup = categorySummaries[question.categoryId] || `Category ${question.categoryId}`;
  const status = isAnswer ? "Answer" : selected ? "Selected distractor" : "Distractor";
  const reason = isAnswer
    ? `제시어와 같은 Category ${question.categoryId}(${promptGroup})에 속하므로 정답입니다.`
    : `이 단어는 Category ${categoryId}(${group}) 단어라 제시어의 Category ${question.categoryId}와 다릅니다.`;
  const note = confusionNotes[word] || "이 문제에서는 뜻 하나만 보지 말고, 같은 범주의 단어 묶음인지 확인하는 것이 핵심입니다.";

  return `
    <li class="${selected ? "chosen" : ""}">
      <div class="explain-term">
        <b>${escapeHtml(word)}</b>
        <span>${escapeHtml(status)}</span>
      </div>
      <div class="explain-copy">
        <p><strong>Meaning:</strong> ${escapeHtml(wordMeanings[word] || "No note available.")}</p>
        <p><strong>Synonyms:</strong> ${escapeHtml(renderSynonyms(word, categoryId))}</p>
        <p><strong>Why:</strong> ${escapeHtml(reason)}</p>
        <p><strong>Watch:</strong> ${escapeHtml(note)}</p>
      </div>
    </li>
  `;
}

function showFeedback(correct, question) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${correct ? "ok" : "no"}`;
  const optionRows = question.options.map((word) => explainOption(word, question)).join("");
  const promptGroup = categorySummaries[question.categoryId] || `Category ${question.categoryId}`;

  els.feedback.innerHTML = `
    <strong>${correct ? "Correct" : "Incorrect"}.</strong>
    <p><b>${escapeHtml(question.prompt)}</b> belongs to Category ${escapeHtml(question.categoryId)} (${escapeHtml(promptGroup)}).</p>
    <p class="prompt-explain"><strong>Target pair:</strong> ${escapeHtml(question.answer.join(" / "))} · <strong>Same-category synonyms:</strong> ${escapeHtml(renderSynonyms(question.prompt, question.categoryId))}</p>
    <ul class="explain-list detailed">${optionRows}</ul>
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
  renderQuestion();
}

function renderProgress() {
  const pct = Math.round((state.answers.size / state.questions.length) * 100);
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
  localStorage.setItem(leaderboardKey, JSON.stringify(entries));
}

function readPasswordStore() {
  try {
    return JSON.parse(localStorage.getItem(passwordStoreKey)) || {};
  } catch {
    return {};
  }
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
  const best = new Map();
  const filtered = setId ? entries.filter((e) => e.setId === setId || (!e.setId && setId === "001-010")) : entries;

  for (const entry of filtered) {
    const key = `${entry.name.toLowerCase()}|${entry.setId || "001-010"}`;
    const existing = best.get(key);
    if (!existing || entry.accuracy > existing.accuracy ||
        (entry.accuracy === existing.accuracy && entry.correct > existing.correct)) {
      best.set(key, entry);
    }
  }

  // Aggregate by nickname across sets
  const aggregated = new Map();
  for (const entry of best.values()) {
    const nameKey = entry.name.toLowerCase();
    if (!aggregated.has(nameKey)) {
      aggregated.set(nameKey, { name: entry.name, correct: 0, total: 0 });
    }
    const agg = aggregated.get(nameKey);
    agg.correct += entry.correct;
    agg.total += entry.total;
  }

  return [...aggregated.values()]
    .map((a) => ({ ...a, accuracy: a.total ? Math.round((a.correct / a.total) * 100) : 0 }))
    .sort((a, b) => b.accuracy - a.accuracy || b.correct - a.correct);
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

async function readPublicLeaderboard() {
  const client = await getSupabaseClient();
  if (!client) return [];

  const { data, error } = await client
    .from(getLeaderboardTable())
    .select("id,nickname,quiz_set,correct_count,total_count,accuracy,created_at")
    .eq("quiz_set", state.activeSetId)
    .order("accuracy", { ascending: false })
    .order("correct_count", { ascending: false })
    .order("created_at", { ascending: true })
    .limit(500);

  if (error) throw error;
  return data.map(normalizePublicScore);
}

async function completeQuiz() {
  if (state.completed || state.answers.size !== state.questions.length) return;
  state.completed = true;

  const accuracy = Math.round((state.correctAttempts / state.questions.length) * 100);
  const entry = {
    name: state.playerName,
    correct: state.correctAttempts,
    total: state.questions.length,
    accuracy,
    setId: state.activeSetId,
    setLabel: getActiveSet().label,
    completedAt: new Date().toISOString(),
  };

  // Upsert: keep only best score per (name, setId)
  upsertLocalScore(entry);
  const cumulative = cumulativeLeaderboard(readLeaderboard(), state.activeSetId);
  const cumEntry = cumulative.find((e) => e.name.toLowerCase() === state.playerName.toLowerCase()) || entry;
  const rank = cumulative.findIndex((e) => e.name.toLowerCase() === state.playerName.toLowerCase()) + 1;

  els.quizPanel.hidden = true;
  els.resultPanel.hidden = false;
  els.resultTitle.textContent = `${state.playerName}'s Result`;
  renderCumulativeLeaderboard(cumulative.slice(0, 20), "Local Ranking", rank, cumEntry);

  if (!hasPublicConfig()) return;

  els.resultSummary.textContent = `${cumEntry.correct}/${cumEntry.total} cumulative — saving public rank...`;

  try {
    const savedId = await savePublicScore(entry);
    const publicData = await readPublicLeaderboard();
    const pubCumulative = cumulativeLeaderboard(publicData, state.activeSetId);
    const pubRank = pubCumulative.findIndex((e) => e.name.toLowerCase() === state.playerName.toLowerCase()) + 1;

    els.leaderboard.innerHTML = `
      <h4>Public Ranking</h4>
      <p class="ranking-note">Shared ranking for everyone using this link.</p>
      <ol>
        ${pubCumulative.slice(0, 20).map((item) => `
          <li>
            <span>${escapeHtml(item.name)}</span>
            <b>${item.accuracy}%</b>
            <small>${item.correct}/${item.total}</small>
          </li>
        `).join("")}
      </ol>
    `;
    els.resultSummary.textContent = `${cumEntry.correct}/${cumEntry.total} cumulative — Rank #${pubRank || pubCumulative.length}`;
  } catch (error) {
    els.leaderboard.innerHTML += `
      <p class="ranking-note">Public ranking sync failed. Your local score is saved.</p>
    `;
  }
}

function renderCumulativeLeaderboard(leaderboard, title, rank, cumEntry) {
  els.resultSummary.textContent =
    `${cumEntry.correct}/${cumEntry.total} cumulative — ${cumEntry.accuracy}% accuracy — Rank #${rank}`;
  els.leaderboard.innerHTML = `
    <h4>${escapeHtml(title)}</h4>
    <p class="ranking-note">Best attempt per set, cumulative totals.</p>
    <ol>
      ${leaderboard.map((item) => `
        <li>
          <span>${escapeHtml(item.name)}</span>
          <b>${item.accuracy}%</b>
          <small>${item.correct}/${item.total}</small>
        </li>
      `).join("")}
    </ol>
  `;
}

function showRanking() {
  els.startPanel.hidden = true;
  els.quizPanel.hidden = true;
  els.resultPanel.hidden = true;
  els.rankingPanel.hidden = false;
  els.shuffleBtn.disabled = true;
  els.resetBtn.disabled = true;

  const activeSet = getActiveSet();
  els.rankingTitle.textContent = `${activeSet.label} Leaderboard`;
  els.rankingSummary.textContent = "Loading rankings...";
  els.rankingContent.innerHTML = "";

  const allEntries = readLeaderboard();
  const cumulative = cumulativeLeaderboard(allEntries, state.activeSetId).slice(0, 20);
  els.rankingSummary.textContent = `${cumulative.length} player${cumulative.length !== 1 ? "s" : ""} on the board · Best per set, cumulative totals`;

  if (cumulative.length === 0) {
    els.rankingContent.innerHTML = "<p>No scores yet. Complete a quiz to appear here!</p>";
  } else {
    els.rankingContent.innerHTML = `
      <h4>Local Ranking</h4>
      <ol>
        ${cumulative.map((item, idx) => `
          <li>
            <span>${idx + 1}. ${escapeHtml(item.name)}</span>
            <b>${item.accuracy}%</b>
            <small>${item.correct}/${item.total}</small>
          </li>
        `).join("")}
      </ol>
    `;
  }

  if (!hasPublicConfig()) {
    const note = document.createElement("p");
    note.className = "ranking-note";
    note.textContent = "Public ranking is not connected yet. Set up db-config.js to enable.";
    els.rankingContent.append(note);
    return;
  }

  getSupabaseClient().then((client) => {
    if (!client) return;
    return readPublicLeaderboard().then((publicData) => {
      if (!publicData.length) return;
      const pubCumulative = cumulativeLeaderboard(publicData, state.activeSetId);
      if (!pubCumulative.length) return;
      const publicSection = document.createElement("div");
      publicSection.innerHTML = `
        <h4 style="margin-top:18px;">Public Ranking</h4>
        <ol>
          ${pubCumulative.slice(0, 20).map((item, idx) => `
            <li>
              <span>${idx + 1}. ${escapeHtml(item.name)}</span>
              <b>${item.accuracy}%</b>
              <small>${item.correct}/${item.total}</small>
            </li>
          `).join("")}
        </ol>
      `;
      els.rankingContent.append(publicSection);
    });
  }).catch(() => {});
}

function hideRanking() {
  els.rankingPanel.hidden = true;
  els.shuffleBtn.disabled = false;
  els.resetBtn.disabled = false;

  if (state.completed) {
    els.resultPanel.hidden = false;
  } else if (state.playerName) {
    els.quizPanel.hidden = false;
  } else {
    els.startPanel.hidden = false;
  }
}

function startQuiz() {
  state.questionIndex = 0;
  state.currentSelection = new Set();
  state.questions = buildQuestions();
  state.answers.clear();
  state.totalAttempts = 0;
  state.correctAttempts = 0;
  state.streak = 0;
  state.completed = false;
  els.resultPanel.hidden = true;
  els.rankingPanel.hidden = true;
  els.quizPanel.hidden = false;
  updateSetDisplay();
  renderQuestion();
}

function updateSetDisplay() {
  const activeSet = getActiveSet();
  els.activeSetLabel.textContent = activeSet.label;
  els.activeSetMeta.textContent = "20 questions";
  els.categoryLabel.textContent = activeSet.label;
  els.questionTotal.textContent = `/ ${activeSet.ids.length * 2}`;
  els.categoryButtons.forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.setId === state.activeSetId));
  });
}

function selectCategorySet(setId) {
  if (!categorySets[setId] || setId === state.activeSetId) return;
  state.activeSetId = setId;
  updateSetDisplay();
  if (state.playerName) {
    startQuiz();
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

els.nicknameInput.addEventListener("input", () => {
  const name = els.nicknameInput.value.trim().toLowerCase();
  if (name && hasPassword(name)) {
    els.passwordRow.hidden = false;
    els.passwordHint.textContent = "This nickname has scores. Enter password to continue.";
  } else {
    els.passwordRow.hidden = false;
    els.passwordHint.textContent = "";
  }
});

els.nameForm.addEventListener("submit", startWithName);
els.prevBtn.addEventListener("click", prevQuestion);
els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", nextQuestion);
els.shuffleBtn.addEventListener("click", resetAll);
els.resetBtn.addEventListener("click", resetAll);
els.restartBtn.addEventListener("click", resetAll);
els.rankingBtn.addEventListener("click", showRanking);
els.rankingCloseBtn.addEventListener("click", hideRanking);
els.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategorySet(button.dataset.setId));
});

els.quizPanel.hidden = true;
updateSetDisplay();
