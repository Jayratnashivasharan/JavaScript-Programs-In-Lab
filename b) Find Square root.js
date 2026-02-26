// b) Find Square root 
 // Program to find square root of a number
function findSquareRoot(num) {
    if (num < 0) {
        return "Square root of negative numbers is not real!";
    }
    return Math.sqrt(num);
}

// Example usage:
console.log("Square root of 25:", findSquareRoot(25));
console.log("Square root of 81:", findSquareRoot(81));
console.log("Square root of -9:", findSquareRoot(-9));