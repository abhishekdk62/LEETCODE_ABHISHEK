var checkRecord = function (s) {
    let abs = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') abs++;

        if (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') {
            return false;
        }
    }

    if (abs > 1) return false;

    return true;
};
