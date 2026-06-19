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

const state = {
  questionIndex: 0,
  questions: [],
  answers: new Map(),
  currentSelection: new Set(),
  totalAttempts: 0,
  correctAttempts: 0,
  streak: 0,
};

const els = {
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

function showFeedback(correct, question) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${correct ? "ok" : "no"}`;
  els.feedback.textContent = correct
    ? `Correct. ${question.prompt} matches ${question.answer.join(" / ")}.`
    : `Incorrect. ${question.prompt} matches ${question.answer.join(" / ")}.`;
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

function startQuiz() {
  state.questionIndex = 0;
  state.currentSelection = new Set();
  state.questions = buildQuestions();
  renderQuestion();
}

function nextQuestion() {
  if (state.questionIndex < state.questions.length - 1) {
    state.questionIndex += 1;
    state.currentSelection = new Set();
    renderQuestion();
  }
}

function prevQuestion() {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    state.currentSelection = new Set();
    renderQuestion();
  }
}

function resetAll() {
  state.answers.clear();
  state.totalAttempts = 0;
  state.correctAttempts = 0;
  state.streak = 0;
  startQuiz();
}

els.prevBtn.addEventListener("click", prevQuestion);
els.submitBtn.addEventListener("click", submitAnswer);
els.nextBtn.addEventListener("click", nextQuestion);
els.shuffleBtn.addEventListener("click", resetAll);
els.resetBtn.addEventListener("click", resetAll);

startQuiz();
