/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    
    let set=new Set()
    words.map((v, i) => {
        v.split("").map((g) => {
            if (g == x) {
                set.add(i)
                
            }
        })
    })
let arr =  Array.from(set)
    return arr
};