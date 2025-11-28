var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry) {
        let x = i >= 0 ? Number(num1[i]) : 0;
        let y = j >= 0 ? Number(num2[j]) : 0;

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
};
