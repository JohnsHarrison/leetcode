// 11/11/2022
// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.
let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// let a = "11"
// let b = "1"
var addBinary = function(a, b) {
    return (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2)
};

console.log(addBinary(a,b))