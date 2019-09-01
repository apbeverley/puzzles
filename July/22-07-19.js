/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

*/

class nextInteger {
	findLowestPositive(inputArray){
		//order the incoming array
		let orderedNumbers = inputArray.sort(this._sorter);
		//assign the first positive value to start counting from
		let firstPositiveNum = this._firstPositive(orderedNumbers);
		//set a default integer response
		let response = 0;
	
		for(let i = 0;i <= orderedNumbers.length; i++){
			if(this._isNumberPositive(orderedNumbers[i])){
				if(orderedNumbers[i] !== firstPositiveNum)
					break;
				
				firstPositiveNum++;
			} else {
				continue;
			}
		}
		
		return firstPositiveNum;
	}
	
	_firstPositive(nums){
		for(let i = 0;i <= nums.length; i++){
			if(this._isNumberPositive(nums[i])){
				return nums[i];
				
				break;
			}
			
			if((nums[i] == 0))
				break;
		}
		
		return 1;
	}
	
	_isNumberPositive(num){
		if(num > 0)
			return true;
		return false;
	}
	
	_sorter(a,b){
		return a - b;
	}
}

let sequence = new nextInteger();

console.log(sequence.findLowestPositive([3, 4, -1, 1]));  //expected output 2
console.log(sequence.findLowestPositive([1, 2, 0])); //expected output 3
console.log(sequence.findLowestPositive([3, 2, 1])); //expected output 4
console.log(sequence.findLowestPositive([0, 10, 2, -10, -20])); //expected output 1
console.log(sequence.findLowestPositive([1, 10, 2, -10, -20])); //expected output 3
console.log(sequence.findLowestPositive([10,11,13])); //expected output 12