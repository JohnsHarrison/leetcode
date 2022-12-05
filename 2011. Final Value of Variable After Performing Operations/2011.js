// 12/5/2022
// 2011. Final Value of Variable After Performing Operations


// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

const operations = ["--X","X++","X++"]
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    for(let i = 0;i <operations.length;i++){
        if(operations[i]=== "X++" || operations[i]=== "++X"){
            answer++
        }else if (operations[i]=== "X--" || operations[i]=== "--X") {
            answer--
        }
    }
    return answer
};

console.log(finalValueAfterOperations(operations))