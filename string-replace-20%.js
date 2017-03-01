function replace (str) {
	for (var i = 0; i < str.length; i++) {
		str = str.replace(' ','20%');
	};
	return str;
}
console.log(replace(' a b c d '));