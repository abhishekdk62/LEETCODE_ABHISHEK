/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let ans = nums.length
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == target) {
            ans = i
            break
        }else
        {
            if(nums[i]>target)
            {
                ans=i
                break
            }

        }
    }
    return ans
};