/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const isLetter = (ch) => /[a-zA-Z]/.test(ch);

    let j = s.length - 1
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (!isLetter(s[i])) {
            str = str + s[i]
        } else {
            while (!isLetter(s[j])) j--
            str = str + s[j]
            j--
        }
    }
    return str
};