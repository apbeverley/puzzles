/*

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

*/

let multiplyValues = function(arrayValues)
{
	let response = 0;
	
	if(arrayValues.length > 0){	
		arrayValues.forEach(function(number) {
			if(response == 0){
				response = number;
			} else {
				response = response * number;
			}
		});
	}

	return response;
}

let processArrayValues = function(arrayValues){
	let response = []
	
	if(arrayValues.length > 0){
		for(let i = 0; i < arrayValues.length; i++){
			//filter for an array of values not including the current index value
			var filtered = arrayValues.filter(function(value, index, arr){
				return index != i;
			});
			
			response.push(multiplyValues(filtered));
		}
	}
	
	return response;
}

console.log(processArrayValues([1, 2, 3, 4, 5]));
console.log(processArrayValues([3, 2, 1]));