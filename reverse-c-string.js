String.prototype.reverse = function(){return this.split('').reverse().join('')};

console.log('abcd'.reverse());

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--){
  	o += s[i];
  } 
  return o;
}
console.log(reverse('asdf'));