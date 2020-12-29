// USING BUILT IN CONCAT FUNCTION
// function concat(array1, array2) {
//   let output = [];
//   output = array1.concat(array2);
//   return output;
// }
function concat(array1, array2) {
  const output = [];
  for (let i = 0; i < array1.length; i++) {
    output.push(array1[i]);
  }
  for (let j = 0; j < array2.length; j++) {
    output.push(array2[j]);
  }
  return output;
} 
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);