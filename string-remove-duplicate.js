function removeDulicate(str){
	var length = str.length;
	var newStr = '';
	for (var i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
			newStr += str[i];
		};
	};
	return newStr;
}
console.log(removeDulicate('abbbc'));