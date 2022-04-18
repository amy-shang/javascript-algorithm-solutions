/**
 * @param {number} n
 * @return {number}
 */
// f(0) = 0, f(1) =1, f(2) = 1 , f(n)=f(n-2)+f(n-1)+f(n)
var tribonacci = function(n) {
    const fib = [0,1,1];
    if(n<3){
        return fib[n]
    }
    for( let i = 2;i< n;i++){
        fib.push(fib[i-2]+fib[i-1]+fib[i])
    }
    return fib[fib.length-1]
};
