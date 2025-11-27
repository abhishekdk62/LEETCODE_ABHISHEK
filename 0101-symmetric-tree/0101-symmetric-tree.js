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
var isSymmetric = function(root) {

    function check(lnode,rnode)
    {
        if(!lnode&&!rnode) return true
        if((!lnode&&rnode)||(!rnode&&lnode)||rnode.val!==lnode.val)return false
        return check(lnode.left,rnode.right)&&check(lnode.right,rnode.left)
    }
    return check(root.left,root.right)
};