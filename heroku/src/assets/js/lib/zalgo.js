/**
 * (c) https://github.com/Marak/zalgo.js/blob/master/zalgo.js
 * with custom changes
 */

var soul = {
  "up": [
    '̍', '̎', '̄', '̅',
    '̿', '̑', '̆', '̐',
    '͒', '͗', '͑', '̇',
    '̈', '̊', '͂', '̓',
    '̈', '͊', '͋', '͌',
    '̃', '̂', '̌', '͐',
    '̀', '́', '̋', '̏',
    '̒', '̓', '̔', '̽',
    '̉', 'ͣ', 'ͤ', 'ͥ',
    'ͦ', 'ͧ', 'ͨ', 'ͩ',
    'ͪ', 'ͫ', 'ͬ', 'ͭ',
    'ͮ', 'ͯ', '̾', '͛',
    '͆', '̚'
  ],
  "down": [
    '̖', '̗', '̘', '̙',
    '̜', '̝', '̞', '̟',
    '̠', '̤', '̥', '̦',
    '̩', '̪', '̫', '̬',
    '̭', '̮', '̯', '̰',
    '̱', '̲', '̳', '̹',
    '̺', '̻', '̼', 'ͅ',
    '͇', '͈', '͉', '͍',
    '͎', '͓', '͔', '͕',
    '͖', '͙', '͚', '̣'
  ],
  "mid": [
    '̕', '̛', '̀', '́',
    '͘', '̡', '̢', '̧',
    '̨', '̴', '̵', '̶',
    '͜', '͝', '͞',
    '͟', '͠', '͢', '̸',
    '̷', '͡', ' ҉'
  ]
};

var all = [].concat(soul.up, soul.down, soul.mid);

function randomNumber(range) {
  r = Math.floor(Math.random() * range);
  return r;
};

function is_char(character) {
  var bool = false;
  all.filter(function (i) {
    bool = (i == character);
  });
  return bool;
}



function zalgo(text, options) {
  result = '';

  options = options || {};
  options["up"] = options["up"] || true;
  options["mid"] = options["mid"] || true;
  options["down"] = options["down"] || true;
  options["size"] = options["size"] || "maxi";
  var counts;

  text = text.split('');
  for (var l in text) {
    if (is_char(l)) {
      continue;
    }
    result = result + text[l];

    counts = {
      "up": 0,
      "down": 0,
      "mid": 0
    };

    switch (options.size) {
      case 'mini':
        counts.up = randomNumber(2);
        counts.min = randomNumber(1);
        counts.down = randomNumber(4);
        break;
      case 'maxi':
        counts.up = randomNumber(16) + 3;
        counts.min = randomNumber(4) + 1;
        counts.down = randomNumber(64) + 3;
        break;
      default:
        counts.up = randomNumber(8) + 1;
        counts.mid = randomNumber(6) / 2;
        counts.down = randomNumber(8) + 1;
        break;
    }

    var arr = ["up", "mid", "down"];
    for (var d in arr) {
      var index = arr[d];
      for (var i = 0; i <= counts[index]; i++) {
        if (options[index]) {

          // Grayscale random color
          /*
          var value = Math.random() * 0xFF | 0;
          var grayscale = (value << 16) | (value << 8) | value;
          var color = '#' + grayscale.toString(16);
          */

          result = result + '<font color="#ccc">' + soul[index][randomNumber(soul[index].length)] + '</font>';
        }
      }
    }
  }
  return result;
};