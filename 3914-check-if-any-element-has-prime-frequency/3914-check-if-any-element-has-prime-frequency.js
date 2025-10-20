/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    let map = {}

    nums.forEach((v) => {
        map[v] = (map[v] | 0) + 1
    })
let flag
    function check(arr) {
        for (let i = 0; i < arr.length; i++) {
                        let freq = arr[i];

            if (freq < 2) continue; 
             flag=true
            for (let j = 2; j < arr[i]; j++) {

                if(arr[i]%j==0)
                {
                    flag=false
                }

            }
            if(flag)
            {
                return flag
            }

        }
    }
 check(Object.values(map))
 if(flag)
 {
    return flag
 }else
 {
    return false
 }
};