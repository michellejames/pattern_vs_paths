'use strict';

console.log("Hello World from app.js!");

var fs = require('fs');
fs.readFile('../../input_file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  // console.log(data);

  var lines = data.split('\n');

  var integerN = parseInt(lines[0]); //20
  var integerM = parseInt(lines[integerN + 1]);

  var pattern = [];
  var paths = [];

  for (var i = 1; i <= integerN; i++) {
    pattern.push(lines[i]);
  }

  for (var j = integerN + 2; j <= integerN + integerM + 1; j++) {
    paths.push(lines[j]);
  }

  //Algorithmic Complexity of two nested loops: O(n²).
  //The inner loop is executed i times, for each value of i. The outer loop is executed n times. --> O(n²).

  for (var i = pattern.length - 1; i >= 0; i--) {

    for (var j = paths.length - 1; j >= 0; j--) {

      var cleanPath = removeSlashes(paths[j]);

      var matches = compare(pattern[i], cleanPath);

      if (matches) {
        console.log('pattern and path that match: ' + pattern[i] + ' and ' + cleanPath);
      }
    }
  }
});

function compare(pattern, paths) {

  var splitPattern = pattern.split(",");
  var splitPaths = paths.split("/");
  // console.log(splitPaths, splitPattern);

  if (splitPattern.length != splitPaths.length) {
    return false;
  }

  for (var i = splitPattern.length - 1; i >= 0; i--) {
    if (splitPattern[i] == "*") {
      continue;
    }

    if (splitPattern[i] != splitPaths[i]) {
      return false;
    }
  }

  return true;
}

function removeSlashes(path) {

  if (path.charAt(0) == "/") {
    path = path.substr(1);
  }

  if (path.substr(-1) == "/") {
    path = path.slice(0, -1);
  }

  return path;
}
//# sourceMappingURL=main.js.map
