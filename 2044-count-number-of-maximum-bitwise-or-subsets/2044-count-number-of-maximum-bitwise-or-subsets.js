var countMaxOrSubsets = function(nums) {
    let maxOr = 0, count = 0;
    const n = nums.length;

    for (let mask = 1; mask < (1 << n); mask++) {
        let orValue = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) orValue |= nums[i];
        }
        if (orValue > maxOr) {
            maxOr = orValue;
            count = 1;
        } else if (orValue === maxOr) {
            count++;
        }
    }

    return count;
};
