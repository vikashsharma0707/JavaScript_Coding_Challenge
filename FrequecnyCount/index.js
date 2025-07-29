// Example 1: Frequency Count of Array Elements

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequency = {}; // Empty object to store the count of each fruit

// Loop through each item in the array
for (let item of arr) {
    // If item exists, increase count; otherwise, start from 0 and add 1
    frequency[item] = (frequency[item] || 0) + 1;
}

console.log("Array Frequency Count:");
console.log(frequency);
// Output: { apple: 3, banana: 2, orange: 1 }


//  Example 2: Frequency Count of Characters in a String

const str = "hello world";
const freq = {}; // Object to store the frequency of each character

// Loop through each character in the string
for (let char of str) {
    if (char !== ' ') { // Ignore spaces
        // If character exists, increase count; otherwise, start from 0 and add 1
        freq[char] = (freq[char] || 0) + 1;
    }
}

console.log("\nString Character Frequency Count:");
console.log(freq);
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
