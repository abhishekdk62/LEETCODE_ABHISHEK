/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

let freq={}
    nums.forEach((v)=>{
freq[v]=(freq[v]|0)+1
    })
     let dup, miss;
    const n = nums.length;

    for (let i = 1; i <= n; i++) {
        if (!freq[i]) miss = i;
        else if (freq[i] === 2) dup = i;
    }

    return [dup, miss];

};