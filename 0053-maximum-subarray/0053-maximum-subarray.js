/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

let sum=-Infinity
let largesum=-Infinity
nums.forEach((v)=>{
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