/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let sum=nums.reduce((acc,cur)=>acc+=cur,0)
    let sum2=0
    for(let i=1;i<=nums.length;i++)
    {
sum2+=i
    }
    
    return (sum2-sum)
    
};