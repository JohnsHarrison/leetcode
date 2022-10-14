// 10/14/2022
// 1929. Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

 
/*
  @param {number[]} nums
  @return {number[]}
 */


const nums = [1,2,1]
 var getConcatenation = function(nums) {
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
return nums.concat(nums)
};

console.log(getConcatenation(nums))