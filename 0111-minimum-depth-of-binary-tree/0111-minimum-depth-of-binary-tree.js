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
 * @return {number}
 */
var minDepth = function (root) {
    if(!root) return 0

    let res = []
    function check(node,count) {
        if (!node) {
        
            return
        }
        if (!node.left && !node.right) {
            res.push(count);
            return;
        }


        check(node.left,count+1)
        check(node.right,count+1)
    }
    check(root,1)
    return Math.min(...res)
};