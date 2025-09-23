/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let last = ""
    let count = 0
    let max = -Infinity
    nums = num.split("")
    nums.forEach((v) => {

        if (v == last) {
            count++
        }
        else {

            count = 1
            last = v
        }
        if (count == 3) {
            if (v > max) {
                max = v

            }

        }

    })
    let ans = ""
    console.log(max)
    if(max==-Infinity)
    {
        return ""
    }
    return ans + max + max + max

};