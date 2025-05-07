/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    let obj = {}

nums.sort((a, b) => a - b);

    while (nums.length > 0) {
        let avg = (nums[0] + nums[nums.length - 1]) / 2
        let b=nums.pop()
        let a=nums.shift()
        console.log("Avg is ",avg)
        if (obj[avg]) {
            obj[avg] = obj[avg] + 1
        console.log("first",avg)

        }
        else {
            obj[avg] = 1
        console.log("second",avg)


        }
        console.log(obj)
    }
    
 return Object.keys(obj).length

};