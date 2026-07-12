// V502 Synonym Drill — Wordbook3 Quiz 300-999 (Integrated Panel, factory)
// WB3_QUIZ_RANGES의 각 구간(50문제)에 대해 showWb3QuizR<start>() 등을 등록한다.
(function() {
  var LETTERS = ['A','B','C','D','E'];
  var SESSION_KEY = "v502-synonym-drill-session";

  function getPlayer() {
    try { var s = JSON.parse(localStorage.getItem(SESSION_KEY)); return (s && s.name) ? s.name : null; } catch(e) { return null; }
  }

  function makeQuiz(start, qs) {
    var N = qs.length;
    var end = start + 99;
    var label = (start + 1) + '-' + (end + 1);
    function displayNo(q) { return q.n + 1; }
    function expl(n) {
      try { return (typeof WB3_EXPL_RANGES !== 'undefined' && WB3_EXPL_RANGES[start] && WB3_EXPL_RANGES[start][n]) || null; } catch(e) { return null; }
    }
    var PROGRESS_KEY = "v502-synonym-drill-wb3quizR" + start + "-progress";
    var SCORE_KEY = "v502-synonym-drill-wb3quizR" + start + "-best";
    var cur = 0, score = 0, bestScore = 0;
    var answered = {}, picks = {}, scored = {};

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
      var el = document.getElementById('wb3qSc'); if (el) el.textContent = c + '/' + N;
      var bb = document.getElementById('wb3qBest'); if (bb && bestScore > 0) { bb.style.display = 'inline-block'; bb.textContent = '최고: ' + Math.max(c, bestScore) + '점'; }
    }

    function setTitle() {
      var h3 = document.querySelector('#wb3QuizPanel h3');
      if (h3) h3.textContent = '📝 단어장3 단어문제 (' + label + '번 · 객관식 5지선다)';
    }

    function render() {
      if (cur >= N) { showResult(); return; }
      setTitle();
      var q = qs[cur];
      var pf = document.getElementById('wb3qPf'); if (pf) pf.style.width = (cur/N*100) + '%';
      var pt = document.getElementById('wb3qPt'); if (pt) pt.textContent = (cur+1) + '/' + N;
      updateScore();

      var wasCorrect = answered[cur+1] && picks[cur+1] === q.a;
      var wasWrong = answered[cur+1] && picks[cur+1] !== q.a;
      var h = '<div class="wb3q-card">';

      if (wasCorrect) h += '<span class="wb3q-solved" style="color:#16a34a">✅ 맞춤</span>';
      else if (wasWrong) h += '<span class="wb3q-solved" style="color:#dc2626">❌ 오답 (재도전)</span>';
      h += '<div class="wb3q-text">' + q.q.replace(/______/g, '<span class="wb3q-blank">______</span>') + '</div>';

      var navHtml = '<div style="display:flex;gap:8px;margin-top:14px">';
      navHtml += '<button class="wb3q-btn sec" onclick="wb3PrevR' + start + '()"' + (cur === 0 ? ' disabled style="opacity:0.4"' : '') + '>◀ 이전</button>';
      navHtml += '<span style="flex:1;text-align:center;font-size:0.8rem;color:#94a3b8;align-self:center">' + (cur+1) + ' / ' + N + '</span>';
      navHtml += '<button class="wb3q-btn sec" onclick="wb3NextR' + start + '()"' + (cur === N-1 ? ' disabled style="opacity:0.4"' : '') + '>다음 ▶</button>';
      navHtml += '</div>';

      if (wasCorrect) {
        h += '<div class="wb3q-opts">';
        q.o.forEach(function(o,i) { h += '<button class="wb3q-opt disabled' + (o === q.a ? ' correct' : '') + '"><span class="wb3q-letter">' + LETTERS[i] + '</span>' + o + '</button>'; });
        h += '</div><div class="wb3q-fb show ok">✅ 정답입니다!</div>';
        if (expl(q.n)) {
          h += '<span class="wb3q-exp-toggle" onclick="var e=document.getElementById(\'wb3expR' + start + '-' + q.n + '\');e.classList.toggle(\'show\');this.textContent=e.classList.contains(\'show\')?\'📖 해설 접기\':\'📖 해설 보기\'">📖 해설 보기</span>';
          h += '<div class="wb3q-exp" id="wb3expR' + start + '-' + q.n + '">' + expl(q.n) + '</div>';
        }
        h += navHtml + '</div>';
      } else {
        h += '<div class="wb3q-opts">';
        q.o.forEach(function(o,i) { h += '<button class="wb3q-opt" onclick="wb3PickR' + start + '(this,\'' + o.replace(/'/g,"\\'") + '\')" data-opt="' + o.replace(/"/g,'&quot;') + '"><span class="wb3q-letter">' + LETTERS[i] + '</span>' + o + '</button>'; });
        h += '</div><div class="wb3q-fb" id="wb3fbR' + start + '"></div><div class="wb3q-exp" id="wb3expR' + start + '-' + q.n + '"></div>';
        h += '<span class="wb3q-exp-toggle" id="wb3tglR' + start + '-' + q.n + '" style="display:none" onclick="var e=document.getElementById(\'wb3expR' + start + '-' + q.n + '\');e.classList.toggle(\'show\');this.textContent=e.classList.contains(\'show\')?\'📖 해설 접기\':\'📖 해설 보기\'">📖 해설 보기</span>';
        h += navHtml + '</div>';
      }
      var area = document.getElementById('wb3QuizArea'); if (area) area.innerHTML = h;
    }

    function showResult() {
      setTitle();
      updateScore();
      var area = document.getElementById('wb3QuizArea'); if (!area) return;
      var pf = document.getElementById('wb3qPf'); if (pf) pf.style.width = '100%';
      var tc = Object.keys(scored).length;
      var h = '<div class="wb3q-result">';
      h += '<div class="wb3q-result-score">' + tc + ' / ' + N + '</div>';
      if (bestScore > 0) h += '<div class="wb3q-result-best">개인 최고: ' + bestScore + '점</div>';
      var pct = tc / N * 100;
      var msg = pct >= 90 ? '🏆 탁월합니다!' : pct >= 70 ? '👍 좋은 성적입니다!' : pct >= 50 ? '📚 절반 이상! 오답을 복습하세요.' : '💪 단어장3을 다시 정독하고 재도전해보세요.';
      h += '<div class="wb3q-result-msg">' + msg + '</div>';
      h += '<button class="wb3q-btn" onclick="wb3RestartR' + start + '()">🔄 다시 풀기</button>';
      h += '<button class="wb3q-btn sec" onclick="wb3ResetR' + start + '()">🗑️ 초기화</button>';
      h += '<table class="wb3q-review"><tr><th>번호</th><th>정답</th><th>내 답</th></tr>';
      qs.forEach(function(q,i) {
        var mine = picks[i+1] || '-';
        var cls = !answered[i+1] ? '' : (picks[i+1] === q.a ? 'wb3q-rc' : 'wb3q-rw');
        h += '<tr><td>' + displayNo(q) + '</td><td>' + q.a + '</td><td class="' + cls + '">' + mine + '</td></tr>';
      });
      h += '</table></div>';
      area.innerHTML = h;
    }

    function shuffle() {
      qs.forEach(function(q){ for(var i=q.o.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)),t=q.o[i];q.o[i]=q.o[j];q.o[j]=t; } });
    }

    function skipSolved() {
      cur = 0; while (cur < N && answered[cur+1] && picks[cur+1] === qs[cur].a) cur++;
    }

    window['showWb3QuizR' + start] = function() {
      if (typeof els !== 'undefined') {
        els.wordbook3Panel.hidden = true;
        els.wb3QuizPanel.hidden = false;
        els.startPanel.hidden = true;
        els.quizPanel.hidden = true;
      }
      if (cur >= N) showResult();
      else render();
    };

    window['wb3PickR' + start] = function(btn, chosen) {
      var q = qs[cur];
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
      var fb = document.getElementById('wb3fbR' + start); if (fb) { fb.classList.add('show'); fb.classList.add(ok?'ok':'no'); fb.textContent = ok ? '✅ 정답입니다!' : '❌ 오답입니다. 정답: ' + q.a; }

      if (expl(q.n)) {
        var ed = document.getElementById('wb3expR' + start + '-' + q.n); if (ed) { ed.innerHTML = expl(q.n); ed.classList.add('show'); }
        var et = document.getElementById('wb3tglR' + start + '-' + q.n); if (et) { et.style.display = 'inline-block'; et.textContent = '📖 해설 접기'; }
      }

      if (isNoExplain) { setTimeout(function() { window['wb3SubmitNextR' + start](); }, 400); }
    };

    window['wb3SubmitNextR' + start] = function() {
      do { cur++; } while (cur < N && answered[cur+1] && picks[cur+1] === qs[cur].a);
      if (cur >= N) { showResult(); return; }
      render();
    };

    window['wb3PrevR' + start] = function() { if (cur > 0) cur--; render(); };
    window['wb3NextR' + start] = function() { if (cur < N-1) cur++; else { cur = N; showResult(); return; } render(); };

    window['wb3RestartR' + start] = function() {
      skipSolved();
      if (cur >= N) showResult(); else render();
    };

    window['wb3ResetR' + start] = function() {
      if (!confirm(label + '번 진행상황과 점수를 초기화하시겠습니까?')) return;
      answered = {}; picks = {}; scored = {}; score = 0; cur = 0; save();
      shuffle();
      render();
    };

    // Init
    load(); bestScore = loadBest();
    shuffle();
    skipSolved();
  }

  if (typeof WB3_QUIZ_RANGES !== 'undefined') {
    Object.keys(WB3_QUIZ_RANGES).forEach(function(k) {
      makeQuiz(parseInt(k, 10), WB3_QUIZ_RANGES[k]);
    });
  }
})();
