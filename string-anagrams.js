function regularize(str){
	return str.toLowerCase().split('').sort().join('').trim();
}
function anagrams(str1, str2){
	var regStr1 = regularize(str1);
	var regStr2 = regularize(str2);
	if (regStr1 === regStr2) {
		return true
	}else{
		return false
	};
}

console.log(anagrams('abca', 'bca'));