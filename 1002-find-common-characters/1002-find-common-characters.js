var commonChars = function(words) {
    let count = Array(26).fill(Infinity); // Use Infinity so the min comparison works
    const aCode = 'a'.charCodeAt(0);

    for (let word of words) {
        let temp = Array(26).fill(0);
        for (let ch of word) {
            temp[ch.charCodeAt(0) - aCode]++;
        }
        // Keep the min frequency of each character
        for (let i = 0; i < 26; i++) {
            count[i] = Math.min(count[i], temp[i]);
        }
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(String.fromCharCode(i + aCode));
        }
    }

    return result;
};
