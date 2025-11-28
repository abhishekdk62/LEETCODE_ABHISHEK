/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    let val=Math.sqrt(num)
    console.log(val)

    if(val.toString().includes('.'))
    {
        return false
    }
    return true
};