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
var maxDepth = function (root) {
    let count = 0

    function dfs(root) {
        if (!root) return
        let quee = [root]
       
        while (quee.length) {
             let k = quee.length
            for (let i = 0; i < k; i++) {
                let node = quee.shift()
                if (node.left) quee.push(node.left)

                if (node.right) quee.push(node.right)

            }
            count++
        }

    }

    dfs(root)
    return count




};