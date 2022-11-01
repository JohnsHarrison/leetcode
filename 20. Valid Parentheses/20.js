// 11/1/2022
// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


s = "{[]}"
var isValid = function(s) {
// break the string down into an array
let string = s.split('')

// create a stack to hold the current opened bracket
let temp = []

for(i = 0; i < string.length; i++){
    //check to see if the current index is an opened bracket
    if(string[i] == "(" || string[i] == "[" || string[i] == "{"){
    temp.push(string[i])
    }
    // if its a closing bracket check to see if the last bracket placed in the stack is its equal 
    // opening bracket
    else if(string[i] == ")" && temp[temp.length -1] == "("){
        temp.pop()
    }else if(string[i] == "]" && temp[temp.length -1] == "["){
        temp.pop()
    }else if(string[i] == "}" && temp[temp.length -1] == "{"){
        temp.pop()
    }
    // if its a closing bracket and its equal closing bracket is not found return false
    else{
        return false
 }
 }
 //check to see if there are any opened brackets left that were not closed. if there arent the paramater is valid.
if(temp.length == 0){
    return true
}else{
    return false
}
    
};

console.log(isValid(s))