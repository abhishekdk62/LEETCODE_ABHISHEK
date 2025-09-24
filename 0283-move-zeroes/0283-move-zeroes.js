/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ans=[]
    let count=0
    nums.forEach((v)=>{
        if(v==0)
        {
            count++
        }else
        {
            ans.push(v)
        }
    })

    for(let i=0;i<count;i++)
    {
        ans.push(0)
    }
console.log(ans)
    ans.forEach((v,i)=>{
  
        console.log(v)
        nums[i]=v
    })
    
};