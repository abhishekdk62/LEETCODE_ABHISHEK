var largestGoodInteger = function (num) {
    let last = ""; // last seen digit
    let count = 0; // consecutive count
    let max = "";  // max good integer found

    for (let i = 0; i < num.length; i++) {
        if (num[i] === last) {
            count += 1;
        } else {
            last = num[i];
            count = 1;
        }

        // check if we got 3 consecutive digits
        if (count === 3) {
            if (num[i] > max) {
                max = num[i];
            }
        }
    }

    return max === "" ? "" : max + max + max;
};
