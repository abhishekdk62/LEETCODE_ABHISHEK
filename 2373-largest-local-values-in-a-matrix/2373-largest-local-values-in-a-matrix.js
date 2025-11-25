/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
let res=[]
    for (let i = 1; i < grid.length-1; i++) {
        let row=[]
        for (let j = 1; j < grid[0].length-1; j++) {

            let v1=grid[i][j]
            let v2=grid[i-1][j]
            let v3=grid[i][j-1]
            let v4=grid[i-1][j-1]
            let v5=grid[i][j+1]  
            let v6=grid[i+1][j]  
            let v7=grid[i-1][j+1]  
            let v8=grid[i+1][j-1]  
            let v9=grid[i+1][j+1]  

            let value=Math.max(v1,v2,v3,v4,v5,v6,v7,v8,v9)
        row.push(value)

        }
        res.push(row)
    }
return res
};