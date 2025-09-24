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


    const isPrime = (val) => {
        for (let i = 1; i < val; i++) {
                 for (let i = 2; i * i <= val; i++) {
            if (val % i === 0) return false; // divisible → not prime
        }
        return true;

        }
    }
    for (let i in map) {

       if(map[i]>1)
       {
         if (isPrime(map[i])) {
            return true

        }
       }
    }
    return false

};