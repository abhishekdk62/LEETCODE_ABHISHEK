/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let arr=new Array(nums.length)
    let evncount=0
    let oddcount=1

for(let i=0;i<nums.length;i++)
{
    if(nums[i]%2==0)
    {
        arr[evncount]=nums[i]
        evncount=evncount+2

    }
    else if(nums[i]%2!==0)
    {
        arr[oddcount]=nums[i]
        oddcount=oddcount+2

    }
}
    
    return arr
    
};