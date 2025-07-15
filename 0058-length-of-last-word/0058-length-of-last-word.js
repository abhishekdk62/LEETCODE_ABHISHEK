/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str=s.trim().split(" ")
    let len=str[str.length-1].length
    return len
};