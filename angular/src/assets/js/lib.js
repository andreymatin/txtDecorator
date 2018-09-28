/**
 * Reverse string
 */
String.prototype.reverse = function () {
  var str = this,
    newString = new String();
  for (n = str.length; n >= 0; n--) {
    newString += str.charAt(n);
  }
  return newString;
}




/**
 * WordWrap
 * https://stackoverflow.com/questions/14484787/wrap-text-in-javascript
 *
 * @param {W} str
 * @param {*} maxWidth
 */
function wordWrap(str, maxWidth) {
  var newLineStr = "\n";
  done = false;
  res = '';
  do {
    found = false;
    // Inserts new line at first whitespace of the line
    for (i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join('');
        str = str.slice(i + 1);
        found = true;
        break;
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join('');
      str = str.slice(maxWidth);
    }

    if (str.length < maxWidth)
      done = true;
  } while (!done);

  return res + str;
}

function testWhite(x) {
  var white = new RegExp(/^\s$/);
  return white.test(x.charAt(0));
};





/**
 * Copy to Clipboard
 * https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
 * @param {string} str
 */
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};




/**
 * Return Line with Breaker and Spacer
 *
 * @param {*} currentLine
 * @param {*} nextLine
 */
function makeLineBreak(currentLine, nextLine) {
  if (currentLine == '') {
    currentLine = '\n';
  } else {
    if (nextLine != '' && nextLine != 'undefined') {
      currentLine += ' ';
    } else {
      currentLine += '\n';
    }
  }

  /**
   * breaks after "--"
   */
  if (((currentLine[0] == '-') && (nextLine[0] == '-')) || ((currentLine[0] == '—') && (nextLine[0] == '—'))) {
    if (nextLine != '' && nextLine != 'undefined') {
      currentLine += '\n';
    } else {
      currentLine += ' ';
    }
  }

  return currentLine;
}




/**
 * Flip text
 * https://snipplr.com/view/4215/flip-your-text-with-charsets/
 */
const flipString = str => {

  var flipTable = {

    A: 'ꓯ',
    B: 'ꓭ',
    C: 'ꓛ',
    D: 'ꓷ',
    E: 'Ǝ',
    F: 'ꓞ',
    G: 'ꓨ',
    H: 'H',
    I: 'I',
    J: 'ſ',
    K: 'ꓘ',
    L: 'ꓶ',
    M: 'W',
    N: 'N',
    O: 'O',
    P: 'ꓒ',
    Q: 'Ὸ',
    R: 'ꓤ',
    S: 'S',
    T: 'ꓕ',
    U: 'ꓵ',
    V: 'ꓥ',
    W: 'M',
    X: 'X',
    Y: '⅄',
    Z: 'Z',
    a: '\u0250',
    b: 'q',
    c: '\u0254', //open o -- from pne
    d: 'p',
    e: '\u01DD',
    f: '\u025F', //from pne
    g: '\u0183',
    h: '\u0265',
    i: '\u0131', //from pne
    j: '\u027E',
    k: '\u029E',
    l: 'ๅ',
    m: '\u026F',
    n: 'u',
    r: '\u0279',
    t: '\u0287',
    v: '\u028C',
    w: '\u028D',
    y: '\u028E',
    '.': '\u02D9',
    '[': ']',
    '(': ')',
    '{': '}',
    '?': '\u00BF', //from pne
    '!': '\u00A1',
    "\'": ',',
    '<': '>',
    '_': '\u203E',
    ';': '\u061B',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235'
  }

  for (i in flipTable) {
    flipTable[flipTable[i]] = i
  }


  var last = str.length - 1;
  //Thanks to Brook Monroe for the
  //suggestion to use Array.join
  var result = new Array(str.length)
  for (var i = last; i >= 0; --i) {
    var c = str.charAt(i)
    var r = flipTable[c]
    result[last - i] = r != undefined ? r : c
  }

  return result.join('')
}


/**
 * Transliterating cyrillic to latin
 * https://stackoverflow.com/questions/11404047/transliterating-cyrillic-to-latin-with-javascript-function
 */
function transliterate(word) {
  var a = {
    "Ё": "YO",
    "Й": "I",
    "Ц": "TS",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "Щ": "SCH",
    "З": "Z",
    "Х": "H",
    "Ъ": "'",
    "ё": "yo",
    "й": "i",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "ъ": "'",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "a",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "Э": "E",
    "ф": "f",
    "ы": "i",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "э": "e",
    "Я": "Ya",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "'",
    "Б": "B",
    "Ю": "YU",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "ь": "'",
    "б": "b",
    "ю": "yu"
  };

  return word.split('').map(function (char) {
    return a[char] || char;
  }).join("");
}



/**
 * Convert Ru to GSM/Bdl
 *
 * @param {string} val
 */
const makeBdl = val => {
  const gsm = ['A', 'a', '6', '6', 'B', 'ß', 'Γ', 'r', 'Δ', 'g', 'E', 'e', 'É', 'é', '}|{', 'Ψ', '3', '3', 'U', 'u', 'U*', 'u*', 'K', 'k', 'JI', 'Λ', 'M', 'M', 'H', 'H', 'O', 'o', 'Π', 'n', 'P', 'p', 'C', 'c', 'T', 'm', 'Y', 'y', 'Φ', 'qp', 'X', 'x', 'ü', 'ü', '4', '4', 'LLI', 'w', 'LLI¿', 'w¿', 'b', 'b', 'bl', 'bl', "'", "'", '€', '-)', 'IΘ', 'IΘ', '9l', '9l'];
  const rus = ['А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ь', 'ь', 'Ы', 'ы', 'Ъ', 'ъ', 'Э', 'э', 'Ю', 'ю', 'Я', 'я'];
  let text, res = '';

  text = val;
  for (i = 0; i < text.length; i++) {
    c = text.charAt(i);
    for (j = 0; j < rus.length && c != rus[j]; j++);
    if (j < rus.length) res += gsm[j];
    else res += c;
  }

  return res;
}

/**
 * Implement Fractur font
 * @param {string} val
 */
const makeFraktur = val => {
  const unicoder = new Unicoder();
  res = unicoder.translate(val, 'fraktur')
  return res;
}



/**
 * Hilsls effect for text
 * @param {string} str
 */
const makeHills = str => {
  const len = str.length;
  let res = '';

  for (var i = 0; i < len; i++) {
    let oneOrZero = (Math.random() > 0.5) ? 1 : 0;

    if (oneOrZero) {
      res += str.charAt(i).toUpperCase();
    } else {
      res += str.charAt(i);
    }
  }

  return res;
}







/**
 *  Remove line breaks
 */
const makeRemoveLineBreaks = str => {
  var lines = str.split('\n');
  var len = lines.length
  var newLines = '';

  for (var i = 0; i < len; i++) {
    let currentLine = lines[i];
    let nextLine = lines[i + 1];

    currentLine = makeLineBreak(currentLine, nextLine);
    newLines = newLines.concat(currentLine);
  }

  return newLines;
}

/**
 *  Correct line length
 */

const makeCorrectLineLength = str => {
  const maxWidth = 80;
  var correctLines = makeRemoveLineBreaks(str);
  var lines = correctLines.split('\n');
  var ln = lines.length;
  var newStr = '';

  for (var i = 0; i < ln; i++) {
    let currentLine = lines[i];
    let nextLine = lines[i + 1];
    currentLine = makeLineBreak(currentLine, nextLine);
    let str = wordWrap(currentLine, maxWidth);
    newStr = newStr.concat(str);
  }

  return newStr;
}



/**
 * Text mirror reverse
 */
const makeTextMirror = str => {
  let lines = str.split('\n');
  let ln = lines.length
  let newLines = '';

  for (var i = 0; i < ln; i++) {
    let line = lines[i];
    line = line.reverse();

    newLines = newLines.concat(line, '\n');
  }

  return newLines;
}