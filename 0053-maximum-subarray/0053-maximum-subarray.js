/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

let sum=nums[0]
let largesum=nums[0]
nums.slice(1).forEach((v)=>{
    sum=sum+v
    if(sum<v)
    {
        sum=v
    }
    if(sum>largesum)
    {
        largesum=sum
    }
})
return largesum

};