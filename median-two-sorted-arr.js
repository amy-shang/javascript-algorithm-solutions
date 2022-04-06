/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newarr = nums1.concat(nums2);
    let sorted = newarr.sort();
    let length = newarr.length;
     let median;
    console.log(sorted);
    if( length % 2 == 0){    
         let mid1 = length/2 - 1;
         let mid2 = length/2 ;
         median = (sorted[mid1] + sorted[mid2]) / 2;
        
    }else{
       median = sorted[Math.floor(length /2)];
    }  
    return median  
};
