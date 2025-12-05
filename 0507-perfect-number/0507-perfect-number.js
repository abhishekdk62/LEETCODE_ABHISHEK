var checkPerfectNumber = function(num) {
    if (num <= 1) return false;

    let sum = 1; // 1 is always a divisor
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
};
