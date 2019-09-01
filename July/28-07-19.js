/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

*/

function callMe(delay){
	console.log ("Called after "+delay+" ms");
}

function scheduler(call, delay){	
	setTimeout(function(){ eval(call+"("+delay+")"); }, delay);
}

scheduler('callMe', '3000');