var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    let sums = [];

    function dfs(node, currentSum) {
        if (!node) return;
        currentSum += node.val;
        if (!node.left && !node.right) {
            sums.push(currentSum);
            return;
        }
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    }
    dfs(root, 0);
    return sums.includes(targetSum);
};
