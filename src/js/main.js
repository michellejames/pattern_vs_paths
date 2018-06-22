console.log("Hello World from app.js!");

var fs = require('fs');
fs.readFile('../../input_file.txt', 'utf8', function(err, data) {  
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

    for (var j = integerN+2; j <= integerN + integerM +1; j++) {
    	paths.push(lines[j]);
    }

    //Algorithmic Complexity of two nested loops: O(n²).
    //The inner loop is executed i times, for each value of i. The outer loop is executed n times. --> O(n²).
    
    for (var i = pattern.length - 1; i >= 0; i--) {

    	for (var j = paths.length - 1; j >= 0; j--) {
    		
    		var cleanPath = removeSlashes(paths[j]);

    		var matches = compare(pattern[i], cleanPath);


            if (matches) {
                //console.log(`pattern and path that match: ${pattern[i]} and ${cleanPath}`);
                console.log(matches);
            } else {
                // console.log("No matches");
            }

            var bestMatch = findBestMatch(matches, 0);
            // console.log(bestMatch);
    	}
    }
});


function compare(pattern, paths) {

	var splitPattern = pattern.split(",");
	var splitPaths = paths.split("/");
	// console.log(splitPaths, splitPattern);

    if (splitPattern.length != splitPaths.length) {
        return false;
    } else {
        var matches = [];

        matches.push(splitPattern, splitPaths);
        return matches;
    }

    for (var i = splitPattern.length - 1; i >= 0; i--) {
        if (splitPattern[i] == "*") {
            continue;
        }

        if (splitPattern[i] != splitPaths[i]) {
            return false;
        } 
    }
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

function findBestMatch(matches, y) {
    var y = y || 0;
    
    if (matches.length === 1) {
        // return matches[0];
        console.log(matches, "only one match");
    } else {
        console.log("more matches");
        var searching = true;
        var x = 0;
        var nextMatches = [];
        var previousMatch = false;

        // while (searching) {
        //     var currentMatch = {
        //         value: matches[x],
        //     }

        //     currentMatch.matchIndex = findMatchIndex(currentMatch, y);

        //     if (!previousMatch) {
        //         previousMatch = currentMatch;
        //         return;
        //     } else if (currentMatch.matchIndex < previousMatch.matchIndex) {
        //         previousMatch = currentMatch;
        //     } else if (currentMatch.matchIndex === previousMatch.matchIndex) {
        //         nextMatches.push(currentMatch);
        //     }

        //     if (x === matches.length) {
        //         searching = false;
        //     } else if (x < matches.length) {
        //         x++;
        //     }
        // }

        // if (filteredMatches.length) {
        //     findBestMatch(filteredMatches, y++);
        // }
    }
} 

// function findMatchIndex(path, y) {
//     var x = 0;
//     while (x < y + 1) {

//         for (i = 0; i < path.length - 1; i++) {
//             if (path[i] !== pattern[i]) {
//                 continue;
//             } else if (path[i] === pattern[i] && x === y) {
//                 currentMatchmatchIndex = i;
//                 path.matchIndex = currentMatch[i];
//                 break;
//             } else if (path[i] === pattern[i] && x < y) {
//                 x++;
//             }
//         }
//     }
// }








