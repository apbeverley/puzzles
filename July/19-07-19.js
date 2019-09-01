let valueCanTotal = function(total, numberArray)
{
	let response = false;
	
	if(numberArray.length > 0){
		let calculateNumbers = [];
	
		numberArray.forEach(function(number) {
			let secondNumber = total - number;
			
			if(calculateNumbers.includes(number)){
				response = true;
				
				return true;
			} 
			
			calculateNumbers.push(secondNumber);
		});
	}

	return response;
}

console.log(valueCanTotal(12, [10,2,3,7]));