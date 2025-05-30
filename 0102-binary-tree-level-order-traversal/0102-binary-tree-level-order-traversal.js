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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let quee = [root]
    let res = []
    while (quee.length > 0) {
    let size = quee.length
        let val = []
        for (let i = 0; i < size; i++) {
            let node = quee.shift()
            if (node.left) quee.push(node.left)
            if (node.right) quee.push(node.right)
            val.push(node.val)
        }
        res.push(val)
    }
    return res
};