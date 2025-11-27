/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {


    function check(t, v) {
        if(!t&&!v) return true
        if ((!t && v) || (t && !v) || (t.val !== v.val)) return false
        return check(t.left, v.left) && check(t.right, v.right)

    }
return check(p,q)
};