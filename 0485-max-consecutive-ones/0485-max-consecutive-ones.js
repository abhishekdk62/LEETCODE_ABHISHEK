/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
let cur=max=0
    nums.forEach((v)=>{
        if(v==1)
        {
            cur++
            cur>max?max=cur:null
        }else
        {
            cur=0
        }
    })
    return max
};