const merge = function(array1, array2) {
  let mergedArray = [];
  let temp = 0;

  // combine two arrays into one
  for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
  }
  // loop through array comparing each index value to the next
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      // swap around un-ordered elements
      if (mergedArray[i] > mergedArray[j]) {
        temp = mergedArray[i];
        mergedArray[i] = mergedArray[j];
        mergedArray[j] = temp;
      }
    }
  }
  return mergedArray;
}

// should evaluate to [ 1, 2, 3, 4, 4, 5, 6 ]
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);

// should evaluate to [ 2, 4, 5, 8 ]
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);

// should evaluate to [ 1, 2, 6 ]
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);