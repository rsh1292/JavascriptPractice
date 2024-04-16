//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are 
//between a and b. The test is: a ≤ arr[i] ≤ b.
//The function should only modify the array. It should not return anything.
let arr = [5, 3, 8, 1];
 // removed the numbers except from 1 to 4
function filterRangeInPlace(arr, a,b){
  arr.forEach((item,index,arr) => {
    if(item<a || item > b){
      arr.splice(index,1);
    }
  })
}
filterRangeInPlace(arr, 1, 4);
console.log( arr ); // [3, 1

// ========================================================================================================

/*
Anagrams are words that have the same number of same letters, but in different order.   
For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.
For instance:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one. 
*/

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
    return Array.from(map.values());
  }
  console.log( aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]) );