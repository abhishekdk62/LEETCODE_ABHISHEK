/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let ans = 0
    while (num >= 10) {
        let rem = num % 10
        num = Math.floor(num / 10)
        num = num + rem
    }
return num
};