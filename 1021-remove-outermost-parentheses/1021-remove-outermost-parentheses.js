var removeOuterParentheses = function(s) {
    let result = '';
    let depth = 0;

    for (let ch of s) {
        if (ch === '(') {
            if (depth > 0) result += ch; // skip outermost '('
            depth++;
        } else {
            depth--;
            if (depth > 0) result += ch; // skip outermost ')'
        }
    }

    return result;
};
