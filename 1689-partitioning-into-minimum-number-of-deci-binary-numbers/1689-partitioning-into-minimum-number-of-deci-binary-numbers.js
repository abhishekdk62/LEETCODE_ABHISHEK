var minPartitions = function(n) {
    let maxDigit = 0;
    for (let ch of n) {
        maxDigit = Math.max(maxDigit, Number(ch));
    }
    return maxDigit;
};
