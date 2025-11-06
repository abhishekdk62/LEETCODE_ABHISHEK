var totalMoney = function (n) {
    let f = Math.ceil(n / 7)
    let tot = 0
    let day = 0
    for (let i = 0; i < f; i++) {
        for (let j = 1; j <= 7 && day < n; j++) {
            tot = tot + j + i
            day++
        }
    }
    return tot
};
