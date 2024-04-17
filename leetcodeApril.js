/* You are given a string s. The score of a string is defined as 
the sum of the absolute difference between the ASCII values of adjacent characters.
Return the score of s. */

var scoreOfString = function(s) {
    let sum = 0;
    for(let i=0; i<s.length-1; i++){
        sum+= Math.abs(s.codePointAt(i) - s.codePointAt(i+1)); 
        console.log(s.charCodeAt(i), "--" ,s.charCodeAt(i+1));
    }
    return sum;
};

scoreOfString("hello");

//=============================================================================================

