/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    let obj={}
    for(let ele of arr)
    {
        if(obj[ele])
        {
            obj[ele]=obj[ele]+1
        }else
        {
            obj[ele]=1
        }

    }

    console.log(obj)
let g=Object.values(obj)
    let set=new Set(g)
    return g.length==set.size

};