// 11/8/2022
// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

 
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function(digits) {
  // We use BigInt for numbers too large for parseInt.
  // for test case [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] parseInt would return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]

    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};

console.log(plusOne(digits))