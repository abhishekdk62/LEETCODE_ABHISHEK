/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let arr = nums1.slice(0, m)
    let arr2 = nums2.slice(0, n)
    let merged = []
    arr.forEach((v) => {
        merged.push(v)
    })
    arr2.forEach((v) => {
        merged.push(v)
    })
    console.log(merged)
      merged.sort((a,b)=>a-b)
merged.forEach((v,i)=>{
nums1[i]=v
})
};