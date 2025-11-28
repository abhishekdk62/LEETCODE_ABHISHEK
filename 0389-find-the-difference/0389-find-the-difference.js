var findTheDifference = function(s, t) {
    let freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find the extra character in t
    for (let ch of t) {
        if (!freq[ch] || freq[ch] === 0) {
            return ch;
        }
        freq[ch]--;
    }
};
