// count unique values in an array

function countUniqueValues(arr) {
  let uniqueValue = {};
  for (let i = 0; i < arr.length; i++) {
    uniqueValue[arr[i]] = uniqueValue[arr[i]] ? uniqueValue[arr[i]]++ : 1;
  }
  return Object.keys(uniqueValue).length;
}

console.log(countUniqueValues([1, 2, 1, 1, 1, 1, 5, 5, 5, 7, 7, 7, 6, 5, 4]));
