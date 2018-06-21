(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log("Hello World from app.js!");

var unique = require('uniq');
var fs = require('fs');

fs.readFile('input_file.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});

try {  
    var data = fs.readFileSync('input_file.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}


var pattern = [
		"*,2,3",
		"question, everything",
		"does, it, *",
		"mic, check",
		"a,b,c",
		"c,*,*",
		"5",
];

var patternLength = pattern.length;

var paths = [
		"/1/2/3",
		"question/everything/you/hear",
		"does/",
		"mic/check",
		"/a/b/c/",
		"3",
		"c,5,y",
];

var pathLength = paths.length;

for (var i = pattern.length - 1; i >= 0; i--) {


	for (var j = paths.length - 1; j >= 0; j--) {

		// console.log(pattern[i], paths[j]);
		
		var cleanPath = removeSlashes(paths[j]);

		var matches = compare(pattern[i], cleanPath);
		console.log(matches);

		if (matches) {
			console.log(`pattern and path that match: ${pattern[i]} and ${cleanPath}`);
		}
	}
}


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


},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
