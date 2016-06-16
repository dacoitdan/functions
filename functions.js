// #1

function yell(string){
	console.log(string.toUpperCase());
}

function yell10(string){
	for(var i = 0; i < 10; i++){
		yell(string);
	}
}

// #2

console.assert(max(25, 34) === 34);

function max(int1, int2){
	if(int1 > int2){
		return int1;
	} else {
		return int2;
	}
}

// #3

console.assert(longest('longer', 'short') === 'longer');

function longest(obj1, obj2){
	if(obj1.length >= obj2.length){
		return obj1;
	} else {
		return obj2;
	}
}

var sentence = 'I did not have sexual relations with that woman';

console.assert(findLongestWord(sentence) === 'relations');

function findLongestWord(string){
	var words = string.split(" ");
	var long = words[0];
	for(var i = 1; i < words.length; i++){
		long = longest(long, words[i]);
	}
	return long;
}

// #4

console.assert(isVowel('a') === true);
console.assert(isVowel('f') === false);

function isVowel(char){
	char = char.toUpperCase();
	if(char.length != 1){
		return false;
	} else if (
		char === 'A' ||
		char === 'E' ||
		char === 'I' ||
		char === 'O' ||
		char === 'U'
		) {
		return true;
	} else {
		return false;
	}
}

// #5

console.assert(sentence.split("").reverse().join("") === reverseString(sentence));

function reverseString(string){
	var letters = string.split("");
	var reversed = "";
	for(var i = letters.length-1; i >= 0; i--){
		reversed = reversed + letters[i];
	}
	return reversed;
}

// #6

console.assert(adopt('male', false, 'white') === false);
console.assert(adopt('female', true, 'tan') === true);

function adopt(gender, neutered, color){
	gender = gender.toLowerCase();
	color = color.toLowerCase();
	if(color === 'black' || 
		(gender === 'female' && neutered === true && (color === 'white' || color === 'tan')) ||
		(gender === 'male' && neutered === true)) {
		return true;
	} 
	return false;
}

