/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let res = []
    let total = nums.reduce((a, b) => a + b, 0)
   
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        let rightsum = total - left - nums[i]
        res.push(Math.abs(left - rightsum))
        left = left+nums[i]
    }
    return res
};