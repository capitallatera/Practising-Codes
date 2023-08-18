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
// var mergeAlternately = function(word1, word2) {
//     const splitWord1 = word1.split('')
//     const splitWord2 = word2.split('')
//     const len = splitWord1?.length > splitWord2?.length ? splitWord1?.length : splitWord2?.length
//     let newArray = [];
//     for(let i = 0; i < len; i++) {
//         newArray.push(((splitWord1[i] || '')+(splitWord2[i] || '')))
//     }
//     return newArray.join('')
// };
// // const word1 = "abc", word2 = "pqr";
// const word1 = "ab", word2 = "pqrs"
// console.log(mergeAlternately(word1, word2))

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let gcdString1 = "";
    let gcdString2 = "";
    for(let i = 0; i < str1.length; i++){
        if(!gcdString1.includes(str1[i]))
        gcdString1 += str1[i]
    }
    for(let i = 0; i < str2.length; i++){
        if(!gcdString2.includes(str2[i]))
        gcdString2 += str2[i]
    }
    console.log(gcdString1, gcdString2, "gcdString")
};

const str1 = "ABCABC", str2 = "ABC"
// const str1 = "ABABAB", str2 = "ABAB"
// const str1 = "LEET", str2 = "CODE"
// const str1 = "ABCDEF", str2 = "ABC"
// const str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX", str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
gcdOfStrings(str1, str2)

// console.log(
//     gcdOfStrings(str1, str2)
// )

// console.log(str1?.length, str2?.length, str1?.length/2)
// console.log(str1.includes(str2, str2?.length))