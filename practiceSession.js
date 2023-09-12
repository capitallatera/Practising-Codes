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
// var reverseWords = function(s) {
//     const splitWord = s.split(' ')
//     return splitWord.reverse().filter(space => space != '').join(' ')
// };
// // const s = "the sky is blue";
// // const s = "  hello world  "
// const s = "a good   example"
// console.log(reverseWords(s))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// using Notions => Time complexity 1
// var productExceptSelf = function(nums) {
//     let result = [];
//     let start = 0;
//     let end = nums.length;
//     while(start < end){
//         let temp = 1;
//         for(let i = 0; i < nums.length; i++){
//             if(start != i) temp *= nums[i]
//         }
//         result.push(temp == 0 ? Math.abs(temp) : temp)
//         start++
//     }
//     return result;
// };
// // 2
// var productExceptSelf = function(nums) {
//     let result = [];
//     for(let i = 0; i < nums.length; i ++){
//         let temp = 1;
//         for(let j = 0; j < nums.length; j++){
//             if(i != j) {
//                 temp *= nums[j]
//             }
//         }
//         result.push(temp == 0 ? Math.abs(temp) : temp)
//     }
//     return result;
// };
// // const nums = [1,2,3,4];
// const nums = [-1,1,0,-3,3]
// console.log(productExceptSelf(nums))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {
//     const size = nums.length;
//     if(size < 3) return false;
//     let mid = Number.MAX_VALUE , left = Number.MAX_VALUE;
//     for(let i = 0; i < size; i++){
//         if(nums[i] > mid){
//             return true;
//         } else if(nums[i] > left && nums[i] < mid ){
//             mid = nums[i];
//         } else if(nums[i] < left) {
//             left = nums[i];
//         }
//     }
//     return false;
// };
// // const nums = [1,2,3,4,5];
// // const nums = [5,4,3,2,1]
// // const nums = [2,1,5,0,4,6]
// // const nums = [2,4,-2,-3];
// const nums = [20,100,10,12,5,13]
// console.log(increasingTriplet(nums))

/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     let uniqueChar = [], charCount = [];
//     for(let i = 0; i < chars.length; i++){
//         if(uniqueChar.indexOf(chars[i]) == -1){
//             uniqueChar.push(chars[i])
//         }
//     }
//     for(let i = 0; i < uniqueChar.length; i++){
//         let count = 0;
//         for(let j = 0; j < chars.length; j++){
//             if(uniqueChar[i] == chars[j]){
//                 count++
//             }
//         }
//         charCount.push(count)
//     }
//     const result = uniqueChar.map((char, index) => char+(charCount[index] == 1 ? '' : charCount[index]))
//     return result.join('').split('');
// };

// // const chars = ["a","a","b","b","c","c","c"]
// // const chars = ["a"]
// const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// console.log(compress(chars));

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let collectZeros = [], collectNonZeros = [];
//     for(let i = 0; i  < nums.length; i++){
//         if(nums[i] == 0){
//             collectZeros.push(nums[i])
//         } else {
//             collectNonZeros.push(nums[i])
//         }
//     }
//     const result = collectNonZeros.concat(collectZeros)
//     return result
// };
// // const nums = [0,1,0,3,12]  // [1,3,12,0,0]
// const nums = [0]
// console.log(moveZeroes(nums))

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//     const s1 = s.split('');
//     const s2 = t.split('');
//     let subsequent = 0
//     for(let i = 0; i < t.length; i++){
//         if(s1[subsequent] == s2[i]){
//             subsequent++;
//         }
//     }
//     return subsequent == s1.length;
// };

// // const s = "abc", t = "ahbgdc";
// // const s = "acb", t = "ahbgdc";
// // const s = "axc", t = "ahbgdc"
// // const s = "", t = "ahbgdc"
// const s = "b", t = "abc";
// console.log(isSubsequence(s, t))

/**
 * @param {number[]} height
 * @return {number}
 */
// const max = (a, b) => a > b ? a : b;
// const min = (a, b) => a < b ? a : b;
// var maxArea = function(height) {
//     let left = 0, right = height.length -1, result = 0;
//     while(left < right){
//         const currentArea = min(height[left], height[right]) * (right - left);
//         result = max(result, currentArea);
//         if(height[left] < height[right]) left++;
//         else right--;
//     }
//     return result
// };
// // const height = [1,8,6,2,5,4,8,3,7];
// const height = [1,1];
// console.log(maxArea(height));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxOperations = function(nums, k) {
//     let i = 0, j = nums.length - 1;
//     let ans = 0;
//     while(i < j){
//         if(nums[i] + nums[j] == k){
//             ans++;
//             i++;
//             j--;
//         } else if(nums[i] + nums[j] > k){
//             j--
//         } else {
//             i++
//         }
//     }
//     return ans;
// };
// // const nums = [1,2,3,4], k = 5;
// // const nums = [3,1,3,4,3], k = 6
// const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2  // 2
// console.log(maxOperations(nums, k))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMax = (a, b) => a > b ? a : b;
var findMaxAverage = function(nums, k) {
    let start = 0, sum = 0, max = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++ ){
        sum+=nums[i];
        if(i >= k -1){
            max = Math.max(max, sum);
            sum-= nums[start++];
        }
    }
    // console.log(parseFloat(max), k)
    return max/k
};
// const nums = [1,12,-5,-6,50,3], k = 4;
const nums = [-1], k = 1;
console.log(findMaxAverage(nums, k))


