// 11/7/2022
// 35. Search Insert Position



// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.


let nums = [1,3,5,6]
let target = 2
let i;
var searchInsert = function(nums, target) {
    for(i = 0; i < nums.length; i++){
    if(target === nums[i] || target < nums[i]){
        return i 
    }
}
return i
};

console.log(searchInsert(nums,target))