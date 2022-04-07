/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if( nums.includes(target) == false) {
        return [ -1, -1 ]   
    }else{
        let index1 = nums.indexOf(target);
        let reveredArr = nums.reverse();
        let index2 = nums.length - reveredArr.indexOf(target) -1;
        return [index1, index2]
    }
    
};
