/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let freq={}

nums.map((v)=>{
if(freq[v])
{
    freq[v]=freq[v]+1
}else
{
    freq[v]=1
}

})
console.log(freq)
let ans=-1
let max=0
for(let i in freq)
{
    if(i%2==0&&freq[i]>max)
    {
        max=freq[i]
        console.log(i)
ans=Number(i)
    }
}

for(let u in freq)
{
    if(Number(u)%2==0&&freq[u]==freq[ans])
    {
        if(Number(u)<ans)
        {
            ans=Number(u)
        }
    }
}


return ans
};