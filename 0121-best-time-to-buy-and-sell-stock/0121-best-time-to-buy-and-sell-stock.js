/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimum=Infinity
    let profit=0
prices.forEach((v,i)=>{
minimum=Math.min(v,minimum)
current=v-minimum
profit=Math.max(profit,current)

})
return profit

};