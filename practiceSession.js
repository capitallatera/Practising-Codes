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
// const gcd = (x, y) => {
//     if(y==0) return x
//     return gcd(y, x%y)
// }
// var gcdOfStrings = function(str1, str2) {
//     const pos = gcd(str1.length, str2.length)
//     return ((str1+str2) == (str2+str1)) ? str1.slice(0, pos)  : ""
// };
// // const str1 = "XXTXXT", str2 = "XXT"
// const str1 = "ABABABAB", str2 = "ABAB"
// // const str1 = "ABCABC", str2 = "ABC"
// // const str1 = "ABABAB", str2 = "ABAB"
// // const str1 = "LEET", str2 = "CODE"
// // const str1 = "ABCDEF", str2 = "ABC"
// // const str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX", str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
// // const str1 = "CXTXNCXTXNCXTXNCXTXNCXTXN", str2 = "CXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXN"
// console.log(gcdOfStrings(str1, str2))



/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// const candies = [2,3,5,1,3], extraCandies = 3;
// const candies = [4,2,1,1,2], extraCandies = 1
// Memory Runtime efficient
// const candies = [12,1,12], extraCandies = 10
// var kidsWithCandies = function(candies, extraCandies) {
//     const max = Math.max(...candies)
//     for(let i = 0; i < candies.length; i++){
//         candies[i] = (extraCandies + candies[i]) >= max
//     }
//     return candies
// };
// // Runtime efficient
// var kidsWithCandies = function(candies, extraCandies) {
//     return candies.map((item, index, arr) => { return (extraCandies + item) >= Math.max(...arr)});
// };
// console.log(kidsWithCandies(candies, extraCandies))


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const flowerbed = [1,0,0,0,1], n = 1;
// const flowerbed = [1,0,0,0,1], n = 2;
// const flowerbed = [1,0,0,0,0,0,1], n = 2;
// const flowerbed = [1,0,0,0,0,1], n = 2;
// const flowerbed = [0,0,1,0,1], n = 1;
// const flowerbed = [0], n = 1;
// var canPlaceFlowers = function(flowerbed, n) {
//     if(!n) return true;
//     if(flowerbed.length == 1 && flowerbed[0] == 0) return true
//     for(let i = 0; i < flowerbed.length; i++){
//         if(
//             (i == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) ||
//             (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) ||
//             (i == (flowerbed.length - 1) && flowerbed[i] == 0 && flowerbed[i - 1] == 0)
//         ) {
//             flowerbed[i] = 1
//             n--;
//             if(!n) return true;
//         }
//     }
//     return false;
// };
// console.log(canPlaceFlowers(flowerbed, n))

/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//     let start = 0;
//     let end = s.length -1
//     const vowels = 'aeiouAEIOU'
//     const word = s.split('')
//     while(start < end){
//         while(start < end && vowels.indexOf(word[start]) == -1){
//             start++;
//         }
//         while(start < end && vowels.indexOf(word[end]) == -1){
//             end--;
//         }
//         let temp = word[start];
//         word[start] = word[end];
//         word[end] = temp;
//         start++;
//         end--;
//     }
//     return word.join('')
// };
// // const s = "hello"; // holle
// const s = "leetcode"; // leotcede
// console.log(reverseVowels(s))

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const splitWord = s.split(' ')
    return splitWord.reverse().filter(space => space != '').join(' ')
};
// const s = "the sky is blue";
// const s = "  hello world  "
const s = "a good   example"
console.log(reverseWords(s))