var countPoints = function(points, queries) {
    const res = [];
    
    for (let [cx, cy, r] of queries) {
        let count = 0;
        for (let [x, y] of points) {
            if ((x - cx) ** 2 + (y - cy) ** 2 <= r ** 2) count++;
        }
        res.push(count);
    }
    
    return res;
};
