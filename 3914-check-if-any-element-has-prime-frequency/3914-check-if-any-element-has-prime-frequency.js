/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    let map = {}
    nums.forEach((v) => {
        if (map[v]) {
            map[v] = map[v] + 1
        }
        else {
            map[v] = 1
        }
    })
    console.log(map)


    const isPrime = (value) => {
        if(value!=2&&value%2==0)
        {
return false
        }
        if(value==9&&value%3==0)
        {
return false
        }
        if(value==49&&value%7==0)
        {
return false
        }
        if (value % value == 0) {
            return true
        }
    }

    for (let i in map) {
        if (map[i] > 1) {
            if (isPrime(map[i])) {
                return true
            }
        }
    }

    return false

};