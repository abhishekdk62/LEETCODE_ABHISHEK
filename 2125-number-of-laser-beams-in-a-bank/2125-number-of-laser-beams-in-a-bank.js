var numberOfBeams = function(bank) {
    let prev = 0, res = 0;
    
    for (let row of bank) {
        let count = 0;
        for (let ch of row) if (ch === '1') count++;
        if (count > 0) {
            res += prev * count;
            prev = count;
        }
    }
    
    return res;
};
