// 11/7/2022
// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.


const s = "   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    // s.plit will give us an array of every word in a sentence including white space. s.filter will remove every instance of white space in the array
    let array = s.split(' ').filter(e => e !== '')
    
    //now that we have made sure everything in our array is a word we look for whatever is at the end and return its length
    return array[array.length -1].length

};

console.log(lengthOfLastWord(s))