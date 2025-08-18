/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
 let ar1=nums1.sort()
 let ar2=nums2.sort()

let ar=[]

 for(let i=0;i<ar1.length;i++)
 {
    for(let j=0;j<ar2.length;j++)
    {
        if(ar1[i]==ar2[j])
        {
            ar.push(ar1[i])
            ar2[j]=null
            break
        }
    }
 }
console.log(ar)
 return ar
};