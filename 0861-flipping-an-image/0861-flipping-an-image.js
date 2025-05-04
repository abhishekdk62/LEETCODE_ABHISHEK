/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {

    let flipped = []

    image.forEach((i) => {
        flipped.push(i.reverse())
    })
    console.log(flipped)
    let arr = []
    flipped.forEach((f) => {
        arr.push(f.map((value) => {

            if (value == 0) {
                return 1
            }
            else {
                return 0
            }
        }))
    })

    return arr



};