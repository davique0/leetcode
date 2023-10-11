// const invertTree = (root) => {
//   let baseTwo = (root.length >>> 0).toString(2).length;
//   let result = [];
//   for (let i = 0; i < baseTwo; i++) {
//     let tempNum = [];
//     for (let j = 0; j < 2 ** i; j++) {
//       tempNum.push(root[j]);
//     }
//     tempNum.reverse();
//     result = [...result, tempNum];
//     root = root.slice(Math.pow(2, i));
//   }
//   return result.flat();
// };

//Array version
// const invertTree = function (root) {
//   if (root.length === 0) {
//     return [];
//   } else {
//     let baseTwo = (root.length >>> 0).toString(2).length;
//     let result = [];
//     for (let i = 0; i < baseTwo; i++) {
//       let tempNum = [];
//       for (let j = 0; j < 2 ** i; j++) {
//         tempNum.push(root[j]);
//       }
//       tempNum.reverse();
//       result = [...result, tempNum];
//       if (root[0]) {
//         root = root.slice(Math.pow(2, i));
//       }
//     }
//     return result.flat();
//   }
// };

//tree node version

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  // Swap the left and right subtrees recursively
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
console.log(invertTree([2, 1, 3]));

console.log(invertTree([]));
