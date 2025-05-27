/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    // let sum=0
    let count=0
    let sum=nums.reduce((acc,v)=>{

if(v%2==0&&v%3==0)
{
    acc=acc+v
    count++
}
return acc

    },0)
    if(sum==0)
    {
        return 0
    }
    let avg=sum/count
    
     return Math.floor(avg)
     console.log(avg)
    
};