module.exports = function (a, b, c) {
  var max = undefined;
  var min = 0;
  var opts = {};

  if (typeof(c) === 'object') {
    opts = c;
    min = a;
    max = b;
  } else if (typeof(b) === 'object') {
    opts = b;
    max = a;
  } else if (b === undefined) {
    if (a === undefined) {
      return Math.random();
    } else {
      max = a;
    }
  }

  if (opts.inclusive && !opts.real) {
    max += 1;
  }

  if (opts.real) {
    return (Math.random() * (max - min)) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

module.exports.choice = function (list) {
  return list[module.exports(list.length)];
};
