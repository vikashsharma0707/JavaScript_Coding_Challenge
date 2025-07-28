


// Method 1: Using concat() Method
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const merged = arr1.concat(arr2);
console.log(merged); 



// Method 2: Using Spread Operator (...)
const ar1 = [1, 2, 3, 4];
const ar2 = [5, 6, 7, 8];
const mergedArray = [...ar1, ...ar2];

console.log(mergedArray); 


// Method 3: Using push() with Spread Operator (Modifies original array)
const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];
a1.push(...a2);
console.log(a1); 


// Method 4: Merging Multiple Arrays Using Spread Operator
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [9, 10, 11, 12];
const mergedABC = [...a, ...b, ...c];
console.log(mergedABC); 