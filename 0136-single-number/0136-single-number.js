/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {}
    nums.forEach((v) => {
        if (map[v]) {
            map[v] = map[v] + 1
        } else {
            map[v] = 1
        }

    })
    console.log(map)
    let ans = 0
    for (let i in map) {
        if (map[i] == 1) {
            ans = i
        }
    }
    console.log(ans)
    return Number(ans)
};