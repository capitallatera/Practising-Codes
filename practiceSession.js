// Factorial
function factorial (value) {
    if (value <= 1) return 1;
    return value * factorial(value - 1);
}

console.log(factorial(5))

// Multiply without multiplication
function multiply(x, y) {
    if(y >= 1) return x + multiply(x, y - 1)
    return 0
}


console.log(multiply(2, -4))

