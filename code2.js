'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {

    // Counting total meal cost

    var total;
    var tip, tax;

    tip = (mealCost*tipPercent)/100;
    tax = (mealCost*taxPercent)/100;
    total = (mealCost + tip + tax).toFixed(0);
    
    // Use console.log() to print to stdout

    console.log("The total meal cost is " + total + " dollars.");

}