/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let n=nums.sort((a,b)=>b-a).slice(0,k)

    return n[n.length-1]
};