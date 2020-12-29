function lastIndexOf(array, index) {
  let checker = false;
  let lastIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (index === array[i]) {
      lastIndex = i;
      checker = true;
    }
  }
  if (checker) {
    return lastIndex;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);