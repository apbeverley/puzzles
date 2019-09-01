/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

*/


class decode
{	
	static alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
	constructor(){
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
		this.options = [];
	}
    
	mesasge(encoded){		
		for(let i = 0;i < encoded.length;i++){
			if(encoded[i] !== 0)
				this._addOption(this._findLetter(encoded[i]));
			
			//look at the previous number
			if((typeof prev == 'undefined') && (encoded[i] !== 0)){
				let prev = encoded[i];
			} else {
				if(encoded[i] !== 0){
					addNewOption(this._findLetter(encoded[i]), false)
					
					prev == null;					
				} else {
					let prev = encoded[i];
				}
			}
		}	
		
		return this.options;
	}		
	
	_addOption(letter){
		if(this.options.length == 0){
			this.options.push(letter);
		} else {
			if(){
				
			} else {
				
			}				
		}
		
		this.previousLetter = letter;
	}
	
	_validator(pos){		
		return true;
	}
	
	_findLetter(pos){
		return this.alphabet[pos-1];
	}
	
	_previousLetter(){
		return this.previousLetter;
	}
		
	_chr(ord){
		return String.fromCharCode(ord);
	}

	_ord(chr){
		return chr.charCodeAt(0);
	}
}

let decoder = new decode();

console.log(decoder.mesasge('111'));