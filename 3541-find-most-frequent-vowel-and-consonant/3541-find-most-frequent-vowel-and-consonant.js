/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
        const vowels = new Set(['a','e','i','o','u']);
    let vowelFreq = {};
    let consFreq = {};

    for (let ch of s) {
        if (vowels.has(ch)) {
            vowelFreq[ch] = (vowelFreq[ch] || 0) + 1;
        } else {
            consFreq[ch] = (consFreq[ch] || 0) + 1;
        }
    }

    let maxVowel = Math.max(0, ...Object.values(vowelFreq));
    let maxCons = Math.max(0, ...Object.values(consFreq));

    return maxVowel + maxCons;

};