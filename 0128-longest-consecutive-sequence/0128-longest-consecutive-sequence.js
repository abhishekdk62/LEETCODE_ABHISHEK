/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if(nums.length<=0) return 0

    let set = new Set(nums.sort((a, b) => a - b))
    let ar = Array.from(set)
    let maxcount = 1
    console.log(ar)
        let count = 1
    for (let i = 1; i < ar.length; i++)

    {
        if (ar[i] == ar[i - 1] + 1) {
            count++
        }
        else
        {
            count=1
        }

        if(count>maxcount)
        {
            maxcount=count
        }

    }
    return maxcount


};