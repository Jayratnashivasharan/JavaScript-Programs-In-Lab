// Q1) Write a JS program to find duplicate elements 
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

// Example usage:
let numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
console.log("Duplicate elements:", findDuplicates(numbers));