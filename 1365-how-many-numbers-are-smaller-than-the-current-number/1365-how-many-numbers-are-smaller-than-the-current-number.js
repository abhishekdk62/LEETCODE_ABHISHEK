/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let res = []
    for (let i in nums) {
        let count=0
        for (let j in nums) {
            if (nums[j] < nums[i] && i != j) {
count++
            }
        }
        res[i]=count
    }
return res
};