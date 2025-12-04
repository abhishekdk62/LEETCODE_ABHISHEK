var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        // check duplicates
        const set = new Set(s);
        return set.size < s.length;
    }

    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push([s[i], goal[i]]);
        if (diff.length > 2) return false;
    }

    return diff.length === 2 &&
           diff[0][0] === diff[1][1] &&
           diff[0][1] === diff[1][0];
};
