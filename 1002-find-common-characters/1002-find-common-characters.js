var commonChars = function(words) {
    let result = [];

    // Take first word as reference
    let first = words[0].split('');

    for (let ch of first) {
        // Check if every word contains this character
        if (words.every(word => word.includes(ch))) {
            result.push(ch);
            // Remove one occurrence from each word
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].replace(ch, '');
            }
        }
    }

    return result;
};
