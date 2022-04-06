const removeDulicate = (str) => {
	let length = str.length;
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
			newStr += str[i];
		};
	};
	return newStr;
}
console.log(removeDulicate('abbbc'));
