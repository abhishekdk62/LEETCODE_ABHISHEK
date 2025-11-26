/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {


let xs=points.map((v)=>v[0])

    console.log(xs)
    
    xs.sort((a, b) => a - b);         // sort them in ascending order

    let maxDiff = 0;

    for (let i = 1; i < xs.length; i++) {
        let diff = xs[i] - xs[i - 1]; // gap between neighbors
        if (diff > maxDiff) maxDiff = diff;
    }

    return maxDiff;


};