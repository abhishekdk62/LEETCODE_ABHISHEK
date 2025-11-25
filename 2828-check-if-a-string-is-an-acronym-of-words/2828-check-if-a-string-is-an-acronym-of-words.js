/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) return false;
    let ac = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 0) return false; // guard
        ac += words[i][0];
    }
    return ac === s;
};
