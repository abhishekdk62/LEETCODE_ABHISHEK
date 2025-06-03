/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node,map=new Map()) {
    if(!node) return
    if(map.has(node)) return map.get(node)
    
    let clone={val:node.val,neighbors:[]}
    map.set(node,clone)
    for(let neighbor of node.neighbors)
    {
        clone.neighbors.push(cloneGraph(neighbor,map))
    }
    return clone
    // console.log(clone.node)
};