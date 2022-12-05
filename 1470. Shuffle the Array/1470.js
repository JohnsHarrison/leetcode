// 1470. Shuffle the Array
// 12/5/2022

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

let nums = [2,5,1,3,4,7]
let n = 3
// [2,3,5,4,1,7] 
var shuffle = function(nums, n) {
let ans =[]
    for(let i = 0; i < n; i++){
            ans.push(nums[i])
            ans.push(nums[n + i])
    }
    return ans
};

console.log(shuffle(nums, n))