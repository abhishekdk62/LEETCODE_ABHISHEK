/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {


    let i = 1
    let max = n
    while (true) {
        let mid = Math.floor((i + max) / 2)
        let v = guess(mid)
        if (v == -1) {
            max = mid - 1
        } else if (v == 1) {
            i = mid + 1
        } else {
            return mid
        }
    }
};