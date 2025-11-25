/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let res = []
    for (let i = 1; i < grid.length - 1; i++) {
        let row = []
        for (let j = 1; j < grid[0].length - 1; j++) {
            let maxval = grid[i][j]
            for (let r = i - 1; r < i+2; r++) {
                for (let p = j - 1; p < j+2; p++) {
                    if (grid[r][p] > maxval) {
                        maxval = grid[r][p]
                    }
                }
            }

            row.push(maxval)

        }
        res.push(row)
    }
    return res
};