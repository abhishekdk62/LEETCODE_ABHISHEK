var reverseDegree = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let posInString = i + 1;
        let posInReversed = 26 - (s.charCodeAt(i) - 'a'.charCodeAt(0));
        sum += posInReversed * posInString;
    }

    return sum;
};
