/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {


  let max1=Math.max(...nums)
  let mi=nums.findIndex((v)=>v==max1)
  
  nums.splice(mi,1)
  let max2=Math.max(...nums)
  let min=Math.min(...nums)



     return max1 + max2 - min
};