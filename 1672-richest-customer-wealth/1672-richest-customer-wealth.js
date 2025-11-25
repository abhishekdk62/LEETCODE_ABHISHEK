var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let customer of accounts) {
        
        const wealth = customer.reduce((a, b) => a + b, 0);
        if (wealth > maxWealth) maxWealth = wealth;
    }

    return maxWealth;
};
