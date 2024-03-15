const twoSum = function(nums, target) {
    // Initialize an empty dictionary to store the indices of seen numbers
    const numIndices = {};

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed to reach the target

        // Check if the complement exists in the dictionary
        if (complement in numIndices) {
            // If found, return the indices of the current number and its complement
            return [numIndices[complement], i];
        }

        // Otherwise, store the index of the current number in the dictionary
        numIndices[nums[i]] = i;
    }
};

// Test case
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
