/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let seen = new Map()
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            nums[j] = nums[i]
            j++;
            seen.set(nums[i], true)
        }
    }

    nums.length=j

};