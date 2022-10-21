// 10/20/2022
// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const s="MCMXCIV"
var romanToInt = function(s) {
const temp = s.split('');
let total = 0;

for(let i = 0; i <= temp.length; i++ ){
// All cases to check what comes next in the array need to come first
if(temp[i] === "I" && temp[i + 1] === "V"){
    total += 4 
    break;
}else if(temp[i] === "I" && temp[i + 1] === "X"){
    total += 9
    break;
}else if(temp[i] === "X" && temp[i + 1] === "L"){
    total += 40
    // We need to skip a space in the array since two characters are checked and used to get a number
    i++
}else if(temp[i] === "X" && temp[i + 1] === "C"){
    total += 90
    i++
}else if(temp[i] === "C" && temp[i + 1] === "D"){
    total += 400
    i++
}else if(temp[i] === "C" && temp[i + 1] === "M"){
    total += 900
    i++
}else if(temp[i] === "I"){
    total++
}else if(temp[i] === "V"){
    total += 5
}else if(temp[i] === "X"){
    total += 10
}else if(temp[i] === "L"){
    total += 50
}else if(temp[i] === "C"){
    total += 100
}else if(temp[i] === "D"){
    total += 500
}else if(temp[i] === "M"){
    total += 1000
}

}
return total 
};

console.log(romanToInt(s))