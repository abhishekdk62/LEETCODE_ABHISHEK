var isBalanced = function(root) {
    function height(node) {
        if (!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }

    if (!root) return true;

    const leftH = height(root.left);
    const rightH = height(root.right);

    if (Math.abs(leftH - rightH) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};
