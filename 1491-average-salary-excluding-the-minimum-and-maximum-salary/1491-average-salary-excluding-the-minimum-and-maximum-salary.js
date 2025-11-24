/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {

let max=-Infinity
let min=Infinity
let sum=0

salary.forEach((v)=>{
    if(v>max) max=v
    if(v<min) min=v
    sum+=v
})
    
return (sum-max-min)/(salary.length-2)

    
    
};