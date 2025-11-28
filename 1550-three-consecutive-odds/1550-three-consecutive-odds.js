/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {


    for (let i = 0; i < arr.length; i++) {
        let count = 0
        while (i<arr.length&&arr[i] % 2 != 0) {
            count++
            i++
        }
        if (count >=3) {
            return true
        } else {
            count = 0
        }
    }
    return false
};