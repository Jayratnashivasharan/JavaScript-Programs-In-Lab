// a) Genarate random numbers between 0

function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}

// Example: generate 5 random numbers
console.log("Random numbers:", generateRandomNumbers(5));