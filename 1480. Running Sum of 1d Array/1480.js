// 1480. Running Sum of 1d Array
// 12/5/2022


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


const nums = [1,2,3,4]
var runningSum = function(nums) {
let num = 0    
for (let i = 0; i < nums.length; i++){ 
        let current = nums[i]
        nums[i] += num
        num += current
    }
       
return nums
} ;

console.log(runningSum(nums))