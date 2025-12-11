var averageOfSubtree = function(root) {
    let res = 0;
    
    const dfs = (node) => {
        if (!node) return [0, 0]; // sum, count
        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);
        const totalSum = leftSum + rightSum + node.val;
        const totalCount = leftCount + rightCount + 1;
        if (Math.floor(totalSum / totalCount) === node.val) res++;
        return [totalSum, totalCount];
    };
    
    dfs(root);
    return res;
};
