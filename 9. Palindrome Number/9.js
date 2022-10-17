// 10/17/22
// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.


const x = 121
var isPalindrome = function(x) {
const temp = x.toString().split('').reverse().join('')
if(x.toString() === temp){
    return true
}else{
    return false
}
};

console.log(isPalindrome(x))