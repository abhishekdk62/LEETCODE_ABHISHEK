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
let count=0
let res=null
function inOrder(root)
{
    if(!root) return
inOrder(root.left)
count++
if(k==count)
{
    res=root.val
    return
}
inOrder(root.right)


}inOrder(root)

    return(res)
};