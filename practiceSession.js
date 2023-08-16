// // Factorial
// function factorial (value) {
//     if (value <= 1) return 1;
//     return value * factorial(value - 1);
// }

// console.log(factorial(5))

// // Multiply without multiplication incomplete need to work on it
// function multiply(x, y) {
//     if(y >= 1) return x + multiply(x, y - 1)
//     return 0
// }

// console.log(multiply(2, -4))

// Leet Code

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const splitWord1 = word1.split('')
    const splitWord2 = word2.split('')
    const len = splitWord1?.length > splitWord2?.length ? splitWord1?.length : splitWord2?.length
    let newArray = [];
    for(let i = 0; i < len; i++) {
        newArray.push(((splitWord1[i] || '')+(splitWord2[i] || '')))
    }
    return newArray.join('')
};
// const word1 = "abc", word2 = "pqr";
const word1 = "ab", word2 = "pqrs"
console.log(mergeAlternately(word1, word2))
