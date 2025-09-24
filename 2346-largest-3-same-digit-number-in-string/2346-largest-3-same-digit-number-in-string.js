/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let past=""
    let count=0
    let max=-Infinity
    num.split("").forEach((v)=>{
        if(v==past)
        {
            count++
        }else
        {
            past=v
            count=1
        }

        if(count==3&&v>max)
        {
            max=v
        }

    })
    if(max==-Infinity)
    {
        return ""
    }
return max+max+max
    
};