// Function to split an array into chunks of a given size
function chunkArray(arr, size) {
  const result = []; // Array to store the final chunks

  for (let i = 0; i < arr.length; i += size) {
    // Push a slice of the array from index i to i + size
    result.push(arr.slice(i, i + size));
  }

  return result; // Return the final array of chunks
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = chunkArray(myArray, 3);

console.log(chunked);
