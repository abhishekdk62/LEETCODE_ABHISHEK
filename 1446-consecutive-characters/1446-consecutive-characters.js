/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let max = 0

    for (let i = 0; i < s.length; i++) {
        let count = 1
        while (s[i] == s[i + 1]) {
            count++
            i = i + 1
        }
        if (count > max) {
            max = count
        }
    }
    return max
};