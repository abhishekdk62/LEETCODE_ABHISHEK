/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = 0
    let count = 0
    let a = sentences.map((s) => {

        let g = s.split(" ")
        count = g.length
      
        if (count > max) {
            max =count
        }

    })
    return max
};