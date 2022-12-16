const { arrayOf } = require("prop-types");

// an empty object is considered as true in conditions
if({}){
    console.log('Working')
}

// testing a function definition returns a true 
let y=0;
if (!function F(){})
{
y = (function F(){})
}
console.log(y);

// delete keyword can only delete object properties only
var Output = (function(x)
{
delete x.y;
return x;
})({y:10, z:10 });
console.log(Output)

// prototype properties can't be delete using object created with reference
var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company);

// a demontration for reference Error
var Foo = function Bar()
{
return 7;
};
console.log(typeof Bar())

// Filter sample text 
const text = 'ABCD';
const filter = text.split('').filter((element)=>element !=='B' && element !== 'D' )
console.log(filter.join(''), 'filter'); // output -->  AC


// const printInSingleLine = ((buffer='') => args => {
//   if(args!='/n'){buffer+=args}
//   else {console.log(buffer);buffer=''}
// })();
// printInSingleLine(1)
// printInSingleLine(2)
// printInSingleLine(3)
// printInSingleLine('/n')

// Zeros at first and followed by ones
let array = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
for (let i = 0; i <= array?.length - 1; i++) {
  for (let j = i + 1; j <= array?.length - 1; j++) {
    let temp = array[i];
    if (array[i] > array[j]) {
      array[i] = array[j];
      array[j] = temp;
    }
    temp = null;
  }
}
console.log(array, array?.length, "Updated Array");

// Find the missing values
// let number = [1,2,4,6,7,8];
// let number2 = [9,0];
const findMissingValue = (array) => {
  let value = [];
  for (let i = array[0]; i <= array[array?.length - 1]; i++) {
    if (number.indexOf(i) === -1) {
      value.push(i);
    }
  }
  console.log("Missing value is", value);
};

findMissingValue(number);

// Experiments
// To add the item to the array without push call:
// arr[arr.length] = value;

// To concatenate one array to another without concat call:
let number = [1, 2, 4, 6, 7, 8];
let number2 = [9, 0];
for (var i = 0; i < number2.length; number[number.length] = number2[i++]);
console.log(number);

// How do you find the missing number in a given integer array of 1 to 100?
const array_100 = [...Array.from({ length: 5 }, (_, i) => i + 1), 6, 9];

Array.prototype.indof = function (value) {
  let output = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      output = i;
    }
  }
  return output;
};

function findMissingValue(arr) {
  let missingValue = [];
  for (let i = 1; i < arr[arr.length - 1]; i++) {
    if (arr.indof(i) === -1) {
      missingValue[missingValue?.length] = i;
    }
  }
  return missingValue;
}
console.log(findMissingValue(array_100));

const array1 = ["a", "b", "c", "d", "e", "f"];
const array2 = [1, 2, 3, 4, 5, 6];
// output a1, b2, c3, d4, e5, f6
let newArray;
for (let i = 0; i < array1?.length; i++) {
  console.log(array1[i] + array2[i]);
}
console.log("reverse");
for (let i = 0, j = array2?.length - 1; i < array1?.length, j >= 0; i++, j--) {
  console.log(array1[i] + array2[j]);
}
console.log("unequal");
const array3 = ["a", "b", "c"];
const array4 = [1, 2, 3, 4, 5, 6];

for (let i = 0, j = 0; i < array3?.length, j < array4?.length; i++, j++) {
  let output;
  if (array3?.length - 1 >= i) {
    console.log(array3[i] + array4[j]);
  } else console.log("" + array4[j] + (array4[j + 1] || ""));
}

// How do you find the duplicate number on a given integer array?
// const duplicate = [1, 1, 2, 2, 3, 4, 5];
// const duplicate = [1, 1, 1, 1, 1, 1, 1];
// const duplicate = [1, 2, 3, 4, 5, 6, 7];
const duplicate = [1, 2, 1, 1, 1, 1, 1];

for (let i = 0; i < duplicate?.length; i++) {
  for (let j = i + 1; j < duplicate?.length; j++) {
    if (duplicate[i] == duplicate[j]) {
      duplicate[j] = 0;
    }
  }
}
console.log(duplicate, "not a duplicate");

// How do you find the largest and smallest number in an unsorted integer array?
const checkLargestSmallest = [-20, 34, 21, -87, 92, 2147483647];
function findMax(arr) {
  largest = arr[0];
  for (let i = 1; i < arr?.length; i++) if (arr[i] > largest) largest = arr[i];
  return largest;
}
function findMin(arr) {
  smallest = arr[0];
  for (let i = 0; i < arr?.length; i++)
    if (arr[i] < smallest) smallest = arr[i];
  return smallest;
}
console.log(findMax(checkLargestSmallest), findMin(checkLargestSmallest));

// How do you find all pairs of an integer array whose sum is equal to a given number?
const givenArr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9]; // sum : 7
for (let i = 0; i < givenArr?.length; i++) {
  for (let j = i + 1; j < givenArr?.length; j++) {
    if (givenArr[i] + givenArr[j] == 7) console.log(givenArr[i], givenArr[j]);
  }
}

// Shuffle text in array ['abc', 'def', ghi] => ['cab', 'fde', 'igh']
// const shuffling = ['abc', 'def', 'ghi'];
// Shuffling the words

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; // Output ==> ["rayli", "mitel", "iteex", "uberantde", "structionpr", "esentsp"]
// Using with in-built function
function shuffling(arr) {
  const first2Char = arr.map((element) => element.slice(0, 2));
  const slicedFirst2Char = arr.map((element) => element.slice(2));
  const firstElement = first2Char.shift();
  first2Char[first2Char.length] = firstElement;
  return slicedFirst2Char?.map((item, index) => item + first2Char[index]);
}
console.log(words);
console.log(shuffling(words));
// Without in-built function
String.prototype.subStr = function (start, end) {
  const stingEnd = end || this.length;
  let result = "";
  for (let i = start; i < stingEnd; i++) {
    result += this[i];
  }
  return result;
};
Array.prototype.shifting = function () {
  let newArray = [];
  const output = this[0];
  return output;
};
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
]; // Output ==> ["rayli", "mitel", "iteex", "uberantde", "structionpr", "esentsp"]
// pending code
// function shuffling (arr,cut) {
//     let newArray=[];
//     let first2Char = [];
//     for(let i=0; i< arr?.length; i++){
//         first2Char[first2Char?.length] = arr[i].subStr(0,cut)
//     }
//     const firstElement = first2Char.shifting()
//     console.log(firstElement, 'firstElement')
// }
// console.log(shuffling(words, 2))

// Find the Second largest number?
// const listOfArray = [12, 35, 1, 10, 34, 1];
// const listOfArray = [12, 35, 1, 10, 34, 1, 70, 71];

Array.prototype.sorting = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
Array.prototype.DecendSorting = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] < this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

function secondLargest(arr) {
  // return arr.sorting()[arr?.length - 2];
  return arr.DecendSorting()[1];
}
console.log(secondLargest([12, 35, 100000, 13, 10, 34, 1, 70, 71]));

// Palindrom
function checkPalindrome(str) {
  for (let i = 0; i < str?.length; i++) {
    if(str[i]!= str[str?.length - 1 - i]) return 'Not a Palindrome';
    return 'It is a Palindrome';
  }
  return str;
}
const string = "malayalam";
console.log(checkPalindrome(string));

// Armstrong  Number
function checkArmstrongNumber (n){
  let r,sum=0, temp;
  temp = n;
  while(n>0){
    r = n%10;
    sum = sum + (r*r*r);
    n = parseInt(n/10);
  }
  console.log(temp, sum, 'Checking values');
  if(temp == sum) return 'It is an Armstrong number';
  return 'Not an Armstrong number';
}
const number = 153;
console.log(checkArmstrongNumber(number))

// Fibonacci Series (Without Recursive)
function FibonacciSeries(n) {
  let n1 = 0,
    n2 = 1,
    n3;
  for (let i = 0; i < n; i++) {
    if(i > 1){
      n3 = n1 + n2;
      n1 = n2
      n2 = n3
      console.log(`${n3} `);
    } else console.log(`${i}` );
  }
}
FibonacciSeries(15);

const printInSingleLine = ((buffer='') => args => {
  if(args!='/n'){buffer+=`${args} `}
  else {console.log(buffer);buffer=''}
})();
// Fibonacci Series (Recursive)
let n1=0, n2=1, n3;
function FibonacciSeriesRecurssive (n){
  if(n>2){
    n3 = n1+n2;
    n1 = n2;
    n2 = n3;
    // console.log(n3)
    printInSingleLine(n3)
    FibonacciSeriesRecurssive(n-1)
  }
}
// console.log(0);
// console.log(1);
printInSingleLine(0)
printInSingleLine(1)
FibonacciSeriesRecurssive(15); // first 2 number are static
printInSingleLine('/n')

// Prime Number
function primeNumber(n){
  for(let i=0; i<n; i++){
    if(n%i === 0) return 'Not a Prime Number';
    return 'Prime Number';
  }
}
console.log(primeNumber(2));

// list of Prime Number
// function listOfPrimeNumber(n){
//   for(let i=1; i<n; i++){
//     for(let j=1; j<i; j++){
//       console.log(i);
//       if(i%j === 0) `${i} is not a prime`;
//       `${i} is a prime`;
//       // console.log(i);
//     }
//   }
// }
// listOfPrimeNumber(20)g






