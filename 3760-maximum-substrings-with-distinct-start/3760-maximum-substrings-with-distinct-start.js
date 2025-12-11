var maxDistinct = function(s) {
    const seen = new Set();
    for (let ch of s) {
        seen.add(ch);
    }
    return seen.size;
};
