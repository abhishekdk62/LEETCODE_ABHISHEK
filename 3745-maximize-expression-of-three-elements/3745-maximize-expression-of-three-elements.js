/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
    let sum = 0
    let ans = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j =0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                sum = nums[i] + nums[j] - nums[k]
                if (sum > ans&&i!=j&&i!=k&&j!=k) {
                    
                    ans = sum
                }
            }
        }
    }
    return ans
};