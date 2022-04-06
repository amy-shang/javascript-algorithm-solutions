/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = new Map();
    for ( let i = 0 ; i < nums.length ; i++){
        let num = nums[i], remaining = target -num;
        if( dict.has( remaining ) ){
            return [ i , dict.get(remaining)]
        }else{
            dict.set(nums[i], i);
        }
       
    }
    return []
    
};
