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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function delet(root,key)
    {
        
        return del(root,key)
    }
    function del(node,key)
    {
     if(!node) return null
        

        if(node.val>key)
        {
           node.left= del(node.left,key)
        }

        else if(node.val<key)
        {
           node.right= del(node.right,key)
        }
else{
   if(!node.right||!node.left) return node.right||node.left
    let temp=node.right
    while(temp.left) temp=temp.left
    node.val=temp.val
    node.right=del(node.right,temp.val)  
}
    return node
    }
    return delet(root,key)
};
