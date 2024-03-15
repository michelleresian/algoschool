const isPalindrome = function(x) {
    if (x < 0) { // Negative numbers cannot be palindromes
        return false;
    }

    let reversed = 0; // Initialize a variable to store the reversed number
    let original = x; // Store the original number for comparison later

    // Iterate until all digits are processed
    while (x > 0) {
        const digit = x % 10; // Extract the last digit of the number
        reversed = reversed * 10 + digit; // Add the digit to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from the number
    }

    // Check if the original number is equal to the reversed number
    return original === reversed;
};

// Test cases
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
