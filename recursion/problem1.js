// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all.

// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  console.log(arr, "inside function");
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
