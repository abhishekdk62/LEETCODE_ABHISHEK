/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let k = 0
    let j = 1
    let ans = 0
    for (let i = 0; i <=n ; i++) {
        ans = j

        let temp = k + j
        k = j
        j = temp


    }
    return ans
};