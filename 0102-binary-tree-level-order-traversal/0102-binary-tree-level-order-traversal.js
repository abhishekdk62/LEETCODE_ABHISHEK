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
var levelOrder = function(root) {
    if(!root) return []
    let node=root
    let result=[]

    let quee=[node]

    while(quee.length)
    {let vals=[]
        let l=quee.length
        for(let i=0;i<l;i++)
        {

        let node=quee.shift()
        if(node.left) quee.push(node.left)
        if(node.right) quee.push(node.right)
        vals.push(node.val)
        }
        result.push(vals)
    }
    return(result)
};