// V502 Synonym Drill — Wordbook3 Quiz 200-299 (Integrated Panel)
var WB3_QUIZ_200 = WB3_QUIZ_200_299;

(function() {
  var LETTERS = ['A','B','C','D','E'];
  var SESSION_KEY = "v502-synonym-drill-session";
  var PROGRESS_KEY = "v502-synonym-drill-wb3quiz200-progress";
  var SCORE_KEY = "v502-synonym-drill-wb3quiz200-best";
  var cur = 0, score = 0, bestScore = 0;
  var answered = {}, picks = {}, scored = {};

  function getPlayer() {
    try { var s = JSON.parse(localStorage.getItem(SESSION_KEY)); return (s && s.name) ? s.name : null; } catch(e) { return null; }
  }

  function load() {
    var n = getPlayer(); if (!n) return;
    try { var r = localStorage.getItem(PROGRESS_KEY); if (!r) return; var a = JSON.parse(r), k = n.toLowerCase(); if (a[k]) { answered = a[k].answered || {}; picks = a[k].picks || {}; scored = a[k].scored || {}; score = a[k].score || 0; } } catch(e) {}
  }

  function save() {
    var n = getPlayer(); if (!n) return;
    try { var r = localStorage.getItem(PROGRESS_KEY), a = r ? JSON.parse(r) : {}; a[n.toLowerCase()] = { answered:answered, picks:picks, scored:scored, score:score, updated:Date.now() }; localStorage.setItem(PROGRESS_KEY, JSON.stringify(a)); } catch(e) {} if (typeof scheduleCloudSync === 'function') scheduleCloudSync();
  }

  function loadBest() {
    var n = getPlayer(); if (!n) return 0;
    try { var r = localStorage.getItem(SCORE_KEY); if (!r) return 0; var a = JSON.parse(r); return a[n.toLowerCase()] || 0; } catch(e) { return 0; }
  }

  function saveBest() {
    var n = getPlayer(); if (!n) return;
    try { var r = localStorage.getItem(SCORE_KEY), a = r ? JSON.parse(r) : {}; var k = n.toLowerCase(); if (score > (a[k]||0)) { a[k]=score; localStorage.setItem(SCORE_KEY,JSON.stringify(a)); } } catch(e) {}
  }

  function updateScore() {
    var c = Object.keys(scored).length;
    var el = document.getElementById('wb3qSc'); if (el) el.textContent = c + '/100';
    var bb = document.getElementById('wb3qBest'); if (bb && bestScore > 0) { bb.style.display = 'inline-block'; bb.textContent = '최고: ' + Math.max(c, bestScore) + '점'; }
  }

  window.showWb3Quiz200 = function() {
    if (typeof els !== 'undefined') {
      els.wordbook3Panel.hidden = true;
      els.wb3QuizPanel.hidden = false;
      els.startPanel.hidden = true;
      els.quizPanel.hidden = true;
    }
    if (cur >= 100) showResult();
    else render();
  };

  function render() {
    if (cur >= 100) { showResult(); return; }
    var q = WB3_QUIZ_200[cur];
    var pf = document.getElementById('wb3qPf'); if (pf) pf.style.width = (cur/100*100) + '%';
    var pt = document.getElementById('wb3qPt'); if (pt) pt.textContent = (cur+1) + '/100';
    updateScore();

    var wasCorrect = answered[cur+1] && picks[cur+1] === q.a;
    var wasWrong = answered[cur+1] && picks[cur+1] !== q.a;
    var h = '<div class="wb3q-card">';
    h += '<span class="wb3q-num">문제 ' + q.n + '</span>';
    if (wasCorrect) h += '<span class="wb3q-solved" style="color:#16a34a">✅ 맞춤</span>';
    else if (wasWrong) h += '<span class="wb3q-solved" style="color:#dc2626">❌ 오답 (재도전)</span>';
    h += '<div class="wb3q-text">' + q.q.replace(/______/g, '<span class="wb3q-blank">______</span>') + '</div>';

    var navHtml = '<div style="display:flex;gap:8px;margin-top:14px">';
    navHtml += '<button class="wb3q-btn sec" onclick="wb3Prev200()"' + (cur === 0 ? ' disabled style="opacity:0.4"' : '') + '>◀ 이전</button>';
    navHtml += '<span style="flex:1;text-align:center;font-size:0.8rem;color:#94a3b8;align-self:center">' + (cur+1) + ' / 100</span>';
    navHtml += '<button class="wb3q-btn sec" onclick="wb3Next200()"' + (cur === 99 ? ' disabled style="opacity:0.4"' : '') + '>다음 ▶</button>';
    navHtml += '</div>';

    if (wasCorrect) {
      h += '<div class="wb3q-opts">';
      q.o.forEach(function(o,i) { h += '<button class="wb3q-opt disabled' + (o === q.a ? ' correct' : '') + '"><span class="wb3q-letter">' + LETTERS[i] + '</span>' + o + '</button>'; });
      h += '</div><div class="wb3q-fb show ok">✅ 정답입니다!</div>';
      if (typeof EXPLANATIONS_200_299 !== 'undefined' && EXPLANATIONS_200_299[q.n]) {
        h += '<span class="wb3q-exp-toggle" onclick="var e=document.getElementById(\'wb3exp200-'+q.n+'\');e.classList.toggle(\'show\');this.textContent=e.classList.contains(\'show\')?\'📖 해설 접기\':\'📖 해설 보기\'">📖 해설 보기</span>';
        h += '<div class="wb3q-exp" id="wb3exp200-' + q.n + '">' + EXPLANATIONS_200_299[q.n] + '</div>';
      }
      h += navHtml;
    } else {
      if (wasWrong) h += '<div class="wb3q-fb show no" style="margin-bottom:10px">이전: <strong>' + picks[cur+1] + '</strong> (오답). 다시 풀어보세요.</div>';
      h += '<div class="wb3q-opts">';
      q.o.forEach(function(o,i) { h += '<button class="wb3q-opt" onclick="wb3Pick200(this,\'' + o.replace(/'/g,"\\'") + '\')" data-opt="' + o.replace(/"/g,'&quot;') + '"><span class="wb3q-letter">' + LETTERS[i] + '</span>' + o + '</button>'; });
      h += '</div><div class="wb3q-fb" id="wb3fb200"></div><div class="wb3q-exp" id="wb3exp200-'+q.n+'"></div>';
      h += '<span class="wb3q-exp-toggle" id="wb3tgl200-'+q.n+'" style="display:none" onclick="var e=document.getElementById(\'wb3exp200-'+q.n+'\');e.classList.toggle(\'show\');this.textContent=e.classList.contains(\'show\')?\'📖 해설 접기\':\'📖 해설 보기\'">📖 해설 보기</span>';
      h += navHtml;
    }
    h += '</div>';
    var area = document.getElementById('wb3QuizArea');
    if (area) area.innerHTML = h;
  }

  window.wb3Pick200 = function(btn, chosen) {
    var q = WB3_QUIZ_200[cur];
    if (answered[cur+1] && picks[cur+1] === q.a) return;
    var ok = (chosen === q.a);
    answered[cur+1] = true; picks[cur+1] = chosen;
    if (ok && !scored[cur+1]) { score++; scored[cur+1] = true; saveBest(); }
    save(); updateScore();

    var isNoExplain = (function(){ try { return localStorage.getItem('v502-noexplain') === '1'; } catch(e) { return false; } })();

    var btns = document.querySelectorAll('#wb3QuizArea .wb3q-opt');
    btns.forEach(function(b) {
      b.classList.add('disabled');
      if (b.dataset.opt === q.a) b.classList.add('correct');
      if (b === btn && !ok) b.classList.add('wrong');
    });
    var fb = document.getElementById('wb3fb200'); if (fb) { fb.classList.add('show'); fb.classList.add(ok?'ok':'no'); fb.textContent = ok ? '✅ 정답입니다!' : '❌ 오답입니다. 정답: ' + q.a; }

    if (typeof EXPLANATIONS_200_299 !== 'undefined' && EXPLANATIONS_200_299[q.n]) {
      var ed = document.getElementById('wb3exp200-'+q.n); if (ed) { ed.innerHTML = EXPLANATIONS_200_299[q.n]; ed.classList.add('show'); }
      var et = document.getElementById('wb3tgl200-'+q.n); if (et) { et.style.display = 'inline-block'; et.textContent = '📖 해설 접기'; }
    }

    if (isNoExplain) { setTimeout(function() { wb3SubmitNext200(); }, 400); }
  };

  window.wb3SubmitNext200 = function() {
    do { cur++; } while (cur < 100 && answered[cur+1] && picks[cur+1] === WB3_QUIZ_200[cur].a);
    if (cur >= 100) { showResult(); return; }
    render();
  };

  window.wb3Prev200 = function() { if (cur > 0) cur--; render(); };
  window.wb3Next200 = function() { if (cur < 99) cur++; else { cur = 100; showResult(); return; } render(); };

  function showResult() {
    updateScore();
    var area = document.getElementById('wb3QuizArea'); if (!area) return;
    var tc = Object.keys(scored).length;
    var h = '<div class="wb3q-result">';
    h += '<div class="wb3q-result-score">' + tc + ' / 100</div>';
    if (bestScore > 0) h += '<div class="wb3q-result-best">개인 최고: ' + bestScore + '점</div>';
    var pct = tc;
    var msg = pct >= 90 ? '🏆 탁월합니다!' : pct >= 70 ? '👍 좋은 성적입니다!' : pct >= 50 ? '📚 절반 이상! 해설을 복습하세요.' : '💪 단어장3을 다시 정독하고 재도전해보세요.';
    h += '<div class="wb3q-result-msg">' + msg + '</div>';
    h += '<button class="wb3q-btn" onclick="wb3Restart200()">🔄 다시 풀기</button>';
    h += '<button class="wb3q-btn sec" onclick="wb3Reset200()">🗑️ 초기화</button>';
    h += '</div>';
    area.innerHTML = h;
    // Also show title update
    var h3 = document.querySelector('#wb3QuizPanel h3');
    if (h3) h3.textContent = '📝 단어장3 단어문제 (101~200번 · 객관식)';
  }

  window.wb3Restart200 = function() {
    cur = 0; while (cur < 100 && answered[cur+1] && picks[cur+1] === WB3_QUIZ_200[cur].a) cur++;
    if (cur >= 100) showResult(); else render();
  };

  window.wb3Reset200 = function() {
    if (!confirm('200-299번 진행상황과 점수를 초기화하시겠습니까?')) return;
    answered = {}; picks = {}; scored = {}; score = 0; cur = 0; save();
    WB3_QUIZ_200.forEach(function(q){ for(var i=q.o.length-1;i>0;i-- ){ var j=Math.floor(Math.random()*(i+1)),t=q.o[i];q.o[i]=q.o[j];q.o[j]=t; } });
    render();
  };

  // Init
  load(); bestScore = loadBest();
  WB3_QUIZ_200.forEach(function(q){ for(var i=q.o.length-1;i>0;i-- ){ var j=Math.floor(Math.random()*(i+1)),t=q.o[i];q.o[i]=q.o[j];q.o[j]=t; } });
  cur = 0; while (cur < 100 && answered[cur+1] && picks[cur+1] === WB3_QUIZ_200[cur].a) cur++;
})();
