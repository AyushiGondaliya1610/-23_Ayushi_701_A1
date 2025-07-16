/**
 * Check if a number is even or odd
 * @param {number} num
 * @returns {string} "even" or "odd"
 */
function isEvenOrOdd(num) {
    if (typeof num !== "number") {
        throw new TypeError("Input must be a number");
    }
    return num % 2 === 0 ? "even" : "odd";
}

// Export function
module.exports = isEvenOrOdd;
