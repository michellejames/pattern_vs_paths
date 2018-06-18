"use strict";

console.log("Hello World from app.js!");

var pattern = ["*,2,3", "question, everything", "does, it, *", "mic, check", "a,b,c", "c,*,*", "5"];

var patternLength = pattern.length;

var paths = ["/1/2/3", "question/everything/you/hear", "does/", "mic/check", "/a/b/c/", "3", "c,5,y"];

var pathLength = paths.length;

for (var i = paths.length - 1; i >= 0; i--) {
	var checkForSlash = function checkForSlash() {
		//Check if first letter is a slash
		if (paths[i].charAt(0) == "/") {
			var updatedStartPath = paths[i].substr(1);

			if (updatedStartPath.substr(-1) == "/") {
				var finalStartPath = updatedStartPath.slice(0, -1);
				console.log(finalStartPath);
			}
		}

		//Check if last letter is a slash
		if (paths[i].substr(-1) == "/") {
			var updatedEndPath = paths[i].slice(0, -1);

			if (updatedEndPath.charAt(0) == "/") {
				var finalEndPath = updatedEndPath.substr(1);
				console.log(finalEndPath);
			}
		}
	};

	var replaceSlashes = function replaceSlashes() {
		var replacedPath = paths[i].replace(/\//g, ",");
		// console.log(replacedPath);

		//Check if first letter is a comma
		if (replacedPath.charAt(0) == ",") {
			var transformedStartPath = replacedPath.substr(1);
			// console.log(transformedStartPath);

			if (transformedStartPath.substr(-1) == ",") {
				var changedStartPath = transformedStartPath.slice(0, -1);
				console.log(changedStartPath);
			}
		}

		//Check if last letter is a comma
		if (replacedPath.substr(-1) == ",") {
			var updatedEndPath = replacedPath.slice(0, -1);

			if (updatedEndPath.charAt(0) == ",") {
				var changedEndPath = updatedEndPath.substr(1);
				console.log(changedEndPath);
			}
		}
	};

	checkForSlash();

	replaceSlashes();
}

for (var i = pattern.length - 1; i >= 0; i--) {
	var arraysEqual = function arraysEqual(pattern, paths) {
		if (pattern[i] === paths[i]) {
			console.log("match");
			return true;
		} else {
			console.log("no match");
			return false;
		}
	};

	arraysEqual(pattern, paths);
}

// for (var i = paths.length - 1; i >= 0; i--) {

// 	//Replace slashes with commas
// 	// replaceSlashes();

// 	//Check if first letter is a slash
// 	if (paths[i].charAt(0) == "/") {
// 		var updatedStartPath = paths[i].substr(1);
// 		// console.log(updatedStartPath);
// 	}

// 	//Check if last letter is a slash
// 	if (paths[i].substr(-1) == "/") {
// 		var updatedEndPath = paths[i].slice(0, -1);
// 		// console.log(updatedEndPath);
// 	}

// 	// checkForMatch();

// 	function arraysEqual(pattern, paths) {
// 	  if (pattern[i] === paths[i]) return true;
// 	  if (pattern[i] == null || paths[i] == null) return false;
// 	  if (pattern[i].length != paths[i].length) return false;

// 	  return true;
// 	}

// 	console.log(arraysEqual(pattern, paths));

// }


// function replaceSlashes() {
// 	paths[i].find(/\//g, ",");
// 	console.log(replaceSlashes);
// }

// function checkForMatch() {
// 	if (paths[i] == pattern[i]) {
// 		console.log(pattern[i]);
// 	}
// }


// function findPath(pattern) {
//     var patternArray = pattern.split(',');
//     var topCount = 0;
//     var highestPath;
//     for (var i = paths.length - 1; i >= 0; i--) {
//         var arrayPath = paths[i].split('/');
//         for (var i = arrayPath.length - 1; i >= 0; i--) {
//             var count = 0;
//             if(patternArray[i]) {
//                 if( arrayPath[i] == patternArray[i] || patternArray[i] == '*') {
//                     count++;
//                 }
//                 console.log(arrayPath[i] + ',' + patternArray[i]);
//             } else  {
//                 break
//             }
//             if (count > topCount) {
//                 topCount = count;
//                 thighestPath = arrayPath.toString();
//             }
//         }
//     }
//     console.log(highestPath);
// }

// findPath("a,b,c");
//# sourceMappingURL=main.js.map
