// 10/14/2022
// 1920. Build Array from Permutation

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

const nums = [0,2,1,5,3,4]
var buildArray = function(nums) {
 const newArray=[]
 for(let i = 0; i < nums.length;i++){
    // This will go through the "nums" array and assign each index of the new array to the number in the index position equal to the number in the nums array. For example in the nums array the first number is 0 so it will look for the number at index 0 and assign it to the first index of the new array. Next number in the nums array is 2 so it will look for the number at the 2 index of nums (1) and assign it to the next position in the new array.
    newArray[i]=nums[nums[i]]
 }
// This will outpput [ 0, 1, 2, 4, 5, 3 ]
 return newArray
};

console.log(buildArray(nums))