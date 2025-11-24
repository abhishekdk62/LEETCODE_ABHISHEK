/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    for(let i=0;i<nums.length;i++)
    {
        let value=nums[i]
        let sum=0

        while(value!=0)
        {
            let digit=value%10
            value=Math.floor(value/10)
            sum+=digit
        }
        console.log(sum)
        nums[i]=sum
    }
    return Math.min(...nums)
};