var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for (let word of words) {
        let isValid = true;
        for (let ch of word) {
            if (!allowed.includes(ch)) {
                isValid = false;
                break;
            }
        }
        if (isValid) count++;
    }

    return count;
};
