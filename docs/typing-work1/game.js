////////////////////////////////////////////////////////
// TYPINGMASTER  –  game.js
////////////////////////////////////////////////////////

/* ===================================================
   1. 問題データ（50問・動植物・食べ物・乗り物ミックス）
=================================================== */
const WORD_LIST = [
  { kana: 'りんご',       roman: 'ringo'       },
  { kana: 'バナナ',       roman: 'banana'      },
  { kana: 'いちご',       roman: 'ichigo'      },
  { kana: 'ぶどう',       roman: 'budou'       },
  { kana: 'もも',         roman: 'momo'        },
  { kana: 'みかん',       roman: 'mikan'       },
  { kana: 'すいか',       roman: 'suika'       },
  { kana: 'なし',         roman: 'nashi'       },
  { kana: 'かき',         roman: 'kaki'        },
  { kana: 'さくらんぼ',   roman: 'sakuranbo'   },
  { kana: 'ねこ',         roman: 'neko'        },
  { kana: 'いぬ',         roman: 'inu'         },
  { kana: 'うさぎ',       roman: 'usagi'       },
  { kana: 'きつね',       roman: 'kitsune'     },
  { kana: 'くま',         roman: 'kuma'        },
  { kana: 'とら',         roman: 'tora'        },
  { kana: 'ぞう',         roman: 'zou'         },
  { kana: 'きりん',       roman: 'kirin'       },
  { kana: 'さる',         roman: 'saru'        },
  { kana: 'たぬき',       roman: 'tanuki'      },
  { kana: 'ぱんだ',       roman: 'panda'       },
  { kana: 'らいおん',     roman: 'raion'       },
  { kana: 'さくら',       roman: 'sakura'      },
  { kana: 'たんぽぽ',     roman: 'tanpopo'     },
  { kana: 'ひまわり',     roman: 'himawari'    },
  { kana: 'ばら',         roman: 'bara'        },
  { kana: 'つばき',       roman: 'tsubaki'     },
  { kana: 'もみじ',       roman: 'momiji'      },
  { kana: 'すし',         roman: 'sushi'       },
  { kana: 'ラーメン',     roman: 'raamen'      },
  { kana: 'うどん',       roman: 'udon'        },
  { kana: 'そば',         roman: 'soba'        },
  { kana: 'てんぷら',     roman: 'tenpura'     },
  { kana: 'おにぎり',     roman: 'onigiri'     },
  { kana: 'たこやき',     roman: 'takoyaki'    },
  { kana: 'やきとり',     roman: 'yakitori'    },
  { kana: 'カレー',       roman: 'karee'       },
  { kana: 'ハンバーグ',   roman: 'hanbaagu'    },
  { kana: 'ぴざ',         roman: 'piza'        },
  { kana: 'けーき',       roman: 'keeki'       },
  { kana: 'じどうしゃ',   roman: 'jidousha'    },
  { kana: 'でんしゃ',     roman: 'densha'      },
  { kana: 'ひこうき',     roman: 'hikouki'     },
  { kana: 'ふね',         roman: 'fune'        },
  { kana: 'じてんしゃ',   roman: 'jitensha'    },
  { kana: 'バス',         roman: 'basu'        },
  { kana: 'タクシー',     roman: 'takushii'    },
  { kana: 'しんかんせん', roman: 'shinkansen'  },
  { kana: 'ロケット',     roman: 'roketto'     },
  { kana: 'ヘリコプター', roman: 'herikoputaa' },
];

/* ===================================================
   2. ひらがな→ローマ字 変換テーブル
      複数表記は配列で列挙。先頭がデフォルト表示。
=================================================== */
const KANA_MAP = [
  // ---- 濁音・半濁音 長め ----
  ['しゃ', ['sha', 'sya']],
  ['しぃ', ['syi']],
  ['しゅ', ['shu', 'syu']],
  ['しぇ', ['she', 'sye']],
  ['しょ', ['sho', 'syo']],
  ['ちゃ', ['cha', 'tya', 'cya']],
  ['ちぃ', ['tyi', 'cyi']],
  ['ちゅ', ['chu', 'tyu', 'cyu']],
  ['ちぇ', ['che', 'tye', 'cye']],
  ['ちょ', ['cho', 'tyo', 'cyo']],
  ['つぁ', ['tsa']],
  ['つぃ', ['tsi']],
  ['つぇ', ['tse']],
  ['つぉ', ['tso']],
  ['てぃ', ['thi']],
  ['でぃ', ['dhi']],
  ['てゅ', ['thu']],
  ['でゅ', ['dhu']],
  ['にゃ', ['nya']],
  ['にぃ', ['nyi']],
  ['にゅ', ['nyu']],
  ['にぇ', ['nye']],
  ['にょ', ['nyo']],
  ['ひゃ', ['hya']],
  ['ひぃ', ['hyi']],
  ['ひゅ', ['hyu']],
  ['ひぇ', ['hye']],
  ['ひょ', ['hyo']],
  ['びゃ', ['bya']],
  ['びゅ', ['byu']],
  ['びょ', ['byo']],
  ['ぴゃ', ['pya']],
  ['ぴゅ', ['pyu']],
  ['ぴょ', ['pyo']],
  ['みゃ', ['mya']],
  ['みゅ', ['myu']],
  ['みょ', ['myo']],
  ['りゃ', ['rya']],
  ['りゅ', ['ryu']],
  ['りょ', ['ryo']],
  ['ぎゃ', ['gya']],
  ['ぎゅ', ['gyu']],
  ['ぎょ', ['gyo']],
  ['じゃ', ['ja', 'zya', 'jya']],
  ['じぃ', ['zyi', 'jyi']],
  ['じゅ', ['ju', 'zyu', 'jyu']],
  ['じぇ', ['je', 'zye', 'jye']],
  ['じょ', ['jo', 'zyo', 'jyo']],
  ['ぢゃ', ['dya']],
  ['ぢゅ', ['dyu']],
  ['ぢょ', ['dyo']],
  ['ふぁ', ['fa']],
  ['ふぃ', ['fi', 'fyi']],
  ['ふぇ', ['fe', 'fye']],
  ['ふぉ', ['fo']],
  ['うぁ', ['wha']],
  ['うぃ', ['wi', 'whi']],
  ['うぇ', ['we', 'whe']],
  ['うぉ', ['who']],
  ['ゔぁ', ['va']],
  ['ゔぃ', ['vi']],
  ['ゔ',   ['vu']],
  ['ゔぇ', ['ve']],
  ['ゔぉ', ['vo']],
  // ---- 単独字 ----
  ['あ', ['a']],
  ['い', ['i', 'yi']],
  ['う', ['u', 'wu']],
  ['え', ['e']],
  ['お', ['o']],
  ['か', ['ka']],
  ['き', ['ki']],
  ['く', ['ku']],
  ['け', ['ke']],
  ['こ', ['ko']],
  ['さ', ['sa']],
  ['し', ['si', 'shi', 'ci']],
  ['す', ['su']],
  ['せ', ['se', 'ce']],
  ['そ', ['so']],
  ['た', ['ta']],
  ['ち', ['ti', 'chi']],
  ['つ', ['tu', 'tsu']],
  ['て', ['te']],
  ['と', ['to']],
  ['な', ['na']],
  ['に', ['ni']],
  ['ぬ', ['nu']],
  ['ね', ['ne']],
  ['の', ['no']],
  ['は', ['ha']],
  ['ひ', ['hi']],
  ['ふ', ['fu', 'hu']],
  ['へ', ['he']],
  ['ほ', ['ho']],
  ['ま', ['ma']],
  ['み', ['mi']],
  ['む', ['mu']],
  ['め', ['me']],
  ['も', ['mo']],
  ['や', ['ya']],
  ['ゆ', ['yu']],
  ['よ', ['yo']],
  ['ら', ['ra']],
  ['り', ['ri']],
  ['る', ['ru']],
  ['れ', ['re']],
  ['ろ', ['ro']],
  ['わ', ['wa']],
  ['ゐ', ['wi']],
  ['ゑ', ['we']],
  ['を', ['wo']],
  ['ん', ['nn', 'n\'', 'xn']],  // 子音前では n1字も許容（ロジック側で処理）
  ['が', ['ga']],
  ['ぎ', ['gi']],
  ['ぐ', ['gu']],
  ['げ', ['ge']],
  ['ご', ['go']],
  ['ざ', ['za']],
  ['じ', ['zi', 'ji']],
  ['ず', ['zu']],
  ['ぜ', ['ze']],
  ['ぞ', ['zo']],
  ['だ', ['da']],
  ['ぢ', ['di']],
  ['づ', ['du', 'dzu']],
  ['で', ['de']],
  ['ど', ['do']],
  ['ば', ['ba']],
  ['び', ['bi']],
  ['ぶ', ['bu']],
  ['べ', ['be']],
  ['ぼ', ['bo']],
  ['ぱ', ['pa']],
  ['ぴ', ['pi']],
  ['ぷ', ['pu']],
  ['ぺ', ['pe']],
  ['ぽ', ['po']],
  // ---- 小文字単独 ----
  ['ぁ', ['xa', 'la']],
  ['ぃ', ['xi', 'li']],
  ['ぅ', ['xu', 'lu']],
  ['ぇ', ['xe', 'le']],
  ['ぉ', ['xo', 'lo']],
  ['っ', ['xtu', 'xtsu', 'ltu', 'ltsu']],  // 子音重ねは別途処理
  ['ゃ', ['xya', 'lya']],
  ['ゅ', ['xyu', 'lyu']],
  ['ょ', ['xyo', 'lyo']],
  ['ー', ['-']],
  // ---- カタカナ（入力データに含まれるもの） ----
  ['ア', ['a']],
  ['イ', ['i']],
  ['ウ', ['u']],
  ['エ', ['e']],
  ['オ', ['o']],
  ['カ', ['ka']],
  ['キ', ['ki']],
  ['ク', ['ku']],
  ['ケ', ['ke']],
  ['コ', ['ko']],
  ['サ', ['sa']],
  ['シ', ['si', 'shi']],
  ['ス', ['su']],
  ['セ', ['se']],
  ['ソ', ['so']],
  ['タ', ['ta']],
  ['チ', ['ti', 'chi']],
  ['ツ', ['tu', 'tsu']],
  ['テ', ['te']],
  ['ト', ['to']],
  ['ナ', ['na']],
  ['ニ', ['ni']],
  ['ヌ', ['nu']],
  ['ネ', ['ne']],
  ['ノ', ['no']],
  ['ハ', ['ha']],
  ['ヒ', ['hi']],
  ['フ', ['fu', 'hu']],
  ['ヘ', ['he']],
  ['ホ', ['ho']],
  ['マ', ['ma']],
  ['ミ', ['mi']],
  ['ム', ['mu']],
  ['メ', ['me']],
  ['モ', ['mo']],
  ['ヤ', ['ya']],
  ['ユ', ['yu']],
  ['ヨ', ['yo']],
  ['ラ', ['ra']],
  ['リ', ['ri']],
  ['ル', ['ru']],
  ['レ', ['re']],
  ['ロ', ['ro']],
  ['ワ', ['wa']],
  ['ヲ', ['wo']],
  ['ン', ['nn', "n'", 'xn']],
  ['ガ', ['ga']],
  ['ギ', ['gi']],
  ['グ', ['gu']],
  ['ゲ', ['ge']],
  ['ゴ', ['go']],
  ['ザ', ['za']],
  ['ジ', ['zi', 'ji']],
  ['ズ', ['zu']],
  ['ゼ', ['ze']],
  ['ゾ', ['zo']],
  ['ダ', ['da']],
  ['ヂ', ['di']],
  ['ヅ', ['du']],
  ['デ', ['de']],
  ['ド', ['do']],
  ['バ', ['ba']],
  ['ビ', ['bi']],
  ['ブ', ['bu']],
  ['ベ', ['be']],
  ['ボ', ['bo']],
  ['パ', ['pa']],
  ['ピ', ['pi']],
  ['プ', ['pu']],
  ['ペ', ['pe']],
  ['ポ', ['po']],
  ['ャ', ['xya', 'lya']],
  ['ュ', ['xyu', 'lyu']],
  ['ョ', ['xyo', 'lyo']],
  ['ッ', ['xtu', 'xtsu']],
  ['ー', ['-']],
  ['ァ', ['xa', 'la']],
  ['ィ', ['xi', 'li']],
  ['ゥ', ['xu', 'lu']],
  ['ェ', ['xe', 'le']],
  ['ォ', ['xo', 'lo']],
];

/* ===================================================
   3. かな列 → ローマ字「受理パターン木」に変換
      word.roman を固定表示用に使い、
      実際の受理判定は KANA_MAP から動的生成する。
=================================================== */

/**
 * ひらがな/カタカナ文字列を「受理できる全ローマ字候補のリスト」に変換。
 * 返り値: [ [pat1, pat2, ...], ... ]  各要素は1かな分の候補群
 *
 * っ/ッ の子音重ね、ん/ン の n1字対応も扱う。
 */
function kanaToRomanPatterns(kana) {
  // KANA_MAP をMapに変換（長さ降順でマッチ）
  const map = new Map(KANA_MAP);

  const result = []; // [ { patterns: string[], display: string } ]

  let i = 0;
  while (i < kana.length) {
    // 2文字マッチ優先
    const two = kana.slice(i, i + 2);
    const one = kana.slice(i, i + 1);

    if (two.length === 2 && map.has(two)) {
      result.push({ patterns: map.get(two), display: map.get(two)[0] });
      i += 2;
    } else if (map.has(one)) {
      // っ/ッ は次の子音を重ねる形も許可
      if (one === 'っ' || one === 'ッ') {
        const nextOne = kana[i + 1] || '';
        const nextTwo = kana.slice(i + 1, i + 3);
        const nextPats = nextTwo.length === 2 && map.has(nextTwo)
          ? map.get(nextTwo)
          : map.has(nextOne) ? map.get(nextOne) : [];

        // 子音重ね候補: 次パターンの先頭子音1文字のみ（表示・入力ともに1文字分）
        // ト='to' → っ側は't'だけ担当し、ト側の'to'と合わせて'tto'になる
        const singleConsonants = [...new Set(
          nextPats
            .filter(p => /^[bcdfghjklmnpqrstvwxyz]/i.test(p))
            .map(p => p[0])
        )];

        const xtu = map.get(one); // ['xtu','xtsu',...]
        result.push({
          patterns: [...xtu, ...singleConsonants],
          display: singleConsonants[0] || xtu[0],
        });
      }
      // ん/ン は次が子音または末尾の場合 n1字許可
      else if (one === 'ん' || one === 'ン') {
        const next = kana[i + 1] || '';
        const vowels = 'aiueoy';
        const extraN = (!next || !vowels.includes(next.toLowerCase())) ? ['n'] : [];
        result.push({
          patterns: [...map.get(one), ...extraN],
          display: map.get(one)[0],
        });
      } else {
        result.push({ patterns: map.get(one), display: map.get(one)[0] });
      }
      i += 1;
    } else {
      // マップにない文字（英数字など）はそのまま
      result.push({ patterns: [one], display: one });
      i += 1;
    }
  }
  return result;
}

/* ===================================================
   4. タイピング判定エンジン
=================================================== */
class TypingEngine {
  /**
   * @param {string} kana  - ひらがな/カタカナ単語
   * @param {string} roman - 表示用ローマ字（WORD_LISTのもの）
   */
  constructor(kana, roman) {
    this.kana      = kana;
    this.roman     = roman;           // 表示専用
    this.segments  = kanaToRomanPatterns(kana); // [{patterns, display}]
    this.segIndex  = 0;               // 現在のかなセグメント位置
    this.inputBuf  = '';              // 現セグメントへの入力バッファ
    this.doneParts = [];              // 確定済みセグメントの display 文字列
  }

  get isComplete() {
    return this.segIndex >= this.segments.length;
  }

  /**
   * キー入力を処理する。
   * @returns {'hit'|'miss'|'complete'}
   */
  feed(key) {
    if (this.isComplete) return 'complete';

    const seg = this.segments[this.segIndex];
    const candidate = this.inputBuf + key;

    // いずれかのパターンが candidate で始まっているか確認
    const still = seg.patterns.filter(p => p.startsWith(candidate));
    if (still.length === 0) {
      // ミス
      return 'miss';
    }

    // 完全一致があるか確認
    const exact = still.filter(p => p === candidate);
    if (exact.length > 0) {
      // このセグメント確定
      this.doneParts.push(seg.display);
      this.segIndex++;
      this.inputBuf = '';

      if (this.isComplete) return 'complete';
      return 'hit';
    }

    // まだ入力途中
    this.inputBuf = candidate;
    return 'hit';
  }

  /**
   * 表示用：確定済み / 現在入力中 / 未入力 の 3パート
   */
  getDisplayParts() {
    const done = this.doneParts.join('');
    const current = this.isComplete ? '' : (this.segments[this.segIndex]?.display || '');
    const curDone = this.inputBuf;
    const curPending = current.slice(curDone.length);
    const pending = this.segments.slice(this.segIndex + 1).map(s => s.display).join('');

    return {
      done,
      curDone,
      curPending,
      pending,
    };
  }
}

/* ===================================================
   5. サウンド（Web Audio API）
=================================================== */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}

function playTypeSound() {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.07);
  } catch (_) {}
}

function playCorrectSound() {
  try {
    const ctx = getAudioCtx();
    const notes = [523, 659, 784]; // C5 E5 G5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      const t = ctx.currentTime + i * 0.07;
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.start(t);
      osc.stop(t + 0.18);
    });
  } catch (_) {}
}

/* ===================================================
   6. ゲーム本体
=================================================== */
const TOTAL_TIME = 60;

const screenStart  = document.getElementById('screen-start');
const screenGame   = document.getElementById('screen-game');
const screenResult = document.getElementById('screen-result');
const btnStart     = document.getElementById('btn-start');
const btnRetry     = document.getElementById('btn-retry');
const scoreEl      = document.getElementById('score');
const timeLeftEl   = document.getElementById('time-left');
const progressFill = document.getElementById('progress-fill');
const kanaDisplay  = document.getElementById('kana-display');
const romanDisplay = document.getElementById('roman-display');
const okFeedback   = document.getElementById('ok-feedback');
const resultScore  = document.getElementById('result-score');

let score = 0;
let timeLeft = TOTAL_TIME;
let timerInterval = null;
let engine = null;
let wordQueue = [];
let okTimer = null;

// シャッフル（Fisher-Yates）
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(screen) {
  [screenStart, screenGame, screenResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

/* ---- 開始 ---- */
function startGame() {
  score = 0;
  timeLeft = TOTAL_TIME;
  wordQueue = shuffle(WORD_LIST);
  progressFill.style.width = '100%';
  scoreEl.textContent = '0';
  timeLeftEl.textContent = TOTAL_TIME;

  showScreen(screenGame);
  loadNextWord();
  startTimer();

  document.addEventListener('keydown', onKeyDown);
}

/* ---- タイマー ---- */
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    progressFill.style.width = `${(timeLeft / TOTAL_TIME) * 100}%`;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

/* ---- 次の問題をロード ---- */
function loadNextWord() {
  if (wordQueue.length === 0) {
    // 全問終了してもタイマーは続く（時間切れまで待機）
    kanaDisplay.textContent = '';
    romanDisplay.innerHTML = '';
    return;
  }
  const word = wordQueue.shift();
  engine = new TypingEngine(word.kana, word.roman);
  kanaDisplay.textContent = word.kana;
  renderRoman();
}

/* ---- ローマ字表示の更新 ---- */
function renderRoman() {
  if (!engine) { romanDisplay.innerHTML = ''; return; }
  const { done, curDone, curPending, pending } = engine.getDisplayParts();
  romanDisplay.innerHTML =
    `<span class="roman-done">${done}${curDone}</span>` +
    `<span class="roman-pending">${curPending}${pending}</span>`;
}

/* ---- キー入力 ---- */
function onKeyDown(e) {
  if (!engine || engine.isComplete) return;
  // アルファベット・記号のみ受け付ける
  if (e.key.length !== 1) return;

  const result = engine.feed(e.key.toLowerCase());

  if (result === 'miss') {
    flashMiss();
  } else {
    playTypeSound();
    renderRoman();
    if (result === 'complete') {
      onWordComplete();
    }
  }
}

/* ---- 正解時 ---- */
function onWordComplete() {
  score++;
  scoreEl.textContent = score;
  playCorrectSound();
  showOkFeedback();
  loadNextWord();
}

/* ---- OK フィードバック ---- */
function showOkFeedback() {
  clearTimeout(okTimer);
  okFeedback.classList.add('show');
  okTimer = setTimeout(() => okFeedback.classList.remove('show'), 600);
}

/* ---- ミス点滅 ---- */
function flashMiss() {
  const pending = romanDisplay.querySelector('.roman-pending');
  if (!pending) return;
  pending.classList.remove('roman-miss');
  // reflow で再トリガー
  void pending.offsetWidth;
  pending.classList.add('roman-miss');
  setTimeout(() => pending.classList.remove('roman-miss'), 600);
}

/* ---- ゲーム終了 ---- */
function endGame() {
  clearInterval(timerInterval);
  document.removeEventListener('keydown', onKeyDown);
  engine = null;
  resultScore.textContent = `${score}問正解`;
  showScreen(screenResult);
}

/* ---- ボタンイベント ---- */
btnStart.addEventListener('click', startGame);
btnRetry.addEventListener('click', startGame);
