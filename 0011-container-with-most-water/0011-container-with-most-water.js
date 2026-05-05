var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        max = Math.max(max, width * minHeight);

        // Move the pointer with the shorter bar inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};