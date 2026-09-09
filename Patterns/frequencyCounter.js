function same(arr1, arr2) {
  let valueObj = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let no = arr1[i];
    valueObj[i] = no * no;
  }

  for (let j = 0; j < arr2.length; j++) {
    let sq = arr2[j];
    if (valueObj[j] === sq) {
      delete valueObj[j];
    }
  }
  if (Object.keys(valueObj).length === 0) {
    return true;
  }
  return false;
}

console.log(same([1, 2, 3, 4], [1, 4, 16, 9]));
