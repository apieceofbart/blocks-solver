/* 
	EXAMPLE
	
	input: 
	[ {a:1},
		[ {b:1},
			[ {c:1} ]
		],
		[ {b:2} ]
	]

	output:
	[ 
		[ {a:1}, {b:1}, {c:1} ],
	 	[ {a:1}, {b:2}]
	]

*/


function multiFlatten(array) {

    if (array.length < 2 || !Array.isArray(array)) return array;
    if (!Array.isArray(array[1])) return array;
    var output = [];

    for (var i = 1; i < array.length; i++) {
        /*console.log(array[1]);*/
        output.push([array[0]].concat(multiFlatten(array[i])[0]));
    }
    /*console.log('input:', array);
console.log('output:', output);
*/
    return output;
}


module.exports = multiFlatten;
