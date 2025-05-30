/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

let ans=[]
const get=(root,ans)=>{


if(!root) return 


get(root.left,ans)
ans.push(root.val)
get(root.right,ans)



}
get(root,ans)
return ans[k-1]


    
};