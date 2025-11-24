/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {

    let max = -Infinity
    let sec = -Infinity
    let min = Infinity

    nums.forEach((v) => {

        if (v > max) {
            sec = max
            max = v
        } else if (v > sec) {
            sec = v
        }
        if(v<min)
        {
            min=v
        }

    })
return max+sec-min
};