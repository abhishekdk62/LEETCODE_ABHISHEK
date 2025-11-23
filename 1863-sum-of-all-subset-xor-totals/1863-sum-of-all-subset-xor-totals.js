var subsetXORSum = function(nums) {
    let or = 0;

    for (let x of nums) {
        or |= x;
    }

    return or * Math.pow(2, nums.length - 1);
};
