/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let pos = {};
    for (let i = 0; i < t.length; i++) {
        pos[t[i]] = i;
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += Math.abs(i - pos[s[i]]);
    }

    return sum;
};
