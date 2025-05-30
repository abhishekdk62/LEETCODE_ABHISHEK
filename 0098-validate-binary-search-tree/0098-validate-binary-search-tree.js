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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function search(node=root,min=-Infinity,max=Infinity)
    {
if(node==null) return true
if(node.val>=max||node.val<=min) return false
return search(node.left,min,node.val)&&search(node.right,node.val,max)

    }
return search()
};