//  1. Capitalize first letter of the entire string
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("1:", capitalizeFirst("hello world from javascript"));
// Output: "Hello world from javascript"

//  2. Capitalize the first letter of each word (split-map-join method)
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
console.log("2:", capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"

//  3. Capitalize each word using REGEX (short version)
const capitalizeWithRegex = str =>
  str.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase());

console.log("3:", capitalizeWithRegex("hello world from javascript"));
// Output: "Hello World From Javascript"

//  4. Convert whole string to UPPERCASE
const upperCaseExample = str => str.toUpperCase();
console.log("4:", upperCaseExample("hello world from javascript"));
// Output: "HELLO WORLD FROM JAVASCRIPT"

//  5. Convert whole string to lowercase
const lowerCaseExample = str => str.toLowerCase();
console.log("5:", lowerCaseExample("HELLO WORLD FROM JAVASCRIPT"));
// Output: "hello world from javascript"
