/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let seen = new Set()
    let max = 0

    for (let i = 0; i < s.length; i++) {

    let count = 1
        let char = s[i]

        while (char == s[i + 1]) {
         
            count++
            i = i + 1

        }
        if (count > max) {
            max = count
        }

    }
return max
};