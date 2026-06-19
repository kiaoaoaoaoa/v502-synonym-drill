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
};

const leaderboardKey = "v502-synonym-drill-leaderboard";

const state = {
  questionIndex: 0,
  questions: [],
  answers: new Map(),
  currentSelection: new Set(),
  playerName: "",
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
  playerNameLabel: document.querySelector("#playerNameLabel"),
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
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function allWords() {
  return categories.flatMap((category) =>
    category.words.map((word) => ({
      word,
      categoryId: category.id,
    })),
  );
}

function buildQuestions() {
  const bank = allWords();
  return shuffle(
    categories.flatMap((category) => {
      const words = shuffle(category.words);
      return [0, 1].map((round) => {
        const prompt = words[round % words.length];
        const answer = [words[(round + 1) % words.length], words[(round + 2) % words.length]];
        const distractors = [];

        for (const item of shuffle(bank.filter((entry) => entry.categoryId !== category.id))) {
          if (item.word === prompt || answer.includes(item.word) || distractors.includes(item.word)) continue;
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

  els.categoryLabel.textContent = "Categories 001-010";
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

function showFeedback(correct, question) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${correct ? "ok" : "no"}`;
  const optionRows = question.options.map((word) => {
    const status = question.answer.includes(word) ? "Answer" : "Distractor";
    return `<li><b>${escapeHtml(word)}</b><span>${status}</span><em>${escapeHtml(wordMeanings[word] || "No note available.")}</em></li>`;
  }).join("");

  els.feedback.innerHTML = `
    <strong>${correct ? "Correct" : "Incorrect"}.</strong>
    <p>${escapeHtml(question.prompt)} matches ${escapeHtml(question.answer.join(" / "))}.</p>
    <ul class="explain-list">${optionRows}</ul>
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

function sortedLeaderboard(entries) {
  return [...entries].sort((a, b) =>
    b.accuracy - a.accuracy ||
    b.correct - a.correct ||
    new Date(a.completedAt) - new Date(b.completedAt),
  );
}

function completeQuiz() {
  if (state.completed || state.answers.size !== state.questions.length) return;
  state.completed = true;

  const accuracy = Math.round((state.correctAttempts / state.questions.length) * 100);
  const entry = {
    name: state.playerName,
    correct: state.correctAttempts,
    total: state.questions.length,
    accuracy,
    completedAt: new Date().toISOString(),
  };
  const leaderboard = sortedLeaderboard([...readLeaderboard(), entry]).slice(0, 20);
  writeLeaderboard(leaderboard);
  const rank = leaderboard.findIndex((item) => item.completedAt === entry.completedAt) + 1;

  els.quizPanel.hidden = true;
  els.resultPanel.hidden = false;
  els.resultTitle.textContent = `${state.playerName}'s Result`;
  els.resultSummary.textContent = `${state.correctAttempts}/${state.questions.length} correct - ${accuracy}% accuracy - Rank #${rank}`;
  els.leaderboard.innerHTML = `
    <h4>Local Ranking</h4>
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
  els.quizPanel.hidden = false;
  renderQuestion();
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

  state.playerName = name;
  els.playerNameLabel.textContent = name;
  els.startPanel.hidden = true;
  startQuiz();
}

els.nameForm.addEventListener("submit", startWithName);
els.prevBtn.addEventListener("click", prevQuestion);
els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", nextQuestion);
els.shuffleBtn.addEventListener("click", resetAll);
els.resetBtn.addEventListener("click", resetAll);
els.restartBtn.addEventListener("click", resetAll);

els.quizPanel.hidden = true;
