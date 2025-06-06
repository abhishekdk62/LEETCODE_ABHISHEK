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

let quee=[root]
let result=[]

while(quee.length)
{let val=[]
    let len=quee.length
for(let  i=0;i<len;i++)
{
    let node=quee.shift()
val.push(node.val)
if(node.left) quee.push(node.left)
if(node.right) quee.push(node.right)
}
result.push(val)
}
return result

    
};