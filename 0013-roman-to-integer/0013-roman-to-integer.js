/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romans = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }
    let sum=0
    let arr=s.split("")
    for(let i=0;i<arr.length;i++) {
        sum=sum+romans[arr[i]]
       
    if(romans[arr[i-1]]<romans[arr[i]])
        {
            sum=sum-(romans[arr[i-1]])*2
        }


    }
    return sum

};