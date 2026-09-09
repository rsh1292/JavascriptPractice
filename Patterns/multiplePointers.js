//return a pari of numbers whose sum is zero in the array

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(sumZero([-5, -2, -1, 1, 2, 3]));
