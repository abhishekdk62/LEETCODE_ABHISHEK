var findMedianSortedArrays = function(nums1, nums2) {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = nums.length;
  const mid = Math.floor(n / 2);

  if (n % 2 === 1) return nums[mid];
  return (nums[mid - 1] + nums[mid]) / 2;
};
