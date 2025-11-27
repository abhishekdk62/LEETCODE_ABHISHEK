/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let dif1=Math.abs(z-x)
    let dif2=Math.abs(z-y)
    if(dif1>dif2)
    {
        return 2
    }else if(dif1<dif2)
    {
        return 1
    }else
    {
        return 0
    }
};