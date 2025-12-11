var groupThePeople = function(groupSizes) {
    const map = new Map();
    const res = [];
    
    groupSizes.forEach((size, id) => {
        if (!map.has(size)) map.set(size, []);
        map.get(size).push(id);
        if (map.get(size).length === size) {
            res.push(map.get(size));
            map.set(size, []);
        }
    });
    
    return res;
};
