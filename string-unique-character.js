function stringUniqueChar(str){
	var char_set = Array.apply(null,Array(256)).map(Boolean.prototype.valueOf, false);
	for (var i = 0; i < str.length; i++) {
		if (char_set[str[i].charCodeAt(0)]) {
			return false
		};
		char_set[str[i].charCodeAt(0)] = true;
	};
	return true;
}



function stringUniqueChar2(str){
	for (var i = 0; i < str.length; i++) {
		var firstIndex = str.indexOf(str[i]);
		var lastIndex = str.lastIndexOf(str[i]);
		if (firstIndex !== lastIndex || firstIndex !== i) {
			return false;
		}
	};
	return true;
}
console.log(stringUniqueChar2('abc'));
console.log(stringUniqueChar2('abcc'));
console.log(stringUniqueChar2('aabc'));
console.log(stringUniqueChar2('abbc'));