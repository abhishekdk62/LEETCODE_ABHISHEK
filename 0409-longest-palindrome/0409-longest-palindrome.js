/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let freq = {}
    s.split('').map((v) => { freq[v] = (freq[v] | 0) + 1 })

    console.log(freq)
    let count = 0
    let isFlagged = false
    for (let key in freq) {
        let val = freq[key]
        if (val % 2 == 0) {
            count += val
        } else {
            count += val - 1
            isFlagged = true
        }
    }

    return isFlagged ? count + 1 : count

};