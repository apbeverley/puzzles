/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

*/

class largestSum
{
	
	calculate(integerList){
		let skip = false;
		let previous = '';
		let sum = 0;		
		
		for(let i = 0;i < integerList.length;i++){
			if(skip == false){
				if(previous != integerList[i]){
					sum += integerList[i];
					
					skip = true;
				}
			} else {
				skip = false;
			}
			
			previous = integerList[i];
		}
		
		return sum;
	}
}


let largest = new largestSum();

console.log(largest.calculate([2, 4, 6, 2, 5]));
console.log(largest.calculate([5, 1, 1, 5]));