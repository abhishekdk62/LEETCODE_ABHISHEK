/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

let sat=new Set()
for(let val of nums)
{
    if(sat.has(val))
    {
        return true
    }
    sat.add(val)
}

    return false
};